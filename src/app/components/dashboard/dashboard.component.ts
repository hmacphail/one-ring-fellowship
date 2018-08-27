import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {

    title: string = "Dashboard";

    constructor(private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle(`One Ring | ${this.title}`);
    }

    // TODO: create a dashboard
}
