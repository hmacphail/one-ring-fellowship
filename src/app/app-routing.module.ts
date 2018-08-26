import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DefaultRewardsComponent } from "./components/default-rewards/default-rewards.component";
import { DefaultVirtuesComponent } from "./components/default-virtues/default-virtues.component";
import { FellowshipUndertakingComponent } from "./components/fellowship-undertaking/fellowship-undertaking.component";
import { LevelingCostComponent } from "./components/leveling-cost/leveling-cost.component";

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
        path: "levels",
        component: LevelingCostComponent,
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
