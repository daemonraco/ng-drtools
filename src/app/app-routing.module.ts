import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicsComponent } from './basics/basics.component';

const routes: Routes = [
    { path: '', component: BasicsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
