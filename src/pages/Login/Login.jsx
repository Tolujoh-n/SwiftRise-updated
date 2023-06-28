import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
        <Heading as="h1">Log in</Heading>

        <form>
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
              Login
            </Button>

            <Link as={RouterLink}>Forgot your password?</Link>
          </Box>
        </form>

        <Text fontSize="14px">
          Don’t have an account yet?{' '}
          <Link as={RouterLink} color="primary.100" to="/sign-up">
            Sign Up
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
