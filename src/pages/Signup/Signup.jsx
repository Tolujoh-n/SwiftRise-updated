import { useState } from 'react';
import {
  Box,
  FormControl,
  Input,
  Heading,
  Link,
  Button,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
    bitcoinAddress: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
  };
  return (
    <Box pt="10rem">
      <Box
        bgColor="#fff"
        borderRadius="10px"
        p="1rem"
        mt="2rem"
        mb="3rem"
        w={{ base: '80%', md: '60%', lg: '40%' }}
        mx="auto"
      >
        <Heading as="h1">Sign up</Heading>

        <form>
          <FormControl mt="1.5rem">
            <Input
              type="text"
              placeholder="Username"
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
              required
            />
          </FormControl>
          <FormControl mt="1.5rem">
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </FormControl>
          <FormControl mt="1.5rem">
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </FormControl>
          <FormControl mt="1.5rem">
            <Input
              type="password"
              placeholder="Repeat Password"
              onChange={(e) =>
                setFormData({ ...formData, repeatPassword: e.target.value })
              }
              required
            />
          </FormControl>
          <FormControl mt="1.5rem">
            <Input
              type="text"
              placeholder="Your Bitcoin Wallet address"
              onChange={(e) =>
                setFormData({ ...formData, bitcoinAddress: e.target.value })
              }
              required
            />
          </FormControl>

          <Box
            display="flex"
            my="2rem"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              type="submit"
              onClick={handleSubmit}
              bgColor="primary.100"
              color="#fff"
              p="1rem 1.5rem"
              _hover={{
                opacity: 0.8,
              }}
            >
              Register
            </Button>
          </Box>
        </form>

        <Text fontSize="14px">
          Do you have an account already?{' '}
          <Link as={RouterLink} color="primary.100" to="/log-in">
            Log in
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Signup;
