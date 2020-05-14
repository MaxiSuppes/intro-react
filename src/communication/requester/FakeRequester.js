import {Requester} from "./Requester.js";
import fakeRequesterExpectedResponses from "../mocks/fakeRequesterExpectedResponses.js";

class FakeRequester extends Requester {
    constructor(expectedResponses) {
        super();
        this._expectedResponses = expectedResponses || fakeRequesterExpectedResponses();
    }

    call({endpoint, onResponse, data = undefined}) {
        const expectedResponseType = this._expectedResponses[endpoint.constructor.name];
        // TODO: Agregar response por defecto si no está definida en el diccionario
        const jsonResponse = expectedResponseType.defaultResponse();
        const endpointResponse = new expectedResponseType(jsonResponse);

        setTimeout(() => onResponse(endpointResponse), 2500);
    }
}

export default FakeRequester;