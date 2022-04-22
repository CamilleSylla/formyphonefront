import { useContext } from 'react'
import { MenuContext } from '../../../../context/MenuContext'
import style from './categories.module.scss'

export default function Categories ({open}) {
    const [menu, setMenu] = useContext(MenuContext)

    console.log(menu);
    
    const Menu = () => {
        return (
        <div className={style.wrapper}>
            
        </div>
        )
    }

    return (
        <>
        {open === true ? (<Menu/>) : null}
        </>
    )
}