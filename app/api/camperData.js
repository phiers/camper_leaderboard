import axios from 'axios';

const URL_RECENT = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const URL_ALLTIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

function getAlltimeData() {
  return axios.get(URL_ALLTIME);
}

function getRecentData() {
  return axios.get(URL_RECENT);
}

function getData() {
  return axios.all([getAlltimeData(), getRecentData()])
    .then(axios.spread((a, b) => {
      const data = [];
      a.data.forEach(item => data.push(item));
      const stringArr = a.data.map(item => JSON.stringify(item));
      b.data.forEach((item) => {
        if (!stringArr.includes(JSON.stringify(item))) {
          data.push(item);
        }
      });
      return data;
    }));
}
// the export function is a promise
export default getData;
