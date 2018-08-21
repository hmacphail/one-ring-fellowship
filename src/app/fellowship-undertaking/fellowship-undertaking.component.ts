import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";

import * as undertakings from "../../assets/fellowship-undertakings.json";

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

    // constructor() {
    // }

    ngOnInit() {
        this.getUndertakings();
        this.tableColumnSetup();
    }

    getUndertakings() {
        this.allUndertakings = undertakings.default;
    }

    tableColumnSetup() {
        this.columns = [
            { name: "", width: 50, sortable: false, resizeable: false, canAutoResize: false, cellTemplate: this.expandRow },
            { prop: "undertaking", name: "Undertaking", flexGrow: 2, resizeable: false },
            { prop: "who", name: "Who", flexGrow: 2, resizeable: false },
            { prop: "area", name: "Area", flexGrow: 1, resizeable: false },
            { prop: "location", name: "Location", flexGrow: 2, resizeable: false },
            { prop: "when", name: "When", flexGrow: 1, resizeable: false },
            // { prop: "reqs", name: "Requires/(Suggested)", flexGrow: 1, resizeable: false },
            // { prop: "roll", name: "Roll", flexGrow: 1, resizeable: false },
            { prop: "benefit", name: "Benefit Summary", flexGrow: 2, resizeable: false },
            { prop: "source", name: "Source", flexGrow: 1, resizeable: false },
        ];
    }

    // TODO: fix row detail auto scrolling to top of page
    toggleExpandRow(row) {
        // console.log("Toggled Expand Row!", row);
        this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
        // console.log('Detail Toggled', event);
    }

}
