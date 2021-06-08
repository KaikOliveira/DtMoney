import logoIcon from "../../assets/logo.svg";

import { HeaderProps } from "../../types/types";

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoIcon} alt="dtmoney" />

        <button >Nova Transação</button>
      </Content>
    </Container>
  );
}
