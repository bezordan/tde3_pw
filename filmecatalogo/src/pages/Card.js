import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'

function deleteRoteiro(identificador){

    fetch(`http://localhost:8080/movie/${identificador}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',   
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao excluir item: ${response.status}`);
      }
      console.log('Filme excluído com sucesso.');
      window.location.reload();
    })
    .catch(error => {
      console.error('Erro ao excluir filme:', error);
    });
      
  }

function Card({name, price, synopsis, url_poster, identificador}){

    const navigate = useNavigate();

    const handleRedirecionar = (key) => {
        navigate(`/${identificador}`);
    };

    const handleEdicao = (key) => {
        navigate(`/filme/${identificador}`);
    };

    
    return(
        <section className={styles.card}>
            <div className="card mb-3" style={{width:'540px'}} >
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={url_poster} style={{maxWidth:'250px', height:'100%'}} alt="imagemFilme"/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className={styles.sinopse}>{synopsis}</p>
                            <button className='btn btn-secondary' onClick={() => handleEdicao(identificador)} style={{marginRight:'10px'}}>Editar</button>
                            <button className='btn btn-danger' id="excluirButton" data-id={identificador} onClick={() => deleteRoteiro(identificador)}>Deletar</button>                         
                            <button className="btn btn-dark" style={{marginLeft:'10px'}} onClick={() => handleRedirecionar(identificador)}><BsArrowRight/></button>
                        </div>                   
                    </div>                         
                </div>                  
            </div>
        </section>  
    )
}
export default Card