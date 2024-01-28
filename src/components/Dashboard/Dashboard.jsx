import React from "react";
import SideBar from "./SideBar";
import "./Dashboard.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Dashboard = () => {
  return (
    <div className="admin">
      <div className="left">
        <SideBar />
      </div>

      <div className="right">
        <h1>Dashboard</h1>
        <div className="stats">
          <div className="stat-box">
            <div className="totalSalesIcon"> 
              <AttachMoneyIcon style={{fill: '#fff'}} />
            </div>
           <div>Total Sales</div>
           
           </div>
          <div className="stat-box">
          <div className="totalOrdersIcon"> 
              <ShoppingCartIcon style={{fill: '#fff'}} />
            </div>
           <div>Total Orders</div>
          </div>
          <div className="stat-box">
          <div className="totalProductsIcon">
          <ShoppingBasketIcon className="ShoppingBasketIcon" />
          </div>
            
            <div>Total Products</div>
          </div>
        </div>

        <div>Latest Orders</div>

      </div>
    </div>
  );
};

export default Dashboard;
