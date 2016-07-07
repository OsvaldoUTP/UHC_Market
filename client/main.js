import { Meteor } from 'meteor/meteor';
import { ReactiVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';

Template.navbar.events({
	'click .js-show-login' : function(){
		event.preventDefault();
    let element = $('.js-container_signupbar');
    if(element.hasClass('container_signupbar-show')){
      element.removeClass('container_signupbar-show');
      element.addClass('container_signupbar');
    }
    else {
      element.removeClass('container_signupbar');
      element.addClass('container_signupbar-show');
    }
	}
});
