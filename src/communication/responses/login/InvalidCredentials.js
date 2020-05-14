import {ErrorApiResponse} from "../generalResponses/ErrorApiResponse";

export class InvalidCredentials extends ErrorApiResponse {
    static defaultResponse() {
        return {
            "error": "Missing password"
        }
    }

    static errorCodes() {
        return ["user not found", "Missing email or username", "Missing password"]
    }
}