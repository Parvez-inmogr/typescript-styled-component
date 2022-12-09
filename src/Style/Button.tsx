import styled from 'styled-components'

const Hovercolor ='aqua';


export const StyledButton =styled.button `
padding: 10px 20px;
border: none;

&:hover{
    background-color:${Hovercolor};
    cursor: pointer;
    border-radius: 10px;
}




`