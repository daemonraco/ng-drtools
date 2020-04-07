import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DebugComponent } from './dr-debug/dr-debug.component';
import { LoadingComponent } from './dr-loading/dr-loading.component';

@NgModule({
    declarations: [
        DebugComponent,
        LoadingComponent,
    ],
    exports: [
        DebugComponent,
        LoadingComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DRToolsModule { }
