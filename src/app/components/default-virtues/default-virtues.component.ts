import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-default-virtues",
    templateUrl: "./default-virtues.component.html",
    styleUrls: ["./default-virtues.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class DefaultVirtuesComponent implements OnInit {

    title: string = "Virtues";

    constructor(private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle(`One Ring | ${this.title}`);
    }

}
