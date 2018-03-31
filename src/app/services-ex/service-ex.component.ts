import {Component} from '@angular/core';
import {UserService} from '../userservice/userserice';

@Component({
    selector: 'services-ex',
    templateUrl: './service-ex.component.html',
    providers:[UserService]
})
export class ServiceExComponent{
    constructor(private userSerivce: UserService){
        this.userSerivce = userSerivce;
    }
    userList = this.userSerivce.getUserData();
}
