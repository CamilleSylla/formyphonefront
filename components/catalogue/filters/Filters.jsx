import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import style from './filters.module.scss'

export default function Filters ({filtersMenu}) {

    const router = useRouter()

    const [select, setSelect] = useState({
        filter : true,
        category : [],
        souscategory : [],
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
            onClickKey: "souscategory",
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

    useEffect(() => {
        const lists = Array.from(document.getElementsByTagName("ul"))
        const keys = Object.keys(router.query)
        const findActiveFilter = keys.map(key => {
            const find = lists.find(list => list.id == key)
            return find ? find : null
        })
        const getInput = findActiveFilter.map(el => {
            const input = Array.from(el.getElementsByTagName("input"))
            const getInputByValue = keys.map(key => {
                const setInputStatus = input.map(el => {
                    if (el.value === router.query[key]) {
                        console.log(el.checked);
                        setSelect({...select, [key] : [...select[key], el.value]})
                        el.checked = true
                    }
                })
            })
        })
    }, [])


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
                        <button>
                        {label}
                        </button>
                        <div className={style.menu}>
                            <ul id={key}>
                                { el.data.map((el, i) => {
                                    const {name} = el.attributes
                                    return (
                                        <li>
                                            <input type='checkbox' id={name} value={name} onChange={e => {
                                                setSelect({...select, [key] : [...select[key], e.target.value]})
                                                console.log(select);
                                                e.target.checked === true ? false : true
                                            }}/>
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