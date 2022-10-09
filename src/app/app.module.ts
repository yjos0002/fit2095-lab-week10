import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';

import { HttpClientModule } from '@angular/common/http';
import { AddSenderComponent } from './add-sender/add-sender.component';
import { ListSendersComponent } from './list-senders/list-senders.component';
import { DeleteSenderComponent } from './delete-sender/delete-sender.component';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { ListParcelsComponent } from './list-parcels/list-parcels.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSenderComponent,
    ListSendersComponent,
    DeleteSenderComponent,
    AddParcelComponent,
    ListParcelsComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
