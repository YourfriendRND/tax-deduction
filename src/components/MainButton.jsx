import React from 'react';
import styles from '../css/MainButton.module.css'
console.log(styles);

const MainButton = () => {
    return (
        <button className={styles.button}>
            Налоговый вычет
        </button>
    )
}

export default MainButton;