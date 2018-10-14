import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'dr-debug',
    templateUrl: './dr-debug.component.html'
})
export class DebugComponent implements OnChanges, OnInit {
    @Input('data') public data: any = null;

    public show: boolean = false;
    public showContent: boolean = false;
    public showData: boolean = false;

    constructor(private route: ActivatedRoute) {
    }

    ngOnChanges() {
        this.display();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (typeof params.debug !== 'undefined') {
                this.show = true;
            }
        });

        this.display();
    }

    protected display(): void {
        if (this.data !== null) {
            this.showData = true;
        } else {
            this.showContent = true;
        }
    }
}
