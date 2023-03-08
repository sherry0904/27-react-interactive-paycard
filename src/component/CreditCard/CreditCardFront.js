import React from 'react'
import styles from './CreditCard.module.scss'

export default function CreditCardFront() {
    return (
        <div className={styles.creditcard__front}>
            <div className={styles.creditcard__bg}>
                <img src="https://i.imgur.com/5XHCjPT.jpg" alt="" />
            </div>
            <div className='creditcard__focus'></div>
            <div className={styles.creditcard__wrapper}>
                <div className={styles.creditcard__header}>
                    <div className='creditcard__chip'>
                        <img src="https://i.imgur.com/7xhP2ZA.png" alt="" />
                    </div>
                    <div className='creditcard__visa'>
                        <img src="https://i.imgur.com/lokBLnp.png" alt="" />
                    </div>
                </div>
                <div className={styles.creditcard__body}>
                    <div className={styles.creditcard__number}>
                        <span>#</span>
                        <span>#</span>
                        <span>#</span>
                        <span>#</span>
                        <span className='creditcard__number__space'></span>
                        <span>#</span>
                        <span>#</span>
                        <span>#</span>
                        <span>#</span>
                        <span className='creditcard__number__space'></span>
                        <span>#</span>
                        <span>#</span>
                        <span>#</span>
                        <span>#</span>
                        <span className='creditcard__number__space'></span>
                        <span>#</span>
                        <span>#</span>
                        <span>#</span>
                        <span>#</span>
                    </div>
                </div>
                <div className={styles.creditcard__footer}>
                    <div className={styles.creditcard__holder}>
                        <div className={styles.creditcard__label}>
                            Card Holder
                        </div>
                        <div className={styles.creditcard__input}>
                            Full Name
                        </div>
                    </div>
                    <div className={styles.creditcard__expires}>
                        <div className={styles.creditcard__label}>
                            Expires
                        </div>
                        <div className={styles.creditcard__input}>
                            <span>00</span>/<span>00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
