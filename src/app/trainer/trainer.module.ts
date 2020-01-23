import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const myRoutes:Routes=[
  {path:'', component:HomeComponent}
]

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(myRoutes)]
})
export class TrainerModule { 

  constructor()
  {
    console.log("In Trainer Module");
  }

}
