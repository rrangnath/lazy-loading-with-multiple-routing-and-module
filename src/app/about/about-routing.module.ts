import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { VisionComponent } from './vision/vision.component';
import { MyprofileComponent } from './myprofile/myprofile.component';


const routes: Routes = [
  {
    path: '', component: AboutComponent, children: [
      { 
        path:'vision',
        component:VisionComponent,
      },
      {
        path:'myprofile', 
        loadChildren: () => import('./myprofile/myprofile-routing.module').then(mishra => mishra.MyprofileRoutingModule)
      },
   
    {
      path: '', 
      redirectTo: 'vision', pathMatch: 'full'
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
