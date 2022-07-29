import { LightningElement, track } from 'lwc';
import getAllCars from '@salesforce/apex/carsController.getAllCars';

export default class Home extends LightningElement {
    @track cars = [];

    connectedCallback() {
        getAllCars()
        .then(result => {
            this.cars = result;
            console.log(result);
        })
    }
}