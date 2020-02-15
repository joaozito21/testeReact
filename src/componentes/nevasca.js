import Tes from './tes.js';

import {Tit,Corp,Fom,Na} from './style.js';

import React from 'react';

import Vib from './vibro.js';

import Test from './frost.jpg';

import Button from '@material-ui/core/Button';


import Tab from './table.js';





import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



class Tabs extends React.Component {
  render(){ 
    return( <div>
      <table  border ="6">
          <tr>
              <td>nome</td>
              <td>comentario</td>
          </tr>
           {this.props.nom.map(tes =><tr><td key={tes.index}>{tes.text}</td></tr>)}
        </table>
  </div>)


  }

}



class Neve extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { text: " ", nomet:" ",
                          itensNome:[],textComent:" ", comentario:" ",
                        ItensComents:[]}

      
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
      }
   
   
      
      
 handleSubmit(event){

   
   this.setState({text:this.state.nomet});
   this.setState({ itensNome:[...this.state.itensNome,
                          {text:this.state.nomet}]})
   this.setState({textComent:this.state.comentario});
                          this.setState({ ItensComents:[...this.state.ItensComents,
                                                 {textComent:this.state.comentario}]})
   this.setState({nomet:" "});
   this.setState({comentario:" "});
   event.preventDefault(); 
   }
 handleChange(event) {
  this.setState({comentario: event.target.value})
  
}
handleChange2(event) {
  this.setState({nomet: event.target.value})
}  

             
     
    render() {      
            return ( 
                  <Corp>
                <div> 
         
          
                <meta charset="utf-8" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
               <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <div class = "container">
               <div class =  "rows">
                                <div class = "col-xl">
                                   <Tit><i>killer frost</i></Tit>
                                   <br />
                                </div>
                            </div> 
                        <div class = 'row'>
                            <div class = "col-sm-3">                         
                                    <img src = {Test} alt = " "  />
                            </div>
                            <div class = "col-sm-8">
                                    <Tes   />
                            </div> 
                        </div>
                         <div name = "forme" align = "center" onSubmit={this.handleSubmit}   >
                             <Fom  >
                                <legend>comentario</legend> 
                                    <label>texto</label>
                                    <input type='text' 
                                           onChange = {this.handleChange2}
                                           value = {this.state.nomet}  
                                  />
                                   <input type='text' 
                                           onChange = {this.handleChange}
                                           value = {this.state.comentario}  
                                  />
                                 
                                  <button  type ="submit" >teste</button>
                           
            
                            </Fom>
                                   
                             
                         </div>
                         <div class = "row">
                            <div class = "col-sm-12">
                                <form align = "center"   >
                                <legend > poderes </legend>
                                    <RadioGroup aria-label="poderes" name="gender1"  align = "center" >
                                        <FormControlLabel value="congelar" control={<Radio />} label="cangelar" />
                                         <FormControlLabel value="encantar" control={<Radio />} label="encantar" />
                                        <FormControlLabel value="lutar" control={<Radio />} label="lutar" />
                                        <FormControlLabel
                                                  value="matar"
                                                    disabled
                                                     control={<Radio />}
                                                    label="(Disabled option)"
                                                                 />
                                    </RadioGroup>
                                </form>
                                <Tabs nom  = {this.state.itensNome} com = {this.state.ItensComents}/>
                                
                            </div>
                      </div>
                 
                    </div> 
                   
                </div>
                </Corp>
           )  
          
            }               
}
export default Neve;