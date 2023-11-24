import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';
import { DinosaurioDetail } from '../dinosaurios-detail/dinosaurio-detail';
import { DinosauriosService } from '../dinosaurios.service';

@Component({
  selector: 'app-dinosaurios-list',
  templateUrl: './dinosaurios-list.component.html',
  styleUrls: ['./dinosaurios-list.component.css']
})
export class DinosauriosListComponent implements OnInit {

  dinosaurios: Array<DinosaurioDetail>=[]
  selectedDinosaurio!:DinosaurioDetail;
  selected:boolean=false;

  constructor(private dinosaurioService: DinosauriosService) { }

  getDinosaurios(){
    this.dinosaurioService.getDinosaurios().subscribe(apiData=>{
      this.dinosaurios=apiData;
    })
  }
  selectDinosaurio(dinosaurio:DinosaurioDetail){
    this.selectedDinosaurio = dinosaurio;
    this.selected=true;

  }

  ngOnInit() {
    this.getDinosaurios();
  }

}
