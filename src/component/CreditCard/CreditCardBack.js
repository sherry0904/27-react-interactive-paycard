import React from 'react'
import styles from './CreditCard.module.scss'
import { useSelector } from 'react-redux'

export default function CreditCardBack() {

    const cardCVC = useSelector(state => state.cardCVC);

    return (
        <div className={styles.creditcard__back}>
            <div className={styles.creditcard__bg}>
                <img src="https://i.imgur.com/5XHCjPT.jpg" alt="" />
            </div>
            <div className='creditcard__focus'></div>
            <div className={styles.creditcard__header}>
                <div className={styles.creditcard__line}></div>
            </div>
            <div className={styles.creditcard__body}>
                <div className={styles.creditcard__cvc}>
                    <div className={styles.creditcard__cvc__label}>cvc</div>
                    <div className={styles.creditcard__cvc__input}>{cardCVC}</div>
                </div>
            </div>
            <div className={styles.creditcard__footer}>
                <div className={styles.creditcard__visa}>
                    <img src="https://i.imgur.com/lokBLnp.png" alt="" />
                </div>
            </div>
        </div>
    )
}
