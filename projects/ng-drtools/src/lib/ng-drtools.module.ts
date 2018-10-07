import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DebugComponent } from './dr-debug/dr-debug.component';
import { StringifyPipe } from './pipes/stringify.pipe';

@NgModule({
    declarations: [
        DebugComponent,
        StringifyPipe,
    ],
    exports: [
        DebugComponent,
        StringifyPipe,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DRToolsModule { }
