import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SatelitesComponent } from './satelites/satelites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { EditSateliteComponent } from './edit-satelite/edit-satelite.component';
import { AddSateliteComponent } from './add-satelite/add-satelite.component';

@NgModule({
  declarations: [
    AppComponent,
    SatelitesComponent,
    EditSateliteComponent,
    AddSateliteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  entryComponents: [
    EditSateliteComponent,
    AddSateliteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
