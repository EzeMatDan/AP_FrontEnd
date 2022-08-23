import { Component, OnInit } from '@angular/core';
import { Skillv1 } from 'src/app/model/skillv1';
import { Skillv1Service } from 'src/app/service/skillv1.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skillv1',
  templateUrl: './skillv1.component.html',
  styleUrls: ['./skillv1.component.css']
})
export class Skillv1Component implements OnInit {
skillv1: Skillv1[] = [];

  constructor(private tokenService: TokenService, private skillv1Service: Skillv1Service) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkillv1();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarSkillv1(): void{
    this.skillv1Service.lista().subscribe(data => {
      this.skillv1 = data;
    })
  }

  delete(id?:number){
    if(id != undefined){
      this.skillv1Service.delete(id).subscribe(
        data =>{
          this.cargarSkillv1();
        }, err => {
          alert("No se pudo eliminar");
        }
        )
    }
  }

}
