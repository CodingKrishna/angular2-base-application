import {Injectable} from '@angular/core';

@Injectable()
export class MathService {
    add(x:number, y:number):number{
        return x + y;
    }
    sub(x:number, y:number):number{
        return x - y;
    }
    mul(x:number, y:number):number{
        return x*y;
    }
}
