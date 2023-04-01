import axios from "axios";

const URL = "https://rickandmortyapi.com/api/character/";




export default function getCharDetail (req, res){
    const id = req.params
    axios.get(`${URL}/${id}`)
    .then((response)=> {
        const {id, name, gender, species, image, origin, status} = response.data
        res.status(200).json( {id, name, gender, species, image, origin, status})
    })
    .catch((error)=> {
        res.status(500).json({error: error.message})
    })

}



// const succes = (response, res)=>{
//     const {id, name, gender, species, origin, image, status} = response.data
//     res.writeHead(200, {"Content-Type": "application/json"});
//     res.end(JSON.stringify({id, name, gender, species, origin,image, status}))
// }

// const errorH = (error, res)=>{
//     res.writeHead(500, {"Content-Type": "text/plain"});
//     res.end(error.message)
// }
// export default function getCharById (res, id){
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=> succes(response, res))
//     .catch((error)=>errorH(error, res))
    
// }