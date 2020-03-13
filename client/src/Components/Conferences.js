import React, { Component } from "react";



const Conferences = (props) => (

 <div className="ui container">
  <table className="ui celled striped table">
    <thead>
      <tr><th>Conference</th>
      <th>Start Date</th>
      <th>Current Sales</th>
      <th>Sales Goal</th>
    </tr></thead>
    <tbody>
    {props.conferenceList.map(conference => (
    <tr key= {conference.id}>
      <td data-label="Name" ><a href ={'/conferences/' + conference.id}>{conference.title}</a></td>
      <td data-label="Age">{conference.startdate}</td>
      <td data-label="Job">{conference.sales_current}</td>
      <td data-label="Job">{conference.sales_goal}</td>
    </tr>
    ))}
    </tbody>
  </table>
  </div>
);


export default Conferences;




// import React, { Component } from "react";
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
//
// const StyledTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);
//
// const StyledTableRow = withStyles(theme => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// }))(TableRow);
//
//
// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });
//
// export default function Conferences(props) {
//   const classes = useStyles();
//
//
//     return (
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Conference</StyledTableCell>
//               <StyledTableCell align="right">Start Date</StyledTableCell>
//               <StyledTableCell align="right">Location</StyledTableCell>
//               <StyledTableCell align="right">Priority Level</StyledTableCell>
//               <StyledTableCell align="right">TE Lead</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//           {props.conferenceList.map(conference => (
//             <StyledTableRow key={conference.title}>
//               <StyledTableCell component="th" scope="row">
//                 {conference.title}
//               </StyledTableCell>
//               <StyledTableCell align="right">{conference.start_date}</StyledTableCell>
//               <StyledTableCell align="right">{conference.location}</StyledTableCell>
//               <StyledTableCell align="right">{conference.priority_level}</StyledTableCell>
//               <StyledTableCell align="right">{conference.te_lead}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//      );
// }
