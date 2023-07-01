import Stared from '../assets/stared.png';
import UnStared from '../assets/unstared.png';
import PropTypes from 'prop-types'
import { Box, Img, Text } from '@chakra-ui/react';

const Rates = ({ rating }) => {
  return (
    <>
      <Box display="flex" gap='0.2rem'>
        {[...Array(5)].map((_, index) => (
          <Text as="span" key={index}>
            {rating > index ? (
              <Img src={Stared} alt="stared" />
            ) : (
              <Img src={UnStared} alt="stared" />
            )}
          </Text>
        ))}
      </Box>
    </>
  );
};

Rates.propTypes = {
  rating: PropTypes.any
}


export default Rates