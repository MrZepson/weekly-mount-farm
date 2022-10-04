import { useEffect, useState } from "react";
import styles from "./Expansion.module.css";
import Instance from "./Instance.jsx";

export default function Expansion({ list }) {
  const [expansionName, setExpansionName] = useState("");
  const expansionNameList = Object.keys(list)[0];
  const expansionValues = Object.values(list)[0];

  useEffect(() => {
    switch (expansionNameList) {
      case "classic":
        setExpansionName("Classic");
        break;
      case "theBurningCrusade":
        setExpansionName("The Burning Crusade");
        break;
      case "wrathOfTheLichKing":
        setExpansionName("Wrath of the Lich King");
        break;
      case "cataclysm":
        setExpansionName("Cataclysm");
        break;
      case "mistsOfPandaria":
        setExpansionName("Mists of Pandaria");
        break;
      case "warlordsOfDraenor":
        setExpansionName("Warlords of Draenor");
        break;
      case "legion":
        setExpansionName("Legion");
        break;
      case "battleForAzeroth":
        setExpansionName("Battle for Azeroth");
        break;
      case "shadowlands":
        setExpansionName("Shadowlands");
        break;
      default:
        break;
    }
  }, []);

  return (
    <main className={styles.wrapper}>
      <h1>{expansionName}</h1>
      {expansionValues.map((item, index) => {
        return <Instance list={item} key={index} />;
      })}
    </main>
  );
}
