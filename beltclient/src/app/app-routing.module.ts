import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './main/list/list.component';
import { ShowComponent } from './main/show/show.component';
import { AddComponent } from './main/add/add.component';


const routes: Routes = [

  { 
  	path: '', 
  	pathMatch: 'full',
  	component: AppComponent
  },

  { 
  	path: 'login', 
  	pathMatch: 'full',
  	component: LoginComponent
  },

   { 
    path: 'main', 
    component: MainComponent, 
    children: [

       { 
        path: 'list', 
        component: ListComponent, 
       },

       { 
        path: 'show', 
        component: ShowComponent, 
       },

       { 
        path: 'add', 
        component: AddComponent, 
       }

    ]},

];  	


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }