import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DebugComponent } from './dr-debug/dr-debug.component';
import { LoadingComponent } from './dr-loading/dr-loading.component';
import { StringifyPipe } from './pipes/stringify.pipe';

@NgModule({
    declarations: [
        DebugComponent,
        LoadingComponent,
        StringifyPipe,
    ],
    exports: [
        DebugComponent,
        LoadingComponent,
        StringifyPipe,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DRToolsModule { }
