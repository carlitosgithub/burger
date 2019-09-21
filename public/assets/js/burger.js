
$(document).ready(function() { 
	$(".devour").on("click", function() {
		var id = $(this).data("burgerid");

		var updatedBurger = {
			devoured: true
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: updatedBurger
		}).then(function() {
			console.log("updated id ", id);
			location.reload();
			});
	});
	$(".delete-burger").on("click", function(event) {
		event.preventDefault();
		var id = $(this).data("id");
		console.log(id)
		
        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});
