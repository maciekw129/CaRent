import { LightningElement, api } from 'lwc';

export default class StyledButton extends LightningElement {
    @api buttonText = 'Submit';
    @api buttonType = '';
}