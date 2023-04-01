import { useSelector } from "react-redux"
import Card from "../Card/Card"

const Favorites = () => {

    const favorites = useSelector(state=>state.myFavorites)
    return(
        <>
        
            {
                favorites.map((personaje) =>{
                    return(
                        <Card 
                        key={personaje.id}
                        name = {personaje.name}
                        id = {personaje.id}
                        species = {personaje.species}
                        gender={personaje.gender} 
                        image ={personaje.image} 
                        />
                    )
                })
            }
        </>
    )
}
export default Favorites;