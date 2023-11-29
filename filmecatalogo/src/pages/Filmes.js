import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';

import styles from './Filmes.module.css';

function Filmes() {

    const [repositories, setRepositories] = useState([])

    useEffect(()=>{
        const buscarRepositorios = async() => {
            const response = await fetch('http://localhost:8080/movie')

            const dados = await response.json()
            setRepositories(dados)
        }
        buscarRepositorios()
    }, [])    

        return (
            <section>

                <h1 className='text-center' style={{color:'black'}}>Filmes</h1>          

                    {
                        repositories.length > 0 ? (
                            <section className={styles.cards}>
                                {
                                    repositories.map((repo) =>(
                                        <Card
                                            key={repo.idMovie} 
                                            name={repo.name} 
                                            price={repo.price}
                                            synopsis={repo.synopsis}
                                            url_poster={repo.url_poster}                                           
                                            identificador={repo.idMovie}
                                        />
                                    ))
                                }
                            </section>
                        ) : (
                            <p></p>
                        )
                    }
            </section>
           
        );
    }


export default Filmes;