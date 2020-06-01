import { createStore } from "redux";


const estado =  {
    
    nome:{},
    especies:{},
    numeros:2,
    objeto:[{
    id:1,
    especie:"fenix",
    nome:"landon"
},{
    id:2,
    especie:"tribida",
    nome:"hope"
}
]}

function reducer(state=estado,action){
    if (action.type === 'desc_especies')
    {
      return{
          ...state,especies:action.ob
      }
    }
    if (action.type === 'desc_nomes')
    {
      return{
          ...state,nome:action.ob
      }
    }
    if (action.type === 'desc_numero')
    {
        alert(action.ob);
      return{
          ...state,numero:action.ob
      }
    }

    return state;

    
    }

const store = createStore(reducer);

export default store;