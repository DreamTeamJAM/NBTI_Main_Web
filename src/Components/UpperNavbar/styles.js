import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UpperNavbarContainer = styled.div`
    background-color: rgba(24, 30, 179, 1);
    margin: 0;
    padding: 0;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

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