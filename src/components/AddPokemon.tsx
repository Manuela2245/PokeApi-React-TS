import { useState} from 'react';
import { Pokemon } from '../interfaces/interfaces';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {example} from "../config/constant/inicialStateExample"

interface AddPokemon{
  createPokemon:(newPokemon:Pokemon) => void;
}

export const AddPokemon = ({createPokemon}:AddPokemon) => {
  
   const[boxData,setBoxData]=useState<Pokemon>(example);

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setBoxData((boxData)=>({
          ...boxData,
          [name]: value
        }))
       // console.log(e.target.name)
        //console.log(e.target.value)
    }

    const handleSubmit= async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault() //para que no se mande antes de
        createPokemon(boxData)
    };

    const handleReset=() => {
      setBoxData(example)
    };
  return (
    <div>
        <h2>Add Pokemon</h2>
        <Box component="form" 
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
            
            <TextField id="outlined-basic" name="sprites" label="Image" variant="outlined" onChange={handleChange} value={boxData.sprites} required/> 
            <TextField id="outlined-basic" name="name" label="Name" variant="outlined" onChange={handleChange} value={boxData.name} required/> 
            <TextField id="outlined-basic" name="abilities" label="Ability" variant="outlined" onChange={handleChange} value={boxData.abilities} required/>
            <TextField id="outlined-basic" name="forms" label="Form" variant="outlined" onChange={handleChange} value={boxData.forms} required/>
            <TextField id="outlined-basic" name="height" label="Height" variant="outlined" onChange={handleChange} value={boxData.height} required/>
            <TextField id="outlined-basic" name="weight" label="Weight" variant="outlined" onChange={handleChange} value={boxData.weight} required/>

            <button type="submit">Add</button> 
            <button type="reset" onClick={handleReset}>Clear</button>
        </Box>
    </div>
  )
}
