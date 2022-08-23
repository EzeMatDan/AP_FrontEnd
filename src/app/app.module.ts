import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { CircleProgressOptions, NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditacercaComponent } from './components/acerca-de/editacerca.component';
import { EditPersonaComponent } from './components/acerca-de/edit-persona.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { EditCircleComponent } from './components/skills/edit-circle.component';
import { EditCircle1Component } from './components/skills/edit-circle1.component';
import { EditCircle2Component } from './components/skills/edit-circle2.component';
import { EditCircle3Component } from './components/skills/edit-circle3.component';
import { EditCircle4Component } from './components/skills/edit-circle4.component';
import { EditCircle5Component } from './components/skills/edit-circle5.component';
import { NewCircleComponent } from './components/skills/new-circle.component';
import { Skillv1Component } from './components/skills/skillv1.component';
import { Editskillv1Component } from './components/skills/editskillv1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditacercaComponent,
    EditPersonaComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    EditCircleComponent,
    EditCircle1Component,
    EditCircle2Component,
    EditCircle3Component,
    EditCircle4Component,
    EditCircle5Component,
    NewCircleComponent,
    Skillv1Component,
    Editskillv1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    interceptorProvider,
    CircleProgressOptions 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
