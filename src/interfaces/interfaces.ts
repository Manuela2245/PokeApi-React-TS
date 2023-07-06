interface Abilities{
    ability:{
        name:string;
        url:string
    }
    is_hidden:boolean;
    slot:number;
}

interface Forms{
    name:string;
    url:string
}

interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
      };
      "official-artwork": {
        front_default: string | null;
      };
    };
    versions: any; 
  }


export interface Pokemon{
  key:number;
  id:number;
  name:string ;
  abilities: string;
  forms:string;
  height:number;
  weight:number;
  sprites:string;
  showEdit:boolean;
}


export interface BoxData{
    id:number|null;
    name:string;
    abilities:string;
    forms:string;
    height:number|null;
    weight:number|null;
    sprites:string;
}