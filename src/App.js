import React from 'react'
import {useState} from 'react';
import All_cards from './componentes/all_cards.js'
import bg from './fondos/PaPokemon.png'

function App() {
  const information={
    "id": "0",
    "name": "Busca un pokemon!",
    "types": "nada por aqui", 
    "sprites": "data:image/jpeg;base64,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",
    "color":"10px solid gray"
  };

  const [cardPoke, setPoke] = useState(information);
  const [Pokebuscado, updatePoke] = useState("");

  function color_Poke(tipos){
    let color = "10px solid";
    if(tipos.includes('grass')){
      color += ' #7AC74C';
    }
    else if(tipos.includes('water')){
      color += ' #6390F0';
    }
    else if(tipos.includes('ice')){
      color += ' #96D9D6';
    }
    else if(tipos.includes('fire')){
      color += ' #EE8130';
    }
    else if(tipos.includes('electric')){
      color += ' #F7D02C';
    }
    else if(tipos.includes('bug')){
      color += ' #A6B91A';
    }
    else if(tipos.includes('poison')){
      color += ' #A33EA1';
    }
    else if(tipos.includes('ghost')){
      color += ' #735797';
    }
    else if(tipos.includes('flying')){
      color += ' #A98FF3';
    }
    else if(tipos.includes('ground')){
      color += ' #E2BF65';
    }
    else if(tipos.includes('fighting')){
      color += ' #C22E28';
    }
    else if(tipos.includes('rock')){
      color += ' #B6A136';
    }
    else if(tipos.includes('normal')){
      color += ' #A8A77A';
    }
    else if(tipos.includes('psychic')){
      color += ' #F95587';
    }
    else if(tipos.includes('dragon')){
      color += ' #6F35FC';
    }
    else if(tipos.includes('dark')){
      color += ' #705746';
    }
    else if(tipos.includes('steel')){
      color += ' #B7B7CE';
    }
    else if(tipos.includes('fairy')){
      color += ' #D685AD';
    }
    return(color);
  }

  function random_Poke(){
    let pokemon = Math.floor(Math.random() * (898 - 1 + 1)) + 1;
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let completo = url+pokemon;
    fetch(completo)
    .then(response => response.json())
    .then(data => {
      let tipos = data.types[0].type.name;
      let color = color_Poke(tipos);
      if(data.types.length>1){
        tipos = tipos+"/"+data.types[1].type.name;
      }
      const update = {
        "id": data.id,
        "name": data.name,
        "types": tipos, 
        "sprites": data.sprites.front_default,
        "color": color
      };
      setPoke(update);
    });
  }

  function busca_Poke(){
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let completo = url+Pokebuscado;
    fetch(completo)
    .then(response => response.json())
    .then(data => {
      let tipos = data.types[0].type.name;
      let color = color_Poke(tipos);
      if(data.types.length>1){
        tipos = tipos+"/"+data.types[1].type.name;
      }
      const update = {
        "id": data.id,
        "name": data.name,
        "types": tipos, 
        "sprites": data.sprites.front_default,
        "color": color
      };
      setPoke(update);
      updatePoke("");
    });
  }

  return (
    <div style={{height: '100vh',  justifyContent:'center', alignItems:'center',display: 'flex',  flexDirection: "column", backgroundImage: `url(${bg})`, backgroundSize: "cover"}}>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding: "20px"}}>
    <input id="input"
    type="text"
    value={Pokebuscado}
    onChange={()=> {updatePoke(document.getElementById("input").value);}}
    />
    </div>
    
    <All_cards poke={cardPoke}/>

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', margin: "20px",}}>
    <button className="btn btn-outline-light bg-white bg-opacity-25"  style={{margin: "5px", border: "5px solid"}} onClick={random_Poke}>
    Pokemon Random
    </button>
    <button className="btn btn-outline-light bg-white bg-opacity-25" style={{margin: "5px", border: "5px solid"}} onClick={busca_Poke}>
    Buscar Pokemon
    </button>
    </div>
    </div>
    )
  }

  export default App