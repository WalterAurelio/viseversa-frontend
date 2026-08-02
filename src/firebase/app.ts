// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD44NcQQGb4Brsq0h-6GZg0OapcdmPx_ss',
  authDomain: 'viseversa-fac44.firebaseapp.com',
  projectId: 'viseversa-fac44',
  storageBucket: 'viseversa-fac44.firebasestorage.app',
  messagingSenderId: '844385382547',
  appId: '1:844385382547:web:9f2998802212d2cdc11d66',
  measurementId: 'G-1CB683HQQF'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
