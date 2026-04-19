import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBtkx1Gyhjv2r7_daQzMOyzWHYVvJtkewE",
    authDomain: "porras-villarreal-josesteban.firebaseapp.com",
    databaseURL: "https://porras-villarreal-josesteban-default-rtdb.firebaseio.com",
    projectId: "porras-villarreal-josesteban",
    storageBucket: "porras-villarreal-josesteban.firebasestorage.app",
    messagingSenderId: "971937608452",
    appId: "1:971937608452:web:472d17313926e9a4fe9651"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };