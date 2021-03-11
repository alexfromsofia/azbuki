import { Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Main } from "../components/Main";
import playerModel, { IPlayer } from "../models/Player";
import dbConnect from "../utils/dbConnect";

interface Props {
  players: IPlayer[];
}

const Index = ({ players }: Props) => (
  <Container height="100vh">
    <Main>
      <Text>{JSON.stringify(players)}</Text>
      <Text>Welcome to Azbuki Basketball</Text>
      <Text>Next practice</Text>
      <Text>{players[0]._id}</Text>
    </Main>

    <DarkModeSwitch />
  </Container>
);

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await playerModel.find({});
  const players = result.map((doc) => {
    const player = doc.toObject();
    player._id = player._id.toString();
    return player;
  });

  return { props: { players } };
}

export default Index;
