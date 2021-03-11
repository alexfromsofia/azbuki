import { Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Main } from "../components/Main";

const Index = () => (
  <Container height="100vh">
    <Main>
      <Text>Welcome to Azbuki Basketball</Text>
      <Text>Next practice</Text>
    </Main>

    <DarkModeSwitch />
  </Container>
);

export default Index;
