import { Type } from './type.model';
import { Address } from "./adress.model";
import { ContactPoint } from "./contact-point.model";
import { Identifier } from "./identifier.model";



export class Organization {
    identifier: Identifier[] = [];
    active?: boolean;
    type?: string;
    name?: string;
    alias?: string;
    telecom: ContactPoint[] = [];
    address: Address[] = [];
}