import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Logo from '../../assets/images/bg.jpg'
import Wordmark  from "../../assets/images/wordmark.jpg";
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Breadcumb = () => {

    const navigate = useNavigate()

    const breadcrumbs = [
        <Link underline="hover" key="1" style={{color: "#56B280"}} onClick={()=> navigate('/cart')}   >
         Cart
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
        
        //   onClick={handleClick}
        >
          Details
        </Link>,
        <Link key="3" underline="hover"  >
        Shipping
      </Link>,
        <Link key="4" color="text.primary">
        Payment
      </Link>

      ];

  return (
    <div>


<div className='logo'>
          <button className='logo-btn' onClick={() => navigate('/home') } >
             <img src={Logo} alt='Logo' />
             <img src={Wordmark} alt='logo-text' className="logo-text" />
          </button>
            
        </div>
         <Stack spacing={2} style={{margin: '10vh 11vw'}}>
      
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    </div>
  )
}

export default Breadcumb
