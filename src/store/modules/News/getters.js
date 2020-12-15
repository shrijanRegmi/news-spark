import { getCategoryIndex } from '../../../helpers/news_helper';

const getters = {
  getNews: (state) => state.news,
  getInteresting: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 0),
  getFeatured: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 1),
  getPolitics: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 2),
  getEntertainment: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 3),
  getSports: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 4),
  getBusiness: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 5),
}

export default getters;