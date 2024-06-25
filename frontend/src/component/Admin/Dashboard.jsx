import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from "chart.js/auto";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata.js";
import Loading from "../../more/Loader.js";
import { getAdminProduct } from "../../actions/ProductActions.js";
import { getAllOrders } from "../../actions/OrderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PeopleIcon from "@material-ui/icons/People";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.AllOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["#5D5FEF"],
        hoverBackgroundColor: ["#3BB77E"],
        data: [100, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="dashboard">
          <MetaData title="Dashboard" />
          <Sidebar />
          <div className="dashboardContainer">
            <div className="navBar-dash">
              <div className="dash-left">
                <p>Dashboard</p>
              </div>
              <div className="center-dash">
                <form>
                  <input type="search" placeholder="Search here..."></input>
                </form>
              </div>
              <div className="dash-right">
                <span>
                  <PersonIcon />
                </span>
              </div>
            </div>
            <div className="dashboardSummary">
              <div>
                {/* <PriceChangeIcon /> */}
                <p>
                  Total Amount : <br />{" "}
                  <span className="totalAmount">${totalAmount}.00</span>
                </p>
              </div>
              <div className="dashboardSummaryBox2">
                <Link to="/admin/products">
                  <p className="icon-dash">
                    <ProductionQuantityLimitsIcon />
                  </p>
                  <p>Product</p>
                  <p>{products && products.length}</p>
                </Link>
                <Link to="/admin/orders">
                  <p className="icon-dash">
                    <ListAltIcon />
                  </p>
                  <p>Orders</p>
                  <p>{orders && orders.length}</p>
                </Link>
                <Link to="/admin/users">
                  <p className="icon-dash">
                    <PeopleIcon />
                  </p>
                  <p>Users</p>
                  <p>{users && users.length}</p>
                </Link>
              </div>
            </div>
            <div className="Charts">
              <div className="lineChart">
                <Line data={lineState} />
              </div>
              <div className="doughnutChart">
                <Doughnut data={doughnutState} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Dashboard;
