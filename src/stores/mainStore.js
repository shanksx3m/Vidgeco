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
    @observable registerEmail = undefined;
    @observable registerPassword1 = undefined;
    @observable registerPassword2 = undefined;
    @observable productName = undefined;
    @observable productMenge = undefined;
    @observable productEinheit = undefined;
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
    async saveUser() {
        this.resetAlerts();

        if (!this.registerEmail || !this.registerPassword1 || !this.registerPassword2) {
            this.errorMsg = 'Fehlende Pflichtfelder.'
            return
        }

        // TODO check on email if it is a valid email

        if (this.registerPassword1 !== this.registerPassword2) {
            this.errorMsg = 'Passwörter stimmen nicht überein.'
            return
        }

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