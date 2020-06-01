
import React from 'react';

import {Tit,Fom,Fil,Corhop,Tabl} from './style.js';

import EscHope from './hopeKat.jpg';

import {Provider} from 'react-redux';

import store from './js/store/index.js';

import Tes from './teste.js';
import Tes2 from './js/teste2.js';
import Tes3 from './teste3.js';

import Foms  from './form2.js';

import Ff from './form.js';

import Menu from './cabecario.js';

import Hopes from './hopes.jpg';

export default class Hope extends React.Component
{
    render(){
        return(<Corhop>
            <div>
                
                <meta charset="utf-8" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                  <div class="container">
                       <div class = "row">    
                            <div class="col-lg"> 
                                <Menu />
                             </div>
                                                
                        </div>
                            <b><p>
                    <legends>Frase da hope para Klaus</legends>
                    <Fil>
                    
                     Eu vou deixar você orgulhoso. Eu não posso prometer que não vou passar por um período em que eu
                     recebo tatuagens irresponsáveis ​​e namoro homens mais velhos, mas vou voltar para a escola e ficarei
                      bem,Porque eu sou uma Mikaelson e eu prometo a você que vou fazer o certo pelo nosso nome
                      </Fil>
                   </p>
                     
                      </b>
                              
                        
                    <Tit>Hope Mikaelson</Tit>  
                     
                    <div  class ="row"> 
                       <div class ="col-sm-7">
                        <p font-family ="nexa"  >
                        Hope Andrea Mikaelson é um dos principais personagens recorrentes de The Originals. 
                        A Hope é a filha híbrida de Niklaus Mikaelson e Hayley Marshall-Kenner. Ela é a neta de Ansel, 
                        Esther Mikaelson e dois lobisomens sem nome, bem como a bisneta de Mikael.
                         Ela também é a sobrinha de Freya, Finn, Elijah , Kol , Rebekah e Henrik Mikaelson, e a grande 
                         sobrinha de Dahlia. Ela também é um parente distante de Lana, Eva, e Cary. Ela é a irmã mais 
                         nova adotiva de Marcel Gerard através de seu pai. 
                        Por causa de seu casamento com Hayley, Jackson Kenner foi seu padrasto por quase um ano. Ele morreu 
                        nas mãos de Tristan de Martel.
                            </p>
                            <p>
                            Ela recebeu o nome de Hope por seu pai, que se inspirou nas palavras de seu meio-irmão Elijah sobre a
                             recém nascida ser a esperança de sua família. Ela toma o sobrenome de seu padrasto paterno, Mikaelson.
                            </p>
                            <p>
                                A Hope foi concebida no episódio da Quarta Temporada de The Vampire Diaries, Bring It On, e 
                                -se que Hayley estava grávida quatro episódios mais tarde em The Originals. Ela nasceu no episódio 
                                da temporada de Originals From a Cradle to a Grave. Como resultado de sua herança única, ela é o 
                                primeiro híbrido lobisomem-vampiro vivo do mundo. Ela herdou o gene de lobisomem de ambos os seus
                                pais , enquanto o gene de vampiro e bruxa veio de seu pai, que é o vampiro Original - lobisomem e 
                                o filho da Bruxa Original. Através da mãe dela herdou a Linhagem Labonair , Hope é uma lobisomem 
                                da realeza
                            </p>
                            <p>
                                  A Hope é um membro da Família Mikaelson, da Família Labonair, da Família Kenner e de uma família
                                  de lobisomens sem nome. Hope é, por direito de nascimento, um membro do Matilha dos Lobos
                                  Crescentes e da Matilha do Nordeste do Atlântico, bem como uma família de bruxas sem nome,
                                  e a única criança gerada pelo Híbrido Original.
                            </p>
                            <p>
                            Em From a Cradle to a Grave, Hope foi enviada para ser criada por Rebeca, para protegê-la dos inimigos 
                            de seu pai: os Lobos Guerra, Ester e Dahlia. Sua morte foi fingida para protegê-la. No entanto, na segunda
                             temporada The Brothers That Care Forgot, Esther encontrou Rebekah enquanto ela está com Hope no parque, 
                             isso é significado pela presença de estorninhos. No final da segunda temporada, Hope está vivendo com Hayley 
                             e Jackson (padrasto por casamento) no Bayou,e no final da terceira temporada, ela está morando com Hayley na estrada. Na quarta temporada , ela mora com Hayley e a família Mikaelson no Abattoir.

                              </p>
                
                           </div>
                           <div class = "col-sm-5">
                                <img src ={EscHope} width ="500px" alt = " "/>
                                <img src ={Hopes} width ="500px" alt = " "/>
                               </div>
                            <Fom   width="400px">
                             <fieldset> 
                                <legends>tipos de inputs</legends>
                                <p>
                                <label>
                                    data <input type="date" />
                                    </label>
                                </p>
                                <p>
                                  <label>
                                      mes : <input type="month" />
                                    </label>  
                                </p>
                                <p>
                                  <label>
                                      semana : <input type="week" />
                                    </label>  
                                </p>
                                <p>
                                  <label>
                                      ano : <input type="time" />
                                    </label>  
                                </p>
                                <p>
                                  <label>
                                    data e hora: <input type="datetime-local" />
                                    </label>  
                                </p>
                                <p>
                                  <label>
                                    data e hora: <input type="file" />
                                    </label>  
                                </p>
                               
                                <p>
                                  <label>
                                           
                                           <input type="radio" name ="estadp_civil" />
                                           casado
                                    </label>  
                                </p>
                                <p>
                                  <label>
                                           
                                           <input type="radio" name ="estadp_civil" />
                                           solteiro
                                    </label>  
                                </p>
                                </fieldset>
                            </Fom>
                     <p> 
                     <Provider store={store} float="left">
                      <Tes3 />
 
                          <Tes2 />
                          <Tes />
                          <Foms />
                          <Ff />
                      </Provider>
                      </p>
                    </div> 
                <div class="row">
                    <div class="col-sm-6">
                        <Tabl >
                          <thead>
                            <tr>
                              <td>nome</td>
                              <td>parentesco</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                  <td>Hayley marcheal</td>
                                  <td>Mother</td>
                                </tr>
                                <tr>
                                    <td>Kol Mikaelson</td>
                                    <td><label>text:<input type="number" /></label></td>
                                  </tr>
                              </tbody>
                              <tfoot>
                                <tr>
                                  <td>familia sempre e para sempre</td>
                                  </tr>
                                </tfoot>
                          </Tabl>
                      </div>
                   </div>
                
                  </div>
                    

                 
            </div>
               </Corhop>
        
        )
    }
}