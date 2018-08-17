import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AppComponent } from "./app.component";
import { FellowshipUndertakingComponent } from "./fellowship-undertaking/fellowship-undertaking.component";

@NgModule({
    declarations: [
        AppComponent,
        FellowshipUndertakingComponent,
    ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        NgxDatatableModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
