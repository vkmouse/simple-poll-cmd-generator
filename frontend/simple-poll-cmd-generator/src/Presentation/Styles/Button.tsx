import styled from "@emotion/styled";

const Button = styled.button({
  backgroundColor: '#292B2F',
  border: 0,
  borderRadius: '10px',
  color: '#fff',
  height: '100%',
  paddingLeft: '0.5em',
  paddingRight: '0.5em',
  ":hover": {
    backgroundColor: '#40444B',
    cursor: 'pointer'
  }
});

export const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-left: 0.25em;
`;

export default Button;
