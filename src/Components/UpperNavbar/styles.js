import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UpperNavbarContainer = styled.div`
    background-color:#fff;
    margin: 0px 1em 0px 1em;
    padding: 0;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;

`

export const UpperNavbarItems = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 0.9em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 0.1em ;
    transition: all .3s ease-in-out;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    width: auto;
    padding: 2em;
    justify-content: center;
    


    :hover {
        background-color: #fff;
        color: rgba(24, 30, 179, 1);
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`