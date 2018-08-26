import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DefaultRewardsComponent } from "./default-rewards/default-rewards.component";
import { DefaultVirtuesComponent } from "./default-virtues/default-virtues.component";
import { FellowshipUndertakingComponent } from "./fellowship-undertaking/fellowship-undertaking.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        DefaultRewardsComponent,
        DefaultVirtuesComponent,
        FellowshipUndertakingComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FontAwesomeModule,
        NgxDatatableModule,
        RouterModule.forRoot([]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
