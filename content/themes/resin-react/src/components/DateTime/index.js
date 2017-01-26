import React from 'react';
import moment from 'moment';

const DateTime = (props) => {
  return <span>{moment(props.date).format('DD MMM YYYY')}</span>;
};

export default DateTime;
