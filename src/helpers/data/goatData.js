const goats = [
  {
    id: 'goat1',
    name: 'Billy the Kid',
    age: 2,
    description: 'I like Yoga!',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg',
    isBusy: true,
  },
  {
    id: 'goat2',
    name: 'Wooly',
    age: 85,
    description: 'I like eating grass.',
    imgUrl: 'https://pbs.twimg.com/profile_images/980547001166295041/eBs20xF4.jpg',
    isBusy: true,
  },
  {
    id: 'goat3',
    name: 'Vincent van Goat',
    age: 18,
    description: 'SHHHHHHH',
    imgUrl: 'https://images.unsplash.com/photo-1573578160998-4f4c7b023aec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    isBusy: false,
  },
  {
    id: 'goat4',
    name: 'Butter',
    age: 1,
    description: 'RAWRRRR',
    imgUrl: 'https://i.ytimg.com/vi/cEJy2q27hVk/maxresdefault.jpg',
    isBusy: false,
  },
  {
    id: 'goat5',
    name: 'Ramsey',
    age: 0.5,
    description: 'Nope',
    imgUrl: 'https://www.psephizo.com/wp-content/uploads/2018/09/1438297793139.jpeg',
    isBusy: false,
  },
];

const getGoats = () => goats;
// THIS IS TO CHANGE DATE
const takeGoat = (goatId) => {
  goats.forEach((response) => {
    if (response.id === goatId) {
      response.isBusy = true;
    }
  });
};

export default { getGoats, takeGoat };
