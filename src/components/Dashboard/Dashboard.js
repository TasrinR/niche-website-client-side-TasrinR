
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { NavLink, useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Button } from 'react-bootstrap';
import MyOrders from './UserDashboard.js/MyOrders/MyOrders';
import Pay from './UserDashboard.js/Pay/Pay';
import Review from './UserDashboard.js/Review/Review';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import MakeAnAdmin from './AdminDashboard/MakeAnAdmin/MakeAnAdmin';
import ManageProducts from './AdminDashboard/ManageProducts/ManageProducts';
import ManageAllOrders from './AdminDashboard/ManageAllOrders/ManageAllOrders';
import AddAProduct from './AdminDashboard/AddAProduct/AddAProduct';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  let { path, url } = useRouteMatch();
  const { admin ,handleSignOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Link to='/explore'><Button>Explore</Button></Link>
      <Divider />
        {!admin && <Box>
            <Link to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>
            <Link to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>
            <Link to={`${url}/review`}><Button color="inherit">Review</Button></Link>
            <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
          </Box>}
            {admin && <Box>
                <Link to={`${url}/makeAnAdmin`}><Button color="inherit">Make An Admin</Button></Link>
                <Link to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
                <Link to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link>
                <Link to={`${url}/addAProduct`}><Button color="inherit">Add A Product</Button></Link>
            </Box>}
      <Divider />
      <Button onClick={handleSignOut}>Log Out</Button>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/*  drawer for desktop */}

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
          {/* <NavLink to={`${url}`}>
            My Orders
          </NavLink>
          <NavLink to={`${url}/pay`}>
            /pay
          </NavLink>
          <NavLink to={`${url}/review`}>
            ewview
          </NavLink> */}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
                  <Route exact path={path}>
                      <MyOrders></MyOrders>
                  </Route>
                  <Route path={`${path}/pay`}>
                     <Pay></Pay>
                  </Route>
                  <Route path={`${path}/review`}>
                     <Review></Review>
                  </Route>
                  <AdminRoute path={`${path}/makeAnAdmin`}>
                      <MakeAnAdmin></MakeAnAdmin>
                  </AdminRoute>
                  <AdminRoute path={`${path}/manageProducts`}>
                      <ManageProducts></ManageProducts>
                  </AdminRoute>
                  <AdminRoute path={`${path}/manageAllOrders`}>
                      <ManageAllOrders></ManageAllOrders>
                  </AdminRoute>
                  <AdminRoute path={`${path}/addAProduct`}>
                      <AddAProduct></AddAProduct>
                  </AdminRoute>
                 
               </Switch>
      </Box>
    </Box>
  );
}


export default Dashboard;