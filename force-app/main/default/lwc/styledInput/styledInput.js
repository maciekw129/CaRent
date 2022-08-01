import { LightningElement, api } from 'lwc';
import validate from 'c/validate';

export default class StyledInput extends LightningElement {
    @api inputLabel;
    @api inputName;
    @api inputType;
    @api inputPlaceholder;
    @api readonly = false;
    @api inputSize = 'regular';
    inputValue = '';
    isCorrect = true;

    get containerStyle() {
        return `input__container input__${this.inputSize}`;
    }

    get inputStyle() {
        return `input ${this.isCorrect || 'input--wrong'}`;
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.inputValue = value;
        if(validate(name, value)) {
            this.isCorrect = true;
            this.dispatchEvent(new CustomEvent('sendvalue', {
                detail: {
                    name: name,
                    value: value
                }
            }));
        } else {
            this.isCorrect = false;
        }
    }
}