import React,{Component} from 'react';

import {Arq,Fome,But} from './style.js';

import ar from './olie.jpg';


import Menu from './cabecario.js';

class Condenados extends Component {
    render(){
        return (
            <div>
                <table border ="5">
                    <tr>
                        <td>nome</td>
                        <td>Crime</td>
                    </tr>
                    {this.props.ass.map(assi=>(
                        <tr key = {assi.id}>
                            <td>{assi.nomeDet}</td>
                            <td>{assi.Crime}</td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}

export default class Arrow extends Component{

    constructor(props){
        super(props);
        this.state={assasinos:[],
                   detalhes:{
                            nomeDet:"",
                            crimeDet:""
                   },nome:"",crime:""


                   
        }
       
    }

    fazerSubmit=(event)=>{
     
        this.setState({nomeDet:this.state.nome});
        this.setState({crimeDet:this.state.crime});
     
        this.setState({assasinos:[...this.state.assasinos,{nomeDet:this.state.nome,Crime:this.state.crime}]});
            this.setState({nomeDet:""});
            this.setState({crimeDet:""});
            
           event.preventDefault(); 
    }

    pegarNome=(event)=>{
        this.setState({nome:event.target.value});
    }

    pegarCrime=(event)=>{
        this.setState({crime:event.target.value});
    }

    render(){
        return(
            <Arq>
            <div>
                  <meta charset="utf-8" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
               <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <div class = "container">
          <div class = "row">    
                            <div class="col-lg"> 
                                <Menu />
                             </div>
                                                
                            </div>
              <div class="row">
                  <div class="col-sm-12">
                      <h1>Oliver queen(arqueiro verde/espectro)</h1>
                  </div>
               </div>
               <div class="row">
                   <div class ="col-sm-8">
                       <p>
                       Oliver Jonas "Ollie" Queen (nascido em 16 de Maio de 1985[1] – 10 de Dezembro de 2019[2]; 10 de Dezembro de 2019 – Janeiro de 2020[3]) 
                       foi um ex-bilionário e playboy que virou um vigilante arqueiro. Em vários momentos ele detinha e operou numa boate, Verdant e foi executivo-chefe
                        da Corporação Queen.
                        </p>
                        <p>
                    Após supostamente se perder no mar por 5 anos, Oliver voltou para Starling City, com a missão de limpar a cidade do crime e da corrupção,
                     então se tornou um vigilante encapuzado usando um arco e flecha chamado de "O Capuz", disposto a usar a força letal, se necessário. No entanto, 
                     após O Empreendimento, Oliver fez um voto de nunca matar novamente, a menos que seja absolutamente necessário e se renomeou para "O Arqueiro".
                    </p>
                   </div>
                   <div class ="col-sm-4">
                       <img src={ar} alt ="" width="300px" height="200px"/>
                       </div>
                    
                 </div>
                 <div class="row">
                     <div class="col-sm-12">
                         <table border="3" class="table">
                             <tr>
                                 <td>nomes</td>
                                 <td>code nomes</td>
                            </tr>
                            <tr>
                                <td>thea queen</td>
                                <td>speed</td>
                            </tr>
                            <tr>
                                <td>Roy harper</td>
                                <td>arsenal</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    <div class="row">
                        <div  class="col-sm-5">
                            <Fome onSubmit = {this.fazerSubmit}>
                                <legends>caderno de condenados</legends>
                                <p>
                                    <label>
                                        nome:<input type="text" onChange ={this.pegarNome} value={this.state.nome} required/>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        crime:<input type="text" onChange ={this.pegarCrime} value={this.state.crime} required/>
                                    </label>
                                </p>
                            
                                <But type="submit">Confirmar</But>
                            
                            </Fome>
                        </div>
                       <div class ="col-sm-7">
                            <Condenados ass={this.state.assasinos}/>
                            </div>
                    </div> 
            </div>
            </div>
            </Arq>
        )
    }
}