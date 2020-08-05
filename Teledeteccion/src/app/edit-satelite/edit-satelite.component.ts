import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-edit-satelite',
  templateUrl: './edit-satelite.component.html',
  styleUrls: ['./edit-satelite.component.scss']
})
export class EditSateliteComponent implements OnInit {

  editarFormGroup: FormGroup;

  documentId: string;

  sateliteData = <any>{};

  constructor(  private _formBuilder: FormBuilder,
                private _crudService: CrudService,
                private dialogRef: MatDialogRef<EditSateliteComponent>,

                // Trae los datos del paciente que seteamos en pattients.component y los
                // asigna en una variable para luego llenar el formulario
                // con los datos actuales de ese documento.
                @Inject(MAT_DIALOG_DATA) data ) {

                  this.documentId = data.id;
                  this.sateliteData = data.data;

                }


  actualizarSatelite() {

    // Obtenemos los nuevos valores del formulario

    const formValues = {
      nombre: this.editarFormGroup.value.nombre,
      documento: this.editarFormGroup.value.documento,
      compania: this.editarFormGroup.value.compania,
      tipo: this.editarFormGroup.value.tipo,
      url: this.editarFormGroup.value.url
    };

    // Enviamos esos valores a nuestro CRUD para que actulice la BD

     this._crudService.updateSatelite(this.documentId, formValues);

     // Esta función cierra nuestro Modal
     this.dialogRef.close();
  }

  closeDialog() {
    // Esta función cierra nuestro Modal
      this.dialogRef.close();
  }

  ngOnInit() {

    this.editarFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      documento: ['', Validators.required],
      compania: ['', Validators.required],
      sintomas: ['', Validators.required],
      url: ['', Validators.required]
    });
  }
}
