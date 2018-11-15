import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { DxValidationGroupModule } from 'devextreme-angular/ui/validation-group';
import { AuthService } from '../../../service/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    identifier = '';
    password = '';

    @Output()
    public userAuthorized: EventEmitter<any> = new EventEmitter<any>();

    constructor(private authService: AuthService) { }

    ngOnInit() { }

    onLoginClick(args) {
        if (!args.validationGroup.validate().isValid) {
            return;
        }



        // this.userAuthorized.next({
        //     password: this.password,
        //     identifier: this.identifier
        // });
        this.authService.login({
                identifier: this.identifier,                
                password: this.password
            }).subscribe(response =>{
                console.log("response");
                this.authService.addTokenName((<any>response).jwt,(<any>response).user.username);
            }, error=>{
                console.log("error");
            })

        args.validationGroup.reset();
    }
}

@NgModule({
    imports: [
        CommonModule,
        DxButtonModule,
        DxTextBoxModule,
        DxValidatorModule,
        DxValidationGroupModule
    ],
    declarations: [ LoginFormComponent ],
    exports: [ LoginFormComponent ]
})
export class LoginFormModule { }
