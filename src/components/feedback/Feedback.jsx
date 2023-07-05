import css from './Feedback.module.css';
import { useState , useEffect} from "react";

export const Feedback = () => {
    const [positive, setPositive] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [negative, setNegative]= useState(0);
    const [total, setTotal]= useState (0);
    const [positivePercentage, setPositivePercentage]= useState(0);

const handlePositive= () => setPositive(positive+1);

const handleNeutral= () => setNeutral(neutral+1);

const handleNegative=()=> setNegative(negative+1);



useEffect(()=> {
   setTotal( positive + neutral + negative);
   setPositivePercentage((positive/total)*100);
}, [positive, neutral, negative, total]);


return (
    <div className={css.wrapper}>
                <h2 className={css.title}>Please leave your feedback</h2>
                <div className={css.btn__box}>
                    <button type="button" onClick={handlePositive} className={[ css.btn, css.btn__positive ].join(' ')}>Positive</button>
                    <button type="button" onClick={handleNeutral} className={[css.btn, css.btn__neutral].join(' ')}>Neutral</button>
                    <button type="button" onClick={handleNegative} className={[css.btn, css.btn__negative].join(' ')} >Negative</button>
                </div>
             
                <h3 className={css.subTitle}>Statistic</h3>
                {total === 0 ? (
                <h5 className={css.noFeedback}>No Feedback</h5>
                ) : (
                <ul className={css.statList}>
                    <li className={css.statList_item}>
                    <span className={css.statList__item__name}>
                        Positive:
                    </span>
                    <span className={css.statList__item__value}>{positive}</span>
                    </li>
                    <li className={css.statList_item}>
                    <span className={css.statList__item__name}>
                        Neutral:
                    </span>
                    <span className={css.statList__item__value}>{neutral}</span>
                    </li>
                    <li className={css.statList_item}>
                    <span className={css.statList__item__name}>
                        Negative:
                    </span>
                    <span className={css.statList__item__value}>{negative}</span>
                    </li>
                    <li className={css.statList_item}>
                    <span className={css.statList__item__name}>
                        Total:
                    </span>
                    <span className={css.statList__item__value}>{total}</span>
                    </li>
                    <li className={css.statList_item}>
                    <span className={css.statList__item__name}>
                        Positive Feedback:
                    </span>
                    <span className={css.statList__item__value}>{positivePercentage.toFixed(1)}%</span>
                    </li>
                </ul>
                )}

      </div>
        );

}

export default Feedback;