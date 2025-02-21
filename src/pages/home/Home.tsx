import { Days } from './components/days/Days'
import { ThisDay } from './components/thisDay/ThisDay'
import { ThisDayInfo } from './components/thisDayInfo/ThisDayInfo'
import s from './Home.module.scss'


export const Home = () => {
    return (
        <section className={s.home}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <ThisDay/>
                    <ThisDayInfo/>
                </div>
                <Days/>
            </div>
        </section>
    )
}