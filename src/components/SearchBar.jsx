import React from "react";
export default function SearchBar(props) {

   const [character, setCharacter] = React.useState("")

   const handleInput = (event) =>{
      const value = event.target.value;
      setCharacter(
         value
      )
   }
   return (
      <div>
         <input value = {character} type='search' onChange={handleInput}/>
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
