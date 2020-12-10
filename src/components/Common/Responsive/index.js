import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const Responsive = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Responsive;

Responsive.propTypes = {
  children: PropTypes.node.isRequired,
};
