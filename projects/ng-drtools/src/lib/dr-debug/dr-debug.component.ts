import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'dr-debug',
    templateUrl: './dr-debug.component.html'
})
export class DebugComponent implements OnChanges, OnInit {
    //
    // Properties.
    @Input('data') public data: any = null;
    public show: boolean = false;
    public showContent: boolean = false;
    public showData: boolean = false;
    //
    // Construction.
    constructor(private route: ActivatedRoute) {
    }
    //
    // Public methods.
    public ngOnChanges(): void {
        this.display();
    }
    public ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            if (params.debug !== undefined) {
                this.show = true;
            }
        });

        this.display();
    }
    //
    // Protected methods.
    protected display(): void {
        if (this.data !== null) {
            this.showData = true;
        } else {
            this.showContent = true;
        }
    }
}
