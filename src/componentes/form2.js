import React from 'react';

import {connect} from 'react-redux';



const Tes2 =({numero})=>(
   
                    <div>
                       
                        <h1>numero  :   {numero}</h1>
                        
                    </div>
     
);

export default connect(state =>({numero:state.numero}))(Tes2)