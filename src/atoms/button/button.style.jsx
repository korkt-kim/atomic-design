import styled from 'styled-components';

const buttonBackground = (props) => {
  // props에는 theme외에 component가 전달받은 props정보도 들어있다.
  if (!props.variant) return props.theme.primary;
  return props.theme[props.variant];
};

// props는 ThemeProvider 참조
export const StyledButton = styled.button`
  display:inline-block;
  padding: 16px;
  color:white;
  background-color: ${(props) => buttonBackground(props)}; 
  border:none;
  box-shadow 0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.0);
  color:${(props) => props.theme.white}
  cursor:pointer;
  font-weight:700;
  line-height:1;
  outline:none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space:nowrap;
  cursor:pointer;
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: 'a' })`
  background-color: ${(props) => props.theme.secondary};
`;
