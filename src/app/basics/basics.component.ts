import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DRLoadingService } from '../../../projects/ng-drtools/src/public_api';

@Component({
    selector: 'app-basics',
    templateUrl: './basics.component.html',
    providers: [DRLoadingService]
})
export class BasicsComponent implements OnInit {
    public debug: boolean = false;
    public testData = [{
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    }, {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    }, {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    }];

    constructor(
        private loading: DRLoadingService,
        private route: ActivatedRoute) {
    }

    public showLoading(): void {
        this.loading.start('Running for a moment...');
        setTimeout(() => this.loading.stop(), 3000);
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (typeof params.debug !== 'undefined') {
                this.debug = true;
            }
        });
    }
}
