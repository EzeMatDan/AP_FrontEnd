import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acerca } from 'src/app/model/acerca';
import { AcercaService } from 'src/app/service/acerca.service';

@Component({
  selector: 'app-editacerca',
  templateUrl: './editacerca.component.html',
  styleUrls: ['./editacerca.component.css']
})
export class EditacercaComponent implements OnInit {
  acerca : Acerca = null;

  constructor(
    private router:Router, 
    private activatedRouter: ActivatedRoute,
    private acercaService: AcercaService){ }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.acercaService.details(id).subscribe(data => {this.acerca = data;}, err => {alert("Error al modificar");
    this.router.navigate(['']);
  })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercaService.update(id, this.acerca).subscribe(data=>{
      this.router.navigate(['']);
    }, err=> {
      alert("Error al modificar la Acerca de...");
      this.router.navigate(['']);
    }
    )
  }

}
