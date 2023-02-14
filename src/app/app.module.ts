import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SpotlistComponent } from './spotlist/spotlist.component';
import { Service } from './service.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, SpotlistComponent],
  providers: [Service],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
