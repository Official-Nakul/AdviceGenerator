import styles from "./card.module.css";
import seprator from "/src/assets/pattern-divider-desktop.svg";
import dice from "/src/assets/icon-dice.svg";
interface slip {
  id: string;
  advice: string;
}

interface prop {
  api_data: slip;
  handleOnClick: () => {};
}

const Card = ({ api_data, handleOnClick }: prop) => {
  console.log(api_data.advice);
  return (
    <div className={styles.container}>
      <p className={styles.adviceID}>ADVICE # {api_data.id}</p>
      <q>{api_data.advice}</q>
      <img className={styles.seprator} src={seprator} alt="" />
      <div className={styles.btn} onClick={handleOnClick}>
        <img src={dice} alt="" />
      </div>
    </div>
  );
};

export default Card;
