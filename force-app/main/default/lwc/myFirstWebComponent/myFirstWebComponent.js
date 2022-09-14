import { LightningElement, track } from 'lwc';

export default class MyFirstWebComponent extends LightningElement {
    @track
    contacts = [ 
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engeneering',
        },
        {
            Id: 2,
            Name: 'Micheal Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CCEO',
        },
    ];
}