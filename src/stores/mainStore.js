import { observable, action } from 'mobx';

class MainStore {
    @observable isLoggedIn = false;

    @action.bound
    logIn() {
        this.isLoggedIn = true;
        this.currentSite = 'household'
        //console.log(this.isLoggedIn)
    }

    @action.bound
    logOut() {
        this.isLoggedIn = false;
    }


    @observable currentSite = 'login';

    @action.bound
    changeCurrentSite(sitename) {
        this.currentSite = sitename;
    }
}

const mainStore = new MainStore();

export default mainStore;

window.mainStore = mainStore;