import { Box, Img, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectAllReviews } from '../../state/reviewsSlice';
import { Rates, ThumbsDown, ThumbsUp } from '../../components';
import avatar from '../../assets/avatar.png';

const ReviewsList = () => {
  const { reviews } = useSelector(selectAllReviews);

  return (
    <Box>
      {reviews.map((review) => (
        <Box key={review.id} my="1rem" p="1.5rem 0.5rem">
          <Box display="flex" gap="10px">
            <Box>
              <Img src={avatar} alt="avatar" />
            </Box>
            <Box>
              <Box mb="0.5rem" fontWeight="700" color="#fff">
                {review.name}
              </Box>
              <Rates rating={review.rating} />
              <Box my="1rem">
                <Text as="span" fontSize='12px' fontWeight="600">
                  Comment:
                </Text>{' '}
                {'   '} <Text as="span">{review.comment}</Text>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="end" gap="15px">
            <Box display="flex" gap="5px">
              <ThumbsDown />
              <Text as="span" fontSize="12px" color="#fff">
                0
              </Text>
            </Box>

            <Box display="flex" gap="5px">
              <ThumbsUp />
              <Text as="span" fontSize="12px" color="#fff">
                0
              </Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewsList;
