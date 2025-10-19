console.log('Check');

let amountRange = $('#amount-range');
let amountOutput = $('#amount-output');
let amountRangedArea = $('#amount-ranged-area');

let monthRange = $('#month-range');
let monthOutput = $('#month-output');
let monthRangedArea = $('#month-ranged-area');

let interestRange = $('#interest-range');
let interestOutput = $('#interest-output');
let interestRangedArea = $('#interest-ranged-area');

let monthlyPayment = $('#monthly-payment');
let totalPayment = $('#total-payment');
let totalInterest = $('#total-interest');


var link = document.getElementById('generate-pdf-link');
console.log(link);
var linkHref = 'generate-load-pdf';
console.log(link);
console.log(linkHref);
console.log('Check first');
rangeActive(amountRangedArea, amountRange, amountOutput);
rangeActive(monthRangedArea, monthRange, monthOutput);
rangeActive(interestRangedArea, interestRange, interestOutput);

showResult();


////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    console.log(link);
    link.setAttribute('href', linkHref + `?amount=${principal}&month_range=${payments}&percent=${interestRange.val() / 100}`)
})

function showResult() {
    console.log("showResult");
    let principal = amountRange.val();
    let interest = interestRange.val() / 100 / 12;
    let payments = monthRange.val();

    let x = Math.pow(1 + interest, payments);
    let monthly = (principal * x * interest) / (x - 1);


    // console.log([amountRange.val(), interestRange.val(), monthRange.val()])

    link.setAttribute('href', linkHref + `?amount=${principal}&month_range=${payments}&percent=${interestRange.val() / 100}`)


    monthlyPayment.html($.number(monthly.toFixed(0), 0, ',', ' '));
    totalPayment.html($.number((monthly * payments).toFixed(0), 0, ',', ' '));
    totalInterest.html($.number(((monthly * payments) - principal).toFixed(0), 0, ',', ' '));
}

function updateOutput(area, input, output) {
    // Format amount output value
    let val = parseInt(amountOutput.val().replace(/ /g, ''));
    if (val >= input.attr('min') || val <= input.attr('max')) {
        output.val($.number(input.val(), 0, ' ', '.'));
    }
}

function updateAreaWidth(area, range, output) {
    console.log('updateAreaWidth');
    let val;
    if (output.val() !== '') {
        val = parseInt(output.val().replace(/ /g, ''));

        if (val >= range.attr('min') && val <= range.attr('max')) {
            area.width(100 * (val - range.attr('min')) / (range.attr('max') - range.attr('min')) + '%');
        } else if (val < range.attr('min')) {
            area.width('0%');
        } else if (val > range.attr('max')) {
            area.width('100%');
        }

    } else {
        area.width(100 * (range.val() - range.attr('min')) / (range.attr('max') - range.attr('min')) + '%');
    }

}

function updateRangeValue(range, value) {
    console.log('updateRangeValue');
    let val = parseInt(value.val().replace(/ /g, ''));

    if (val >= range.attr('min') && val <= range.attr('max')) {
        range.val(val);
    } else if (val < range.attr('min')) {
        range.val(range.attr('min'));
    } else if (val > range.attr('max')) {
        range.val(range.attr('max'));
    }
}

function rangeActive(area, input, output) {
    console.log('Check');
    updateOutput(area, input, output);
    updateAreaWidth(area, input, output);

    input.on('input', function () {
        updateOutput(area, input, output);
        updateAreaWidth(area, input, output);
        showResult();
    });

    output.on("input", function () {

        $(this).val($.number($(this).val(), 0, ',', ' '))

        updateAreaWidth(area, input, output);
        updateRangeValue(input, output);

        showResult();
    });
}
