import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardService } from './services/card.service';
import { CardComponent } from './components/card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';

import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './components/messages/messages.component';
import { RandomCardComponent } from './components/random-card/random-card.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuComponent,
    MessagesComponent,
    RandomCardComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
