import React from "react";
import styles from "./Step1.module.scss";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const Mid = () => {
  return (
    <div className={styles.mid}>
      <div className={styles.left}>
        <div className={styles.fl}>
          <button className={styles.button}>
            <BsFillPersonPlusFill /> 2
          </button>
          <button className={styles.button}>
            <BsFillPersonPlusFill /> 2
          </button>
          <button className={styles.button}>
            <BsFillPersonPlusFill /> 2
          </button>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.t1}>All limited links</div>
            <div className={styles.check}>
              <TiTick className={styles.icon} />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.t1}>Own analytics platform</div>
            <div className={styles.check}>
              <TiTick className={styles.icon} />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.t1}>Chat support</div>
            <div className={styles.check}>
              <TiTick className={styles.icon} />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.t1}>Optimize hashtags</div>
            <div className={styles.check}>
              <TiTick className={styles.icon} />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.t1}>Unlimited users</div>
            <div className={styles.check}>
              <TiTick className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <div className={styles.lt}>
            <div className={styles.top}>Стандарт</div>
            <div className={styles.bt}>Save %25</div>
          </div>
          <div className={styles.rt}>$1.000</div>
        </div>
        <div className={styles.box}>
          <div className={styles.lt}>
            <div className={styles.top}>Стандарт</div>
            <div className={styles.bt}>Save %25</div>
          </div>
          <div className={styles.rt}>$1.000</div>
        </div>
        <div className={styles.box}>
          <div className={styles.lt}>
            <div className={styles.top}>Стандарт</div>
            <div className={styles.bt}>Save %25</div>
          </div>
          <div className={styles.rt}>$1.000</div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
