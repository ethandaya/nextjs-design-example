import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.eyebrow}>Next.js design example</p>
        <h1>Review the real build, not a screenshot.</h1>
        <p className={styles.description}>
          This deliberately small Next.js app provides a fast, deterministic
          build for UI review and integration testing.
        </p>

        <div className={styles.details}>
          <div>
            <span>Framework</span>
            <strong>Next.js App Router</strong>
          </div>
          <div>
            <span>Build</span>
            <strong>Static home page</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
