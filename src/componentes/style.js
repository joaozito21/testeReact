import styled from 'styled-components';
import vibro from './hope.jpg';

export const Tit = styled.h1 `
    color:red;
    text-align:center;
    font-size:50px;
    margin-top:10px;
    text-decoration:dashed;
    font-variant:small-caps;
 `;

export const Tabl = styled.table `
    border-color:yellow;
    color:white;
    margin-left:20pt;
    margin-top:20pt;
    border:2px;
    background-color:red;
    padding-right:20px;
    width:800px;
`;


export const Corps = styled.body `
    background-color:black; 
    color:white;
  

    list-style-type: none;
    text-indent:30pt;
    line-height:30pt;
    text-decoration:dashed;
    font-variant:small-caps;
    height:12000px;
    
    background-image:url('hope.jpeg'); 
     
`;

export const Arq = styled(Corps) `
    background-color:lightgreen;
    font-family:Arial;
    font-style:italic;
    color:white;
    h1{
        text-align:center;
    }
`;

export const Corhop = styled(Arq) `
    background-color:black;
    color:white;
`;


export const Cop = styled(Arq)`
    background-color:darkblue;
`;
export const Cin =styled(Cop) `background-color:gray`;

export const Fil= styled.fieldset `
        background-color:white;
        border:10px;
        font-size:25px;
        font-family:nexa;
        color:gray;
`; 

export const List = styled.ul  `
  list-style-type: none;
`;

export const Pa = styled.p `
        display:flex;
        justify-content:space-between;`;

export const Novo = styled.div ` 
    background-color:white;
    font-size:30px;
    display:flex;
    height:400px;
    
    flex-wrap:wrap; 
  
    flex-direction:row;
    margin-left:10px;
`;

export const Vai = styled(Novo)`
    background-color:gray;
    height:150px;
    width:300px;
`;

export const But = styled.button `
    background-color:red;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    font-style:italic;
    float:right;
`;

export const Nave = styled.nav `
    display:flex;
    background-color :white;
    color:black;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-content:stretch;
    padding:15px
    li{
        display:block;
        margin-right:10px;
    }
`;
export const Pag = styled.p `
    font-size:40px;
    color:white;
`;
export const Pags = styled(Pag) `
     font-family:roboto;
`;



export const Tic = styled.dt `
    font-size:30px;
`;

export const Tics = styled.dt `
    font-size:20px;
    font-style:italic;
    justify-content:center;
`;


export const devs =styled.div `
   display:block;
    button teste {
        background-color:red;
   }
`;

export const Sel = styled.select `width:200px; height:20px;color:white;background-color:gray`;

export const Fom = styled.form `
    background-color:green;
    color:white;
    padding-left:20px;
    padding-bottom:10px;
   

     label {
        color:white;
    }
    input{
        margin-left:15px;
    }
  
    font-family:nexa;
    font-style:italic;
`;


export const Fome = styled(Fom) `
    background-color:black;
 
    height:320;   
    padding-right:10px;
`;
