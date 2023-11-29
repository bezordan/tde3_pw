import styles from './Footer.module.css'


function Footer(){
    return(
    <div className={styles.footer}>
        <footer>          
            <p className={styles.copy_right}><span>Catálogo de Filmes</span></p>
        </footer>
      </div>  

    )
}

export default Footer