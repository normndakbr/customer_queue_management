import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestQueueNumberComponent } from './components/request-queue-number/request-queue-number.component';
import { VisitorListComponent } from './components/visitor-list/visitor-list.component';
import { InputVisitorDetailsComponent } from './components/input-visitor-details/input-visitor-details.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestQueueNumberComponent,
    VisitorListComponent,
    InputVisitorDetailsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
