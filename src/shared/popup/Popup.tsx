import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { IItems } from '../../pages/home/components/thisDayInfo/ThisDayInfo'
import { ThisDayItem } from '../../pages/home/components/thisDayInfo/ThisDayItem'

import s from './Popup.module.scss'

export const Popup = () => {

    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: '20° - ощущается как 17°',
    },
    {
        icon_id: 'pressure',
        name: 'Давление ',
        value: '765 мм ртутного столба - нормальное',
    },
    {
        icon_id: 'precipitation',
        name: 'Осадки',
        value: 'Без осадков',
    },
    {
        icon_id: 'wind',
        name: 'Ветер ',
        value: '3 м/с юго-запад - легкий ветер',
    }]

    return (
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.popup__left}>
                    <div className={s.this__temp}>18°</div>
                    <div className={s.this__day}>Среда</div>
                    <div className={s.this__weather__img}>
                        <GlobalSvgSelector id="sun"/>
                    </div>
                    <div className={s.this__time}>Время:<span> 01:54</span></div>
                    <div className={s.this__city}>Город:<span> Москва</span></div>
                </div>
                <div className={s.this__day__info__items}>
                    {items.map((item: IItems) => {
                        return <ThisDayItem key={item.icon_id} item={item} />
                    })}
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id="close"/>
                </div>
            </div>
        </>
    )
}