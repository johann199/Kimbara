import { Grupos } from './../interfaces/tablaGrupos';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GruposserviceService {

  grupos!: Observable<Grupos[]>;

  private gruposCollection: AngularFirestoreCollection<Grupos>;

  constructor(private  afs: AngularFirestore) {
    this.gruposCollection =  afs.collection<Grupos>('grupos');
    this.getGrupos();

  }
  onEliminarGrupo(id: string): Promise<void>{
    return new Promise(async(resolve, reject)=>{
      try {
        const reult = this.gruposCollection.doc(id).delete();
        resolve(reult);

      } catch (error:any) {
        reject(error.message);
      }
    }
    );
  }
  //guardar grupo/ editar
  onSave(grupo: Grupos, idg: string): Promise<void>{
    return new Promise(async (resolve, reject)=>{
      try {
          const id = idg || this.afs.createId();
          const data = {id, ...grupo};
          const result = this.gruposCollection.doc(id).set(data);
          resolve(result);
      } catch (err: any) {
        reject(err.message);
      }
    });
    }

// mostrar grupo
 private  getGrupos(): void{
  this.grupos = this.gruposCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => a.payload.doc.data() as  Grupos))
  )
 }

}
