import { useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Pokemon } from '../interfaces/interfaces';

interface EditFormPokemon{
  dataToEdit:Pokemon,
  handleReset:()=>void
  updatePokemon:(dataPokemon:Pokemon)=>void
}

export const EditPokemon = ({dataToEdit, handleReset,updatePokemon}:EditFormPokemon) => {
  const[pokeBoxData,setPokeBoxData]=useState<Pokemon>(dataToEdit);
  //console.log(dataToEdit)
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    
    setPokeBoxData((pokeBoxData)=>({
      ...pokeBoxData,
      [name]: value
    }))
    //console.log(e.target.value)
  } 
  const handleSubmitPokemon=(e: React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault() //para que no se mande antes de
    updatePokemon(pokeBoxData)
  }
  
  return (
    <div>
        <h2>Edit Pokemon</h2>
        <Box component="form" 
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmitPokemon}
        >
            <TextField id="outlined-basic" name="sprites" label="Image" variant="outlined" onChange={handleChange} value={pokeBoxData.sprites} /> 
            <TextField id="outlined-basic" name="name" label="Name" variant="outlined" onChange={handleChange} value={pokeBoxData.name} required/> 
            <TextField id="outlined-basic" name="abilities" label="Ability" variant="outlined" onChange={handleChange} value={pokeBoxData.abilities} required/>
            <TextField id="outlined-basic" name="forms" label="Form" variant="outlined" onChange={handleChange} value={pokeBoxData.forms} required/>
            <TextField id="outlined-basic" name="height" label="Height" variant="outlined" onChange={handleChange} value={pokeBoxData.height} required/>
            <TextField id="outlined-basic" name="weight" label="Weight" variant="outlined" onChange={handleChange} value={pokeBoxData.weight} required/>

            <button type="submit">Update</button> 
            <button type="reset" onClick={handleReset}>Clear</button>
        </Box>
    </div>
  )
}
