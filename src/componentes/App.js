



import {Tit,Corp,Fom,Na} from './style.js';

import React from 'react';




import Menu from './cabecario.js';





 

export default class App extends React.Component {
  
  
  

 
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
                   <div class ="container">
                      <div class = "row">    
                            <div class="col-lg"> 
                                <Menu />
                             </div>
                             
                            </div>
                    
                            <div class = "row">
                                    <div class = 'col-sm-5'> 
                                        <p>personagens de serie transmite verdade e representam bem a verdade
                                            que tenta passar
                                        </p>
                                    </div>
                            </div>
                </div>        
                                  
                  
                </div> 
                </Corp>
              
    
            );
    }
}