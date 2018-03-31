import {Component} from '@angular/core';
import {MathService} from './mathservice/mathservice';

@Component({
    selector:'math-calc',
    templateUrl:'./mathcalc.component.html',
    styleUrls:['./mathcalc.component.css'],
    providers:[MathService]
})
export class MathCalc {
    constructor(private mathService:MathService){
        this.mathService = mathService;
    }
    x:number = 0;
    y:number = 0;
    result:number;

    add () {
        
        this.result= this.mathService.add(this.x,this.y);
    }

    sub () {
        this.result = this.mathService.sub(this.x, this.y);
    }
}