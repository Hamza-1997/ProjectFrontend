import React from "react";

import moment from "moment-timezone";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 270,
    maxWidth: 800,

    // paddingLeft:100
  },
  containerr: {
    marginBottom: 100,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Meeting Id:</StyledTableCell>
            <StyledTableCell>{props.meeting._id}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Meeting Title
            </StyledTableCell>
            <StyledTableCell> {props.meeting.meetingtitle}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Meeting Date
            </StyledTableCell>
            <StyledTableCell>
              {" "}
              {moment(`${props.meeting.meetingdate}`).format("Do MMMM YYYY")}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Meeting Time
            </StyledTableCell>
            <StyledTableCell>
              {moment.utc(`${props.meeting.meetingtime}`).format("h:mm:ss A")}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Meeting Type
            </StyledTableCell>
            <StyledTableCell> {props.meeting.meetingtype}</StyledTableCell>
          </StyledTableRow>
          {props.meeting.meetingtype === "offline" && (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Meeting Location
              </StyledTableCell>
              <StyledTableCell>
                {" "}
                {props.meeting.offlinelocation}
              </StyledTableCell>
            </StyledTableRow>
          )}
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Meeting Description
            </StyledTableCell>
            <StyledTableCell>
              {" "}
              {props.meeting.meetingdescription}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Participants List
            </StyledTableCell>
            <StyledTableCell>
              {" "}
              {props.meeting.participantsemail.map((input, index) => (
                <List key={index}>
                  <ListItem divider>{input.emails}</ListItem>
                </List>
              ))}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
