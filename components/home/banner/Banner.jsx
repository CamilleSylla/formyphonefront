import Button from '../../global/button/Button'
import style from './banner.module.scss'
import Link from 'next/link'

export default function Banner () {

    return (
        <section className='wrapping'>
            <div className={style.wrapper}>
            <div className={style.content}>
                <h1>Les protections qu'il vous faut !</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tellus, semper a sagittis iaculis, laoreet ut leo. Duis non sodales dui, ut facilisis risus.</p>
                <Link href="/catalogue">
                    <a>

                <Button title={"Catalogue"} />
                    </a>
                </Link>
            </div>
            <img src="https://images.unsplash.com/photo-1542219550-76864b1bc385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"/>
            </div>
        </section>
    )
}