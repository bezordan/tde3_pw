import { useState } from 'react';
import { useEffect } from 'react';

import styles from './FilmeDetalhado.module.css';

function FilmeDetalhado() {

    const url = window.location.href;
    const segments = url.split('/');
    const id = segments[segments.length - 1];

    const [repositories, setRepositories] = useState([])

    useEffect(()=>{
        const buscarRepositorios = async() => {
            const response = await fetch(`http://localhost:8080/movie/${id}`)

            const dados = await response.json()
            setRepositories(dados)

        }
        buscarRepositorios()
    },[id])
 
        return (
            <div className={styles.container}>
                <form className='row g-3'>
                    <div className='col-12'>
                        <h1 className={styles.filme}>{repositories.name}</h1>
                    </div>

                    <div className='col-12' style={{display:'flex', justifyContent:'center'}}>
                        <img src={repositories.url_poster} alt='imagemFilme'></img>
                    </div>    

                    <div className={styles.sinopse}>
                        <h3 className={styles.price}>Preço do ingresso: R${repositories.price}.00</h3>
                        <p className={styles.synopsis}><b>SINOPSE:</b> {repositories.synopsis}</p>
                    </div>
                   
                </form>
               
            </div>
        );
    }


export default FilmeDetalhado;