import { observable, action } from 'mobx';

class MainStore {
    @observable isLoggedIn = false;
    @observable isFailedLogin = false;
    @observable isRegistered = false;
    @observable isProductSaved = false;
    @observable currentSite = 'login';
    @observable currentHeadline = 'Anmeldung';


    @action.bound
    resetAlerts() {
        this.isFailedLogin = false;
        this.isRegistered = false;
        this.isProductSaved = false;        
    }


    @action.bound
    logIn() {
        this.resetAlerts();
        //console.log(this.isLoggedIn)
        this.isLoggedIn = false;
        this.isLoggedIn ? (this.resetAlerts(), this.changeToHousehold()) : this.isFailedLogin = true;
        
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
        this.isRegistered = true;
        this.changeCurrentSite('login', 'Anmeldung');
    }
    
    @action.bound
    saveProduct() {        
        this.isProductSaved = true;
        
    }

    @action.bound
    changeToRegister(){        
        this.changeCurrentSite('register', 'Registrierung'); 
        this.resetAlerts();
    }

    @action.bound
    changeToNewProduct(){        
        this.changeCurrentSite('newProduct', 'Neues Produkt'); 
        this.resetAlerts();
    }
    @action.bound
    changeToHousehold(){        
        this.changeCurrentSite('household', 'Übersicht'); 
        this.resetAlerts();
    }
    @action.bound
    changeToLogin(){    
        this.resetAlerts();    
        this.changeCurrentSite('login', 'Anmeldung'); 
    }

    
    @action.bound
    changeToStart(){        
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