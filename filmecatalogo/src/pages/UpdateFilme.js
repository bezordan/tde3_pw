import React, { Component } from 'react';
import styles from './UpdateFilme.module.css';

class UpdateFilme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuObjeto: {
        name: '',
        price: '',
        synopsis: '',
        url_poster: ''
      }
    };
  }

  componentDidMount() {
    const url = window.location.href;
    const segments = url.split('/');
    const id = segments[segments.length - 1];

    this.buscarRepositorios(id);
  }

  async buscarRepositorios(id) {
    try {
      const response = await fetch(`http://localhost:8080/movie/${id}`);
      const dados = await response.json();

      this.setState({
          meuObjeto: {
            name: dados.name,
            price: dados.price,
            synopsis: dados.synopsis,
            url_poster: dados.url_poster
          },
      });
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      meuObjeto: {
        ...prevState.meuObjeto,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
  
    const url = window.location.href;
    const segments = url.split('/');
    const id = segments[segments.length - 1];
  
    const meuObjetoJSON = JSON.stringify(this.state.meuObjeto);

    try {
        const response = await fetch(`http://localhost:8080/movie/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: meuObjetoJSON,
        });
  
        if (response.ok) {
          window.history.back();      
        } else {
          console.log("Erro")           
        }
      } catch (error) {
        console.error('Erro ao enviar os dados', error);
      }
    };

  render() {

    return(
        <div className={styles.container}>
            <h1 className='text-center' style={{paddingTop:'10px', color:'black'}}>Atualize um cliente</h1>
        <div className="border" style={{padding:'20px'}}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nome:</label>
            <input
              type='text'
              value={this.state.meuObjeto.name}
              onChange={this.changeHandler}
              className='form-control'
              name='name'
              required
            />
          </div>

          <div>
            <label>Preço:</label>
            <input
              type='text'
              value={this.state.meuObjeto.price}
              onChange={this.changeHandler}
              className='form-control'
              name='price'
              required
            />
          </div>

          <div style={{paddingTop:'15px'}}>
            <label>Sinopse:</label>
            <input
              type='text'
              value={this.state.meuObjeto.synopsis}
              onChange={this.changeHandler}
              className='form-control'
              name='synopsis'
              required
            />
          </div>

          <div style={{paddingTop:'15px'}}>
            <label>Pôster do Filme:</label>
            <input
              type='text'
              value={this.state.meuObjeto.url_poster}
              onChange={this.changeHandler}
              className='form-control'
              name='url_poster'
              required
            />
          </div>
          
          <div className={styles.botao}>
            <button type="submit" className="btn btn-success" style={{marginTop:'15px', marginBottom:'15px'}} >Enviar</button>
         </div>

          </form>
        
          </div>

          </div>
    )
}
}
export default UpdateFilme