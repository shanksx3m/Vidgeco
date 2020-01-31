//Autor: Hannes Vaupel; Matrikelnummer:1290217; Kurs: BIS-268 Mobile Computing, WiSe 2019/20, Merz;

import { observable, action } from 'mobx';
import Axios from "axios";

const serverUrl = "http://localhost:3001" // Server URL des Backend-Server greift auf server\index.js zu
// const serverUrl = "http://192.168.178.48:3001"

//Die Klasse MainStore beinhaltet den größten Teil der Frontend-Algorythmen
// mit @observable wird eine variable erstellt, die über die Laufzeit bestehen bleibt
// Auf Funktionen und Observables dieser Klasse kann im gesamten Fronend zugeriffen werden

class MainStore {
    @observable userId = undefined;
    @observable householdName = undefined;
    @observable products = undefined;
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
    @observable productID = undefined; //Hilfsvariable Produkt anlegen/ändern
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
    showSuccessMsg(successMsg) {
        this.successMsg = successMsg
    }
    @action.bound
    showErrorMsg(errorMsg) {
        this.errorMsg = errorMsg
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
        this.productID = undefined;
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
            this.showErrorMsg('Bitte E-Mail und Passwort eingeben.')
            return
        }

        //Übermitteln der Anmeldedaten an den Server.
        try {
            const res = await Axios.get(`${serverUrl}/login/${this.loginEmail}/${this.loginPassword}`)

            const { _id, email, householdName, products } = res.data
            this.userId = _id
            this.email = email
            this.householdName = householdName
            this.products = products

            this.isLoggedIn = true;
            this.changeToHousehold();
            this.resetObservables();
        } catch (error) {
            console.log(error)

            // Spezifische Error Nachrichten
            if (error.response && error.response.data) {
                const errorMessage = error.response.data

                if (errorMessage === 'No user registered with this email') {
                    this.showErrorMsg('Kein registrierter Nutzer mit dieser E-Mail gefunden!')
                    return
                }

                if (errorMessage === 'Wrong password') {
                    this.showErrorMsg('Falsches Passwort!')
                    return
                }
            }

            // Generische Error Nachricht
            this.showErrorMsg('Server Error. Bitte versuche es später erneut.')
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
            this.showErrorMsg('Bitte alle Felder ausfüllen.')
            return
        }

        //Prüfung ob E-Mail korrekte Adresse ist. Die RegEx prüft die E-Mail auf Korrektheit.
        if (!/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(this.registerEmail)) {
            this.showErrorMsg('Bitte korrekte E-Mail Adresse angeben.')
            return
        }

        //Prüfung ob Passwörter übereinstimmen
        if (this.registerPassword1 !== this.registerPassword2) {
            this.showErrorMsg('Passwörter stimmen nicht überein.')
            return
        }

        // Passwortlänge prüfen
        // if (this.registerPassword1) {
        //     this.showErrorMsg('Das Passwort muss mindestens 5 Zeichen haben.')
        //     return
        // }

