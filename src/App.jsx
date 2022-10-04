import Expansion from "./Components/Expansion";
import list from "./list.json";

export default function App() {
  return (
    <>
      {list.map((item, index) => {
        return <Expansion list={item} key={index} />;
      })}
    </>
  );
}
