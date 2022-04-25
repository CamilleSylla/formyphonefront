import { useState } from 'react'
import style from './filters.module.scss'

export default function Filters ({filtersMenu}) {

    const [activeMenu, setActiveMenu] = useState({
        cat : [],
        souscat : [],
        brand : [],
        product : []
    })
    const [select, setSelect] = useState([])

    const menuSplitByLabel = [
        {
            label : "Catégories",
            onClickKey: "cat",
            data : filtersMenu.categories
        },
        {
            label : "Sous-catégories",
            onClickKey: "souscat",
            data : filtersMenu.souscategorie
        },
        {
            label : "Marques",
            onClickKey: "brand",
            data : filtersMenu.marques
        },
        {
            label : "Produits",
            onClickKey: "product",
            data : filtersMenu.produits
        },
    ]

    return (
        <div className={style.wrapper}>
            <h1>
                Filtres
            </h1>
            <ul>
                {menuSplitByLabel.map((el, i) => {
                    const { label, data, onClickKey } = el
                    const key = onClickKey
                    return (
                    <li key={label+i}>
                        <button onClick={() => {
                            if (activeMenu[key].length > 0 ) {
                                setActiveMenu({...activeMenu, [key] : []})
                            } else {
                                setActiveMenu({...activeMenu, [key] : data})
                            }
                        }}>
                        {label}
                        <span>{activeMenu[key].length === 0 ? "+": "-"} </span>
                        </button>
                        <div className={style.menu}>
                            <ul>
                                { activeMenu[key].map((el, i) => {
                                    const {name} = el.attributes
                                    return (
                                        <li>
                                            <input type='checkbox' value={name}/>
                                            <label>{name}</label>
                                        </li>
                                    )
                                }) }
                            </ul>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}