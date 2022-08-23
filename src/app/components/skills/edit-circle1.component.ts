import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Circleprogress } from 'src/app/model/circleprogress';
import { CircleprogressService } from 'src/app/service/circleprogress.service';

@Component({
  selector: 'app-edit-circle1',
  templateUrl: './edit-circle1.component.html',
  styleUrls: ['./edit-circle1.component.css']
})
export class EditCircle1Component implements OnInit {
  circleprogress: Circleprogress = null

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private circleService: CircleprogressService
  ) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.circleService.details(id).subscribe(data => {this.circleprogress = data;},err =>{alert("Error al modificar");
  this.router.navigate(['']);
  })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.circleService.update(id, this.circleprogress).subscribe(data=>{
      this.router.navigate(['']);
    }, err=> {
      alert("Error al modificar el porcentaje");
      this.router.navigate(['']);
    }
    )
  }

}
