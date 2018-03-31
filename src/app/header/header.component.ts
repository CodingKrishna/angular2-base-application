import { Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
})
export class AppHeader {
    loginStatus = true;

    handleLogin(){
        console.log('header login handle is called ..');
        this.loginStatus = true;
    }

    handleLogout(){
        console.log('header logout handle is called ..')
        this.loginStatus = false;
    }
}