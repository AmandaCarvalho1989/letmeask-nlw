import React, { FormEvent, useState } from 'react';
import {Link} from 'react-router-dom'
import Button from '../components/Button';

import illustration  from '../assets/images/illustration.svg'
import logo  from '../assets/images/logo.svg'

import '../styles/auth.scss'

export const NewRoom: React.FC = () => {

  const [newRoom,setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent){
    event.preventDefault()


  }

  return (
    <div id='page-auth'>
      <aside>
        <img src={illustration} alt="Ilustration" />
      <strong>Crie salas de Q&amp; A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logo} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>

            <input 
            type="text" 
            value={newRoom}
            onChange={(event) => setNewRoom(event.target.value)}
            placeholder='Nome da sala'/>
            <Button>
            Criar  sala
            </Button>
       
          </form>
          <p>Quer entrar em uma sala existente?
            <Link to="/"> clique aqui!</Link>
         </p>
        </div>
      </main>
    </div>
  )
}

export default NewRoom;