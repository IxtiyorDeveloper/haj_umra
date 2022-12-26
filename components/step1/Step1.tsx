import React from 'react';
import styles from "./Step1.module.scss"
import Mid from "./mid";

const Step1 = () => {
    return (
        <div className={styles.step1}>
            <h1 className={styles.title}>
                Саёҳат тарифини танланг
            </h1>
            <p className={styles.text}>
                Perania сайёҳлик фирмаси (биз) орқали ўзингизга қулай вақтда, орзуйингиздаги жойга хавфсиз ва мароқли
                саёҳат амалга оширинг
            </p>
            <Mid/>
            <div className={styles.bts}>
                <button className={styles.lbt1}>
                    Олдинги саҳифа
                </button>
                <button className={styles.lbt2}>
                    Кейинги саҳифа
                </button>
            </div>
        </div>
    );
};

export default Step1;
