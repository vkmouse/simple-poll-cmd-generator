import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from "../Styles/Button";
import Row from "../Styles/Row";

const Container = styled(Row)`
  justify-content: end
`

function GenerateCommandButton() {
  return (
    <Container>
      <Link to="/command">
        <Button>產生投票指令</Button>
      </Link>
    </Container>
  );
}

export default GenerateCommandButton;