// 1. استيراد مكتبات فايربيس مباشرة عبر الإنترنت (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 2. إعدادات مشروعك الخاصة (hussain-eng-app) جاهزة تماماً
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

// 3. تهيئة فايربيس وقاعدة البيانات
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 4. دالة تجريبية ترسل بيانات أول ما تفتح الصفحة للتأكد أن الربط شغال 100%
async function testFirebaseConnection() {
  try {
    const docRef = await addDoc(collection(db, "test_connection"), {
      status: "تم الربط بنجاح من موقع حسين المهندس!",
      date: new Date().toLocaleString()
    });
    console.log("🚀 ممتاز! تم إرسال البيانات بنجاح لقاعدة البيانات، المعرف هو:", docRef.id);
  } catch (error) {
    console.error("❌ عذراً، هناك خطأ في الاتصال بقاعدة البيانات:", error);
  }
}

// تشغيل الدالة التجريبية تلقائياً عند تحميل الصفحة
testFirebaseConnection(); 
