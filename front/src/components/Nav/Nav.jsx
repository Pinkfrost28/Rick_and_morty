import { Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav({onSearch}) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

        return(
            
            <div>
                <Link to = "/">LOGOUT</Link>
                
                <Link to="/home">Home</Link>
                <button onClick={() => onSearch(getRandomInt(826))}>Random</button>
                <SearchBar onSearch={onSearch}/>
                <Link to= "/about">About</Link>
                <Link to = "/favorites">
                    <h3>Favorites</h3>
                </Link>
            </div>
        )
    
    
 }
 