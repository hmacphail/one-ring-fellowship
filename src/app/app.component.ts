import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, PRIMARY_OUTLET, Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
    readonly ROUTE_DATA_TITLE = "title";
    readonly TITLE_DEFAULT = "One Ring";

    @ViewChild("sidenav") sideNav;
    navMenu = [
        { route: "/", title: "Home", icon: "campfire" },
        { route: "/undertaking", title: "Undertakings", icon: "dragon" },
        { route: "/rewards", title: "Rewards", icon: "swords" },
        { route: "/virtues", title: "Virtues", icon: "book-spells" },
        { route: "/levels", title: "Levels", icon: "scroll" },
    ];
    headerTitle: string = this.TITLE_DEFAULT;

    mobileQuery: MediaQueryList;
    private mobileQueryListener: () => void;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private media: MediaMatcher,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.mobileQuery = this.media.matchMedia("(max-width: 600px)");
        this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!evt["urlAfterRedirects"]) {
                // only on first event call
                this.getHeaderTitle();
            }
        });
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }

    goTo(route) {
        this.sideNav.close();
        this.router.navigate([route]);
    }

    private getHeaderTitle() {
        const children: ActivatedRoute[] = this.activatedRoute.root.children;

        if (children.length === 0) {
            this.headerTitle = this.TITLE_DEFAULT;
            return;
        }

        for (const child of children) {
            this.headerTitle = (child.outlet !== PRIMARY_OUTLET || !child.snapshot.data.hasOwnProperty(this.ROUTE_DATA_TITLE)) ?
                this.headerTitle = this.TITLE_DEFAULT :
                child.snapshot.data[this.ROUTE_DATA_TITLE];
        }
    }
}
