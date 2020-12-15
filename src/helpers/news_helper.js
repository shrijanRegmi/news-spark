const constructNews = (id, category, title, img, short, long, date) => {
  return {
    id,
    category: getCategoryTitle(category),
    title,
    img,
    short,
    long,
    date,
  };
}

const getCategoryTitle = (category) => {
  switch (category) {
    case 1:
      return 'विशेष';
    case 2:
      return 'राजनीतिक';
    case 3:
      return 'मनोरन्जन';
    case 4:
      return 'खेल';
    case 5:
      return 'व्यापार';
    default:
      return '';
  }
}

const getCategoryIndex = (category) => {
  switch (category) {
    case 'विशेष':
      return 1;
    case 'राजनीतिक':
      return 2;
    case 'मनोरन्जन':
      return 3;
    case 'खेल':
      return 4;
    case 'व्यापार':
      return 5;
    default:
      return 0;
  }
}

export {
  constructNews,
  getCategoryTitle,
  getCategoryIndex,
}