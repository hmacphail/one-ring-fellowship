import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";

import * as undertakings from "../../../assets/undertakings.json";

@Component({
    selector: "fellowship-undertaking",
    templateUrl: "./fellowship-undertaking.component.html",
    styleUrls: ["./fellowship-undertaking.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class FellowshipUndertakingComponent implements OnInit {
    @ViewChild("undertakingTable") table;
    @ViewChild("expandRow") expandRow;

    title: string = "Undertakings";

    columns = [];
    allUndertakings = [];

    expanded: any = {};

    // TODO: add angular pipe for searching

    constructor(private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle(`One Ring | ${this.title}`);

        this.getUndertakings();
        this.tableColumnSetup();
    }

    getUndertakings() {
        this.allUndertakings = undertakings.default;
    }

    tableColumnSetup() {
        this.columns = [
            { name: "", width: 30, sortable: false, resizeable: false, canAutoResize: false, cellClass: "expand-row", cellTemplate: this.expandRow },
            { prop: "undertaking", name: "Undertaking", flexGrow: 2, sortable: false, resizeable: false },
            { prop: "who", name: "Who", flexGrow: 2, resizeable: false },
            { prop: "area", name: "Area", flexGrow: 1, resizeable: false },
            { prop: "location", name: "Location", flexGrow: 2, resizeable: false },
            { prop: "when", name: "When", flexGrow: 1, resizeable: false },
            { prop: "benefit", name: "Benefit Summary", flexGrow: 2, sortable: false, resizeable: false },
            { prop: "source", name: "Source", flexGrow: 1, sortable: false, resizeable: false },
        ];
    }

    toggleExpandRow(row) {
        this.table.rowDetail.toggleExpandRow(row);
    }

}
