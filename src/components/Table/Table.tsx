import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dataTable from "./tableData.json";
import SubjectIcon from "@mui/icons-material/Subject";
import styles from "../styles.module.scss";
import DateCell from "../DateCell/DateCell";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function createData(
  created: string,
  name: string,
  email: string,
  type: string,
  risk_score: string,
  status: string
) {
  return { created, name, email, type, risk_score, status };
}

const rows = dataTable.map((data) => {
  return createData(
    data.created,
    data.name,
    data.email,
    data.type,
    data.risk_score,
    data.status
  );
});

const titles = ["Created", "Name", "Type", "Risk score", "Status"];

export default function Table() {
  return (
    <TableContainer component={Paper}>
      <MuiTable stickyHeader aria-label="test 1 table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {titles.map((title) => (
              <TableCell>{title}</TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.created}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <DateCell date={row.created} />
              <TableCell align="left">
                <div className={styles.cellWrapper}>
                  <div className={styles.cellText}>{row.name}</div>
                  <div className={styles.cellTextSmall}>{row.email}</div>
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.cellText}>{row.type}</div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.cellWrapperHorizontal}>
                  {row.risk_score === "LOW" && (
                    <CheckCircleIcon sx={{ pr: "0.25rem" }} />
                  )}
                  <div
                    className={
                      row.risk_score === "LOW"
                        ? styles.cellTextGreen
                        : styles.cellText
                    }
                  >
                    {row.risk_score}
                  </div>
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={styles.cellWrapperHorizontal}>
                  {row.status === "Approved" ? (
                    <CheckIcon sx={{ pr: "0.25rem" }} />
                  ) : (
                    <MoreHorizIcon sx={{ pr: "0.25rem" }} />
                  )}
                  <div className={styles.cellText}>{row.status}</div>
                </div>
              </TableCell>
              <TableCell align="left">
                <SubjectIcon sx={{ cursor: "pointer" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
