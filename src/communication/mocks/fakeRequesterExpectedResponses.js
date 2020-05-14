import {GetProfileEndpoint} from "../endpoints/GetProfileEndpoint";
import {GetProfileSuccessful} from "../responses/profiles/GetProfileSuccessful";
import {LoginEndpoint} from "../endpoints/LoginEndpoint";
import {LoginSuccessful} from "../responses/login/LoginSuccessful";
import {InvalidCredentials} from "../responses/login/InvalidCredentials";


const fakeRequesterExpectedResponses = () => {
    return {
        [GetProfileEndpoint.name]: GetProfileSuccessful,
        [LoginEndpoint.name]: LoginSuccessful,
    }
};

export default fakeRequesterExpectedResponses;