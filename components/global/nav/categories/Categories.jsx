import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "../../../../context/MenuContext";
import style from "./categories.module.scss";

export default function Categories({ open, setOpen }) {
  const [menu, setMenu] = useContext(MenuContext);
  const [subCat, setSubCat] = useState([]);
  const subRef = useRef();
  const router = useRouter()

  useEffect(() => {
    if (open === true && subRef.current) {
      subRef.current.addEventListener("mouseleave", () => {
        setOpen(false);
      });
    }
    const categories =  Array.from(document.getElementsByClassName('categories'))

        const hover = categories.map(el => {
            el.addEventListener('mouseenter', e => {
                const findParentCat = menu.find(cat => cat.id == e.target.dataset.subcat)
                if (findParentCat) {
                    console.log(findParentCat.attributes.souscategories.data);
                    setSubCat(findParentCat.attributes.souscategories.data)
                }
            })
        })
    
  }, [open, subCat, router]);

  const Menu = () => {
    return (
      <div ref={subRef} className={style.wrapper}>
        <div className={style.container}>
          <ul>
            {menu.map((el, i) => {
                const {name, souscategories} = el.attributes
              return <li data-subcat={el.id} className="categories">{name}</li>;
            })}
          </ul>
          <ul>
          {subCat.map((el, i) => {
                const {name} = el.attributes
              return <li data-subcat={el.id} className="categories">{name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  };

  return <>{open === true ? <Menu /> : null}</>;
}
