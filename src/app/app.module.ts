import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTPclientService } from './service/httpclient.service';

@NgModule({
  declarations: [
    AppComponent,
    SayHelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HTTPclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
