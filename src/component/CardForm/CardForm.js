import React from 'react'
import styles from './CardForm.module.scss'

export default function CardForm() {
    const Today = new Date();
    const nowYear = Today.getFullYear();

    return (
        <div className={styles.cardform}>
            <div className={`${styles.cardform__item} ${styles.cardform__item__number}`}>
                <label className={styles.cardform__label} htmlFor="cc-number">
                    Card Number
                </label>
                <input type="text" id="cc-number" className={styles.cardform__input} />
            </div>
            <div className={`${styles.cardform__item} ${styles.cardform__item__holder}`}>
                <label className={styles.cardform__label} htmlFor="cc-holder">
                    Card Holder
                </label>
                <input type="text" id="cc-holder" className={styles.cardform__input} />
            </div>
            <div className={`${styles.cardform__item} ${styles.cardform__item__expires}`}>
                <label className={styles.cardform__label} htmlFor="cc-expires">
                    Expiration Date
                </label>
                <select className={styles.cardform__input}>
                    <option value="">月份</option>
                    {
                        Array.from({ length: 5 }).map((_, idx)=>(
                                <option key={idx} value={idx+1}>{idx+1}</option>
                            )
                        )
                    }
                </select>
                <select className={styles.cardform__input}>
                    <option value="">年份</option>
                    {
                        Array.from({length: 20}).map((_, idx) => (
                            <option key={nowYear+idx} value={nowYear+idx}>{nowYear + idx}</option>
                        ))
                    }
                </select>
            </div>
            <div className={`${styles.cardform__item} ${styles.cardform__item__cvc}`}>
                <label className={styles.cardform__label} htmlFor="cc-cvc">
                    CVC
                </label>
                <input type="text" id="cc-cvc" className={styles.cardform__input} />
            </div>
            <button type='submit' className={styles.cardform__submit}>Submit</button>
        </div>
    )
}
