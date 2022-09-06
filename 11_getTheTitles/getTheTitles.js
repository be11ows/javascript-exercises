const getTheTitles = function(books) {
    let titlesArr = [];
    for(let i = 0; i < books.length; i++){
        titlesArr.push(books[i].title)
    }
    return titlesArr;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
