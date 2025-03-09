import { useEffect, useState } from 'react'
import logo from '../../assets/icons/Header logo.svg'
import ThemeIcon from '../../assets/icons/invert_colors_black_24dp 2 (1).svg'

import s from './Header.module.scss'
import Select from 'react-select'

export const Header = () => {

    const [theme, setTheme] = useState('light')

    const options = [
        { value: 'city-1', label: 'Москва' },
        { value: 'city-2', label: 'Санкт-Петербург' },
        { value: 'city-3', label: 'Казань' }
    ]

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme === 'dark' ? 'rgba(79, 79, 79, 1)' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '34px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),

        singleValue: (styles: any) => ({
            ...styles,
            color: theme === 'dark' ? '#fff' : '#000',
        })
    }

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement
        
        const components = [
            'body-background',
            'components-background', 
            'card-background', 
            'card-shadow', 
            'text-color'
        ]
        

        components.forEach((compoment) => {
            root.style.setProperty(
                `--${compoment}-default`, 
                `var(--${compoment}-${theme})`)
        })
        
        
    }, [theme])
    

    return (
        <header className= {s.header}>
            <div className={s.container}>
                <div className={s.wrapper}>

                    <div className={s.wrapper__left}>
                        <img className={s.logo} src={logo} alt="logo" />
                        <h2 className={s.title}>REACT WEATHER</h2>
                    </div>
                    
                    <div className={s.wrapper__right}>
                        <div className={s.changeTheme} onClick={changeTheme}>
                            <img  src={ThemeIcon} alt="change-theme" />
                        </div>
                        <Select 
                            defaultValue={options[0]} 
                            styles={colorStyles} 
                            className={s.select} 
                            options={options} 
                        />
                    </div>

                </div>
                
            </div>
        </header>
    )
}