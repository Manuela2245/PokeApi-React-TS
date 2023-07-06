import { useState,useEffect } from 'react';
import axios from "axios";
import {PokeApiService} from "../../service/PokeApi.service"
import {Pokemon} from "../../interfaces/interfaces";
import { TablePokemon } from '../../components/TablePokemon';
import {AddPokemon} from "../../components/AddPokemon"
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {example} from "../../config/constant/inicialStateExample"
import {EditPokemon} from "../../components/EditPokemon";

const PokemonData = () => {
    const[dataPokemon,setDataPokemon]=useState<Pokemon[]| []>([])
    
    const[dataToEdit,setDataToEdit]=useState<Pokemon>(example)

    const[addPokemon,setAddPokemon]=useState<boolean>(false)


    const getPokemon= async()=>{
        const response= await PokeApiService()
        //console.log(response)
        const pokemonData: Pokemon[]=[]
        for (let i=0; i<response.results.length; i++) {
            try{
                const res=await axios.get(response.results[i].url)
                //console.log(res)
                const data= res.data
                //console.log(data)
                pokemonData.push({
                    key:data.id,
                    id: data.id,
                    name: data.name,
                    abilities: data.abilities[0].ability.name,
                    forms: data.forms[0].name,
                    height: data.height,
                    weight: data.weight,
                    sprites: data.sprites.front_default,
                    showEdit:false
                })
            }catch(e){
                console.log(e)
            }
        }
        setDataPokemon(pokemonData)

    }
    useEffect(()=>{
        getPokemon()
    },[])

    const createPokemon=(data:Pokemon)=>{
        data.id=Date.now();
        data.key=Date.now();
        setDataPokemon([...dataPokemon,data]);
    }

    const updatePokemon=(data:Pokemon)=>{
        console.log(data)
        setDataPokemon(dataPokemon.map(elm=>(elm.id == data.id ? data : elm)));
    }

    //const deletePokemon=(id)=>{}

    const handleClickAddPolemon=()=>{
        setAddPokemon(!addPokemon)
    }

    const handleEdit=(elm:Pokemon)=>{
        setDataToEdit({
            key:elm.id,
            id:elm.id,
            name:elm.name,
            abilities:elm.abilities,
            forms:elm.forms,
            height:elm.height,
            weight:elm.weight,
            sprites:elm.sprites,
            showEdit:!elm.showEdit,
        })
        console.log(dataToEdit)
    }

    const handleDelete=(id:number)=>{
        setDataPokemon( 
            dataPokemon.filter(p => p.id != id)
        )
    }
  return (
    <div>
        <h1>Welcome to Pokemon Api</h1>
        <Button variant="outlined" startIcon={<AddBoxIcon />} onClick={handleClickAddPolemon}>Add pokemon</Button>
        {(addPokemon)
        ?(<AddPokemon
            createPokemon={createPokemon}/>)
        :null}
        {(dataToEdit.showEdit) && 
        <EditPokemon dataToEdit={dataToEdit} handleReset={()=> handleEdit(example)} updatePokemon={updatePokemon} />}
        <TablePokemon
        dataPokemon={dataPokemon}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        //deletePokemon={deletePokemon}
        />
    </div>
  )
}

export default PokemonData