



import {Tic,Corps,Tics,Pag,But,Novo,Vai,Pa} from './style.js';

import React from 'react';

import raio from './raio.jpg';

import nev from './blue.jpg';

import Menu from './cabecario.js';

import cait from './cait.jpg';

import kat from './hopeKat.jpg';

import Hops from './hopes.jpg';

import snow from './caitlin.jpg';

import arrow from './arrow.jpg';

export default class App extends React.Component {
 
  constructor(props){
    super(props);
     this.state={
      fotoNum:1,
     nomeFun:raio,
     motivos:[{descricao:"eu gosto de assistir series"},{descricao:"saio da zona de conforto"},
              {descricao:"fora realidade desse mundo de hoje"},{descricao:"mudar de pensamento"},{descricao:"eu gosto de min mesmo"}]
    }
  }
  
  outherFoto=()=>{
       if (this.state.fotoNum ===0){
         this.setState({fotoNum:1});
       }
       
       if (this.state.fotoNum === 7)return; 
       const foto =this.state.fotoNum+1;
       this.setState({fotoNum:foto});
       
       if (foto === 2) {
            this.setState({nomeFun:nev});
       }
       if (foto=== 3) {
        this.setState({nomeFun:cait});

   }
   if (foto=== 4) {
    this.setState({nomeFun:kat});

}
if (foto=== 5) {
    this.setState({nomeFun:Hops});

}
if (foto=== 6) {
    this.setState({nomeFun:snow});

}

if (foto === 7) {
    this.setState({nomeFun:arrow});

}

  }
  afterFoto=()=>{
    const {fotoNum} = this.state;
    if (fotoNum === 1)return;   
    const foto =this.state.fotoNum-1; 
    this.setState({fotoNum:foto});
    if (foto === 1) {
        this.setState({nomeFun:raio});
   }
    if (foto === 2) {
         this.setState({nomeFun:nev});
    }
    if (foto === 3) {
     this.setState({nomeFun:cait});
    
}
if (foto=== 4) {
    this.setState({nomeFun:kat});

}
if (foto=== 5) {
    this.setState({nomeFun:Hops});

}
if (foto=== 6) {
    this.setState({nomeFun:snow});

}

}

 
    render() {
            return (

                <Corps>
                
                  
                <div>
                    <meta charset="utf-8" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
                    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
                   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                   <div class ="container">
                       
                      <div class = "row">    
                            <div class="col-lg"> 
                                <Menu />
                             </div>
                                                
                            </div>
                    
                            <div class = "row">
                                    <div class = 'col-sm-12'> 
                                        <Pag>Personagens de serie transmite verdade e representam bem a verdade
                                            que tenta passar tempo ,aqui veremos personagens principais de series:
                                        </Pag>
                                       
                                    </div>
                            </div>
                                    <div class="row">
                                        <div class ="col-sm-6">
                                     <Tic>Series escolhidas</Tic>
                                            <Tics>The flash</Tics>
                                            <Tics>Legacies</Tics>
                                            <Tics>arrow</Tics>
                                            </div>
                                            <div class ="col-sm-6">
                                    
                                             <div align="top">
                                                <img src={this.state.nomeFun}  width="530px" height="300px"  alt =" "/>
                                            </div>
                                            <div align="botton">
                                                <Pa>
                                                 
                                               
                                                    <But onClick = {this.afterFoto} name="dkslkd" >ANTERIOR</But>
                                                    <But onClick = {this.outherFoto} name="teste"  >PROXIMA</But>  
                                                </Pa>
                                            </div>
                                              
                                            </div>
                                    </div>
                            <h1>teste</h1>
                                            <Novo>
                                            {this.state.motivos.map(mot =>(
                                                <Vai key={mot.id}>
                                                     <p>
                                                         {mot.descricao}
                                                         </p>
                                                         
                                                         <But height="40px">teste</But>
                                                    </Vai>
                                            ))}   
                                            </Novo>
                </div>        
                                  
                  
                </div> 
                </Corps>
              
    
            );
    }
}