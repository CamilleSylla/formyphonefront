import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./filters.module.scss";

export default function Filters({ filtersMenu }) {
  const router = useRouter();

  const [select, setSelect] = useState({
    category: [],
    souscategory: [],
    marques: [],
    modeles: [],
  });

  const menuSplitByLabel = [
    {
      label: "Catégories",
      onClickKey: "category",
      data: filtersMenu.categories,
    },
    {
      label: "Sous-catégories",
      onClickKey: "souscategory",
      data: filtersMenu.souscategorie,
    },
    {
      label: "Marques",
      onClickKey: "marques",
      data: filtersMenu.marques,
    },
    {
      label: "Produits",
      onClickKey: "modeles",
      data: filtersMenu.produits,
    },
  ];

  useEffect(() => {
    const inputs = Array.from(document.getElementsByTagName("input"));
    const keys = Object.keys(router.query);
    const checkedByRoute = keys.filter((key) => {
      const filterInputByActiveCat = inputs.filter(
        (input) => input.dataset.cat == key
      );
      console.log(filterInputByActiveCat);
      const findActiveInputs = filterInputByActiveCat.filter(
        (input) => input.value == router.query[key]
      );
      const checkActiveInputs = findActiveInputs.map(
        (input) => (input.checked = true)
      );
    });
  }, [router.query]);

  const getCheckedInputs = () => {
    const inputs = Array.from(document.getElementsByTagName("input"));
    const query = {};
    const checkedItems = inputs.filter((input) => {
      if (input.checked === true) {
        console.log(input.value);
        if (Array.isArray(query[input.dataset.cat])) {
          query[input.dataset.cat].push(input.value);
        } else {
          query[input.dataset.cat] = [input.value];
        }
        return input.value;
      }
    });
    router.push({ pathname: "/catalogue", query: query });
  };

  return (
    <div className={style.wrapper}>
      <h1>Filtres</h1>
      <ul>
        {menuSplitByLabel.map((el, i) => {
          const { label, data, onClickKey } = el;
          const key = onClickKey;

          return (
            <li key={label + i}>
              <button>{label}</button>
              <div className={style.menu}>
                <ul id={key}>
                  {el.data.map((el, i) => {
                    const { name } = el.attributes;
                    return (
                      <li>
                        <input
                          type="checkbox"
                          data-cat={key}
                          id={name}
                          value={name}
                        />
                        <label>{name}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
      <button onClick={getCheckedInputs}>Valider</button>
    </div>
  );
}
