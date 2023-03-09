import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from './CreditCard.module.scss';

export default function CreditCardFront() {

    const cardNumber = useSelector(state => state.cardNumber);
    const cardHolder = useSelector(state => state.cardHolder);
    const cardExpirationMonth = useSelector(state => state.cardExpirationMonth);
    const cardExpirationYear = useSelector(state => state.cardExpirationYear);
    const focusSection = useSelector(state => state.focusSection);

    const [focusSectionStyle, setFocusSectionStyle] = useState({
        width: "0",
        height: "0",
        transform: "null" 
    })
    const ccNumberRef = useRef();
    const ccNameRef = useRef();
    const ccExpRef = useRef();
    const ccCvcRef = useRef();

    const nodeRef = useRef();

    let cardNumberRaw = [];

    useEffect(()=>{
        if(focusSection === 'cc-number') {
            setFocusSectionStyle({
                width: `${ccNumberRef.current.offsetWidth}px`,
                height: `${ccNumberRef.current.offsetHeight}px`,
                transform: `translate(${ccNumberRef.current.offsetLeft}px,${ccNumberRef.current.offsetTop}px)` 
            });

        }else if(focusSection === 'cc-holder') {
            setFocusSectionStyle({
                width: `${ccNameRef.current.offsetWidth}px`,
                height: `${ccNameRef.current.offsetHeight}px`,
                transform: `translate(${ccNameRef.current.offsetLeft}px,${ccNameRef.current.offsetTop}px)` 
            });
        }else if(focusSection === 'cc-expiration') {
            setFocusSectionStyle({
                width: `${ccExpRef.current.offsetWidth}px`,
                height: `${ccExpRef.current.offsetHeight}px`,
                transform: `translate(${ccExpRef.current.offsetLeft}px,${ccExpRef.current.offsetTop}px)` 
            });

        }else {
            setFocusSectionStyle({
                width: "0",
                height: "0",
                transform: "null" 
            })
        }

        console.log(focusSectionStyle)

    },[focusSection]);


    Array.from({length: 19}).forEach((_, idx) => {
        
        if([4,9,14].includes(idx)) {
            cardNumberRaw.push(
                <span className='creditcard__number__space' key={`space-${idx}`}></span>
            )
        }else {
            cardNumberRaw.push(
                <SwitchTransition key={`cardNumber-${idx}`}>
                    <CSSTransition
                        key={idx<cardNumber.length?cardNumber[idx]:"#"}
                        nodeRef={nodeRef}
                        timeout={500}
                        className="fade">
                        <span ref={nodeRef} key={`cardNumer-${idx}`} className='creditcard__number__num'>{idx < cardNumber.length? cardNumber[idx]: "#"}</span>
                    </CSSTransition>
                </SwitchTransition>
            )
        }
    })

    

    return (
        <div className={styles.creditcard__front}>
            <div className={styles.creditcard__bg}>
                <img src="https://i.imgur.com/5XHCjPT.jpg" alt="" />
            </div>
            <div className={styles.creditcard__focus} style={focusSectionStyle}></div>
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
                    <div className={styles.creditcard__number} ref={ccNumberRef}>
                        {cardNumberRaw}
                    </div>
                </div>
                <div className={styles.creditcard__footer}>
                    <div className={styles.creditcard__holder} ref={ccNameRef}>
                        <div className={styles.creditcard__label}>
                            Card Holder
                        </div>
                        <div className={styles.creditcard__input}>
                            {cardHolder || "Full Name"}
                        </div>
                    </div>
                    <div className={styles.creditcard__expires} ref={ccExpRef}>
                        <div className={styles.creditcard__label}>
                            Expires
                        </div>
                        <div className={styles.creditcard__input}>
                            {(cardExpirationMonth<10 && cardExpirationMonth !== ""?0+cardExpirationMonth:cardExpirationMonth) || "MM"}/{cardExpirationYear || "YY"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
