window.onload = init;

var data = {
  boards: [
    {
      meta: {
        categories: 4
      },
      payload: [
        {
          name: 'In list',
          cards: [{
            content: 'First Finish this off',
            type: 'text'
          }, {
            content: 'Second Finish this off',
            type: 'text'
          }]
        },
        {
          name: 'Doing',
          cards: [{
            content: 'First Finish this off',
            type: 'text'
          }, {
            content: 'Second Finish this off',
            type: 'text'
          }]
        },
        {
          name: 'In Testing',
          cards: [{
            content: 'This is the first thing to test',
            type: 'text'
          }, {
            content: 'Second thing is also in the testing',
            type: 'text'
          }]
        },
        {
          name: 'Done',
          cards: [{
            content: 'Finally first thing has been done',
            type: 'text'
          }, {
            content: 'Second is also Finished',
            type: 'text'
          }]
        }
      ]
    }
  ]
};

function init() {
  console.log('application init');
  Trello.Components.Factory.createHeader();
  Trello.Components.Factory.createSection();
  var categories = data.boards[0].payload;
  for (var key in categories) {
    new Trello.Components.Category(categories[key]);
  }
}

function createNewPage() {
  new Trello.Components.Category({name: 'New list !', cards: []});
}