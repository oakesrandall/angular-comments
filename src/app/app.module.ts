import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
// import { MaterializeModule } from '../src/index'

import { AppComponent } from './app.component';
// import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    // CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
