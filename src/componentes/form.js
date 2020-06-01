import React from 'react';

import {Fom} from './style.js';

import {List} from './style.js';

import {connect} from 'react-redux';


function teste3(ob){
    return {
        type:"desc_numero",
        ob
    }
}
function pegar(event){
    teste =  event.target.value;
    event.preventDefault();
}
var teste=0;

const Tes =({nos,dispatch})=>(
   
                    <div>
                       
                          <Fom>
                              <fieldset>
                                <p>
                                 <label>
                                    numero :<input type="number" onChange={pegar} />
                                    </label>
                                 </p>
                             </fieldset>
                           </Fom>      
                                <button onClick={()=>dispatch(teste3(teste))}>selecionar</button>
                                                      
                        
                    </div>
     
);

export default connect(state =>({nos:state.numero}))(Tes)