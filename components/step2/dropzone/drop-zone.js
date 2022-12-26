import React from 'react'
import {useDropzone} from 'react-dropzone'
import styles from "./drop-zone.module.scss"
import Image from "next/image";

function MyDropzone({onChange, onDrop, file, filename}) {


    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: '.pdf,.docx,.doc',
        multiple: false
    })

    return (
        <div {...getRootProps()} className={styles.dropzone}>
            <input {...getInputProps()} onChange={event => onChange(event)}/>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <Image src="/cloud.svg" alt="cloud" width={44} height={36}/>
                    <div className={styles.con}>
                        <p className={styles.top}>
                            Файлингизни бу ерга юкланг
                        </p>
                        <p className={styles.bot}>
                            ЖПГ, ПНГ ёки ПДФ, мах файл ҳажми: 50 МБ
                        </p>
                    </div>
                </div>
                <div className={styles.right}>
                    <label htmlFor="inp" className={styles.label}>Файлингизни танланг</label>
                    <input type="text" id="inp" hidden/>
                </div>
            </div>
        </div>
    )
}

export default MyDropzone
