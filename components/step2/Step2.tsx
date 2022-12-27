import React, {useCallback, useState} from 'react';
import styles from "./Step2.module.scss"
import {FiChevronRight} from "react-icons/fi"
import MyDropzone from "./dropzone/drop-zone"

const Step2 = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');

    const handleChange = (e: any) => {
        if (e.target.files !== undefined) {
            setFile(e.target.files[0]);
            setFilename(e.target.files[0].name);
        }
    }

    const onDrop = useCallback((acceptedFiles:any) => {
        if (acceptedFiles !== undefined) {
            setFile(acceptedFiles[0])
            setFilename(acceptedFiles[0].name)
            const a = acceptedFiles[0].size / 1024
        }
    }, [])

    return (
        <div className={styles.step1}>
            <h1 className={styles.title}>
                Саёҳат тарифини танланг
            </h1>
            <p className={styles.text}>
                Perania сайёҳлик фирмаси (биз) орқали ўзингизга қулай вақтда, орзуйингиздаги жойга хавфсиз ва мароқли
                саёҳат амалга оширинг
            </p>
            <div className={styles.inputs}>
                <div className={styles.left}>
                    <p>
                        Исм
                    </p>
                    <input type="text" placeholder="Abrorbek"/>
                </div>
                <div className={styles.left}>
                    <p>
                        Исм
                    </p>
                    <input type="text" placeholder="Abrorbek"/>
                </div>
            </div>
            <div className={styles.inputs}>
                <div className={styles.le}>
                    <div className={styles.li}>
                        <p>
                            Исм
                        </p>
                        <input type="text" placeholder="Abrorbek"/>
                        <div className={styles.rt}>
                            <FiChevronRight className={styles.icon}/>
                        </div>
                    </div>
                    <div className={styles.li}>
                        <p>
                            Исм
                        </p>
                        <input type="text" placeholder="Abrorbek"/>
                        <div className={styles.rt}>
                            <FiChevronRight className={styles.icon}/>
                        </div>
                    </div>
                    <div className={styles.li}>
                        <p>
                            Исм
                        </p>
                        <input type="text" placeholder="Abrorbek"/>
                        <div className={styles.rt}>
                            <FiChevronRight className={styles.icon}/>
                        </div>
                    </div>
                </div>
                <div className={styles.left}>
                    <p>
                        Исм
                    </p>
                    <input type="text" placeholder="Abrorbek"/>
                </div>
            </div>
            <div className={styles.inputs}>
                <div className={styles.left}>
                    <p>
                        Исм
                    </p>
                    <input type="text" placeholder="Abrorbek"/>
                </div>
                <div className={styles.left}>
                    <p>
                        Исм
                    </p>
                    <input type="text" placeholder="Abrorbek"/>
                </div>
            </div>
            <div>
                <MyDropzone
                    onChange={handleChange}
                    onDrop={onDrop}
                    file={file}
                    filename={filename}
                />
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

export default Step2;
