import Link from 'next/link'
import { useState } from 'react'
import style from './filters.module.scss'

export default function Filters ({filtersMenu}) {

    const [activeMenu, setActiveMenu] = useState({
        category : [],
        souscategories : [],
        marques : [],
        modeles : []
    })
    const [select, setSelect] = useState({
        filter : true,
        category : [],
        souscategories : [],
        marques : [],
        modeles : []
    })

    const menuSplitByLabel = [
        {
            label : "Catégories",
            onClickKey: "category",
            data : filtersMenu.categories
        },
        {
            label : "Sous-catégories",
            onClickKey: "souscategories",
            data : filtersMenu.souscategorie
        },
        {
            label : "Marques",
            onClickKey: "marques",
            data : filtersMenu.marques
        },
        {
            label : "Produits",
            onClickKey: "modeles",
            data : filtersMenu.produits
        },
    ]

    // const onValidateQuery = () => {
    //     const keys = Object.keys(select)
    //     const package = keys.map( key => {
    //         if (select[key].length) {
    //             console.log(key);
    //         }
    //     })
    //     // const addFiltersUrl = keys.map(key => URL += `&filters[$and][0][${key}][name][$eq]=${filters[key]}`)
    // }

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
                                            <input type='checkbox' onChange={e => {
                                                setSelect({...select, [key] : [...select[key], e.target.value]})
                                            }} value={name}/>
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
            {/* <button onClick={onValidateQuery}>Valider</button> */}
            <Link href={{ pathname: '/catalogue', query: select }}>
            <button >Valider</button>
            </Link>
        </div>
    )
}