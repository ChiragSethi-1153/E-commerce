import React, {useState} from "react";
import "./SideBar.css";
import { Button } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';


const SideBar = () => {

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="sidebar">
      <Button 
      variant="filled" 
      startIcon={<DashboardIcon />} 
      className={`sidebar-btns ${isActive ? 'active' : ''}`}
      onClick={() => {
        handleClick()
        navigate('/dashboard')}}
      >
        Dashboard
      </Button>
      <Button 
      variant="filled" 
      startIcon={<AddIcon />} 
      className="sidebar-btns"
      onClick={() => navigate('/addProducts')}
      >
        Add Products
      </Button>
      <Button 
      variant="filled" 
      startIcon={<VisibilityIcon />} 
      className="sidebar-btns"
      onClick={() => navigate('/viewProducts')}
      >
        View Products
      </Button>

    </div>
  );
};

export default SideBar;
