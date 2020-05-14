import {SuccessfulApiResponse} from "../generalResponses/SuccessfulApiResponse.js";

export class LoginSuccessful extends SuccessfulApiResponse {
    static defaultResponse() {
        return {
            "token": "QpwL5tke4Pnpja7X4"
        }
    }
}