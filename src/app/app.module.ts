import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DiagramComponent } from './diagram/diagram.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SqlHandlerService } from './shared/sql-handler/sql-handler.service';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalConfirmService } from './modal-confirm.service';


@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    HeaderComponent,
    MainComponent,
    ModalConfirmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SqlHandlerService, ModalConfirmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
