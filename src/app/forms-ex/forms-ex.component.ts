import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector:'user-form',
    templateUrl:'forms-ex.component.html'
})
export class UserFormComponent{
    constructor(private http: Http) { }
    userName = new FormControl('HariKrishna');
    formData;

    handleFormSubmit (userDetails) {
        console.log('Template Driven data', userDetails);
    }

    ngOnInit (){
        this.http.get("http://jsonplaceholder.typicode.com/users").
        map((response) => response.json()).
        subscribe((data) => {
            console.log(data)
        });

        this.formData = new FormGroup({
            userId: new FormControl("123"),
            userName: new FormControl("Coding Krishna")
        });
    }

    handleOnSubmit (userDetails){
        console.log('Modal Driven Data..', userDetails);
    }

    handleRegistrationSubmit (registrationDetails) {
        console.log('registrationDetails>>', registrationDetails);
    }
}