Trello.Components.Card = function (data ,  context) {
  if(!data){
    throw Error("Constructor Argument missing.");
  }
  this.data = data;
  this.data.context = context;
  Trello.Components.Factory.createCard(this);
  this.content = data.content || 'Add note !';
  this.category = data.category || 0;
  this.remove = function(){
    
  }

  this.init = function(){
    
  }
};