import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <h1>
            <li>
              Nama: Meyathala Razditya
            </li>
            <li>
              NIM : 2802535673
            </li>
          </h1>
        </ol>
      </main>
    </div>
  );
}
