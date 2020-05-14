import {ApiResponse} from "../Response.js"

export class ErrorApiResponse extends ApiResponse {
    static defaultResponse() {
        throw new Error("You have to implement the method");
    }

    static errorCodes() {
        throw new Error("You have to implement the method");
    }

    static understandThis(jsonResponse) {
        return jsonResponse.error !== undefined && this.errorCodes().includes(jsonResponse.error);
    }

    errorMessages() {
        return this.errors();
    }

    description() {
        return "¡Ha ocurrido un error!"
    }

    message() {
        return this.errorMessages();
    }
}