


import { Card } from './Card'
import s from './Days.module.scss'
import { Tabs } from './Tab'

export interface IDay {
    day: string
    day_info: string
    icon_id: string
    temp_day: string
    temp_night: string
    info: string
}

export const Days = () => {
    const days: IDay[] = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'small_rain',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
]

    return (
        <>
        <Tabs/>
        <div className={s.days}>
            {days.map((day: IDay) => {
                return <Card day={day}/>
            })}
        </div>
        </>
    )
}