import "hammerjs";

import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
    @ViewChild("sidenav") sideNav;
    mobileQuery: MediaQueryList;

    navMenu = [
        { route: "/", title: "Home", icon: "campfire" },
        { route: "/undertaking", title: "Undertakings", icon: "dragon" },
        { route: "/rewards", title: "Rewards", icon: "swords" },
        { route: "/virtues", title: "Virtues", icon: "book-spells" },
        { route: "/levels", title: "Levels", icon: "scroll" },
    ];

    private mobileQueryListener: () => void;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private router: Router
    ) {
        this.mobileQuery = media.matchMedia("(max-width: 600px)");
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }

    goTo(route) {
        this.sideNav.close();
        this.router.navigate([route]);
    }
}
