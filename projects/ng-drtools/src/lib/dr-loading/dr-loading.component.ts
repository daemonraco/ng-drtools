import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DRLoadingService } from './dr-loading.service';

@Component({
    selector: 'dr-loading',
    templateUrl: './dr-loading.component.html',
    styleUrls: ['./dr-loading.component.scss'],
    providers: [DRLoadingService],
    encapsulation: ViewEncapsulation.None,
})
export class LoadingComponent implements OnInit {
    //
    // Properties.
    public active: boolean = false;
    public message: string = '';
    //
    // Construction.
    constructor(protected loadingSrv: DRLoadingService) {
    }
    //
    // Public methods.
    public ngOnInit(): void {
        this.loadingSrv.listen().subscribe(status => {
            this.active = status.active;
            this.message = status.message;
        });
    }
}
