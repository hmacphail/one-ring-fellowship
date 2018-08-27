import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-default-rewards",
    templateUrl: "./default-rewards.component.html",
    styleUrls: ["./default-rewards.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class DefaultRewardsComponent implements OnInit {

    title: string = "Rewards";

    constructor(private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle(`One Ring | ${this.title}`);
    }

}
