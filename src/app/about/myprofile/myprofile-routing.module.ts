import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyprofileComponent } from '../myprofile/myprofile.component'


const routes: Routes = [
  {
    path: '', component: MyprofileComponent, children: [
      { 
        path:'myprofile',
        component:MyprofileComponent,
      },
  
    
    {
      path: '', 
      redirectTo: 'myprofile', pathMatch: 'full'
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyprofileRoutingModule { }
