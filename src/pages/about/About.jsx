import {
  Box,
  Grid,
  GridItem,
  Heading,
  Img,
  Text,
  Button,
} from '@chakra-ui/react';
import { Footer, Nav } from '../../components';
import { swiftBountyUse } from '../../config/data';
// import coinImage from '../../assets/about-info.png'
import lock from '../../assets/goldenlock.jpeg';

const About = () => {
  return (
    <>
      <Nav />
      <Box
        maxWidth={{ base: '100%', md: '90%', xl: '1200px' }}
        m="0 auto"
        p={{
          base: '7rem 1rem 1rem',
          md: '9rem 2rem 1rem',
          xl: '11rem 2rem 2rem',
        }}
      >
        <Heading as="h1" textAlign="center">
          About Us
        </Heading>
        <Box my="2rem">
          <Heading as="h6" fontSize="24px" fontWeight="600" my="1rem">
            Swiftrise Investment Platform: The Best Way to Invest in 2023
          </Heading>
          <Text as="p">
            Are you looking for a way to invest your money and grow your wealth?
            If so, you&apos;ve come to the right place. Swiftrise investment
            platform is the best way to invest in 2023. With Swiftrise, you can
            access a wide variety of investment opportunities, including stocks,
            bonds, and cryptocurrencies. You can also take advantage of
            Swiftrise&apos;s innovative features, such as its portfolio
            management tools and risk management tools.
          </Text>
        </Box>

        <Box bgColor="brand.200" p="1.5rem" my="4rem" borderRadius="10px">
          <Heading as="h4" fontSize="28px" textAlign="center" my="1rem">
            More about our services
          </Heading>

          <Text as="p" fontSize="15px" mt="2rem" fontWeight="600">
            Swiftrise is a leading investment platform that offers a wide range
            of features and benefits. Some of the key features of Swiftrise
            include:
          </Text>

          <Grid templateColumns="repeat(3, 1fr)" mt="1.5rem" gap="30px">
            {swiftBountyUse.map((item) => (
              <GridItem key={item.id} textAlign="center">
                <Box textAlign="center">{item.icon}</Box>

                <Text as="p">
                  <b>{item.title}</b>
                </Text>

                <Text as="p" fontSize="14px">
                  {item.text}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          my="3rem"
          bgColor="#fff"
          borderRadius="10px"
          p="1rem 2rem"
        >
          <Box width="40%">
            <Img src={lock} alt="golden-lock" />
          </Box>
          <Box width="60%">
            <Heading as="h4" my="1rem">
              Looking for a way to earn more?
            </Heading>
            <Text as="p" mb="2rem">
              If you&apos;re looking for a safe, secure, and easy-to-use
              investment platform, Swiftrise is the best option for you. Sign up
              today and start investing!
            </Text>

            <Button
              bgColor="primary.100"
              borderRadius="10px"
              p="1rem 2rem"
              _hover={{
                opacity: '0.8',
              }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
