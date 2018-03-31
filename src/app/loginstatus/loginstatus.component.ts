import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'login-status',
    templateUrl: 'loginstatus.component.html'
})
export class LoginStatusComponent {
    @Input() title;
    @Input() loginStatus =false;

    @Output() handleLogin: EventEmitter<String> = new EventEmitter<String>(); //creating an output event
    @Output() handleLogout: EventEmitter<String> = new EventEmitter<String>(); //creating an output event
    
    handleLoginClick () {
        console.log('Child handle Login Called')
        this.handleLogin.emit();
    }

    handleLogoutClick () {
        console.log('Child handle Logout Called')
        this.handleLogout.emit();
    }

    /* ngOnInit(){
        console.log('ngOnInit--> called')
    }

    ngOnChanges(){
        console.log('ngOnChanges--> called')
    }*/
}