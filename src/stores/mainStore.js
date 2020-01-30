// const mongoose = require('mongoose');
import mongoose from "mongoose";
import { observable, action } from 'mobx';
import { userSchema } from '../models/userModel';
import { productSchema } from "../models/productModel";

class MainStore {
    @observable isLoggedIn = false;
    @observable isFailedLogin = false;
    @observable isRegistered = false;
    @observable isProductSaved = false;
    @observable errorMsg = '';
    @observable successMsg = '';
    @observable currentSite = 'login';
    @observable currentHeadline = 'Anmeldung';
    @observable email = undefined;
    @observable loginEmail = undefined;
    @observable loginPassword = undefined;
    @observable registerHousehold = undefined;
    @observable registerEmail = undefined;
    @observable registerPassword1 = undefined;
    @observable registerPassword2 = undefined;
    @observable registerOldPassword = undefined;
    @observable registerNewPassword1 = undefined;
    @observable registerNewPassword2 = undefined;
    @observable productName = undefined;
    @observable productMenge = undefined;
    @observable productEinheit = "Stück";
    @observable productLagerort = undefined;
    @observable productMHD = undefined;
    @observable userModel = undefined;
    
    constructor() {
        // this.initialize()
    }

    @action.bound
    async initialize() {
        const connection = await mongoose.createConnection('mongodb+srv://vidgecoApp:wUm3yHfG4abT9pPL@vidgeco-pfqjo.mongodb.net/test?retryWrites=true&w=majority');
        this.userModel = connection.model('UserModel', userSchema)
        await this.userModel.ensureIndexes()
    }

    @action.bound
    resetAlerts() {
        this.errorMsg = '';
        this.successMsg = '';
    }
    
    @action.bound
    resetObservables() {
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
    }

    @action.bound
    logIn() {
        this.resetAlerts();
        //console.log(this.isLoggedIn)

        //Prüfung ob Anmeldedaten leer
        if(!this.loginEmail || !this.loginPassword){
            this.errorMsg = 'Bitte E-Mail und Passwort eingeben.'
            return
        }

        //! Datenbankverbindung muss hergestellt und die Daten müssen   überprüft werden
        //Prüfung der Anmeldedaten in der DB.
        if(this.loginEmail !== 'hvaupel@gmail.com' && this.loginPassword !== 'test'){
            this.errorMsg = 'E-Mail und Password passen nicht zusammen!'
            return
        }
        this.isLoggedIn = true;
        this.changeToHousehold();
    }

    @action.bound
    logOut() {
        this.resetAlerts();
        this.resetObservables();
        this.isLoggedIn = false;
        this.changeToLogin();
    }    
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

        
        const newUser = {
            email: this.registerEmail,
            password: this.registerPassword1
        }
        console.log(newUser)

        // const dbUser = await this.userModel.findOneAndUpdate({ email: newUser.email }, { $setOnInsert: newUser }, { upsert: true, new: true }).lean()

        // if (dbUser.password !== newUser.password) {
        //     this.errorMsg = 'Diese Email wird bereits für einen anderen Account verwendet.'
        //     return
        // }

        this.successMsg = 'Registrierung erfolgreich! Sie können sich nun anmelden.';
        this.changeCurrentSite('login', 'Anmeldung');
    }

    @action.bound
    savePassword() {
        this.resetAlerts();

        //Prüfung ob alle Felder ausgefüllt sind
        if (!this.registerNewPassword1 || !this.registerNewPassword2 || !this.registerOldPassword ) {
            this.errorMsg = 'Bitte alle Felder ausfüllen.' +this.registerOldPassword 
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
        if(!this.productName || !this.productMenge || !this.productEinheit){
            this.errorMsg = "Bitte alle Pflichtfelder Ausfüllen";
            return
        }

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