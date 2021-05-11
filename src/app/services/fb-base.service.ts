import { Observable } from 'rxjs';
import { Organization } from './../shared/models/organization.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { User } from '../shared/models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore, private fireAuth: AngularFireAuth) {}

  async add(collectionName: string, data: Organization, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.identifier[0].value = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  async addUser(collectionName: string, data: User, password: string, id?: string): Promise<string> {
    this.signUp(data.email, password);
    const uid = id ? id : this.afs.createId();
    await this.afs.collection(collectionName).doc(uid).set(Object.assign({}, data));
    return uid;
  }

  // tslint:disable-next-line: typedef
  signUp(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then((result) => {
    // tslint:disable-next-line: no-shadowed-variable
    }).catch((error) => {window.alert(error.message);});
  }


  get(collectionName: string): Observable<Organization[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('name', 'desc');
      return query;
    }).valueChanges() as Observable<Organization[]>;
  }

  getById(id: string): Observable<any> {
    return this.afs.collection('organizations').doc(id).valueChanges();
  }

  // tslint:disable-next-line: typedef
  delete(collectionName: string, id: string){
    return this.afs.collection(collectionName).doc(id).delete();
  }

  // tslint:disable-next-line: typedef
  update(collectionName: string, id: string, data: Organization) {
    return this.afs.collection(collectionName).doc(id).update(data);
  }
}
