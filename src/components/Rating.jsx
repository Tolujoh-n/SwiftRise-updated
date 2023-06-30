import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Star from './Star';

// eslint-disable-next-line react/prop-types
const Rate = ({ count, rating, color, onRating }) => {
const [hoverRating, setHoverRating] = useState(0);

    const getColor = (index) => {
        if (hoverRating >= index) {
            return color.filled;
        } else if (!hoverRating && rating >= index) {
            return color.filled;
        }

        return color.unfilled
    }

    const starRating = useMemo(() => {
        return Array(count)
        .fill(0)
        .map((_, i) => i + 1)
        .map((idx) => (
            <Star
              key={idx}
              className="cursor-pointer"
              icon="star"
              onClick={() => onRating(idx)}
              style={{ color: getColor(idx) }}
              onMouseEnter={() => setHoverRating(idx)}
              onMouseLeave={() => setHoverRating(0)}
            />
        ))
    }, [count, rating, hoverRating]);

    return (
      <>
        <div>{starRating}</div>;
      </>
    );

};

Rate.propTypes = {
count: PropTypes.number,
rating: PropTypes.number,
onChange: PropTypes.func,
color: {
filled: PropTypes.string,
unfilled: PropTypes.string,
onRating: PropTypes.any
},
};

Rate.defaultProps = {
count: 5,
rating: 0,
color: {
filled: "#f5eb3b",
unfilled: "#dcdcdc",
},
}

export default Rate;
 