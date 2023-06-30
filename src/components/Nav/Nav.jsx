import logo from '../../assets/logo.png';
import './nav.css';
import { NavLink } from 'react-router-dom';
// import { NavLink as RouterLink } from 'react-router-dom';
// import { Box, Button, Container, Img, Link, Text } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// import { useState } from 'react';

const Nav = () => {
  // const [active, setActive] = useState(false);

    // const icon = active ? <CloseIcon /> : <HamburgerIcon w="20px" h="20px" />;

  const linkStyles = ({ isActive }) => ({
    fontWeight: isActive ? '600' : '400',
  });

  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="left">
          <div className="logoContainer">
            <img src={logo} alt="logo" />
            <div className="logoTexts">
              <p>SWIFTRISE</p>
              <p className="navLetterSpacing">MINING</p>
            </div>
          </div>
          <div className="navLinks">
            <ul>
              <li>
                <NavLink style={linkStyles} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <a href="#">Swiftrise Bounty</a>
              </li>
              <li>
                <NavLink style={linkStyles} to="/about">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink style={linkStyles} to="/reviews">
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navButtons">
          <NavLink to='/log-in'>
            <button>Log in</button>
          </NavLink>

          <NavLink to='/sign-up'>
            <button className="greenBtn">Sign up</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;



// <Box position="relative" zIndex="10" bg="">
    //   <Container
    //     as="header"
    //     maxW={{ base: '100%', md: '90%', xl: '1200px' }}
    //     m="0 auto"
    //     p={{ base: '1rem 1rem', md: '2rem 1rem', xl: '2rem 2rem' }}
    //     display="flex"
    //     bg={'gray.100'}
        // position={{ base: 'fixed', md: 'relative' }}
      //   position="fixed"
      //   w="100%"
      //   justifyContent="space-between"
      //   alignItems="center"
      // >
      //   <Box display="flex" alignItems="center" gap="3.5rem">
      //     <Link
      //       as={RouterLink}
      //       to="/"
      //       _hover={{
      //         textDecoration: 'none',
      //       }}
      //     >
      //       <Img
      //         src={logo}
      //         position="absolute"
      //         left="1.5rem"
      //         top="-16px"
      //         width="10rem"
      //         alt="SWIFTRISE MINING LOGO"
      //       />
      //       <Box ml="2.5rem" className="logoTexts">
      //         <Text as="p">SWIFTRISE</Text>
      //         <Text as="p" className="navLetterSpacing">
      //           MINING
      //         </Text>
      //       </Box>
      //     </Link>

      //     <Box display="flex" gap="1rem">
      //       <Link
      //         as={RouterLink}
      //         style={linkStyles}
      //         to="/"
      //         _hover={{
      //           textDecoration: 'none',
      //         }}
      //       >
      //         Home
      //       </Link>
      //       <a href="#">Swiftrise Bounty</a>
      //       <Link
      //         as={RouterLink}
      //         style={linkStyles}
      //         to="/about"
      //         _hover={{
      //           textDecoration: 'none',
      //         }}
      //       >
      //         About Us
      //       </Link>
      //       <Link
      //         as={RouterLink}
      //         style={linkStyles}
      //         to="/review"
      //         _hover={{
      //           textDecoration: 'none',
      //         }}
      //       >
      //         Reviews
      //       </Link>
      //     </Box>
      //   </Box>

      //   <Box display="flex" alignItems="center" gap="1.5rem">
      //     <Button
      //       border="1px solid #ccc"
      //       borderRadius="20px"
      //       bgColor="transparent"
      //       color='#000'
      //       p="1rem 2rem"
      //       _hover={{
      //         bgColor: 'rgb(84, 161, 205)',
      //       }}
      //     >
      //       Log in
      //     </Button>

      //     <Button  border='1px solid' color='black'>Sign up</Button>
      //   </Box>

        {/* <button
          className="icon"
          onClick={() => {
            setActive(!active);
          }}
        >
          {icon}
        </button>

        <div className={active ? 'header-menu active' : 'header-menu'}>
          <Box className="menu" bg=""></Box>
        </div> */}
      // </Container>
     // </Box>