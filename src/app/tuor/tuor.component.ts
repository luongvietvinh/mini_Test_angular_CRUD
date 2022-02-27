import {Component, OnInit} from '@angular/core';
import {Tuor} from "../model/Tuor";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TuorService} from "../service/tuor.service";

@Component({
  selector: 'app-tuor',
  templateUrl: './tuor.component.html',
  styleUrls: ['./tuor.component.css']
})
export class TuorComponent implements OnInit {
  tuors: Tuor[] = [];

  formTuor!: FormGroup;

  constructor(private tuorService: TuorService) {
    this.tuors = tuorService.tuors;
  }

  tuor: Tuor = new Tuor(0, "", 0, 0,"")

  ngOnInit(): void {
    this.formTuor = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", Validators.maxLength(5)),
      price: new FormControl(0, Validators.min(10)),
      status: new FormControl(0),
      description: new FormControl("", Validators.maxLength(10)),
    })
  }

  showEdit(tuor: Tuor) {
    this.tuor = new Tuor(tuor.id,tuor.name,tuor.price,tuor.status, tuor.description)
  }
  editTuor(tour : any){
    this.tuorService.create(tour);
  }
  showdelete(id : number){
    for (let i = 0; i < this.tuors.length; i++) {
      if (this.tuors[i].id === id){
        this.tuor.id = this.tuors[i].id;
        return;
      }
    }
  }
  delete(id : number){
    this.tuorService.delete(id)
  }
  createTuor(){
    this.tuorService.create(this.formTuor.value)
  }
}
