import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from '../pipes/pipes.module';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    BlogCardComponent,
    AppToolbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    PipesModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    BlogCardComponent,
    AppToolbarComponent
  ]
})
export class ComponentsModule { }
