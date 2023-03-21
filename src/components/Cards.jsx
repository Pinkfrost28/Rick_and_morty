import Card from './Card';

export default function Cards(props) {
   const {characters} = props;
   // console.log(characters)
   return(
   <div>
      {characters.map((personaje)=>{
         return <Card name = {personaje.name}
         id = {personaje.id}
         species = {personaje.species}
         gender={personaje.gender} 
         image ={personaje.image} 
         onClose = {() => props.onClose(personaje.id)}/>
      })}
   </div>);
}
