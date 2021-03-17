import { Item } from 'src/app/models/Item';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestoreCollectionGroup,
} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {
    // this.items = this.afs.collection('items').valueChanges();

    this.itemsCollection = this.afs.collection('items', (ref) =>
      ref.orderBy('Name', 'asc')
    );

    //Lấy Code
    this.items = this.afs
      .collection('items')
      .snapshotChanges()
      .map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Item;
          data.Code = a.payload.doc.id;
          return data;
        });
      });
  }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.Code}`);
    this.itemDoc.delete();
  }

  updateItem(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.Code}`);
    this.itemDoc.update(item);
  }
}
