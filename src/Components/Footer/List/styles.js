import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
    list-style: none;
`

export const Li = styled.li`
    list-style: none;
    padding: 1em 0 1em 0;
`

export const FooterTitle = styled.li`
    color: #fff;
    font-size: 1.1em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    margin-bottom: 0.8em;
`

export const FooterItem = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &:hover {
        font-weight: 600;
    }
`