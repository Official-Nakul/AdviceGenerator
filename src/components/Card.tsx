import styles from "./card.module.css";
import seprator from "/src/assets/pattern-divider-desktop.svg";
import dice from "/src/assets/icon-dice.svg";
interface slip {
  id: string;
  advice: string;
}

interface prop {
  data: slip;
  handleOnClick: () => {};
}

const Card = ({ data, handleOnClick }: prop) => {
  console.log(data.advice);
  return (
    <div className={styles.container}>
      <p className={styles.adviceID}>ADVICE # {data.id}</p>
      <q>{data.advice}</q>
      <img className={styles.seprator} src={seprator} alt="" />
      <div className={styles.btn} onClick={handleOnClick}>
        <img src={dice} alt="" />
      </div>
    </div>
  );
};

export default Card;
