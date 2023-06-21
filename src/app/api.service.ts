import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  firestore = inject(Firestore);
  public async getAllData() {
    const colRef = collection(this.firestore, 'data');
    const snap = await getDocs(colRef);
    return snap.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  }
  public async getProduct(pid) {
    const colRef = collection(this.firestore, 'data');
    const docRef = doc(colRef, pid);
    const snap = await getDoc(docRef);
    return {
      ...snap.data(),
      id: snap.id,
    };
  }
}
