Trello.Components.Category = function (data) {
  if (!data) {
    throw Error("Constructor Argument missing.");
  }

  var _this = this;
  var _cardList = [];
  var _fill_cards = function () {
    var cards = _this.data.cards || [],
      index = 0;
    for (; index < cards.length; index++) {
      _this.addCard(cards[index], _this.data.id);
    }
    return _cardList.slice(0);
  };
  var _attach_event = function () {
    document.getElementById(_this.data.id).getElementsByTagName("button")[0].addEventListener('click', function (event) {
      _this.addCard({}, _this.data.id);
    });
  }

  this.data = data;
  this.init = function (data) {
    _this.data.id = data.id;
    _fill_cards();
    _attach_event();
  };


  this.addCard = function (card, context) {
    if (card && context) {
      _cardList.push(new Trello.Components.Card(card, context));
    }
    return card ? true : false;
  };
  this.removeCard = function (card) {
    return false;
  };
  this.getCards = function () {
    return _cardList.slice(0);
  };
  this.emptyCard = function () {
    _cardList.forEach(function (index, card) {
      card.remove();
    });
    _cardList = [];
  }

  Trello.Components.Factory.createCategory(this.init);
};
