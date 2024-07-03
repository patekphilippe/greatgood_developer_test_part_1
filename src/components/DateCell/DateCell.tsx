import React from "react";
import { TableCell } from "@mui/material";
import styles from "../styles.module.scss";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedDate = dateFormatter.format(date);
  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return { formattedDate, formattedTime };
};

const DateCell = ({ date }: { date: string }) => {
  const { formattedDate, formattedTime } = formatDate(date);

  return (
    <TableCell component="th" scope="row">
      <div className={styles.cellText}>{formattedDate}</div>
      <div className={styles.cellTextSmall}>{formattedTime}</div>
    </TableCell>
  );
};

export default DateCell;
