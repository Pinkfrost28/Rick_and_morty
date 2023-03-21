import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav"
import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About';
import Detail from './views/Detail';
import Form from './components/Form';

function App () {
  const [characters, setCharacters] = React.useState([]);
  const [access, setAccess] = React.useState(false);
  const navigate = useNavigate();
  const username = "macmacheta@gmail.com"
  const password = "asdf123"

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate("/home")
    }
  }

  React.useEffect(()=>{
    !access && navigate('/')
  },[access])
function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
      if(characters.find((char) => char.id === data.id)) {window.alert("Ya existe")} 
      else if (data.name) {
           setCharacters((oldChars) => {
            return[...oldChars, data]});
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

function onClose(id){
  setCharacters(
    characters.filter((char)=> char.id !== id)
  )
}

const {pathname}= useLocation()
  return (
    <div className='App' style={{ padding: '25px' }}>
     
      {pathname !== '/' && <Nav onSearch = {onSearch}/>}
      
      <hr/>
      <Routes>
        <Route path="/" element ={<Form login ={login}/>}/>
       
        <Route path="/home" element={<Cards characters={characters} onClose = {onClose}/>}/>  

        <Route path="/about" element={<About/>}/>

        <Route path="/detail/:detailId" element= {<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
