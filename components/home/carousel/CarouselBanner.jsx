import style from "./carousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import Button from "../../global/button/Button";

export default function CarouselBanner({ thumbs }) {
  console.log(thumbs);

  return (
    <Carousel 
    className={style.wrapper} 
    autoPlay
    stopOnHover={false}
    infiniteLoop
    showStatus={false}
    showThumbs={false}
    interval={5000}
    >
      {thumbs.map((el, i) => {
        const {title, desc, color, image} = el.attributes
        return (
          <div className={style.thumb}>
            <img
              src={process.env.NEXT_PUBLIC_API_PRODUCT + image.data.attributes.formats.large.url}
              className={style.illustration}
            />
            <div className={style.background} />
            <div className={style.background} />
            <article
              className={style.content}
              style={{ border: `4px solid ${color}` }}
            >
              <h1>{title}</h1>
              <p>{desc}</p>
              <Button background={color} title={"Consulter"} />
            </article>
          </div>
        );
      })}
    </Carousel>
  );
}
