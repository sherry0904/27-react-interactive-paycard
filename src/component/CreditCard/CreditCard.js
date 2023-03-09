import { useState } from 'react'
import CreditCardBack from './CreditCardBack'
import CreditCardFront from './CreditCardFront'
import styles from './CreditCard.module.scss'
import { useSelector } from 'react-redux'


export default function CreditCard() {
    const cardSide = useSelector(state => state.cardSide);

    return (
        <>
            <div className={`${styles.creditcard} ${cardSide === "back" && styles.creditcardFlipped}`}>
                <CreditCardFront></CreditCardFront>
                <CreditCardBack></CreditCardBack>
            </div>
        </>
        
    )
}
