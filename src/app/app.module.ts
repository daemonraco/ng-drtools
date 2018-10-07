import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { DRToolsModule } from '../../projects/ng-drtools/src/public_api';

@NgModule({
    declarations: [
        AppComponent,
        BasicsComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        DRToolsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
