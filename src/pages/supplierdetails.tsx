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
  createData('Facebook', 'Oculus', 6.0, 'China',24, 4.00, 4, 5),
  createData('Apple', 'Iphone', 237, 'China', 37, 4.30, 4, 5),
  createData('Amazon', 'Fire Stick', 262, 'China', 24, 6.00, 4, 5),
  createData('Netflix', 'Shitty Subscription', 305, 'China', 67, 4.30, 4, 5),
  createData('Google', 'Dev Tools', 356, 'China', 49, 3.90, 4, 5),
  createData('Uber', 'Uber Eats', 159, 'China', 24, 4.00, 4, 5),
  createData('Lyft', 'Rip off Uber', 237, 'China', 37, 4.30, 4, 5),
  createData('Coinbase', 'Wack exchange', 262, 'China', 24, 6.00, 4, 5),
  createData('Microsoft', 'VSCode', 305, 'China', 67, 4.03, 4, 5),
  createData('IBM', 'Computers', 356, 'China', 49, 3.90, 4, 5),
  
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
                                        <StyledTableCell align="right">In-Stock</StyledTableCell>
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