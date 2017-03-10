// Select and append to menu
var $select=$("<select></select>");
$("#menu").append($select);

// Cycle over menu links
$("#menu a").each(function () {
	var $anchor=$(this);

	// Options
	var $option=$("<option></option>");


	// Value is HREF
	$option.val($anchor.attr("href"));

	// Options text is the link text
	$option.text($anchor.text());

	// Append option to select
	$select.append($option);
});

// Button for select location

// Bind click to button

	// Go to select location

// Modify CSS to hide links on small widths and show button and select

// Also hides select button on larger widths