import PropTypes, { func, node, string } from 'prop-types';
import React from 'react';
import { StyledButton, StyledLinkButton } from './button.style';

const Button = ({ children, href, onClick, variant }) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        {children}
      </StyledButton>
    );
  else return <StyledLinkButton href={href}>{children}</StyledLinkButton>;
};

Button.propTypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
  variant: string,
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
