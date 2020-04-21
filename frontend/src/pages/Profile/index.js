import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import logoimg from "../../assets/logo.svg";
import api from "../../services/api";
import "./styles.css";
export default function Profile() {
  const [incidents, setIncidents] = useState ([])


  const ongId = localStorage.getItem('ongName');
  const ongName = localStorage.getItem('ongName');


  useEffect(()=> {
    api.get('profile',{
      headers: {
        authorization: ongId,
      }
    }).then(response=>{
      setIncidents(response.data);
    })
  },[ongId]); 

  async function handleDeleteIncidents(id){
    try{
      await api.delete(`incidents/${id}`,{
        headers:{
          authorization: ongId,
        }
      });
    }catch (err){
      alert('erro ao detelar caso, tente novamente');
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoimg} alt="Be The Hero" />
        <span>Bem vinda {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar Novos Casos
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Casos Cadastrados</h1>

      <ul>
        {
        incidents.map(incident =>(
          <li key={incident.id}>
          <strong>Caso:</strong>
          <p>{incident.title}</p>

          <strong>Descrição:</strong>
          <p>{incident.description}</p>

          <strong>Valor:</strong>
          <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

          <button onClick={ ()=> handleDeleteIncidents(incident.id)} type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        ))
        }

      </ul>
    </div>
  );    
 };