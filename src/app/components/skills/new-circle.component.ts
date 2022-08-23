import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skillv1 } from 'src/app/model/skillv1';
import { Skillv1Service } from 'src/app/service/skillv1.service';

@Component({
  selector: 'app-new-circle',
  templateUrl: './new-circle.component.html',
  styleUrls: ['./new-circle.component.css']
})
export class NewCircleComponent implements OnInit {
  porcentaje: number;
  title: string;
  
  constructor(private skillv1Service: Skillv1Service, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skillv1 = new Skillv1(this.porcentaje, this.title);
    this.skillv1Service.save(skillv1).subscribe(data => {
      alert("Skill añadida correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("falló");
      this.router.navigate([''])
    })

}

}