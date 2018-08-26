import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "undertakingSearch",
})
export class UndertakingSearchPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return null;
    }

}
