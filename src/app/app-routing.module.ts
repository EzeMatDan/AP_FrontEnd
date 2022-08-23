import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonaComponent } from './components/acerca-de/edit-persona.component';
import { EditacercaComponent } from './components/acerca-de/editacerca.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EditCircleComponent } from './components/skills/edit-circle.component';
import { EditCircle1Component } from './components/skills/edit-circle1.component';
import { EditCircle2Component } from './components/skills/edit-circle2.component';
import { EditCircle3Component } from './components/skills/edit-circle3.component';
import { EditCircle4Component } from './components/skills/edit-circle4.component';
import { EditCircle5Component } from './components/skills/edit-circle5.component';
import { Editskillv1Component } from './components/skills/editskillv1.component';
import { NewCircleComponent } from './components/skills/new-circle.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id',component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id',component: EditEducacionComponent},
  {path: 'editacerca/:id',component: EditacercaComponent},
  {path: 'editpersona/:id',component: EditPersonaComponent},
  {path: 'nuevoproyecto',component: NewProyectoComponent},
  {path: 'editproyecto/:id',component: EditProyectoComponent},
  {path: 'editcircle/:id',component: EditCircleComponent},
  {path: 'editcircle1/:id',component: EditCircle1Component},
  {path: 'editcircle2/:id',component: EditCircle2Component},
  {path: 'editcircle3/:id',component: EditCircle3Component},
  {path: 'editcircle4/:id',component: EditCircle4Component},
  {path: 'editcircle5/:id',component: EditCircle5Component},
  {path: 'newcircle', component: NewCircleComponent},
  {path: 'editskillv1/:id', component: Editskillv1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
