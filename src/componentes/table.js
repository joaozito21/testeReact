import React from 'react';



export default class Tab extends React.Component {
  render(){ 
    return( <div>
      <table  border ="6">
          <tr>
              <td>nome</td>
              <td>comentario</td>
          </tr>
          <tr>
             <td>{this.props.nom}</td>
         </tr> 
      </table>
  </div>)


  }

}