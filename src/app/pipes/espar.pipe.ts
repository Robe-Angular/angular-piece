import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})
export class EsParPipe implements PipeTransform{
    transform(value: any){
        let par = (value % 2 == 0) ? true : false;
        return par;
    }
}