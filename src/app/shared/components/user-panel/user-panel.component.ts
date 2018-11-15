import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxListModule } from 'devextreme-angular/ui/list';
import { DxContextMenuModule } from 'devextreme-angular/ui/context-menu';
import { AuthService } from '../../../service/auth.service';
@Component({
    selector: 'app-user-panel',
    templateUrl: 'user-panel.component.html',
    styleUrls: ['./user-panel.component.scss']
})

export class UserPanelComponent {
    @Input()
    menuItems: any;

    @Input()
    menuMode: string;

    @Output()
    itemClick: EventEmitter<any> = new EventEmitter<any>();

    nameUser: string;
    constructor(private authService:AuthService) {
        this.nameUser=authService.nameUser;
    }

    itemMenuClick(args) {
        //this.itemClick.next(args.itemData);
        this.authService.signOut();
    }
}

@NgModule({
    imports: [
        DxListModule,
        DxContextMenuModule,
        CommonModule
    ],
    declarations: [ UserPanelComponent ],
    exports: [ UserPanelComponent ]
})
export class UserPanelModule { }
