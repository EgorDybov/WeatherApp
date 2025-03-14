
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { IDay } from './Days'
import s from './Days.module.scss'

interface ICard {
    day: IDay
}

export const Card = ({day}: ICard) => {
    

    return (
        <div className={s.card}>
            <div className={s.day}>{day.day}</div>
            <div className={s.day__info}>{day.day_info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={day.icon_id}/>
            </div>
            <div className={s.temp__day}>{day.temp_day}</div>
            <div className={s.temp__night}>{day.temp_night}</div>
            <div className={s.info}>{day.info}</div>
        </div>
    )
}