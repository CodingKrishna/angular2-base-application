import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    getUserData () {
        return ['Rama','Hari', 'Siva'];
    }
}