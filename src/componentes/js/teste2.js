import React from 'react';

import {connect} from 'react-redux';



const Tes2 =({esp})=>(
   
                    <div>
                       
                        <h1>Especie:   {esp.especie}</h1>
                        
                    </div>
     
);

export default connect(state =>({esp:state.especies}))(Tes2)