import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { DefaultRewardsComponent } from "./default-rewards/default-rewards.component";
import { DefaultVirtuesComponent } from "./default-virtues/default-virtues.component";
import { FellowshipUndertakingComponent } from "./fellowship-undertaking/fellowship-undertaking.component";

const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
    },
    {
        path: "undertaking",
        component: FellowshipUndertakingComponent,
    },
    {
        path: "virtues",
        component: DefaultVirtuesComponent,
    },
    {
        path: "rewards",
        component: DefaultRewardsComponent,
    },
    {
        path: "**",
        redirectTo: "",
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
