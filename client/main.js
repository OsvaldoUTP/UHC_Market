import { Meteor } from 'meteor/meteor';
import { ReactiVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';

Template.navbar.events({
	'click .js-show-signUp' : function(){
		event.preventDefault();
		let element = $('.js-container_signUpBar');
		if (element.hasClass('container_signUpBar-show')) {
			element.removeClass('container_signUpBar-show');
			element.addClass('container_signUpBar');
			document.getElementById('container_register').style.display = 'none';
		}
		else {
			element.removeClass('container_signUpBar');
			element.addClass('container_signUpBar-show');
			document.getElementById('container_register').style.display = 'block';
		}
	}
});

Template.navbar.events({
	'click .js-show-login': function() {
		event.preventDefault();
		let element = $('.js-container_signUpBar');
		if (element.hasClass('container_signUpBar-show')) {
			element.removeClass('container_signUpBar-show');
			element.addClass('container_signUpBar');
			document.getElementById('container_login').style.display = 'none';
		}
		else {
			element.removeClass('container_signUpBar');
			element.addClass('container_signUpBar-show');
			document.getElementById('container_login').style.display = 'block';
		}
	}
});
