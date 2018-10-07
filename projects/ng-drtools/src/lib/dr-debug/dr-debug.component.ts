import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'dr-debug',
    templateUrl: './dr-debug.component.html'
})
export class DebugComponent implements OnInit {
    @Input('data') public data: any;

    public show: boolean = false;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (typeof params.debug !== 'undefined') {
                this.show = true;
            }
        });
    }
}
