import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-default-virtues",
    templateUrl: "./default-virtues.component.html",
    styleUrls: ["./default-virtues.component.scss"],
})
export class DefaultVirtuesComponent implements OnInit {

    title: string = "Virtues";

    constructor(private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle(`One Ring | ${this.title}`);
    }

}
