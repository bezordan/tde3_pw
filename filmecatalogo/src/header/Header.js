import styles from './Header.module.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <nav className={styles.navbar}>
            <h1><i className="fa-solid fa-video" style={{paddingLeft:'20px'}}></i></h1>
            <div className={styles.destinos}>
                    <ul className={styles.list}>                       
                        <li className={styles.item}>
                        <Link to="/">Filmes</Link>
                        </li>
                        <li className={styles.item}>
                        <Link to="/filme">Cadastro</Link>
                        </li>
                    </ul>
        </div>

        </nav>
    )
}

export default Header