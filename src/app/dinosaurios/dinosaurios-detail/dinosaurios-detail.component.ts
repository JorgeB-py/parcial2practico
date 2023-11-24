import { Component, Input, OnInit } from '@angular/core';
import { DinosauriosService } from '../dinosaurios.service';
import { DinosaurioDetail } from './dinosaurio-detail';

@Component({
  selector: 'app-dinosaurios-detail',
  templateUrl: './dinosaurios-detail.component.html',
  styleUrls: ['./dinosaurios-detail.component.css']
})
export class DinosauriosDetailComponent implements OnInit {
  dinosaurioId!:string;
  @Input() dinosaurioDetail!: DinosaurioDetail;

  constructor(
    private DinosauriosService: DinosauriosService
  ) { }
  getDinosaurio(){
    this.DinosauriosService.getDinosaurio(this.dinosaurioId).subscribe(Apidata=>{
      this.dinosaurioDetail=Apidata;
    })
  }

  ngOnInit() {
    if (this.dinosaurioId) {
      this.getDinosaurio();
    }
  }

}
