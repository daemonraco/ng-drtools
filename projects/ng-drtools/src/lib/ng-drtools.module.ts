import { NgModule } from '@angular/core';

import { StringifyPipe } from './pipes/stringify.pipe';

@NgModule({
    declarations: [
        StringifyPipe,
    ],
    exports: [
        StringifyPipe,
    ],
    imports: [
    ],
})
export class DRToolsModule { }
