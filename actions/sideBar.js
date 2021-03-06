import { DateTime } from 'luxon';
import axios from '../lib/axios';

const timeUnit = DateTime.DATETIME_SHORT_WITH_SECONDS;

export const GET_ARTICLES_CATEGORY = 'GET_ARTICLES_CATEGORY';

export const getCategories = () => async (dispatch) => {
  const {
    data: {
      data,
    },
  } = await axios.get('/articles', {
    params: {
      sortby: 'publishedAt',
      fields: 'url,title,publishedAt',
    },
  });

  const categories = {};
  data.forEach(({ url, title, publishedAt }) => {
    if (publishedAt) {
      const dt = DateTime.fromISO(publishedAt);
      const { year, monthLong } = dt;
      const item = {
        title,
        url: `/articles/${url}`,
        publishedAt: dt.toLocaleString(timeUnit),
      };

      if (categories[year]) {
        if (categories[year][monthLong]) {
          categories[year][monthLong].push(item);
        } else {
          categories[year][monthLong] = [item];
        }
      } else {
        categories[year] = {};
        categories[year][monthLong] = [item];
      }
    }
  });

  dispatch({
    type: GET_ARTICLES_CATEGORY,
    categories,
  });
};
