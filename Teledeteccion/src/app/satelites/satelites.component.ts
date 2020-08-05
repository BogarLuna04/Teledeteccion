import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { EditSateliteComponent } from '../edit-satelite/edit-satelite.component';

@Component({
  selector: 'app-satelites',
  templateUrl: './satelites.component.html',
  styleUrls: ['./satelites.component.scss']
})
export class SatelitesComponent implements OnInit {

  public satelites =[];

  constructor( public _crudService: CrudService,private dialog: MatDialog ) { }
 // Esta funcion recibe el Id del documento a eliminar y lo envía al CRUD.
  deleteSatelite(documentId) {

    this._crudService.deleteSatelite( documentId ).then(() => {
      console.log('Documento eliminado!');
    }, (error) => {
      console.error(error);
    });
  }

  // OpenDialog abre un Modal en donde se mostrará nuestro formulario de edición.
  // La función recibe dos parametros, el Id del documento y los datos de este documento.
  openDialog( documentId, documentData ) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: documentId,
      data: documentData
    };

    // Configuramos el componente que queremos abrir dentro de nuestro Modal y su configuración.
    const dialogRef = this.dialog.open(EditSateliteComponent, dialogConfig);

    dialogRef.afterClosed();
  }

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
