FlowRouter.route('/',{
  name: 'home',
  action(){
    BlazeLayout.render('homeLayout');
  }
});

FlowRouter.route('/cart',{
  name: 'cart',
  action(){
    BlazeLayout.render('mainLayout', {main: 'cartLayout'});
  }
});

/*FlowRouter para el sign up¿?*/

/*FlowRouter para el log in¿?*/

FlowRouter.route('/alcohol',{
  name: 'alcohol',
  action(){
    BlazeLayout.render('mainLayout', {main: 'alcoholLayout'});
  }
});

FlowRouter.route('/baby',{
  name: 'baby',
  action(){
    BlazeLayout.render('mainLayout', {main: 'babyLayout'});
  }
});

FlowRouter.route('/bakery',{
  name: 'bakery',
  action(){
    BlazeLayout.render('mainLayout', {main: 'bakeryLayout'});
  }
});

FlowRouter.route('/beverages',{
  name: 'beverages',
  action(){
    BlazeLayout.render('mainLayout', {main: 'beveragesLayout'});
  }
});

FlowRouter.route('/food_cupboard',{
  name: 'food_cupboard',
  action(){
    BlazeLayout.render('mainLayout', {main: 'food_cupboardLayout'});
  }
});

FlowRouter.route('/frozen',{
  name: 'frozen',
  action(){
    BlazeLayout.render('mainLayout', {main: 'frozenLayout'});
  }
});

FlowRouter.route('/fruit_vegetables',{
  name: 'fruit_vegetables',
  action(){
    BlazeLayout.render('mainLayout', {main: 'fruit_vegetablesLayout'});
  }
});

FlowRouter.route('/household',{
  name: 'household',
  action(){
    BlazeLayout.render('mainLayout', {main: 'householdLayout'});
  }
});

FlowRouter.route('/meat_seafood',{
  name: 'meat_seafood',
  action(){
    BlazeLayout.render('mainLayout', {main: 'meat_seafoodLayout'});
  }
});

FlowRouter.route('/pets',{
  name: 'pets',
  action(){
    BlazeLayout.render('mainLayout', {main: 'petsLayout'});
  }
});
