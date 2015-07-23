

$(document).ready(
	function() {

		// Prevent a form submission with the ```event.preventDefault()``` function

	$("#blue-btn").click(function(event){
  	event.preventDefault();
  	alert("Submit prevented");
  });


// - If a user clicks "Read More" on the primary column:

//   - have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
//   - hide the "Read More" link using ```$.hide()```


// function command1(){
// 		$(#show-this-on-click").html({ "slideDown") , read less: ;.show

// 	}

// 	$(".readmore").click(command1);

	/* Read More */

    $(".readmore").click(function(event){

      event.preventDefault();
        
      $("p").slideDown();
        $("#show-this-on-click").show();
          $("#readmore").hide();
            $("#readless").show();
    });




// - If a user clicks "Read Less" on the primary column:

//   - have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```
//   - show the "Read More" link using ```$.show()```

// - Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the ```<span>``` inside that ```<p>``` slide down and hide the "Learn More" link using ```$.slideDown()``` and ```$.hide()```



	/* Read less */

    $(".readless").click(function(event){

      event.preventDefault();

      $(".hide").slideUp();
       $("#show-this-on-click").hide();
  	     $("#readmore").show();
  	       $("#readless").hide();
   });

        /* Learn More */

        $(".learnmore").click(function(event) {

            event.preventDefault();
  
          $("p span").slideDown();
          $("#learnmoretext").show();
            $(".learnmore").hide();
  });


});

