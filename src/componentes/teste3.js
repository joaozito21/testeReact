import React from 'react';

import {connect} from 'react-redux';



const Tes3 =({esp})=>(
   
                    <div>
                       
                        <h1>Nome:  {esp.nome}</h1>
                        
                    </div>
     
);

export default connect(state =>({esp:state.nome}))(Tes3)