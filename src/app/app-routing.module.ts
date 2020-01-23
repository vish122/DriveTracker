import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDriveComponent } from './create-drive/create-drive.component'
import { ViewDriveComponent } from './view-drive/view-drive.component';
import { EditDriveComponent } from './edit-drive/edit-drive.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';



const routes: Routes = [
  // {path:'home',loadChildren:'./trainer/trainer.module#TrainerModule'},
  {path:'home',component:HomeComponent},
  {path:'create',component:CreateDriveComponent},
  {path:'view',component:ViewDriveComponent},
  {path:'edit',component:EditDriveComponent},
  {path:'signin',component:SigninComponent},
  {path:'edit/:cid',component:EditDriveComponent,pathMatch:'full'},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
