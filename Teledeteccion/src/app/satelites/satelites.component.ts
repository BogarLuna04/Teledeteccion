import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-satelites',
  templateUrl: './satelites.component.html',
  styleUrls: ['./satelites.component.scss']
})
export class SatelitesComponent implements OnInit {

  public satelites =[];

  constructor( public _crudService: CrudService ) { }

  ngOnInit() {
    this._crudService.getSatelites().subscribe( (satelitesSnapshot)  => {
      this.satelites = [];
      satelitesSnapshot.forEach((sateliteData:any) => {
        this.satelites.push({
          id:sateliteData.payload.doc.id,
          data:sateliteData.payload.doc.data()
        })
        
      });
    });
  }

}
