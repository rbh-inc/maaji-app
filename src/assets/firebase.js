import * as firebase from 'firebase/app';
import 'firebase/storage';

// firebase init - add your own config here
var firebaseConfig = {
  apiKey: 'AIzaSyB-G4iSInifukpxLW3Kh7LNTQ2EP_5ilcA',
  authDomain: 'test-by-raby.firebaseapp.com',
  databaseURL: 'https://test-by-raby.firebaseio.com',
  projectId: 'test-by-raby',
  storageBucket: 'test-by-raby.appspot.com',
  messagingSenderId: '20604625019',
  appId: '1:20604625019:web:7fbb097c7a235d49',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebaseApp.storage();

export { storage };
