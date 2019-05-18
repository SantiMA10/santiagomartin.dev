import * as firebase from 'firebase/app'
import 'firebase/performance'

const firebaseConfig = {
  apiKey: 'AIzaSyDGG1w8CH8cv1comH8KbVGwVAlVP8-YgQs',
  authDomain: 'santima-xyz.firebaseapp.com',
  databaseURL: 'https://santima-xyz.firebaseio.com',
  projectId: 'santima-xyz',
  storageBucket: 'santima-xyz.appspot.com',
  messagingSenderId: '845997725997',
  appId: '1:845997725997:web:930fe06c544f5155'
}

firebase.initializeApp(firebaseConfig)
firebase.performance()
