
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC0pkzNoDUyJ2bYiviS5dheh0dXXfHRYKI",
  authDomain: "flipkart-899da.firebaseapp.com",
  projectId: "flipkart-899da",
  storageBucket: "flipkart-899da.appspot.com",
  messagingSenderId: "162866508370",
  appId: "1:162866508370:web:747e91d945e933dc24a58b"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
export {auth};