import React from 'react';
import styles from "./Step3.module.scss"
import Image from "next/image";
import { Checkbox } from "@mui/material";

const Step3 = () => {
    return (
        <div className={styles.step3}>
            <h1 className={styles.title}>
                Саёҳат тарифини танланг
            </h1>
            <p className={styles.text}>
                Perania сайёҳлик фирмаси (биз) орқали ўзингизга қулай вақтда, орзуйингиздаги жойга хавфсиз ва мароқли
                саёҳат амалга оширинг
            </p>
            {/*<Mid/>*/}
            <div className={styles.mid}>
                <div className={styles.left}>
                    <div className={styles.ina}>
                        <div className={styles.cart}>
                            <Image src="/card.svg" height={50} width={50} alt="card"/>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <Image src="/visa.png" height={20} width={63} alt="card"/>
                        <div>
                            <Checkbox/>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <Image src="/paypal.png" height={26} width={92} alt="card"/>
                        <div>
                            <Checkbox/>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <Image src="/uzcard.png" height={40} width={38} alt="card"/>
                        <div>
                            <Checkbox/>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <Image src="/humo.svg" height={58} width={58} alt="card"/>
                        <div>
                            <Checkbox/>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.in}>
                        <label htmlFor="cart1">Карта рақам</label>
                        <input type="text" id="cart1"/>
                    </div>
                    <div className={styles.in}>
                        <label htmlFor="cart1">Исм/Фамилия</label>
                        <input type="text" id="cart1"/>
                    </div>
                    <div className={styles.ty}>
                        <div className={styles.sm}>
                            <label htmlFor="cart1">Карта рақам</label>
                            <input type="text" id="cart1"/>
                        </div>
                        <div className={styles.sm}>
                            <label htmlFor="cart1">Карта рақам</label>
                            <input type="text" id="cart1"/>
                        </div>
                    </div>
                    <div className={styles.po}>
                        <div className={styles.text}>
                            Картани сақлаш
                        </div>
                        <div className={styles.byt}>
                            Tolash
                        </div>
                    </div>
                </div>
            </div>
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

export default Step3;
