import { Meteor } from 'meteor/meteor';

Meteor.subscribe('alcohol');
Meteor.subscribe('baby');
Meteor.subscribe('bakery');
Meteor.subscribe('beverages');
Meteor.subscribe('food_cupboard');
Meteor.subscribe('frozen');
Meteor.subscribe('fruit_vegetables');
Meteor.subscribe('household');
Meteor.subscribe('meat_seafood');
Meteor.subscribe('pets');

Template.alcoholLayout.helpers({
  alcohol: ()=>{
    return Alcohol.find();
  }
});

Template.babyLayout.helpers({
  baby: ()=>{
    return Baby.find();
  }
});

Template.bakeryLayout.helpers({
  bakery: ()=>{
    return Bakery.find();
  }
});

Template.beveragesLayout.helpers({
  beverages: ()=>{
    return Beverages.find();
  }
});

Template.food_cupboardLayout.helpers({
  food_cupboard: ()=>{
    return Food_Cupboard.find();
  }
});

Template.frozenLayout.helpers({
  frozen: ()=>{
    return Frozen.find();
  }
});

Template.fruit_vegetablesLayout.helpers({
  fruit_vegetables: ()=>{
    return Fruit_Vegetables.find();
  }
});

Template.householdLayout.helpers({
  household: ()=>{
    return Household.find();
  }
});

Template.meat_seafoodLayout.helpers({
  meat_seafood: ()=>{
    return Meat_Seafood.find();
  }
});

Template.petsLayout.helpers({
  pets: ()=>{
    return Pets.find();
  }
});
