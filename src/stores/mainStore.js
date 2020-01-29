import { observable, action } from 'mobx';

class MainStore {
    @observable isLoggedIn = false;
    @observable isFailedLogin = false;
    @observable isRegistered = false;
    @observable isProductSaved = false;
    @observable errorMsg = '';
    @observable successMsg = '';
    @observable currentSite = 'login';
    @observable currentHeadline = 'Anmeldung';


    @action.bound
    resetAlerts() {
        this.errorMsg = '';
        this.successMsg = '';
    }


    @action.bound
    logIn() {
        this.resetAlerts();
        //console.log(this.isLoggedIn)
        this.isLoggedIn = true;
        this.isLoggedIn ?
            (
                this.resetAlerts()
                , this.changeToHousehold()
            ) :
            (
                this.errorMsg = 'E-Mail und Passwort stimmen nicht überein.'
            )

    }

    @action.bound
    logOut() {
        this.resetAlerts();
        this.isLoggedIn = false;
        this.changeToLogin();
    }

    @action.bound
    saveUser() {
        this.resetAlerts();
        this.successMsg = 'Registrierung erfolgreich! Sie können sich nun anmelden.';
        this.changeCurrentSite('login', 'Anmeldung');
    }

    @action.bound
    savePassword() {
        this.resetAlerts();
        this.successMsg = 'Passwort erfolgreich geändert.';
        this.changeCurrentSite('household', 'Übersicht');
    }

    @action.bound
    deleteUser() {
        this.resetAlerts();
        this.isLoggedIn = false;
        this.changeCurrentSite('login', 'Anmeldung');
    }

    @action.bound
    saveProduct() {
        this.resetAlerts();
        this.successMsg = 'Produkt erfolgreich angelegt';
        this.changeCurrentSite('household', 'Übersicht');

    }

    @action.bound
    deleteProduct() {

    }

    @action.bound
    changeToRegister() {
        this.changeCurrentSite('register', 'Registrierung');
        this.resetAlerts();
    }

    @action.bound
    changeToNewProduct() {
        this.changeCurrentSite('newProduct', 'Neues Produkt');
        this.resetAlerts();
    }
    @action.bound
    changeToHousehold() {
        this.changeCurrentSite('household', 'Übersicht');
        this.resetAlerts();
    }
    @action.bound
    changeToLogin() {
        this.resetAlerts();
        this.changeCurrentSite('login', 'Anmeldung');
    }
    @action.bound
    changeToChangePassword() {
        this.resetAlerts();
        this.changeCurrentSite('changePassword', 'Passwort ändern');
    }
    @action.bound
    changeToDatenschutz() {
        this.resetAlerts();
        this.changeCurrentSite('datenschutz', 'Datenschutz');
    }
    @action.bound
    changeToImpressum() {
        this.resetAlerts();
        this.changeCurrentSite('impressum', 'Impressum');
    }


    @action.bound
    changeToStart() {
        this.isLoggedIn ? this.changeToHousehold() : this.changeToLogin();
        this.resetAlerts();
    }


    @action.bound
    changeCurrentSite(sitename, headline) {
        this.currentSite = sitename;
        this.currentHeadline = headline;
    }
}

const mainStore = new MainStore();

export default mainStore;

window.mainStore = mainStore;