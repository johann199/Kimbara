
import { Bailarin } from './../interfaces/bailarin';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FormRegistroServicesService {

private bailarinCollection?: AngularFirestoreCollection<Bailarin>;

  constructor( private afs: AngularFirestore ) {
      this.bailarinCollection = afs.collection<Bailarin>('bailarin');
  }


  saveBailarin(newBailarin: Bailarin): void{
    this.bailarinCollection?.add(newBailarin);
  }
}
