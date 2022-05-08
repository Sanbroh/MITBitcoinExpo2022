import * as React from "react";
import Layout from "@components/layout";
import Header from "@components/header/header";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// creates styled cells and rows
const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

// creates function to call data displayed on table
function createData (
  company: string,
  product: string,
  productID: number,
  origin: string,
  instock: number,
  costperunit: number,
  deliverytime: number,
  creditscore: number,

) {
  return { company, product, productID, origin, instock, costperunit, deliverytime, creditscore};
}

// initializes dummy data
const rows = [
  createData('S1', 'Electronics', 6.0, 'USA', 24, 2.00, 1, 91.91),
  createData('S2', 'Plastic', 237, 'China', 37, 4.30, 2, 62.56),
  createData('S3', 'Aluminum', 262, 'China', 24, 6.00, 3, 78.31),
  createData('S4', 'Aluminum', 305, 'China', 67, 4.30, 2, 58.32),
  createData('S5', 'Electronics', 356, 'USA', 49, 3.90, 9, 57.99),
  createData('S6', 'Electronics', 159, 'Canada', 24, 4.00, 4, 70.06),
  createData('S7', 'Plastic', 237, 'Canada', 37, 4.30, 1, 80.24),
  createData('S8', 'Aluminum', 262, 'New Zealand', 24, 6.00, 4, 74.25),
  createData('S9', 'Plastic', 305, 'China', 67, 4.03, 8, 64.05),
  createData('S10', 'Plastic', 356, 'USA', 49, 3.90, 10, 77.34),

];


// creates supplier details
export default function SupplierDetails() {

    // sets title name
    document.title = 'Supplier Details'
    return (
        <div>
            <Header dashboard={true} ledger={false} settings={false} />
            <Layout>
                <div className="supplier-table">
                        <br></br>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="right">Company</StyledTableCell>
                                        <StyledTableCell align="right">Product</StyledTableCell>
                                        <StyledTableCell align="right">Product ID</StyledTableCell>
                                        <StyledTableCell align="right">Origin</StyledTableCell>
                                        <StyledTableCell align="right">Delivered (t)</StyledTableCell>
                                        <StyledTableCell align="right">Cost Per Unit ($USD)</StyledTableCell>
                                        <StyledTableCell align="right">Delivery Time</StyledTableCell>
                                        <StyledTableCell align="right">Credit Score</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow
                                        key={row.company}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <StyledTableCell component="th" scope="row">
                                            {row.company}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.product}</StyledTableCell>
                                        <StyledTableCell align="right">{row.productID}</StyledTableCell>
                                        <StyledTableCell align="right">{row.origin}</StyledTableCell>
                                        <StyledTableCell align="right">{row.instock}</StyledTableCell>
                                        <StyledTableCell align="right">{row.costperunit}</StyledTableCell>
                                        <StyledTableCell align="right">{row.deliverytime}</StyledTableCell>
                                        <StyledTableCell align="right">{row.creditscore}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                </div>
            </Layout>
        </div>
    )
}
