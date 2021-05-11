import { Type } from '../models/type.model';

export const TYPES: Type[] = [
    {value: 'prov', viewValue: 'Healthcare Provider'},
    {value: 'dept', viewValue: 'Hospital Department'},
    {value: 'team', viewValue: 'Organizational team'},
    {value: 'govt', viewValue: 'Government'},
    {value: 'ins', viewValue: 'Payer'},
    {value: 'pay', viewValue: 'Educational Institute'},
    {value: 'edu', viewValue: 'Religious Institution'},
    {value: 'reli', viewValue: 'Clinical Research Sponsor'},
    {value: 'crs', viewValue: 'Community Group'},
    {value: 'cg', viewValue: 'Non-Healthcare Business or Corporation'},
    {value: 'bus', viewValue: 'Other'}
]