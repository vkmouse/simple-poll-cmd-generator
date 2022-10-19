import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from "../Styles/Button";
import Row from "../Styles/Row";

const Container = styled(Row)`
  justify-content: end;
`

const CustomLink = styled(Link)`
@media (max-width: 600px) {
  width: 100%;
}
`

const CustomButton = styled(Button)`
@media (max-width: 600px) {
  width: 100%;
}
`

function GenerateCommandButton() {
  return (
    <Container>
      <CustomLink to="/command">
        <CustomButton>產生投票指令</CustomButton>
      </CustomLink>
    </Container>
  );
}

export default GenerateCommandButton;