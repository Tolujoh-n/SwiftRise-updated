import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaPencil } from 'react-icons/fa6';
import { Rates } from '../../components';

const Review = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    comment: '',
  });

  const handleReview = (e) => {
    e.preventDefault();
    setFormData(formData);
    console.log(formData);
    setFormData({
      name: '',
      rating: '',
      comment: ''
    })
  };
  return (
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
        Reviews
      </Heading>

      <Box mt="3rem">
        <Box display="flex" alignItems="center">
          <Box w={{ base: '100%', md: '50%' }}>
            <Box display="flex" gap="20px">
              <Box>
                <Box mb="0.5rem" display="flex" gap="10px">
                  <Rates rating={5} />{' '}
                  <Text fontSize="12px" color="#fff" as="p">
                    64
                  </Text>
                </Box>
                <Box
                  my="0.5rem"
                  display="flex"
                  justifyContent="space-between"
                  gap="10px"
                >
                  <Rates rating={4} />{' '}
                  <Text fontSize="12px" color="#fff" textAlign="left" as="p">
                    9
                  </Text>
                </Box>
                <Box
                  my="0.5rem"
                  display="flex"
                  justifyContent="space-between"
                  gap="10px"
                >
                  <Rates rating={3} />{' '}
                  <Text fontSize="12px" color="#fff" textAlign="left" as="p">
                    0
                  </Text>
                </Box>
                <Box
                  my="0.5rem"
                  display="flex"
                  justifyContent="space-between"
                  gap="10px"
                >
                  <Rates rating={2} />{' '}
                  <Text fontSize="12px" color="#fff" textAlign="left" as="p">
                    0
                  </Text>
                </Box>
                <Box
                  my="0.5rem"
                  display="flex"
                  justifyContent="space-between"
                  gap="10px"
                >
                  <Rates rating={1} />{' '}
                  <Text fontSize="12px" color="#fff" textAlign="left" as="p">
                    0
                  </Text>
                </Box>
              </Box>

              <Box height="120px" width="2px" bgColor="#ccc" />

              <Box>
                <Box display="flex" gap="10px" alignItems="center">
                  <Rates rating={5} />
                  <Text
                    as="span"
                    p="5px"
                    bgColor="#f9f9f9"
                    borderRadius="3px"
                    borderStyle="solid"
                    borderColor="#eee #ccc #ccc #eee"
                  >
                    5.0
                  </Text>
                  <Text as="span" fontSize="12px">
                    73 reviews
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box w={{ base: '100%', md: '50%' }}>
            <Text as="p" display="flex" alignItems="center" gap="0.5rem">
              <Box>
                <FaPencil />
              </Box>{' '}
              <Text>Add Review</Text>{' '}
            </Text>
            <form>
              <FormControl my="1rem">
                <Input
                  type="text"
                  name="name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Name"
                />
              </FormControl>
              <Box>
                <FormLabel>How would you rate us?</FormLabel>
                <RadioGroup>
                  <Stack direction="row">
                    <Radio
                      value="1"
                      onChange={(e) =>
                        setFormData({ ...formData, rating: e.target.value })
                      }
                    >
                      1
                    </Radio>
                    <Radio
                      value="2"
                      onChange={(e) =>
                        setFormData({ ...formData, rating: e.target.value })
                      }
                    >
                      2
                    </Radio>
                    <Radio
                      value="3"
                      onChange={(e) =>
                        setFormData({ ...formData, rating: e.target.value })
                      }
                    >
                      3
                    </Radio>
                    <Radio
                      value="4"
                      onChange={(e) =>
                        setFormData({ ...formData, rating: e.target.value })
                      }
                    >
                      4
                    </Radio>
                    <Radio
                      value="5"
                      onChange={(e) =>
                        setFormData({ ...formData, rating: e.target.value })
                      }
                    >
                      5
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>

              <FormControl my="1rem">
                <Textarea
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  placeholder="Comment"
                />
              </FormControl>

              <Button type="submit" onClick={handleReview}>
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
