import { LightningElement, api } from 'lwc';

export default class StyledInput extends LightningElement {
    @api inputLabel;
    @api inputName;
    @api inputType;
    @api inputPlaceholder;
    @api readonly = false;
    @api inputSize = 'regular';
    inputValue = '';

    get containerStyle() {
        return `input__container input__${this.inputSize}`;
    }

    handleChange(event) {
        this.inputValue = event.target.value;
    }
}