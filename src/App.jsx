import Expansion from "./Components/Expansion";
import list from "./list.json";
import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.wrapper}>
      {list.map((item, index) => {
        return <Expansion list={item} key={index} />;
      })}
    </main>
  );
}
