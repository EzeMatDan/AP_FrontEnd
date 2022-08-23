import { Component, Input, OnInit } from '@angular/core';
import { Circleprogress } from 'src/app/model/circleprogress';
import { CircleprogressService } from 'src/app/service/circleprogress.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
circleprogress : Circleprogress[] = [];


constructor(
    private circleService: CircleprogressService,
    private tokenService: TokenService,
  ){}

  isLogged = false;
  
  ngOnInit(): void {
   this.cargarCirclesprogress();
   if(this.tokenService.getToken()){
    this.isLogged = true;
   }else{
    this.isLogged = false;
   }
  }

  cargarCirclesprogress(): void {
    this.circleService.lista().subscribe(
      data => {
        this.circleprogress=data});
  }



}


