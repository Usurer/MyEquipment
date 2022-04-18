import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebClient';
  firebaseName: string = '';

  constructor() {

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBVMKnf_ZzOkWDJveU1TaXPLExgJklFmn0",
      authDomain: "myequipment-338e9.firebaseapp.com",
      projectId: "myequipment-338e9",
      storageBucket: "myequipment-338e9.appspot.com",
      messagingSenderId: "222183744667",
      appId: "1:222183744667:web:884be0fb319cdd136a923e",
      databaseURL: "https://myequipment-338e9-default-rtdb.europe-west1.firebasedatabase.app/",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    this.firebaseName = app.name;
    const db = getDatabase(app);
    console.log('dfdf');
    set(ref(db, 'users/' + 'test_user_id'), {
      username: 'Bob',
    });
  }
}
