import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  evento!: Observable<Evento[]>;
  private eventColletion!: AngularFirestoreCollection<Evento>;
  constructor(private afs: AngularFirestore ) {

    this.eventColletion = afs.collection<Evento>('eventos');
    this.getEvento();
   }
   //guardar un evento
   onSave(evento: Evento, idg: string): Promise<void> {

    return new Promise(async(resolve,reject)=>{
      try {
        const id = idg || this.afs.createId();
        const data = {id, ...evento};
        const result = this.eventColletion.doc(id).set(data);
        resolve(result);

      } catch (error:any) {
        reject(error.message);
      }


    })



  }
   //mostrar un evento

   getEvento(): void  {
    this.evento = this.eventColletion.stateChanges().pipe(
      map(actions => actions.map(b => b.payload.doc.data() as Evento))
    )
  }
}
