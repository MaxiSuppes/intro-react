import {SuccessfulApiResponse} from "../generalResponses/SuccessfulApiResponse.js";

export class GetProfileSuccessful extends SuccessfulApiResponse {
    static defaultResponse() {
        return {
            "data": {
                "id": 2,
                "email": "maria@gonzalez.com",
                "first_name": "Maria",
                "last_name": "Gonzalez",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
            },
            "ad": {
                "company": "Google",
                "url": "http://statuscode.org/",
                "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
            }
        }
    }

    userPersonalData() {
        const personalData = this.content()['data'];
        return {
            id: personalData['id'],
            email: personalData['email'],
            firstName: personalData['first_name'],
            lastName: personalData['last_name'],
            avatarUrl: personalData['avatar'],
        }
    }
}