import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FellowshipUndertakingComponent } from "./fellowship-undertaking/fellowship-undertaking.component";

@NgModule({
    declarations: [
        AppComponent,
        FellowshipUndertakingComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
