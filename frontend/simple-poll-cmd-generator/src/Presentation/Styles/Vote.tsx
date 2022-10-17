import styled from "@emotion/styled";

const Vote = styled.input({
  backgroundColor: '#40444B',
  borderRadius: '10px',
  borderWidth: '0px',
  color: '#D9DADB',
  flexGrow: 1,
  fontSize: '125%',
  height: '100%',
  padding: '0 0.5em',
  
  ":focus": {
    outlineWidth: 0
  }
});

export default Vote;