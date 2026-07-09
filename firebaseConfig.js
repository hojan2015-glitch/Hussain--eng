// 1. استيراد المكتبات اللازمة من Firebase بدون تكرار
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; 

// 2. إعدادات مشروعك (تُكتب مرة واحدة فقط)
const firebaseConfig = {
  apiKey: "AIzaSyBfofXIVOb1_t_YH69ccYLnG4nfN3o4LMw",
  authDomain: "hussain-eng-app.firebaseapp.com",
  databaseURL: "https://hussain-eng-app-default-rtdb.firebaseio.com",
  projectId: "hussain-eng-app",
  storageBucket: "hussain-eng-app.firebasestorage.app",
  messagingSenderId: "294959211002",
  appId: "1:294959211002:web:9b020ab771a1bab83fc443",
  measurementId: "G-6821Q1SM0G"
};

// 3. تهيئة التطبيق وتشغيل الخدمات الأساسية
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app); 

// 4. تصدير الخدمات لاستخدامها في باقي ملفات مشروعك
export { app, db, analytics };