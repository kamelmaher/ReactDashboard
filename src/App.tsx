import { Button } from "@mui/material"
import Card from "./components/Home/Card"
// Images
import trophy from "../img/trophy.png"

// import deposit1 from "../../img/deposit-1.png"
// import deposit2 from "../img/d.png"
// import deposit3 from "../img/d-3.png"
// import deposit4 from "../img/d-4.png"
// import deposit5 from "../img/d-5.png"
import overview from "../img/overview.jpeg"

// Icons
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DevicesIcon from '@mui/icons-material/Devices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardTitle from "./components/Home/CardTitle";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Earning from "./components/Home/Earning"
import Expense from "./components/Home/Expense"
import PollIcon from '@mui/icons-material/Poll';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Sales from "./components/Home/Sales"
import Deposite from "./components/Home/Deposite";
import TableRow from "./components/Home/TableRow";
import Statistic from "./components/Home/Statistic";
import MainStyle from "./components/MainStyle";
import { useAppSelector } from "./store/store";
["#9155FD", "#56CA00", "#FFB400", "#16B1FF"]
const App = () => {
  const style = MainStyle()
  const dark = useAppSelector(state => state.theme.dark)
  return (
    <div>
      <div className="row">
        {/* Best Seller */}
        <div className="col-lg-4 p-2">
          <Card>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Congratulations John! 🥳</h5>
                <p className={` mb-4`} style={{ fontSize: "14px" }}>Best seller of the month</p>
                <div>
                  <p className="price fs-4 mb-3">$42.7K</p>
                  <Button className="sales-btn" variant="contained">View Sales</Button>
                </div>
              </div>
              <div className="align-bottom" style={{ alignSelf: "end" }}>
                <img src={trophy} width="70" alt="" />
              </div>
            </div>
          </Card>
        </div>

        {/* Statiscs */}
        <div className="col-lg-8 p-2">
          <Card>
            <h5>Statistics Card</h5>
            <div className="mt-3"><p className="fw-bold d-inline ">Total 48.5% growth 😎 </p>this month</div>
            <div className="row mt-5">
              <Statistic text={"Sales"} color="#9155FD" price={245} icon={<TrendingUpIcon />} />
              <Statistic text={"Sales"} color="#56CA00" price={365} icon={<PersonOutlineIcon />} />
              <Statistic text={"Sales"} color="#FFB400" price={953} icon={<DevicesIcon />} />
              <Statistic text={"Sales"} color="#16B1FF" price={115} icon={<AttachMoneyIcon />} />
            </div>
          </Card>
        </div>

      </div>

      <div className="row">
        {/* Weekely Overview */}
        <div className="col-lg-4 col-md-6 p-2">
          <Card>
            <CardTitle text="Weekly Overview" />
            <div className="mt-4">
              <img src={overview} alt="" />
            </div>
            <div className="d-flex align-items-center gap-2 mt-3">
              <p className="fw-bold">$45</p>
              <p className=" fw-medium" style={{ fontSize: "14px" }}>Your sales performance is 45% 😎 better compared to last month</p>
            </div>
            <Button variant="contained" className="details-btn mt-4 d-block m-auto" >Details</Button>
          </Card>
        </div>
        {/* Total Earning */}
        <div className="col-lg-4 col-md-6 p-2">
          <Card>
            <CardTitle text="Total Earning" />
            <div className="mt-4">
              <div className="d-flex align-items-center">
                <p className="fs-3 fw-bold">$24,895</p>
                <span style={{ color: "#56CA00" }} className="fw-bold"><ArrowDropUpIcon />10%</span>
              </div>
              <span style={{ fontSize: "13px" }}>Compared to $84,325 last year</span>
            </div>
            <div className="mt-4">
              <Earning img="../img/company-1.png" name="Zipcar" amount={24895.25} />
              <Earning img="../img/company-2.png" name="Bitbank" amount={8652.63} />
              <Earning img="../img/company-.png" name="Aviato" amount={2442.85} />
            </div>
          </Card>
        </div>
        {/* Expenses */}
        <div className="col-lg-4 col-md-6">
          <div className="row">
            <div className="col-6 p-2">
              <Card>
                <Expense color="#56ca00" icon={<PollIcon />} text="Total Profit" price={25.6} total={20} />
              </Card>
            </div>
            <div className="col-6 p-2">
              <Card>
                <Expense color="#8A8D93" icon={<AttachMoneyIcon />} text="Refunds" price={78} total={-5} />
              </Card>
            </div>
            <div className="col-6 p-2">
              <Card>
                <Expense color="#9155FD" icon={<LocalMallIcon />} text="New Project" price={862} total={40} />
              </Card>
            </div>
            <div className="col-6 p-2">
              <Card>
                <Expense color="#FFB400" icon={<HelpOutlineIcon />} text="Sales Queries" price={15} total={-9} />
              </Card>
            </div>
          </div>
        </div>
        {/* Sales */}
        <div className="col-lg-4 col-md-6 p-2">
          <Card>
            <CardTitle text="Sales by Countries" />
            <div className="mt-4">
              <Sales country={"USA"} price={854.2} total={25.8} spend={894} color={"#56CA00"} />
              <Sales country={"UK"} price={393.6} total={-46.2} spend={693} color={"#FF4C51"} />
              <Sales country={"In"} price={354.5} total={38.9} spend={524} color={"#FFB400"} />
              <Sales country={"Kor"} price={354.5} total={40.6} spend={221} color={"#FF4C51"} />
              <Sales country={"Sa"} price={354.5} total={-21.9} spend={633} color={"#56CA00"} />
            </div>
          </Card>
        </div>
        {/* Deposite */}
        <div className="col-lg-4 col-md-6 p-2">
          <Card>
            <CardTitle text="Deposit" />
            <div className="mt-4">
              <Deposite company={"Gumroad Account"} desc={"Gumroad Account"} amount={4650} src={"../img/d-1.png"} />
              <Deposite company={"Mastercard"} desc={"Wallet deposit"} amount={2550} src={"../img/d-2.png"} />
              <Deposite company={"Stripe Account"} desc={"iOS Application"} amount={6254} src={"../img/d-3.png"} />
              <Deposite company={"American Bank"} desc={"Bank Transfer"} amount={6321} src={"../img/d-4.png"} />
              <Deposite company={"Bank Account"} desc={"Wallet deposit"} amount={5251} src={"../img/d-5.png"} />
            </div>
          </Card>
        </div>
        {/* Withdraw */}
        <div className="col-lg-4 col-md-6 p-2">
          <Card>
            <CardTitle text="Withdraw" />
            <div className="mt-4">
              <Deposite company={"Gumroad Account"} desc={"Gumroad Account"} amount={-4650} src={"../img/d-1.png"} />
              <Deposite company={"Mastercard"} desc={"Wallet deposit"} amount={-2550} src={"../img/d-2.png"} />
              <Deposite company={"Stripe Account"} desc={"iOS Application"} amount={-6254} src={"../img/d-3.png"} />
              <Deposite company={"American Bank"} desc={"Bank Transfer"} amount={-6321} src={"../img/d-4.png"} />
              <Deposite company={"Bank Account"} desc={"Wallet deposit"} amount={-5251} src={"../img/d-5.png"} />
            </div>
          </Card>
        </div>
      </div>
      {/* Table */}
      <div className="p-2">
        <div className="card-item p-3" style={{ overflowX: "auto", ...style, background: dark ? "#312d4b" : "white" }}>
          <table style={{ width: "100%", minWidth: "800px" }}>
            <thead className="mb-4">
              <tr>
                <th>NAME</th>
                <th>MAIL</th>
                <th>DATE</th>
                <th>SALARY</th>
                <th>AGE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody >
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
