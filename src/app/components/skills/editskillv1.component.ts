import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skillv1 } from 'src/app/model/skillv1';
import { Skillv1Service } from 'src/app/service/skillv1.service';

@Component({
  selector: 'app-editskillv1',
  templateUrl: './editskillv1.component.html',
  styleUrls: ['./editskillv1.component.css']
})
export class Editskillv1Component implements OnInit {
skillv1: Skillv1 = null;

  constructor( private skillv1Service: Skillv1Service,
    private activatedRouter: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillv1Service.details(id).subscribe(
      data=>{
        this.skillv1 = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
      )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillv1Service.update(id, this.skillv1).subscribe(data=>{
      this.router.navigate(['']);
    }, err=> {
      alert("Error al modificar skill");
      this.router.navigate(['']);
    }
    )
  }

}
