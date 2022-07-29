import { LightningElement, api } from 'lwc';

export default class HomepageInformation extends LightningElement {
    @api informationIcon;
    @api informationTitle;
    @api informationText;
}