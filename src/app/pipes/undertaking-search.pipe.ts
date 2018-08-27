import { Pipe, PipeTransform } from "@angular/core";

import { IUndertaking } from "../models/undertaking";

@Pipe({
    name: "undertakingSearch",
})
export class UndertakingSearchPipe implements PipeTransform {

    transform(undertakings: IUndertaking[], searchTerm: string): IUndertaking[] {
        if (searchTerm) {
            searchTerm = searchTerm.toLowerCase();

            return undertakings.filter((u) => {
                if (u.undertaking.toLowerCase().indexOf(searchTerm) !== -1) {
                    return true;
                }
                else if (u.who.toLowerCase().indexOf(searchTerm) !== -1) {
                    return true;
                }
                else if (u.area.toLowerCase().indexOf(searchTerm) !== -1) {
                    return true;
                }
                else if (u.location.toLowerCase().indexOf(searchTerm) !== -1) {
                    return true;
                }
                else if (u.when.toLowerCase().indexOf(searchTerm) !== -1) {
                    return true;
                }
                else if (u.benefit.toLowerCase().indexOf(searchTerm) !== -1) {
                    return true;
                }
                else if (u.source.toLowerCase().indexOf(searchTerm) !== -1) {
                    return true;
                }
                else {
                    return false;
                }
            });
        } else {
            return undertakings;
        }
    }

}
