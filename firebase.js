// 1. استيراد مكتبات فايربيس مباشرة عبر الإنترنت (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, collection, doc, setDoc, getDoc, getDocs,
  addDoc, deleteDoc, query, orderBy, limit
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 2. إعدادات مشروعك الخاصة (hussain-eng-app)
const firebaseConfig = {
  apiKey: "AIzaSyBfofXIVOb1_t_YH69ccYLnG4nfN3o4LMw",
  authDomain: "hussain-eng-app.firebaseapp.com",
  databaseURL: "https://hussain-eng-app-default-rtdb.firebaseio.com",
  projectId: "hussain-eng-app",
  storageBucket: "hussain-eng-app.firebasestorage.app",
  messagingSenderId: "294959211002",
  appId: "1:294959211002:web:a4e765f8aef6ebfd3fc443",
  measurementId: "G-WFRV3TXS86"
};

// 3. تهيئة فايربيس وقاعدة بيانات Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 4. نخلي أدوات فايربيس متاحة لباقي كود الصفحة
//    (السكربت الرئيسي بالصفحة سكربت عادي مو module، فما يقدر يستورد مباشرة)
window.firebaseDB = {
  db,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  orderBy,
  limit
};

console.log("✅ فايربيس جاهز ومتاح على window.firebaseDB");