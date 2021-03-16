import { Text } from "@chakra-ui/react";
import moment from "moment";
import Calendar from "../components/calendar";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Main } from "../components/Main";
import { useGetItems } from "../hooks/useGetItems";
import { IPlayer } from "../models/Player";
import { IPractice } from "../models/Practice";

const Index = () => {
  const { data: players } = useGetItems("/api/player");
  const { data: practices } = useGetItems("/api/practice");

  const handleBoxClick = async (date: Date) => {
    const weekday = moment(date).isoWeekday();
    const requestData = { weekday, price: 100 };
    await fetch("/api/practice", {
      method: "POST",
      body: JSON.stringify(requestData),
    });
  };
  console.log(players);
  console.log(practices);
  return (
    <Container height="100vh">
      <DarkModeSwitch />
      <Main>
        {/* <Text>{JSON.stringify(players)}</Text> */}
        <Text>Welcome to Azbuki Basketball</Text>
        <Text>Please choose practice days:</Text>
        <Calendar onChange={handleBoxClick} />
      </Main>
    </Container>
  );
};

export default Index;
