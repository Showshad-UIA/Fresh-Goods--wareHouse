// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDIKx_sONFebIcF9_AUnET4ldTde-vHToA",
	authDomain: "gadget-house-e6ee3.firebaseapp.com",
	projectId: "gadget-house-e6ee3",
	storageBucket: "gadget-house-e6ee3.appspot.com",
	messagingSenderId: "453031284559",
	appId: "1:453031284559:web:e91601f845c72fc585bf3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
