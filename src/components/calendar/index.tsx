import { Box } from "@chakra-ui/layout";
import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.css";

interface Props {
  onChange: any;
}

function Calendar({ onChange }: Props) {
  return (
    <Box className={styles.container} color="gray.700">
      <ReactCalendar
        calendarType="ISO 8601"
        onChange={onChange}
        value={new Date()}
      />
    </Box>
  );
}

export default Calendar;
