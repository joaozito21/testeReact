import React from 'react';


import Select from '@material-ui/core/Select';

import {Nave} from  './style';



import Test from './vibro_3.jpg';

import nev from './killer.jpg';

import MenuItem from '@material-ui/core/MenuItem';

import Hop from './hope.jpg';

import arrow from './olie.jpg';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                Age:10
    };
  
   
  }
  mudanca(event){
    this.setState({Age :event.target.value});

  }
    render() {
            return (
                <div>
                <meta charset="utf-8" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
               <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          
             <Nave class="navbar navbar-expand-lg navbar-light bg-light"> 
              
                          
              <li>  <Select labelId="label" id="select" value={10}  labelWidth = "30px">
                           <MenuItem value="10"  selected>Personagem</MenuItem>
                            <MenuItem  ><a href = '/componentes/vibro.js'> <img src = {Test} alt = " " width="350px"  height="200px"/></a></MenuItem>
                            <MenuItem  ><a href = '/componentes/nevasca.js'> <img src = {nev} alt = " "  width="350px" height="200px"/></a></MenuItem>
                            <MenuItem  ><a href = '/componentes/Hope.js'> <img src = {Hop} alt = " " width="350px" /></a></MenuItem>
                            <MenuItem  ><a href = '/componentes/arrow.js'> <img src = {arrow} alt = " " width="350px" /></a></MenuItem>
                  
                    </Select>
                  
                </li>
                <li><a href='/'>HOME</a></li>
                
               
              </Nave>
             
                </div>
            )
    }
}