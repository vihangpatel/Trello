Trello.Components.Card = function (data, context) {
  if (!data) {
    throw Error("Constructor Argument missing.");
  }
  var _this = this;
  this.data = data;
  this.data.context = context;
  Trello.Components.Factory.createCard(this);
  this.content = data.content || 'Add note !';
  this.category = data.category || 0;
  this.remove = function () {

  }

  this.init = function () {
    document.getElementById(_this.data.id).getElementsByTagName("textarea")[0].value = _this.data.content;
  }
};