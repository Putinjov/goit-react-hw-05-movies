import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';


export const StyledLink = styled(NavLink)`
    color: #e9e9e9;
    font-size: 30px;
    margin-left: 200px;

    &:last-child {
      margin-left: 50px;
    }

    &.active {
      color: orange;
    }
  `;

export const Container = styled.div`
width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  
  height: 5rem;
  overflow: visible;
  background-color: transparent;

  > nav {
    display: flex;
  }
`;


Container.propTypes = {
  background: propTypes.string,
};

// Logo.propTypes = {
//   logoImage: propTypes.string,
// };

