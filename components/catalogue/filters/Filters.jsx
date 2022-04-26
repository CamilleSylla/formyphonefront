import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import style from './filters.module.scss'

export default function Filters ({filtersMenu}) {

    const router = useRouter()

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

                                    function setCheckboxStatus () {
                                        const keys = Object.keys(router.query)
                                        
                                        const verify = keys.filter(key => { if (router.query[key] == name) return name; })
                                        if (verify) return "checked"
                                    }
                                    return (
                                        <li>
                                            <input type='checkbox' checked={setCheckboxStatus()} id={name} onChange={e => {
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