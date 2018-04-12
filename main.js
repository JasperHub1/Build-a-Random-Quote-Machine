// $(document).ready(function(){
// 	$("#get-another-quote-button").on("click", function() {
// 	  $("body").css("background-color", "yellow");
// 	});
// });



// $(document).ready(function(){
// 	$("#get-another-quote-button").click(function() {
// 		// $("body").css("background-color", "yellow");
// 		$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
// 		  $("quote-content").append(a[0].content + "<p>— " + a[0].title + "</p>")
// 		});
// 	});
// });

$(document).ready(function(){
	$("#get-another-quote-button").on("click", function() {
		$("body").css("background-color", "yellow");
		alert("The paragraph was clicked.");
	});
});


// $(document).ready(function(){
// 	$("#get-another-quote-button").click(function() {
// 		$("body").css("background-color", "yellow");
// 	    e.preventDefault();
// 	    $.ajax({
// 	      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
// 	      success: function(data) {
// 	        var post = data.shift(); // The data is an array of posts. Grab the first one.
// 	        $('#quote-title').text(post.title);
// 	        $('#quote-content').html(post.content);

// 	        // If the Source is available, use it. Otherwise hide it.
// 	        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
// 	          $('#quote-source').html('Source:' + post.custom_meta.Source);
// 	        } else {
// 	          $('#quote-source').text('');
// 	        }
// 	      },
// 	      cache: false
// 	    });
// 	});
});		