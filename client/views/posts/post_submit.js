Template.postSubmit.events({
	'submit form': function(event) {
		event.preventDefault();

		var post = {
			url: $(event.target).find('[name=url]').val(),
			title: $(event.target).find('[name=title]').val(),
			message: $(event.target).find('[name=message]').val()
		}

		Meteor.call('post', post, function(error, id) {
			if (error) {
				throwError(error.reason);

				if (error.error === 302)
					Router.go('postsPage', {_id: error.details})
			} else {
				
				Router.go('postPage', {_id: id});
			}
		});
	}
});