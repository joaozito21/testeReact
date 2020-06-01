import React from 'react';

import {Tit,Corp,Fom,Cin} from './style.js';

import vibro from './vibro_2.jpg';


import Menu from './cabecario.js';
//required no input deixa como obrigatorio
export class Vib extends React.Component {
    
     state = {
         poderes:'vibro ,rajada de energia'
     }

    render(){return(
        <div>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
              <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
              <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
               
          <Cin>
       <div class ="container">
           <meta charset="utf-8" />
           <div class = "row">    
                            <div class="col-lg"> 
                                <Menu />
                             </div>
                                                
                            </div>
                  <div class = "row">
                      <div class="col-sm-12">
                        <Tit><h1><strong><i>vibro ou Cisco Ramos </i></strong></h1></Tit>
                      </div>
                 </div>
                <div class ="row">
                  <div class ="col-sm-9">           
                    <p>Francisco <b>"Cisco" Ramon</b>, apelidado de Vibro por Barry Allen, é um gênio da engenharia mecânica e uma meta-humano dos Laboratórios S.T.A.R., anteriormente servindo como guarda da sua prisão temporária. Ele veio de uma família pobre, 
                   de Porto Rico, e fornece muito alívio cômico no seu local de trabalho duro. Cisco também é um membro da Equipe Flash. Ele também era amigo de Harrison Wells antes de descobrir a sua verdadeira identidade como Eobard Thawne, embora Eobard visse Cisco como um filho adotivo antes
                    e depois da descoberta. Ele também desenvolveu uma rivalidade com Hartley Rathaway e um relacionamento amigável com Ray Palmer.
                    Mais tarde foi revelado que Cisco havia sido afetado pelo acelerador de partículas, fazendo com que ele se tornasse um meta-humano com a capacidade de ver através de vibrações e a capacidade de reter memórias de cronogramas alternativos de si mesmo antes de serem alterado
                    </p>    
                  </div>
                  <div class ="col-sm-3"> 
                    <img src={vibro}  alt = " " height = "400px" width="350px" />
                 
                   >

                  </div> 
                  <div class = "row">
                     <div class = "col-sm-4">
                        <dt>Poderes</dt>
                            <dd>brechas interdimensionais</dd>
                            <dd>ataques de vibro</dd>
                            <dd>Vibrações pro passado/futuro</dd>
                            
                       </div>
                       
                       <div class = "col-sm-8">
                          <Fom method = "GET">
                            <legends>formulario teste</legends>
                            <p>
                               <label>
                                   nome: <input type = "text" name="nome" required/>
                                   
                                 </label>
                              </p>
                              <p>
                                 <label for ="comentario">comentario</label>
                                  <input type = "text" name= "comentario" id = "comentario" />
                                </p>
                                <p>
                                      <label>
                                           Telefone<input type ="tel" />
                                      </label>
                                      <label>
                                           email : <input type ="email" />
                                      </label>
                                      <label>
                                            numero:<input type= "number"  />
                                      </label>
                                      <label>
                                            procura:<input type= "search"  />
                                      </label>
                                      <label>
                                            numero:<input type= "color"  />
                                      </label>
                                      <details>
                                         <summary>exibir/ocultar</summary>
                                         <p>
                                             exibir um texto teste aqui
                                           </p>
                                        </details>
                                  </p>
                                <p>
                                    <button type = "submit">enviar</button>
                                    <button type = "reset">limpar</button>
                                  </p>
                            </Fom >
                         </div>
                  </div>
                </div>   

        </div>
        </Cin> 
          </div> 
         
           );
    }
    };
export default Vib;
    
    


