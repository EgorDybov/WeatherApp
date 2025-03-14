
import s from './Days.module.scss'

export const Tabs = () => {

    interface ITabs {
        value: string
    }

    const tabs: ITabs[] = [
        {
            value: 'На неделю'
        },
        {
            value: 'На 10 дней'
        },
        {
            value: 'На месяц'
        },
    ]

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map((tab)=> {
                    return <div className={s.tab} key={tab.value}>{tab.value}</div>
                })}
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    )
}