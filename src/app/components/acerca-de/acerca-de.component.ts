import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { AcercaService } from 'src/app/service/acerca.service';
import { Acerca } from 'src/app/model/acerca';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona ("","","","","") ;
  acerca: Acerca[] = [];

  constructor(private personaService: PersonaService, private acercaService: AcercaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.acercaService.getAcerca().subscribe(data => {this.acerca = data});
    this.personaService.getPersona().subscribe(data => {this.persona = data});
    
    this.cargarAcerca();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  

  cargarAcerca():void {
    this.acercaService.getAcerca().subscribe(
      data => {
        this.acerca = data});
  }

  delete(id: number){
    if (id != undefined) {
      this.acercaService.detele(id).subscribe(data => {
        this.cargarAcerca();
      }, error => {
        alert("No se pudo eliminar");
      }
      )
    }
  }

}
