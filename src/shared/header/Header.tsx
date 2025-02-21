import logo from '../../assets/icons/Header logo.svg'
import changeTheme from '../../assets/icons/invert_colors_black_24dp 2 (1).svg'

import s from './Header.module.scss'
import Select from 'react-select'

export const Header = () => {

    const options = [
        { value: 'city-1', label: 'Москва' },
        { value: 'city-2', label: 'Санкт-Петербург' },
        { value: 'city-3', label: 'Казань' }
    ]

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: '#4793FF33',
            width: '194px',
            height: '34px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        })
    }
    

    return (
        <header className= {s.header}>
            <div className={s.container}>
                <div className={s.wrapper}>

                    <div className={s.wrapper__left}>
                        <img className={s.logo} src={logo} alt="logo" />
                        <h2 className={s.title}>REACT WEATHER</h2>
                    </div>
                    
                    <div className={s.wrapper__right}>
                        <img src={changeTheme} alt="change-theme" />
                        <Select defaultValue={options[0]} styles={colorStyles} className={s.select} options={options} />
                    </div>

                </div>
                
            </div>
        </header>
    )
}