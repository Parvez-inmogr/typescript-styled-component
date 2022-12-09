import styled from "styled-components";

type CardDesign={
    defaultPadding:number;
    color:string;
}


export const Card=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding:24px ${(props:CardDesign)=>props.defaultPadding}px;
background-color: ${(props:CardDesign)=>props.color};


`