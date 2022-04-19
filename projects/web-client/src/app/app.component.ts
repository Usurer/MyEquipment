import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from 'firebase/database';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebClient';
  firebaseName: string = '';
  userName?: string = undefined;

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

  signIn(): void {
    const authProvider = new GoogleAuthProvider();
    authProvider.addScope('https://www.googleapis.com/auth/userinfo.email');
    authProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');

    const auth = getAuth();
    signInWithPopup(auth, authProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          throw new Error('credential is null');
        }

        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.userName = user.displayName || user.email || undefined;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  signOut(): void {
    const auth = getAuth();
    signOut(auth).then(() => this.userName = undefined);
  }
}
