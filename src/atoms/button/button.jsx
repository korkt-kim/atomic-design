import PropTypes, { func, node, string } from 'prop-types';
import React from 'react';
import { StyledButton, StyledLinkButton } from './button.style';

import { ReactComponent as IconPlus } from '../../../assets/images/icons/plus.svg';
import { ReactComponent as IconBag } from '../../../assets/images/icons/shopping-bag.svg';
import { ReactComponent as IconCart } from '../../../assets/images/icons/shopping-cart.svg';
import { ReactComponent as IconUser } from '../../../assets/images/icons/user.svg';
import { ReactComponent as IconX } from '../../../assets/images/icons/x.svg';

//dynamic icon 만드는법 공부
const icons = {
  bag: IconBag,
  cart: IconCart,
  plus: IconPlus,
  user: IconUser,
  x: IconX,
};

// todo 공부!!!
const ButtonIcon = ({ name }) => {
  const Icon = icons[name];
  return (
    <span className="button__icon">
      <Icon />
    </span>
  );
};

ButtonIcon.defaultProps = {
  name: string.isRequired,
};

const Button = ({ children, href, icon, onClick, variant }) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        {icon && <ButtonIcon name={icon}></ButtonIcon>}
        {children}
      </StyledButton>
    );
  else
    return (
      <StyledLinkButton href={href}>
        {icon && <IconPlus />}
        {children}
      </StyledLinkButton>
    );
};

Button.propTypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
  icon: string,
  variant: string,
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
