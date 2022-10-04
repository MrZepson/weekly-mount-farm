import styles from "./Instance.module.css";

export default function Instance({ list }) {
  console.log(list);

  return (
    <main className={styles.wrapper}>
      <section className={styles.title}>
        <h2>{list.instance}</h2>
      </section>
      <section className={styles.content}>
        <div className={styles.checkboxes}>
          <div>
            <label className={styles.checkContainer}>
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
              Weekly Check
            </label>
          </div>
          <div>
            <label className={styles.checkContainer}>
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
              Collected
            </label>
          </div>
        </div>
        <div className={styles.details}>
          <p>
            <b>Mount:</b> {list.mount}
          </p>
          <p>
            <b>Boss:</b> {list.boss}
          </p>
          <p>
            <b>Location:</b> {list.location}
          </p>
          <p>
            <b>Difficulty:</b> {list.difficulty}
          </p>
        </div>
      </section>
    </main>
  );
}
