Template.alcoholLayout.events({
  'click #add_cart': function(event, template){
    Cart.add({
      relationType: 'Alcohol',
      relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.babyLayout.events({
  'click #add_cart': function(event, template){
    Cart.add({
      relationType: 'Baby',
      relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.bakeryLayout.events({
  'click #add_cart': function(event, template){
    Cart.add({
      relationType: 'Bakery',
      relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.beveragesLayout.events({
  'click #add_cart': function(event, template){
    Cart.add({
      relationType: 'Beverages',
      relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.food_cupboardLayout.events({
  'click #add_cart': function(event, template){
    Cart.add({
      relationType: 'Food_Cupboard',
      relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.frozenLayout.events({
  'click #add_cart': function(event, template){
    Cart.add({
      relationType: 'Frozen',
      relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.fruit_vegetablesLayout.events({
  'click #add_cart': function(event, template){
    Cart.add({
      relationType: 'Fruit_Vegetables',
      relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.householdLayout.events({
  'click #add_cart': function(event, template){
    Cart.add({
      relationType: 'Household',
      relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.meat_seafoodLayout.events({
  'click #add_cart': function(event, template){
    Cart.add({
      relationType: 'Meat_Seafood',
      relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.petsLayout.events({
  'click #add_cart': function(event, template){
    Cart.add({
      relationType: 'Pets',
      relationId: template.data._id._str,
      quantity: 1
    });
  }
});

Template.cartLayout.helpers({
  items: function(){
    var items = [];
    Cart.items().forEach(function(item) {
      items.push({
        _id: item.relationId,
        item: Household.findOne({
          _id: new Meteor.Collection.ObjectID(item.relationId)
        }),
        amount: item.quantity
      });
    });
    return items;
  },
  numItems: function(){
    return Cart.numItems();
  },
  totalPrice: function() {
    var price = 0;
    Cart.items().forEach(function(item) {
      var product = Household.findOne({
        _id: new Meteor.Collection.ObjectID(item.relationId)
        });
      price += item.quantity * product.price;
    });
    return price;
  }
});

Template.cartLayout.events({
  'click #pay': function(event, template){
    alert("pagando!");
  }
});
