import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

/* External Modules */
// import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MarkdownModule } from "ngx-markdown";

/* Components */
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DefaultRewardsComponent } from "./components/default-rewards/default-rewards.component";
import { DefaultVirtuesComponent } from "./components/default-virtues/default-virtues.component";
import { FellowshipUndertakingComponent } from "./components/fellowship-undertaking/fellowship-undertaking.component";
import { LevelingCostComponent } from "./components/leveling-cost/leveling-cost.component";
import { UndertakingSearchPipe } from "./pipes/undertaking-search.pipe";

/* Structure */
import { MATERIAL_COMPONENTS } from "./angular-material";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        DefaultRewardsComponent,
        DefaultVirtuesComponent,
        FellowshipUndertakingComponent,
        LevelingCostComponent,
        UndertakingSearchPipe,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        // FontAwesomeModule,
        NgxDatatableModule,
        BrowserAnimationsModule,
        ...MATERIAL_COMPONENTS,
        HttpClientModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
        RouterModule.forRoot([]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
