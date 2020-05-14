import {Endpoint} from "./Endpoint.js";
import {GetProfileSuccessful} from "../responses/profiles/GetProfileSuccessful.js";

export class GetProfileEndpoint extends Endpoint {
    static url() {
        return '/users/2'
    }

    ownResponses() {
        return [GetProfileSuccessful];
    }

    method() {
        return 'GET'
    }

    needsAuthorization() {
        return false;
    }
}