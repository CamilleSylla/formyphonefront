import axios from 'axios';
import { useState } from 'react';
import style from './form.module.scss'
import qs from 'qs'

export default function Form ({form}) {
    const [flag, setFlag] = useState(null)
    const [userForm, setUserForm] = useState({
        country : "",
        countryFlag : "https://images.emojiterra.com/mozilla/512px/2753.png",
        codePromo : "",
        codePromoValue : null,
        email : ""

    })

    const onCountryChange = e => {
        const findFlagUrl = form.countries.find(country => country.attributes.name == e.target.value)
        if (findFlagUrl) {
        setUserForm({...userForm, country : e.target.value, countryFlag : process.env.NEXT_PUBLIC_API_PRODUCT + findFlagUrl.attributes.flag.data.attributes.url})
        } else {

            setUserForm({...userForm, country : e.target.value, countryFlag : "https://images.emojiterra.com/mozilla/512px/2753.png"})
        }
    }

    const onPromoChange = async () => {
        const query = qs.stringify({
            filters: {
              code: {
                $eq: userForm.codePromo,
              },
            },
          }, {
            encodeValuesOnly: true,
          });

        const checkIfExist = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + `/api/code-promos?${query}`)
        .then(res => {
            if (res.data.data.length) {
                const {code, value} = res.data.data[0].attributes
                setUserForm({...userForm, codePromoValue : value})
                console.log(userForm);
            }
        })
        .catch(err => err)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style. box}>
                    <h3>Pays de livraison :</h3>
                    <div className={style.contry_wrapper}>
                    <div className={style.flag} style={{backgroundImage: `url(${userForm.countryFlag})`}}/>
                    <select onChange={e => onCountryChange(e)}>
                        <option></option>
                        {form.countries.map((el, i) => {
                            const {name, flag} = el.attributes
                            return (
                                <option data-flag={flag.data.attributes.url} key={name + i}>
                                    {name}
                                </option>
                            )
                        })}
                    </select>

                    </div>
                    
                </div>
            </div>
            <div className={style.container}>
            <div className={style. box}>
                <h3>Code Promo</h3>
                <div>
                <input type="text" onChange={e => setUserForm({...userForm, codePromo : e.target.value})}/>
                        <button onClick={onPromoChange}>Valider</button>
                </div>
            </div>
            </div>
            <div className={style.container}>
                adrersse email
            </div>
            <div className={style.container}>
                adrersse de livraison
            </div>
            <div className={style.container}>
                option de livraison
            </div>
            <div className={style.container}>
                option de paiement
            </div>

            <button>Commander</button>
        </div>
    )
}