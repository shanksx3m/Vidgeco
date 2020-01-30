import { observable, action } from 'mobx';
import Axios from "axios";

const serverUrl = "http://localhost:3001"
// const serverUrl = "http://192.168.178.48:3001"

class MainStore {
    @observable userId = undefined;
    @observable isLoggedIn = false; //Hilfsvariable für Login
    @observable errorMsg = ''; //Hilfsvariable für Fehlermeldungen
    @observable successMsg = ''; //Hilfsvariable für Erfolgsmeldungen
    @observable currentSite = 'login'; //Hilfsvariable aktuelle Seite
    @observable currentHeadline = 'Anmeldung'; //Hilfsvariable aktuelle Überschrift (Breadcrumb)
    @observable email = undefined;
    @observable loginEmail = undefined; //Hilfsvariable Login
    @observable loginPassword = undefined; //Hilfsvariable Login
    @observable registerHousehold = undefined; //Hilfsvariable Registrierung
    @observable registerEmail = undefined; //Hilfsvariable Registrierung
    @observable registerPassword1 = undefined; //Hilfsvariable Registrierung
    @observable registerPassword2 = undefined; //Hilfsvariable Registrierung
    @observable registerOldPassword = undefined; //Hilfsvariable Passwort Ändern
    @observable registerNewPassword1 = undefined; //Hilfsvariable Passwort Ändern
    @observable registerNewPassword2 = undefined; //Hilfsvariable Passwort Ändern
    @observable productName = undefined; //Hilfsvariable Produkt anlegen/ändern
    @observable productMenge = undefined; //Hilfsvariable Produkt anlegen/ändern
    @observable productEinheit = "Stück"; //Hilfsvariable Produkt anlegen/ändern
    @observable productLagerort = undefined; //Hilfsvariable Produkt anlegen/ändern
    @observable productMHD = undefined; //Hilfsvariable Produkt anlegen/ändern
    @observable productImgUrl = undefined; //Hilfsvariable Produkt anlegen/ändern


    @action.bound
    resetAlerts() {
        //Setzt Erfolgs- und Fehlermeldungen zurück
        this.errorMsg = '';
        this.successMsg = '';
    }

    @action.bound
    resetObservables() {
        //Setzt Observables/Hilfsvariablen zurück
        this.loginEmail = undefined;
        this.loginPassword = undefined;
        this.registerHousehold = undefined;
        this.registerEmail = undefined;
        this.registerPassword1 = undefined;
        this.registerPassword2 = undefined;
        this.registerOldPassword = undefined;
        this.registerNewPassword1 = undefined;
        this.registerNewPassword2 = undefined;
        this.productName = undefined;
        this.productMenge = undefined;
        this.productEinheit = "Stück";
        this.productLagerort = undefined;
        this.productMHD = undefined;
        this.productImgUrl = undefined;
    }

    @action.bound
    async logIn() {
        //Regelt den login

        this.resetAlerts();

        //Prüfung ob Anmeldedaten leer
        if (!this.loginEmail || !this.loginPassword) {
            this.errorMsg = 'Bitte E-Mail und Passwort eingeben.'
            return
        }

        //Übermitteln der Anmeldedaten an den Server.
        try {
            const res = await Axios.get(`${serverUrl}/login/${this.loginEmail}/${this.loginPassword}`)

            this.userId = res.data.userId

            this.isLoggedIn = true;
            this.changeToHousehold();
            this.resetObservables();
        } catch (error) {
            console.log(error)

            // Spezifische Error Nachrichten
            if (error.response && error.response.data) {
                const errorMessage = error.response.data

                if (errorMessage === 'No user registered with this email') {
                    this.errorMsg = 'Kein registrierter Nutzer mit dieser E-Mail gefunden!'
                    return
                }

                if (errorMessage === 'Wrong password') {
                    this.errorMsg = 'Falsches Passwort!'
                    return
                }
            }

            // Generische Error Nachricht
            this.errorMsg = 'Server Error. Bitte versuche es später erneut.'
        }
    }

    @action.bound
    logOut() {
        this.resetAlerts();
        this.resetObservables();
        this.isLoggedIn = false;
        this.changeToLogin();
    }

    //Update Methoden für Zugriffe auf die Inhalte der Formulare (Textboxen und Dropdowns)
    @action.bound
    updateLoginEmail(value) {
        this.loginEmail = value
    }
    @action.bound
    updateLoginPassword(value) {
        this.loginPassword = value
    }
    @action.bound
    updateRegisterHousehold(value) {
        this.registerHousehold = value
    }
    @action.bound
    updateRegisterEmail(value) {
        this.registerEmail = value
    }
    @action.bound
    updateRegisterPassword1(value) {
        this.registerPassword1 = value
    }
    @action.bound
    updateRegisterPassword2(value) {
        this.registerPassword2 = value
    }

    @action.bound
    updateRegisterProductName(value) {
        this.productName = value
    }

    @action.bound
    updateRegisterProductMenge(value) {
        this.productMenge = value
    }
    @action.bound
    updateRegisterProductEinheit(value) {
        this.productEinheit = value
    }
    @action.bound
    updateRegisterProductMHD(value) {
        this.productMHD = value
    }
    @action.bound
    updateRegisterProductLagerort(value) {
        this.productLagerort = value
    }
    @action.bound
    updateRegisterProductImgUrl(value) {
        this.productImgUrl = value
    }
    @action.bound
    updateOldPassword(value) {
        this.registerOldPassword = value
    }
    @action.bound
    updateNewPassword1(value) {
        this.registerNewPassword1 = value
    }
    @action.bound
    updateNewPassword2(value) {
        this.registerNewPassword2 = value
    }

