import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
persona: persona = null;

  constructor( private router:Router, 
    private activatedRouter: ActivatedRoute,
    private personaService:PersonaService) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.personaService.getPersona().subscribe(data => {this.persona = data;}, err => {alert("Error al modificar");
    this.router.navigate(['']);
  })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id).subscribe(data=>{
      this.router.navigate(['']);
    }, err=> {
      alert("Error al modificar titulo");
      this.router.navigate(['']);
    }
    )
  }

}
