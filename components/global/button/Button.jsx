import { useEffect, useRef } from 'react'
import style from './button.module.scss'

export default function Button ({title, background}) {

    const btnRef = useRef()
    
    useEffect(() => {
        // console.log(btnRef.current);
        if (background) {
            btnRef.current.style.background = background
            btnRef.current.style.color = "var(--light-dark)"
        } 
    }, [])

    return <button ref={btnRef} className={style.primary__btn}>{title}</button>
}