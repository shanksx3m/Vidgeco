import { observable, action } from 'mobx';

class MainStore {
    @observable isLoggedIn = false;

    @action.bound
    logIn() {
        this.isLoggedIn = true;
        console.log(this.isLoggedIn)
    }

    @action.bound
    logOut() {
        this.isLoggedIn = false;
    }
}

const mainStore = new MainStore();

export default mainStore;

window.mainStore = mainStore;