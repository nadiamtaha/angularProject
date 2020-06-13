import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes =
[ 
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'about',component:AboutComponent,canActivate:[AuthGuardService]},
  {path:'movies',component:MoviesComponent,canActivate:[AuthGuardService]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
