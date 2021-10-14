import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Bailarin } from "src/app/interfaces/bailarin";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable(
  {providedIn: 'root'}
)

export class BailarinServices{

  private bailarinCollection!: AngularFirestoreCollection<Bailarin>;

  constructor( private afs: AngularFirestore ) {
      this.bailarinCollection = afs.collection<Bailarin>('bailarin');
  }


  saveBailarin(newBailarin: Bailarin): void{
    this.bailarinCollection?.add(newBailarin);
  }

}
