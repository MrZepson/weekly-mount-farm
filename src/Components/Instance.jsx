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
            <input type="checkbox" name="Weekly Check" />
            <label name="Weekly Check">Weekly Check</label>
          </div>
          <div>
            <input type="checkbox" name="Collected" />
            <label name="Collected">Collected</label>
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
        </div>
      </section>
    </main>
  );
}
