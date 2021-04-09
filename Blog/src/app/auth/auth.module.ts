import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Materials } from '../materials.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
    declarations: [
        AuthComponent,
    ],
    imports: [
        AuthRoutingModule,
        FormsModule,
        Materials
    ],
    exports: [
        AuthComponent
    ]
})
export class AuthModule { }