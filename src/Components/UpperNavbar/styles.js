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
    margin: 2em;
    text-decoration: none;
    font-size: 0.8em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 0.1em ;
    transition: all .3s ease-in-out;

    :hover {
        background-color: #fff;
        color: rgba(24, 30, 179, 1);
    }
`