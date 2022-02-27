import { Component, OnInit } from '@angular/core';
import {Tuor} from "../model/Tuor";
import {TuorService} from "../service/tuor.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  tuors: Tuor[] = [];

  constructor(private tuorService : TuorService) {
    this.tuors = tuorService.tuors;
  }

  ngOnInit(): void {
  }

}
