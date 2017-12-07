import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import{MyComponent} from './my-component';
import{MyProduct} from './my-productList'



@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MyProduct,

  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
