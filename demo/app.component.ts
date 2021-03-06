import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { appRouterProviders } from './app.routes';

@Component({
    selector: 'modal-demo',
    template: '<router-outlet></router-outlet>',
    providers: [appRouterProviders],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.navigate(['/']);
    }
}
