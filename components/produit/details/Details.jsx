import style from './details.module.scss'
import ReactStars from "react-rating-stars-component";
import React from 'react'


export default function Details ({details}) {

    const {title, price, category} = details
    const {rate, count} = details.rating
    const slugs = ["Coque", "Iphone 13", "6'4 pouces"]
    const slugsJoin = slugs.join(', ')

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    return (
        <section className={style.wrapper}>
            <h1>{title}</h1>
            <h2> {category} </h2>
            <h3> {slugsJoin} </h3>
            <div className={style.rating}>
            <ReactStars
            count={5}
            value={rate}
            isHalf={true}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'}
            />
            <p>{count} note{count > 1 ? "s" : null}</p>
            </div>
            <p className={style.price}><strong><span>{price}€</span></strong></p>
        </section>
    )
}