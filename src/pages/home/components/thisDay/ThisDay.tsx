
import s from './ThisDay.module.scss'
import sun from '../../../../assets/img/sun.svg'

export const ThisDay = () => {
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block__wrapper}>
                    <div className={s.this__temp}>20°</div>
                    <div className={s.this__weekday}>Сегодня</div>
                </div>
                <img src={sun} alt="sun" />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>Время: 
                    <span> 21:54</span>
                </div>
                <div className={s.this__city}>Город:
                    <span> Москва</span>
                </div>
            </div>
        </div>
    )
}