    //Methode  zum registrieren/Speichern eines neuen Nutzers
    @action.bound
    async saveUser() {
        this.resetAlerts();

        // Prüfung ob Haushalt-Name, E-Mail und Passworfelder leer
        if (!this.registerHousehold || !this.registerEmail || !this.registerPassword1 || !this.registerPassword2) {
            this.errorMsg = 'Bitte alle Felder ausfüllen.'
            return
        }

        //Prüfung ob E-Mail korrekte Adresse ist
        if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.registerEmail)) {
            this.errorMsg = 'Bitte korrekte E-Mail Adresse angeben.'
            return
        }

        //Prüfung ob Passwörter übereinstimmen
        if (this.registerPassword1 !== this.registerPassword2) {
            this.errorMsg = 'Passwörter stimmen nicht überein.'
            return
        }

        // Passwortlänge prüfen
        // if (this.registerPassword1) {
        //     this.errorMsg = 'Das Passwort muss mindestens 5 Zeichen haben.'
        //     return
        // }

        try {
            await Axios.post(`http://localhost:3001/register`, {
                email: this.registerEmail,
                password: this.registerPassword1,
                householdName: this.registerHousehold
            })

            //Erfolgsmeldung und Rückkehr zur Übersicht
            this.successMsg = 'Registrierung erfolgreich! Sie können sich nun anmelden.';
            this.changeCurrentSite('login', 'Anmeldung');
        } catch (error) {
            console.log(error)

            // Spezifische Error Nachrichten
            if (error.response && error.response.data) {
                const errorMessage = error.response.data
                console.log(errorMessage)

                if (errorMessage === 'Email already in use') {
                    this.errorMsg = 'Diese Email wird bereits für einen anderen Account verwendet.'
                    return
                }
            }

            // Generische Error Nachricht
            this.errorMsg = 'Server Error. Bitte versuche es später erneut.'
        }

    }

    //Methoden zur Änderung des Passwortes
    @action.bound
    savePassword() {
        this.resetAlerts();

        //Prüfung ob alle Felder ausgefüllt sind
        if (!this.registerNewPassword1 || !this.registerNewPassword2 || !this.registerOldPassword) {
            this.errorMsg = 'Bitte alle Felder ausfüllen.' + this.registerOldPassword
                + ' ' + this.registerNewPassword1 + ' ' + this.registerNewPassword2
            return
        }

        //!Prüfung ob altes Passwort stimmt
        if (this.registerOldPassword !== 'test') {
            this.errorMsg = 'Ihr aktuelles Passwort ist falsch.'
            return
        }

        //Prüfung ob neue Passwörter gleich sind
        if (this.registerNewPassword1 !== this.registerNewPassword2) {
            this.errorMsg = 'Die neuen Passwörter stimmen nicht überein.'
            return
        }


        //Erfolgsmeldung und Rückkehr zur Übersicht
        this.successMsg = 'Passwort erfolgreich geändert.';
        this.changeCurrentSite('household', 'Übersicht');
    }

    @action.bound
    deleteUser() {
        this.resetAlerts();


        //Ausloggen, Erfolgsmeldung und Rückkehr zur Übersicht
        this.resetObservables();
        this.isLoggedIn = false;
        this.successMsg = "Nutzer Erfolgreich gelöscht";
        this.changeCurrentSite('login', 'Anmeldung');
    }

    //Produkt anlegen
    @action.bound
    saveProduct() {
        this.resetAlerts();
        if (!this.productName || !this.productMenge || !this.productEinheit) {
            this.errorMsg = "Bitte alle Pflichtfelder Ausfüllen";
            return
        }

        //Erfolgsmeldung und Rückkehr zur Übersicht
        this.successMsg = 'Produkt erfolgreich angelegt';
        this.changeCurrentSite('household', 'Übersicht');

    }

    //Haushaltname ändern
    @action.bound
    saveHouseholdName() {
        this.resetAlerts();
        if (!this.registerHousehold) {
            this.errorMsg = "Bitte neuen Namen angeben";
            return
        }
        //TODO Haushalt ändern

        //Erfolgsmeldung und Rückkehr zur Übersicht
        this.successMsg = 'Name des Haushaltes erfolgreich geändert';
        this.changeCurrentSite('household', 'Übersicht')

    }

    //Produkt löschen
    @action.bound
    deleteProduct() {
        //Produkt löschen
        this.resetAlerts();

        //Erfolgsmeldung und Rückkehr zur Übersicht
        this.successMsg = 'Produkt erfolgreich gelöscht';
        this.changeCurrentSite('household', 'Übersicht');
    }

    //ChangeTo...() Methoden zum Seitenwechsel. Alle Erfolgs- und Fehlermeldungen werden zurück gesetzt
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
    changeHousholdName() {
        this.resetAlerts();
        this.changeCurrentSite('changeHousholdName', 'Haushalt ändern');
    }

    //changeToStart() unterscheidet, ob eingeloggt oder nicht. 
    //So kann die gleiche Methode sowohl in der Navigation vor dem Login, als auch der Navigation nach dem Login genutzt werden.
    @action.bound
    changeToStart() {
        this.isLoggedIn ? this.changeToHousehold() : this.changeToLogin();
        this.resetAlerts();
    }

    //Die eigentliche Seitenwechsel-Methode, die von allen changeTo... Methoden aufgerufen wird
    @action.bound
    changeCurrentSite(sitename, headline) {
        this.currentSite = sitename;
        this.currentHeadline = headline;
    }
}

const mainStore = new MainStore();

export default mainStore;

window.mainStore = mainStore;