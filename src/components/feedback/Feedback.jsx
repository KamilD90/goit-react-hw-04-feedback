import css from './Feedback.module.css';
import { Component } from "react";

 export class Feedback extends Component{


    constructor (props) {
        super(props);
        this.state={
            good: 0,
            neutral: 0, 
            bad: 0, 
            // total: 0,
        }
    }

    handlePositive = ()=> {
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
    }
    

    handleNeutral =() => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }));
    }

    handleNegative = () => {
        this.setState( prevState => ({
            bad: prevState.bad + 1
        }));
    }

    countTotalFeedback = () => {
     const { good, neutral, bad } = this.state;
     // lub  :  const total = this.state.good + this.state.neutral + this.state.bad
     const total = good+ bad + neutral;
     this.setState({total : total});
    }

    render () {
        const {good, neutral, bad} = this.state
        const total = good + neutral + bad; 
        const positivePercentage= (good/total) *100 ; 

        return (
            <div className={css.wrapper}>
                <h2 className={css.title}>Please leave your feedback</h2>
                <div className={css.btn__box}>
                    <button type="button" onClick={this.handlePositive} className={[ css.btn, css.btn__positive ].join(' ')}>Positive</button>
                    <button type="button" onClick={this.handleNeutral} className={[css.btn, css.btn__neutral].join(' ')}>Neutral</button>
                    <button type="button" className={[css.btn, css.btn__negative].join(' ')} onClick={this.handleNegative}>Negative</button>
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
                    <span className={css.statList__item__value}>{good}</span>
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
                    <span className={css.statList__item__value}>{bad}</span>
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

}

export default Feedback;

