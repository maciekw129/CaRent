import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import basePath from '@salesforce/community/basePath';
import isGuest from '@salesforce/user/isGuest';

export default class NavigationMenu extends NavigationMixin(LightningElement) {
    isGuest = isGuest;

    handleNavigate(event) {
        event.preventDefault();
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: event.target.dataset.value
            }
        });
    }

    get logoutLink() {
        const sitePrefix = basePath.replace(/\/s$/i, "");
        return sitePrefix + "/secur/logout.jsp";
    }
}