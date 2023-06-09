import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: whitesmoke;
  margin-right: 20px;
  &.active {
    background-color: white;
    color: #1976d2;
    border-radius: 5px;
  }
`;
