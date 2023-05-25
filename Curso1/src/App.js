import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  
  const times = [
    {
      nome:'Programação',
      corPrimaria: '#57C278',
      corSegundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSegundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSegundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSegundaria: '#fde7e8'
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#d863bf',
      corSegundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSegundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSegundaria: '#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)}/>
      
          {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSegundaria={time.corSegundaria} />)}
      
    </div>
  );
}

export default App;
