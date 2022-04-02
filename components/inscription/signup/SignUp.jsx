import { useContext, useState } from 'react'
import Button from '../../global/button/Button'
import style from './signup.module.scss'
import axios from 'axios'
import { useRouter } from 'next/router'
import { UserContext } from '../../../context/UserContext'
import { setCookie } from '../../../helpers/cookies'

export default function SignUp () {

    const [form, setForm] = useState({})
    const [user, setUser] = useContext(UserContext)
    const router = useRouter()

    const onInputChange = (key, value) => {
        setForm({...form, [key] : value})
    }

    const onSubmitForm = async () => {
        if (
            form.nom &&
            form.prenom &&
            form.email &&
            form.password &&
            form.verifypass 
        ) {
            if (form.password === form.verifypass) {

                const send = await axios.post('http://localhost:1337/api/auth/local/register',{
                    nom: form.nom,
                    prenom: form.prenom,
                    username: form.email,
                    email: form.email,
                    password: form.password,
                })
                .then(response => {
                    setUser(response.data.user)
                    console.log('User profile', response.data.user);
                    console.log('User JWT', response.data.jwt);
                    return response
                })
                .then (res => {
                     setCookie("user", res.data.jwt, 7, "/");
                      return res
                  })
                  .then(res => {
                    if ( res.data.user.id) {
                        router.push({
                          pathname: `/utilisateur/${res.data.user.id}`,
                        })
                    }
                  })
                  .catch(error => {
                    console.log('An error occurred:', error);
                    return false
                  });
                

            } else {
                alert("not the same")
            }
        } else {
            alert("Veuillez remplir tout les champs du formulaire.")
        }
        
    }

    return(
        <section className={style.wrapper}>
            <h1>Création de compte</h1>
            <div className={style.form}>
                <label>
                Nom
                <input onChange={e => onInputChange("nom", e.target.value)} type="text" />
                </label>
                <label>
                Prénom
                <input onChange={e => onInputChange("prenom", e.target.value)} type="text" />
                </label>
                <label>
                Adresse e-mail
                <input onChange={e => onInputChange("email", e.target.value)} type="email" />
                </label>
                <label>
                Mot de passe
                <input onChange={e => onInputChange("password", e.target.value)} type="password" />
                </label>
                <label>
                Confirmez votre mot de passe
                <input onChange={e => onInputChange("verifypass", e.target.value)} type="password" />
                </label>
                <div onClick={onSubmitForm}>
                <Button title="M'inscrire" />
                </div>
            </div>
        </section>
    )
}