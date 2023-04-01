import { useState, useEffect} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, deleteFav } from "../../redux/action";



function Card({
   id,
   name, 
   species, 
   gender, 
   image, 
   onClose,
   addFav, 
   deleteFav, 
   myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         deleteFav(id)
      }
      else {
         setIsFav(true);
         addFav({onClose, id, name, species, gender, image, addFav, deleteFav, myFavorites})
      }
   }

   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <img  src={image} alt="" />
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}

function mapDispatchToProps(dispatch){
   return{
      addFav: (character) =>{dispatch(addFav(character))},
      deleteFav: (id) => {dispatch(deleteFav(id))},
   }
}

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
