import axios from 'axios';
import moment from 'moment';

const rootUrl = `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}`;
const accessToken = `&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;

const nowDate = moment().format('YYYY-MM-DD');

export const FETCH_TRIPS = 'FETCH_TRIPS';

export const fetchTrips = (order) => {
  const orderQuery = order ? `&order=${order}` : null;
  const request =
  axios.get(`${rootUrl}/entries?${orderQuery}&fields.startDate[gte]=${nowDate}&content_type=trip${accessToken}`);
  console.log(nowDate);
  console.log(orderQuery);

  return {
    type: FETCH_TRIPS,
    payload: request,
  };
};

export const FETCH_TRIP = 'FETCH_TRIP';

export const fetchTrip = (id) => {
  const request = axios.get(`${rootUrl}/entries/${id}?${accessToken}`);
  return {
    type: FETCH_TRIP,
    payload: request,
  };
};
