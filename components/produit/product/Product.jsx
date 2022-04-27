import style from './product.module.scss'

export default function Product ({product}) {
    const {image, desc, galerie} = product.attributes
    const gallery = galerie.data ? [...galerie.data, image.data] : [image.data]
    const convertToJSON = JSON.parse(desc)
    console.log(convertToJSON);
    const { blocks } = convertToJSON
    return( 
        <section className={style.wrapper}>
            <img src={process.env.NEXT_PUBLIC_API_PRODUCT + gallery[gallery.length - 1].attributes.url}/>
                <div className={style.desc}>
                    {blocks.map((el, i) => {
                        const {data, type} = el
                        switch (type) {
                            case "header":
                                switch (data.level) {
                                    case 1 :
                                        return <h1>{data.text}</h1>
                                    case 2 :
                                        return <h2>{data.text}</h2>
                                }
                            case "paragraph":
                                return <p>{data.text}</p>
                            case "checklist":
                                return <ul>{data.items.map((el, i) => {
                                    return <li>{el.text}</li>
                                })}</ul>
                            default:
                                return <p>{data.text}</p>
                        }
                    })}
                </div>
        </section>
    )
} 