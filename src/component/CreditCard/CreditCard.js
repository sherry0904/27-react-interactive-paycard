import { useState } from 'react'
import CreditCardBack from './CreditCardBack'
import CreditCardFront from './CreditCardFront'
import styles from './CreditCard.module.scss'


export default function CreditCard() {
    const [isFlipped, setIsFlipped] = useState(false);

    const flip = () =>{
        console.log('flip')
        setIsFlipped(!isFlipped);
    } 

    return (
        <>
            <div className={`${styles.creditcard} ${isFlipped && styles.creditcardFlipped}`}>
                <CreditCardFront></CreditCardFront>
                <CreditCardBack></CreditCardBack>
            </div>
        </>
        
    )
}
