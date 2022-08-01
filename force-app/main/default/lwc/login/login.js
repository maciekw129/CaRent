import { LightningElement } from 'lwc';
import login from '@salesforce/apex/profileController.login';


export default class Login extends LightningElement {
    values = {};
    error = '';

    changeValue(event) {
        this.values = { ...this.values, [event.detail.name]: event.detail.value };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.error = '';
        login({
            email: this.values.email,
            password: this.values.password
        })
        .then(response => {
            window.open(response, '_self');
        })
        .catch(error => {
            this.error = error.body.message;
        })
    }
}