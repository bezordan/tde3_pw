import React from 'react';
import { useState } from 'react';
import styles from './CadastroFilme.module.css';

function CadastroFilme(){

    const [filme, setFilme] = useState({
        name: '',
        price: '',
        synopsis: '',
        url_poster:'',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilme({ ...filme, [name]: value });
      };      

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch('http://localhost:8080/movie', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(filme),
          });
    
          if (response.ok) {
            window.location.reload();     

          } else {
            console.log("Erro")           
          }
        } catch (error) {
          console.error('Erro ao enviar os dados:', error);
        }
      };

    return(
        <div className={styles.container}>
            <div>
                <h1 className={styles.nomeFilme}>Cadastro de Filme</h1>
            </div>

            <form className='border' style={{padding:'20px'}} onSubmit={handleSubmit}>

                <div>
                    <label>Nome:</label>
                    <input
                        type='text'
                        className='form-control'
                        name='name'
                        value={filme.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Preço:</label>
                    <input
                        type='text'
                        className='form-control'
                        name='price'
                        value={filme.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{paddingTop:'15px'}}>
                    <label>Sinopse:</label>
                    <input
                        type='text'
                        className='form-control'
                        name='synopsis'
                        value={filme.synopsis}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{paddingTop:'15px'}}>
                    <label>Pôster do filme:</label>
                    <input
                        type='text'
                        className='form-control'
                        name='url_poster'
                        value={filme.url_poster}
                        onChange={handleChange}
                        required
                    />
                </div>            

                <div className={styles.submit}>
                    <button type="submit" className="btn btn-success">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default CadastroFilme;