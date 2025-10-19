let amount = $('#amount');
let from = $('#from');
let to = $('#to');
let result = $('#result');
let switcher = $('#switcher');
let fromCont = $('#from-cont');
let toCont = $('#to-cont');



showResult();

$("body").on('change', "#from", function() {
	showResult();
});

$("body").on('change', "#to", function() {
  showResult();
});

amount.on('input', function() {
	showResult();
});

switcher.on('click', function() {
	changeFromTo();
	showResult();
});
function roundTo(value, places){
    var power = Math.pow(10, places);
    return Math.round(value * power) / power;
}
function showResult() {
	let rate;
	if (to.attr('id') == 'to') {
		rate = from.val() + to.val();
	} else {
		rate = to.val() + from.val();
	}
	let input = $.number( amount.val(), 0, ',', ' ' );
	input = parseInt(input.replace(/ /g,''));
	let results = rates[rate] * input;
    result.html(roundTo(results,2).toLocaleString());
}
function changeFromTo() {
	if (to.attr('id') == 'to') {
		fromCont.html( to.get() );
		to.attr('id', 'from');
		toCont.html( from.get() );
		from.attr('id', 'to');
	} else {
		fromCont.html( from.get() );
		to.attr('id', 'to');
		toCont.html( to.get() );
		from.attr('id', 'from');
	}
}
