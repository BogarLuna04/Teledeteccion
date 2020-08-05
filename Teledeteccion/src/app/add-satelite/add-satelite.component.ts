import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add-satelite',
  templateUrl: './add-satelite.component.html',
  styleUrls: ['./add-satelite.component.scss']
})
export class AddSateliteComponent implements OnInit {

  
  // Fuerza al usuario a escribir secuencialmente los datos
  isLinear = true;
  //addSatelite = new FormGroup({
  //  nombreForm: new FormControl(''),
  //  documentoForm: new FormControl(''),
  //  companiaForm: new FormControl(''),
  //  tipoForm: new FormControl(''),
  //  urlForm: new FormControl(''),
  //});

  nombreFormGroup: FormGroup;
  documentoFormGroup: FormGroup;
  companiaFormGroup: FormGroup;
  tipoFormGroup: FormGroup;
  urlFormGroup: FormGroup;

  
  // Envía los datos del formulario a nuestro BD
  dataForm() {

     // Guarda los datos escritos en el formulario

     const DATA = {
      nombre: this.nombreFormGroup.value.nombre,
      documento: this.documentoFormGroup.value.documento,
      compania: this.companiaFormGroup.value.compania,
      tipo: this.tipoFormGroup.value.tipo,
      url: this.urlFormGroup.value.url
     };

    // Envía los datos a nuestro CrudServices para que los envíe a FireStore
     this._crudService.createSatelite(DATA).then(() => {
        console.log('Documento creado exitósamente!');
      }, (error) => {
       console.error(error);
     });

  }


  constructor( private _formBuilder: FormBuilder, public _crudService: CrudService ) { }

  ngOnInit() {

    this.nombreFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required]
    });
    this.documentoFormGroup = this._formBuilder.group({
      documento: ['', Validators.required]
    });
    this.companiaFormGroup = this._formBuilder.group({
      compania: ['', Validators.required]
    });
    this.tipoFormGroup = this._formBuilder.group({
      tipo: ['', Validators.required]
    });
    this.urlFormGroup = this._formBuilder.group({
      url: ['', Validators.required]
    });

  }
}
