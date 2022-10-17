import styled from "@emotion/styled";

const Vote = styled.input({
  backgroundColor: '#40444B',
  borderRadius: '10px',
  borderWidth: '0px',
  color: '#D9DADB',
  fontSize: '125%',
  height: '100%',
  paddingLeft: '0.5em',
  paddingRight: '0.5em',
  
  ":focus": {
    outlineWidth: 0
  }
});

export default Vote;