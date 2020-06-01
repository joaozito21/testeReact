import React from 'react';

import {List} from './style.js';

import {connect} from 'react-redux';

function teste(ob){
    return {
        type:"desc_especies",
        ob
    }
}
function teste2(ob){
    return {
        type:"desc_nomes",
        ob
    }
}

const Tes =({nos,dispatch})=>(
   
                    <div>
                       
                        {nos.map(ob=>
                         <List  key={ob.id}>
                                <li>{ob.especie}--  <button onClick={()=>dispatch(teste(ob))}>selecionar</button></li>
                                <li >{ob.nome}--    <button onClick={()=>dispatch(teste2(ob))}>selecionar</button></li>

                        </List>
                        )}
                        
                    </div>
     
);

export default connect(state =>({nos:state.objeto}))(Tes)