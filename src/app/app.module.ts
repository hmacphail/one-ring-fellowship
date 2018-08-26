import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

/* External Modules */
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

/* Components */
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DefaultRewardsComponent } from "./components/default-rewards/default-rewards.component";
import { DefaultVirtuesComponent } from "./components/default-virtues/default-virtues.component";
import { FellowshipUndertakingComponent } from "./components/fellowship-undertaking/fellowship-undertaking.component";
import { UndertakingSearchPipe } from "./pipes/undertaking-search.pipe";

/* Structure */
import { AppRoutingModule } from "./app-routing.module";
import { NavComponent } from "./nav/nav.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        DefaultRewardsComponent,
        DefaultVirtuesComponent,
        FellowshipUndertakingComponent,
        NavComponent,
        UndertakingSearchPipe,
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
