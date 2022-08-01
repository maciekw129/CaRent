import { LightningElement } from 'lwc';
import register from '@salesforce/apex/profileController.register';

export default class Register extends LightningElement {
    values = {};
    error = '';

    changeValue(event) {
        this.values = { ...this.values, [event.detail.name]: event.detail.value };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.error = '';
        register({
            email: this.values.email,
            firstName: this.values.firstName,
            lastName: this.values.lastName,
            password: this.values.password
        })
        .then(() => {
            this.values = {};
        })
        .catch(error => {
            this.error = error.body.message;
        })
    }
}