import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { setCookie } from "../../../helpers/cookies";
import Button from "../../global/button/Button";
import style from "./login.module.scss";

export default function Login() {
    const [user, setUser] = useContext(UserContext)
    const [form, setForm] = useState({})
    const router = useRouter()

    const onInputChange = (key, value) => {
        setForm({ ...form, [key]: value });
      };

    const onClickConnection = async () => {

        if (form.id && form.password) {
            const bag = await axios.post('http://localhost:1337/api/auth/local', {
                identifier: form.id,
                password: form.password,
              })
              .then(response => {
                  console.log('Welcome', response.data.user.prenom);
                setUser(response.data.user);
                setCookie("user", response.data.jwt, 7, "/");
                if (response.data.user.id) {
                    router.push({
                      pathname: `/utilisateur/${response.data.user.id}`,
                    });
                }
              })
              .catch(error => {
                console.log('An error occurred:', error);
              });
        }
    }
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <h2>Connexion</h2>
        <p>Nous sommes ravi de te revoir !</p>
        <div className={style.form}>
          <label>
            Identifiant
            <input
              onChange={(e) => onInputChange("id", e.target.value)}
              type="text"
            />
          </label>
          <label>
            Mot de passe
            <input
              onChange={(e) => onInputChange("password", e.target.value)}
              type="password"
            />
          </label>
            <div onClick={onClickConnection}>

          <Button title="Connexion"/>
            </div>
        </div>
      </div>
    </section>
  );
}
