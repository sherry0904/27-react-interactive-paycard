import { useRef, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from './CardForm.module.scss'


export default function CardForm() {
    const dispatch = useDispatch();

    const cardNumber = useSelector(state => state.cardNumber);
    const cardCVC = useSelector(state => state.cardCVC);

    const Today = new Date();
    const nowYear = Today.getFullYear();

    const cardNumberRef = useRef();
    const cardHolderRef = useRef();
    const cardExpirationMonthRef = useRef();
    const cardExpirationYearrRef = useRef();
    const cardCVCRef = useRef();

    const handlerUpdateCardNumber = useCallback(
        (e)=>{
            // === regex ===
            // /^/ 表示patter必須在字串的開頭
            // /$/ 表示patter必須在字串的結尾
            // /./ 比對換防符號外的任一個字元
            // /\d/ 比對一個數字，相等於/[0-9]/
            // /\w/ 比對一個英文、數字或底線，相等於/[A-Za-z0-9_]/
            // /\s/ 比對一個空格(ex: space, tab, 換行, ...)
            // 使用 {5} 表示連續出現 5 次
            // 使用 {0,4} 表示連續出現 0~4 次
            // 使用 /?/ 表示出現 0 或 1 次, 等同於 {0,1}
    
            const reg = /^(\d{0,4}\s?){0,4}$/;
            
            const newCardNumber = e.target.value.replace(/\s/g, "");
            // console.log("newCardNumber: "+newCardNumber)
            let currentCardNumber = "";
    
            for(let i=0; i<newCardNumber.length; i++ ) {
                currentCardNumber += newCardNumber.charAt(i);
                if([3,7,11].includes(i)) {
                    currentCardNumber += " ";
                }
            }
            currentCardNumber = currentCardNumber.trim();
            // console.log("currentCardNumber: "+ currentCardNumber)
    
            if(newCardNumber === "" || reg.test(newCardNumber)) {
                dispatch({type: "updateCardNumber", payload: currentCardNumber});
            }
    
        }, [dispatch]
    );

    const handlerUpdateCardHolder = useCallback(
        (e)=>{
            const newCardHoler = e.target.value;
            dispatch({type: "updateCardHolder", payload: newCardHoler});
        }, [dispatch]
    );

    const handlerUpdateCardExpirationMonth = useCallback(
        (e)=>{
            let newMonth = e.target.value;
            dispatch({
                type: 'updateCardExpirationMonth',
                payload: newMonth
            });
        }, [dispatch]
    );

    const handlerUpdateCardExpirationYear = useCallback(
        (e)=>{
            let newYear = e.target.value;
            dispatch({
                type: 'updateCardExpirationYear',
                payload: newYear
            });
        }, [dispatch]
    );

    const handlerUpdateCardCVC = useCallback(
        (e)=>{
            const reg = /^\d+$/
            let newCVC = e.target.value;
            if(newCVC === "" || reg.test(newCVC))
            dispatch({
                type: 'updateCardCVC',
                payload: newCVC
            });
        }, [dispatch]
    );

    const handlerCardSide = useCallback(
        (side)=>{
            // console.log(side)
            dispatch({
                type: "changeSide",
                payload: side
            });
        }, [dispatch]
    );

    const handlerCardSection = (targetSection) => {
        dispatch({
            type: "changeSection",
            payload: targetSection
        });
    }

    const handlerInputBlur = () => {
        handlerCardSection('');
    }

    return (
        <div className={styles.cardform}>
            <div className={`${styles.cardform__item} ${styles.cardform__item__number}`}>
                <label className={styles.cardform__label} htmlFor="cc-number">
                    Card Number
                </label>
                <input 
                    type="text" 
                    id="cc-number"
                    autoComplete="off"
                    value={cardNumber}
                    maxLength={19}
                    className={styles.cardform__input} ref={cardNumberRef} 
                    onChange={handlerUpdateCardNumber}
                    onFocus={()=>{
                        handlerCardSide('front')
                        handlerCardSection('cc-number');
                    }}
                    onBlur={handlerInputBlur}
                    />
            </div>
            <div className={`${styles.cardform__item} ${styles.cardform__item__holder}`}>
                <label className={styles.cardform__label} htmlFor="cc-holder">
                    Card Holder
                </label>
                <input 
                    type="text" 
                    id="cc-holder" 
                    autoComplete="off"
                    maxLength={20}
                    className={styles.cardform__input} 
                    ref={cardHolderRef} 
                    onChange={handlerUpdateCardHolder}
                    onFocus={()=>{
                        handlerCardSide('front')
                        handlerCardSection('cc-holder');
                    }}
                    onBlur={handlerInputBlur}/>
            </div>
            <div className={`${styles.cardform__item} ${styles.cardform__item__expires}`}>
                <label className={styles.cardform__label} htmlFor="cc-expires">
                    Expiration Date
                </label>
                <select 
                    className={styles.cardform__input} 
                    id="cc-expirationMonth"
                    ref={cardExpirationMonthRef} 
                    onChange={handlerUpdateCardExpirationMonth}
                    onFocus={()=>{
                        handlerCardSide('front');
                        handlerCardSection('cc-expiration');
                    }}>
                    <option value="">月份</option>
                    {
                        Array.from({ length: 12 }).map((_, idx)=>(
                                <option key={idx} value={idx+1}>{idx+1}</option>
                            )
                        )
                    }
                </select>
                <select 
                    className={styles.cardform__input} 
                    id="cc-expirationYear"
                    ref={cardExpirationYearrRef} 
                    onChange={handlerUpdateCardExpirationYear}
                    onFocus={()=>{
                        handlerCardSide('front');
                        handlerCardSection('cc-expiration');
                    }}
                    onBlur={handlerInputBlur}>
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
                <input 
                    type="text" 
                    id="cc-cvc" 
                    maxLength={3}
                    value={cardCVC}
                    className={styles.cardform__input} 
                    ref={cardCVCRef}
                    onChange={handlerUpdateCardCVC}
                    onFocus={()=>{
                        handlerCardSide('back');
                        handlerCardSection('cc-cvc');
                    }} 
                    onBlur={handlerInputBlur}/>
            </div>
            <button type='submit' className={styles.cardform__submit}>Submit</button>
        </div>
    )
}
