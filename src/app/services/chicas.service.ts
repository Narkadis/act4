import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChicasI } from '../interfaz/ChicasInteface';

@Injectable({
  providedIn: 'root'
})
export class ChicasService {

  constructor(private afs: AngularFirestore) { }
  private chicaCollection: AngularFirestoreCollection<ChicasI>;
  private chicas: Observable<ChicasI[]>;
  private chicasDoc: AngularFirestoreDocument<ChicasI>;
  private chica: Observable<ChicasI>;
  public selectedChica: ChicasI = {id: null};

  getAllChicasC() {
    this.chicaCollection = this.afs.collection<ChicasI>('chicas', ref => ref.where('id', '<=', 5));
    return this.chicas = this.chicaCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(action => {
        const data = action.payload.doc.data() as ChicasI;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  getsearch(termino: string) {
    this.chicaCollection = this.afs.collection<ChicasI>('chicas', ref => ref.where('name', '<=', 'termino'));
    return this.chicas = this.chicaCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(action => {
        const data = action.payload.doc.data() as ChicasI;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  getAllChicas() {
    this.chicaCollection = this.afs.collection<ChicasI>('chicas');
    return this.chicas = this.chicaCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(action => {
        const data = action.payload.doc.data() as ChicasI;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  getOneChica(idChicas: string){
    this.chicasDoc = this.afs.doc<ChicasI>(`chicas/${idChicas}`);
    return this.chica = this.chicasDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else{
        const data = action.payload.data() as ChicasI;
        data.id = action.payload.id;
        return data;
      }
    }));
   
  
  }


}
