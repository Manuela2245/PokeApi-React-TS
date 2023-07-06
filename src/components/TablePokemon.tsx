import {Pokemon} from "../interfaces/interfaces"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface TableProps{
    dataPokemon:Pokemon[]
    handleEdit: (elm:Pokemon) => void;
    handleDelete: (id:number) => void;
}


export const TablePokemon = ({dataPokemon,handleEdit, handleDelete}:TableProps) => {
  return (
    <div>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ability</TableCell> 
            <TableCell>Form</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataPokemon?.map((elm) => (
            <TableRow key={elm.id}>
              <TableCell>{elm.id}</TableCell>
              <TableCell>
               <img style={{ width: 100 }} src={elm.sprites} alt="Image"/>
              </TableCell>
              <TableCell>{elm.name}</TableCell>
              <TableCell>
                {elm.abilities}
              </TableCell>
              <TableCell>
              {elm.forms}</TableCell>
              <TableCell>{elm.height}</TableCell>
              <TableCell>{elm.weight}</TableCell>
              <TableCell>
                <button onClick={()=>handleEdit(elm)}>Edit</button>
                <button onClick={()=> handleDelete(elm.id)}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  )
}
