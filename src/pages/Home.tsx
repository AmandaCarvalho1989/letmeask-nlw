import React  from 'react';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom'
import illustration  from '../assets/images/illustration.svg'
import logo  from '../assets/images/logo.svg'
import googleIcon  from '../assets/images/google-icon.svg'
import { useAuth } from '../hooks/useAuth';
import '../styles/auth.scss'

export const Home: React.FC = () => {
 
  const history = useHistory()
  const { user,signInWithGoogle } = useAuth() 

  async function handleCreateRoom(){
    if(!user){
      await signInWithGoogle()
    }
    history.push('/rooms/new')
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
          <button className='create-room' onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className='separator'> ou entre em uma sala</div>
          <form action="">

            <input type="text" 
            placeholder='Digite o código da sala'/>
            <Button >
            Entrar na sala
            </Button>
       
          </form>
        </div>
      </main>
    </div>
  )
}

export default Home;