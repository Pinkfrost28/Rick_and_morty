import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail(){

    const {detailId} = useParams();

    const [character, setCharacter] = useState({})

    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api"
        const KEY = "0753d5e36b8c.f153b7b47ee3fb72e121";

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
        .then((response) => setCharacter(response.data))
    }, []);
    
      return(
        
        <div>
          {character.name ?(
          <>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>

            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image}/>
            </>
            ) : (
              <h3>Loading...</h3>
            )
          }
        </div>
      )
}