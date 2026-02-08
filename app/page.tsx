import styles from "./page.module.css";

const highlights = [
  "پرانے بریکر اور کنڈیکٹر",
  "اعلیٰ معیار کے ریلے",
  "موبائل فون سرکٹ بورڈز",
  "کمپیوٹر اور لیپ ٹاپ سکریپ",
  "برقی اور الیکٹرانکس کا ہر قسم کا سامان"
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.badge}>0317 5248845</div>
        <h1 className={styles.cardTitle}>طارق خان سکریپ ڈیلر</h1>
        <p className={styles.lead}>
          ہم پرانے بریکر، کنڈیکٹر، ریلے، موبائل کے سرکٹ اور کمپیوٹر سکریپ مناسب
          قیمت پر خریدتے ہیں۔ فوری نقد ادائیگی اور محفوظ لین دین کے لیے ہم سے
          رابطہ کریں۔
        </p>
        <ul className={styles.highlights}>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles.cta}>
          <a href="https://wa.me/923175248845" target="_blank" rel="noreferrer">
            واٹس ایپ پر رابطہ کریں
          </a>
          <span>یا کال کریں: 0317 5248845</span>
        </div>
      </section>
      <section className={styles.info}>
        <div>
          <h2>ہم کیوں؟</h2>
          <p>
            تجربہ کار ٹیم، بہترین نرخ اور شہر کے اندر تیز تر وصولی۔ ہم صنعتی اور
            گھریلو دونوں سطح پر سکریپ کی خریداری کرتے ہیں۔
          </p>
        </div>
        <div>
          <h2>خدمات</h2>
          <p>
            آپ کے مقام سے سامان کی اٹھان، وزن اور قیمت کا شفاف نظام، اور فوری آپریشنل
            سپورٹ۔
          </p>
        </div>
      </section>
    </main>
  );
}
