import React from 'react'
import CardForm from '../component/CardForm/CardForm';
import CreditCard from '../component/CreditCard/CreditCard';
import styles from './PayCard.module.scss'

export default function PayCard() {
    return (
        <div className={styles.paycard}>
            <CreditCard></CreditCard>
            <CardForm></CardForm>
        </div>
    )
}
