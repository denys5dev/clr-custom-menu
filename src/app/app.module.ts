import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqHeaderComponent } from './sq-header/sq-header.component';
import { SqNavComponent } from './sq-nav/sq-nav.component';
import { HomeComponent } from './routes/home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      SqHeaderComponent,
      SqNavComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
