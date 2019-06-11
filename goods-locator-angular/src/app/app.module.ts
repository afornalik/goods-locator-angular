import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StoragerackComponent } from './storagerack/storagerack.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    AboutComponent,
    HomeComponent,
    StoragerackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
