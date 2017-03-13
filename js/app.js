// Select and append to menu
var $select=$("<select></select>");
$("#menu").append($select);

// Cycle over menu links
$("#menu a").each(function(){
	var $anchor=$(this);

	// Options
	var $option=$("<option></option>");


	// Selected Options based on Page
	if($anchor.parent().hasClass("selected")) {
		$option.prop("selected", true);
	}

	// Value is HREF
	$option.val($anchor.attr("href"));

	// Options text is the link text
	$option.text($anchor.text());

	// Append option to select
	$select.append($option);
});

	// Bind listener for select location
	$select.change(function () {
		window.location=$select.val();
	})