// create your App component here
import React,{useEffect, useState} from "react"


function App(){
    const URL = "https://dog.ceo/api/breeds/image/random"
    const [pic, setPic] = useState(null)

    
    useEffect(()=>{
        fetch(URL)
        .then(r=> r.json())
        .then(data=> setPic(data.message))
    },[])

    if(!pic) return <p>Loading...</p>

    return <img src={pic} alt = "A Random Dog"/>
}

export default App




