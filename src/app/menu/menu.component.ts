import {Component} from '@angular/core';

@Component({
    selector:'app-menu',
    templateUrl:'./menu.component.html',
    styleUrls:['./menu.component.css']
})
export class Menu{
    menuItems = [{title:'Basic',linkUrl:'basic-ex'},{title:'Pipes',linkUrl:'pipe-ex'},
    {title:'Service',linkUrl:'service-ex'}, {title:'Forms',linkUrl:'forms-ex'}];
}