        try {
            await Axios.post(`${serverUrl}/register`, {
                email: this.registerEmail,
                password: this.registerPassword1,
                householdName: this.registerHousehold
            })

            //Erfolgsmeldung und Rückkehr zur Übersicht
            this.showSuccessMsg('Registrierung erfolgreich! Sie können sich nun anmelden.');
            this.changeCurrentSite('login', 'Anmeldung');
        } catch (error) {
            console.log(error)

            // Spezifische Error Nachrichten
            if (error.response && error.response.data) {
                const errorMessage = error.response.data
                console.log(errorMessage)

                if (errorMessage === 'Email already in use') {
                    this.showErrorMsg('Diese Email wird bereits für einen anderen Account verwendet.')
                    return
                }
            }

            // Generische Error Nachricht
            this.showErrorMsg('Server Error. Bitte versuche es später erneut.')
        }

    }

    //Methoden zur Änderung des Passwortes
    @action.bound
    async savePassword() {
        this.resetAlerts();

        //Prüfung ob alle Felder ausgefüllt sind
        if (!this.registerNewPassword1 || !this.registerNewPassword2 || !this.registerOldPassword) {
            this.showErrorMsg('Bitte alle Felder ausfüllen.')
            return
        }

        //Prüfung ob neue Passwörter gleich sind
        if (this.registerNewPassword1 !== this.registerNewPassword2) {
            this.showErrorMsg('Die neuen Passwörter stimmen nicht überein.')
            return
        }

        try {
            await Axios.post(`${serverUrl}/changePassword`, {
                email: this.email,
                password: this.registerOldPassword,
                newPassword: this.registerNewPassword1
            })

            //Erfolgsmeldung und Rückkehr zur Übersicht
            this.showSuccessMsg('Passwort erfolgreich geändert.');
            this.changeCurrentSite('household', 'Übersicht');
        } catch (error) {
            console.log(error)

            // Spezifische Error Nachrichten
            if (error.response && error.response.data) {
                const errorMessage = error.response.data

                if (errorMessage === 'Wrong password') {
                    this.showErrorMsg('Falsches Passwort!')
                    return
                }
            }

            // Generische Error Nachricht
            this.showErrorMsg('Server Error. Bitte versuche es später erneut.')
        }
    }
    //Methode zum Löschen des kompletten Nutzers
    @action.bound
    async deleteUser() {
        this.resetAlerts();

        try {
            await Axios.post(`${serverUrl}/deleteUser`, {
                userId: this.userId
            })

            //Ausloggen, Erfolgsmeldung und Rückkehr zur Übersicht
            this.resetObservables();
            this.isLoggedIn = false;
            this.showSuccessMsg("Nutzer Erfolgreich gelöscht");
            this.changeCurrentSite('login', 'Anmeldung');
        } catch (error) {
            console.log(error)

            // Generische Error Nachricht
            this.showErrorMsg('Server Error. Bitte versuche es später erneut.')
        }
    }

    //Produkt anlegen
    @action.bound
    async saveProduct() {
        this.resetAlerts();
        if (!this.productName || !this.productMenge || !this.productEinheit) {
            this.showErrorMsg("Bitte alle Pflichtfelder Ausfüllen")
            return
        }

        try {
            const product = {
                name: this.productName,
                imgUrl: this.productImgUrl,
                menge: this.productMenge,
                mengeneinheit: this.productEinheit,
                lagerort: this.productLagerort,
                mhd: this.productMHD,
            }
            const { endpoint, update } = !this.productID ?
                {
                    endpoint: "/createProduct",
                    update: { userId: this.userId, product }
                } : {
                    endpoint: "/updateProduct",
                    update: { productId: this.productID, product }
                }

            const res = await Axios.post(`${serverUrl}${endpoint}`, update)

            //Erfolgsmeldung und Rückkehr zur Übersicht
            this.products = res.data.products

            this.showSuccessMsg(`Produkt erfolgreich ${!this.productID ? "angelegt" : "geändert"}`);
            this.resetObservables();
            this.changeCurrentSite('household', 'Übersicht');
        } catch (error) {
            console.log(error)

            // Generische Error Nachricht
            this.showErrorMsg('Server Error. Bitte versuche es später erneut.')
        }
    }

    //Haushaltname ändern
    @action.bound
    async saveHouseholdName() {
        this.resetAlerts();
        if (!this.registerHousehold) {
            this.showErrorMsg("Bitte neuen Namen angeben")
            return
        }

        try {
            await Axios.post(`${serverUrl}/updateHousehold`, {
                userId: this.userId,
                householdName: this.registerHousehold
            })

            //Erfolgsmeldung und Rückkehr zur Übersicht
            this.householdName = this.registerHousehold
            this.showSuccessMsg('Name des Haushaltes erfolgreich geändert');
            this.changeCurrentSite('household', 'Übersicht')
        } catch (error) {
            console.log(error)

            // Generische Error Nachricht
            this.showErrorMsg('Server Error. Bitte versuche es später erneut.')
        }
    }

    //Produkt löschen
    @action.bound
    async deleteProduct(productId) {
        //Produkt löschen
        this.resetAlerts();

        try {
            const res = await Axios.post(`${serverUrl}/deleteProduct`, {
                userId: this.userId,
                productId
            })

            //Erfolgsmeldung und Rückkehr zur Übersicht
            this.products = res.data.products
            this.showSuccessMsg('Produkt erfolgreich gelöscht');
            this.changeCurrentSite('household', 'Übersicht');
        } catch (error) {
            console.log(error)

            // Generische Error Nachricht
            this.showErrorMsg('Server Error. Bitte versuche es später erneut.')
        }
    }

    //ChangeTo...() Methoden zum Seitenwechsel. Alle Erfolgs- und Fehlermeldungen werden zurück gesetzt
    @action.bound
    changeToRegister() {
        this.changeCurrentSite('register', 'Registrierung');
        this.resetAlerts();
    }

    @action.bound
    changeToNewProduct() {
        this.resetObservables()
        this.changeCurrentSite('newProduct', 'Neues Produkt');
        this.resetAlerts();
        // Kurzes Timeout, da die Elemente erst laden müssen 
        setTimeout(() => {
            document.getElementById("productName").value = ""
            document.getElementById("productMenge").value = ""
            document.getElementById("productEinheit").value = "Stück"
            document.getElementById("productMHD").value = ""
            document.getElementById("productLagerort").value = ""
            document.getElementById("productImgUrl").value = ""
        }, 10);
    }
    @action.bound
    changeToEditProduct(product) {
        const { _id, name, imgUrl, menge, mengeneinheit, lagerort, mhd } = product
        this.productID = _id
        this.productName = name
        this.productMenge = menge
        this.productEinheit = mengeneinheit
        this.productLagerort = lagerort
        this.productMHD = mhd
        this.productImgUrl = imgUrl
        this.changeCurrentSite('editProduct', 'Produkt bearbeiten');
        this.resetAlerts();

        // Kurzes Timeout, da die Elemente erst laden müssen 
        setTimeout(() => {
            document.getElementById("productName").value = name
            document.getElementById("productMenge").value = menge
            document.getElementById("productEinheit").value = mengeneinheit
            document.getElementById("productMHD").value = mhd || ""
            document.getElementById("productLagerort").value = lagerort || ""
            document.getElementById("productImgUrl").value = imgUrl || ""
        }, 10);
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
