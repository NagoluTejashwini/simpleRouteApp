import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'stringPipe'})
export class CustomPipe {

    transform(value :string){
        if(value.length>3){
            return value.substring(0,3)+'...';
        }
        return value;
    }
}
