import { LightningElement } from 'lwc';
import register from '@salesforce/apex/profileController.register';

export default class Register extends LightningElement {
    values = {};

    changeValue(event) {
        this.values = { ...this.values, [event.detail.name]: event.detail.value };
        console.log(JSON.stringify(this.values));
    }

    handleSubmit(event) {
        event.preventDefault();
        register({
            email: this.values.email,
            firstName: this.values.firstName,
            lastName: this.values.lastName,
            password: this.values.password
        })
        .then(() => {
            this.values = {};
        });
    }
}