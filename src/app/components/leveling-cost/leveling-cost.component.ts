import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-leveling-cost",
    templateUrl: "./leveling-cost.component.html",
    styleUrls: ["./leveling-cost.component.scss"],
})
export class LevelingCostComponent implements OnInit {

    title: string = "Leveling";

    constructor(private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle(`One Ring | ${this.title}`);
    }
}
