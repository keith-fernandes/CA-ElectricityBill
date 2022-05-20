//Executes when load
window.onload = function() {
    const billForm = document.getElementById('calculate-bill-form')
    billForm.addEventListener('submit', function(e) {
        e.preventDefault()
        //collects info from html
        const electricityUnits = document.getElementById('electricity-units').value;
        const billingPeriod = document.getElementById('billing-period').value;

        var totalLessVat = 0,
            flatRate = 0.2,
            standardCharge = 0.04;
            vat = 13.5;
        // calculates amount excluding VAT
        totalLessVat = ((parseFloat(electricityUnits) * (parseFloat(flatRate))) + (parseFloat(billingPeriod) * (parseFloat(standardCharge))));
        // calculates total to be paid, including VAT
        totalPayable = parseFloat(totalLessVat) + parseFloat(totalLessVat)* vat/100;

        //displays the result table with the billing information
        document.getElementById('total-less-vat').textContent = "€ " + parseFloat(totalLessVat).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('total-pay').textContent = "€ " + parseFloat(totalPayable).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('vat').textContent = "€ " + parseFloat(parseFloat(totalLessVat)* vat/100).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('table-title').style.display = 'block';
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
     })
     //resets the fields to redo the calculation with new information
    billForm.addEventListener('reset', function(e) {
            document.getElementById('total-less-vat').textContent = "";
            document.getElementById('total-pay').textContent = "";
            document.getElementById('vat').textContent = "";
            document.getElementById('table-title').style.display = 'none';
            document.getElementById('result').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';
    })
}

function fullscreenAlert(){
alert("This application will work better in full screen. Enjoy it.");
}