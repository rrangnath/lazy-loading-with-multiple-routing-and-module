import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AboutComponent } from '../about/about.component';
import { VisionComponent } from './vision/vision.component'


@NgModule({
  declarations: [AboutComponent, MyprofileComponent, VisionComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule {
  constructor() {
    console.log('About Module Loaded');
  }
 }
