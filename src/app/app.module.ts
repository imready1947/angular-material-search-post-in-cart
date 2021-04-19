import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchPosts } from './search-posts.component';
import { MaterialModule } from './material.module';
import { FilterPipe }  from './filter.pipe';

import {RouterModule, Routes} from '@angular/router';

const routes:Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot(routes), BrowserAnimationsModule, ReactiveFormsModule, BrowserModule, FormsModule, MaterialModule ],
  declarations: [ SearchPosts, FilterPipe ],
  bootstrap:    [ SearchPosts ]
})
export class AppModule { }
