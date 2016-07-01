window.Trello.categoriesCount = 0;
window.Trello.cardCount = 0;

Trello.Components.Factory = {
  getPartial: function (url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback && callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
  },

  readData: function () {

  },

  writeData: function () {

  },

  createCategory: function (callback) {
    Trello.Components.Factory.getPartial('../partials/categories.html', function (response) {
      response = response.replace(/{{id}}/g, Trello.categoriesCount);
      var element = document.createElement("div");
      element.innerHTML = response;
      document.getElementsByClassName("main-container")[0].appendChild(element.firstChild);
      callback && callback({id: 'droppable-'.concat(Trello.categoriesCount)});
      Trello.categoriesCount++;
    });
  },

  createCard: function (options) {
    Trello.Components.Factory.getPartial('../partials/card.html', function (response) {
      response = response.replace(/{{id}}/g, Trello.cardCount);
      var element = document.createElement("div");
      element.innerHTML = response;
      document.getElementById(options.data.context).appendChild(element.firstChild);
      options.data.id = "draggable-".concat(Trello.cardCount);
      options.init && options.init();
      Trello.cardCount++;
    });
  },

  createHeader: function () {
    Trello.Components.Factory.getPartial('../partials/header.html', function (response) {
      document.getElementsByTagName('header')[0].innerHTML = response;
    });
  },

  createSection: function () {
    Trello.Components.Factory.getPartial('../partials/section.html', function (response) {
      document.getElementsByTagName('section')[0].innerHTML = response;
    });
  },

  allowDrop: function (ev) {
    ev.preventDefault();
  },
  onDrop: function (ev) {
    console.log('drop event ', ev);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text"),
      dropElement = document.getElementById(data);
    ev.target.appendChild(dropElement);
  },

  drag: function (ev) {
    console.log('drag event', ev);
    ev.dataTransfer.setData("text", ev.target.id);
  },

  addDraggable: function (dest) {
    var id = 'c'.concat(Trello.cardCount),
      target = document.getElementById(dest),
      newEle = document.createElement('div');
    newEle.innerHTML += getNewDraggable(id);
    target.appendChild(newEle.firstChild);
    Trello.cardCount++;
  }
}