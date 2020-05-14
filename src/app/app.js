import ApiClient from "../communication/client/ApiClient";
import {getSetting} from "../settings";
import FakeRequester from "../communication/requester/FakeRequester";
import RemoteRequester from "../communication/requester/RemoteRequester";

class App {
    constructor() {
        this._apiClient = undefined;
    }

    apiClient() {
        if (this._apiClient === undefined) {
            this._setUpApiClient();
        }

        return this._apiClient;
    }

    routes() {
        return {
            login: '/',
            home: '/home',
            profile: '/profile'
        }
    }

    loginUser(token) {
        localStorage.setItem("token", token);
    }

    thereIsLoggedInUser() {
        return localStorage.getItem("token");
    }

    _setUpApiClient() {
        const requester = this._setUpRequester();
        this._apiClient = new ApiClient(requester);
    }

    _setUpRequester() {
        const usingFakeApi = getSetting("USING_FAKE_API");
        if (usingFakeApi) {
            return new FakeRequester();
        }

        const remoteApiUrl = getSetting("API_URL");
        return new RemoteRequester(remoteApiUrl);
    }
}

export let app = new App();