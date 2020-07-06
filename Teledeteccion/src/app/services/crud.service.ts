import { Injectable } from '@angular/core';
// Importamos angular firestore y angular collection
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
    providedIn: 'root'
  })
export class CrudService {
// Creamos un alias para el AngularFirestore, en este caso se llamará AFS
constructor( private afs: AngularFirestore ) {
// Esta impresion es opcional, la agrego para confirmar que el servicio funcione correctamente
console.log('Service CRUD On');
}
// C.R.U.D en esta parte es donde vamos a crear cada una de las operaciones basicas
// Crear, Leer, Actualizar y Eliminar
// Crea un nuevo paciente

public createSatelite(data: {
nombre: string,
documento: string,
compania: string,
url: string}) {
return this.afs.collection('satelites').add(data);
}

// Obtiene un paciente
public getSatelite(documentId: string) {
return this.afs.collection('satelites').doc(documentId).snapshotChanges();
}
// Obtiene todos los pacientes
public getSatelites() {
return this.afs.collection('satelites').snapshotChanges();
}
// Actualiza un paciente
public updateSatelite(documentId: string, data: {
nombre?: string,
documento?: string,
compania?: string,
url?: string}) {
return this.afs.collection('satelites').doc(documentId).set(data);
}
// Borrar un paciente
public deleteSatelite(documentId: string) {
return this.afs.collection('satelites').doc(documentId).delete();
}
}