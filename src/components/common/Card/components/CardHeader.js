import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from '../..';

const CardHeader = ({ title }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper themeType={theme}>
        <h3>{title}</h3>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
);

CardHeader.propTypes = {
  title: PropTypes.any,
};

const Wrapper = styled.div`
  padding: 1rem;

  h3 {
    font-size: 0.9em;
    margin: 0;
    font-weight: normal;

    @media (max-width: 680px) {
      font-size: 1.2em;
    }
    color: ${({ theme, themeType }) => theme[themeType].text[0]};
  }
`;

export default CardHeader;
