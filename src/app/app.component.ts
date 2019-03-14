import { Component } from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    faPlusCircle = faPlusCircle;

    constructor() {
        const config = {
            apiKey: 'AIzaSyCN812GpyXDlgVYBOUFNuG9R30YW_DGzKA',
            authDomain: 'blog-oc-grekoss.firebaseapp.com',
            databaseURL: 'https://blog-oc-grekoss.firebaseio.com',
            projectId: 'blog-oc-grekoss',
            storageBucket: '',
            messagingSenderId: '951418485256'
        };
        firebase.initializeApp(config);
    }

}
