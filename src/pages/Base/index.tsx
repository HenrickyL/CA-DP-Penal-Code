import { Container, Footer, Main,Header } from "./styles";
import {Outlet} from 'react-router-dom'
import {Menu} from '../../components/Menu'
export function Base() {
  return (
    <Container>
      <Header>
          <Menu/>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <span>
         footer
        </span>
      </Footer>
    </Container>
  );
}
