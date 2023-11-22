import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
// import Sidebar from '../Sidebar/Sidebar'; // Assuming the Sidebar component is in the same directory
import './About.css'; // Import CSS file for Home component
import DesktopImage from '../Assects/Code typing.gif'; // Import the SVG file

const Home = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const mobileLogoURL = "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1060&t=st=1700550707~exp=1700551307~hmac=d450c4098c6531e57d93cd8d90bf59e275e0d0f85d07ef185f2f2cdaad9e70e6"; // Placeholder image for mobile

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <div className="home-container">
      {/* Left div */}
      <div className="left-content">
        <Typography variant="h2">
          Welcome to <br />Project Store
        </Typography>
        <Typography variant="subtitle1" className="tagline" style={{paddingBottom:"20px"}}>
          Explore, Learn, Code...
        </Typography>
        {/* <Button variant="contained" color="primary"  onClick={toggleSidebar}>
          Open Sidebar
        </Button> */}
      </div>

      {/* Right div */}
      <div className="right-content">
        <img
          src={DesktopImage} // Use the imported SVG as the source
          alt="Your Image"
          className="desktop-image"
        />
        <img
          src={mobileLogoURL}
          alt="Your Image"
          className="mobile-image"
        />
      </div>

      {/* <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} /> */}
    </div>
  );
};

export default Home;