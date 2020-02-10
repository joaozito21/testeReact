import styled from 'styled-components';


export const Tit = styled.h1 `
    color:red;
    text-align:center;
    font-size:50px;
 `;


export const Corp = styled.body `
    background-color:lightblue; 
    list-style-type: none;
    height:2000px;
 
     
`;


export const Sel = styled.select `width:200px; height:20px`;

export const Fom = styled.form `
    background-color:gray;
    color:white;
    width :400px; 

   

     label {
        color:green;
    }
    input{
        margin-left:15px;
    }
  
    font-family:'Courier New', Courier, monospace;
    font-style:italic;
`;

export const Fome = styled(Fom) `
    background-color:black;
    width :250px; 
   
`;
