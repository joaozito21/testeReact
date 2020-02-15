import React from 'react';

import {Tit,Corp} from './style.js';

import vibro from './vibro_2.jpg';

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
                
          <Corp>
       <div class ="container">
           <meta charset="utf-8" />
          
                    <Tit><h1><strong><i>vibro ou Cisco Ramos </i></strong></h1></Tit>
                  <h2>{this.props.lok}</h2>
            
               <p>Francisco "Cisco" Ramon, apelidado de Vibro por Barry Allen, é um gênio da engenharia mecânica e uma meta-humano dos Laboratórios S.T.A.R., anteriormente servindo como guarda da sua prisão temporária. Ele veio de uma família pobre, 
                   de Porto Rico, e fornece muito alívio cômico no seu local de trabalho duro. Cisco também é um membro da Equipe Flash. Ele também era amigo de Harrison Wells antes de descobrir a sua verdadeira identidade como Eobard Thawne, embora Eobard visse Cisco como um filho adotivo antes
                    e depois da descoberta. Ele também desenvolveu uma rivalidade com Hartley Rathaway e um relacionamento amigável com Ray Palmer.
                    Mais tarde foi revelado que Cisco havia sido afetado pelo acelerador de partículas, fazendo com que ele se tornasse um meta-humano com a capacidade de ver através de vibrações e a capacidade de reter memórias de cronogramas alternativos de si mesmo antes de serem alterado
                </p>     
                <img src={vibro}  alt = " " height = "200px" width="150px" />    
        </div>
        </Corp> 
          </div> 
         
           );
    }
    };
export default Vib;
    
    


