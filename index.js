(function() {
$("form").submit(function(event){
    return false;
});
$("form :input").bind("change keyup click", function(event){
    var InvestCalc = {};
    InvestCalc.impostoRenda = ($("input[name='imposto-renda']:checked").val() == true);
    InvestCalc.prazo = parseInt($("input[name='prazo']:checked").val());
    InvestCalc.taxa =  parseFloat($("input[name='taxa']").val());

    if (InvestCalc.impostoRenda) {
        InvestCalc.tributado = [
            InvestCalc.taxa,
            InvestCalc.taxa,
            InvestCalc.taxa,
            InvestCalc.taxa,
        ];
        InvestCalc.isento = [
            InvestCalc.taxa * (1 - 0.225),
            InvestCalc.taxa * (1 - 0.20),
            InvestCalc.taxa * (1 - 0.175),
            InvestCalc.taxa * (1 - 0.15),
        ];
    } else {
        InvestCalc.isento = [
            InvestCalc.taxa,
            InvestCalc.taxa,
            InvestCalc.taxa,
            InvestCalc.taxa,
        ];
        InvestCalc.tributado = [
            InvestCalc.taxa / (1 - 0.225),
            InvestCalc.taxa / (1 - 0.20),
            InvestCalc.taxa / (1 - 0.175),
            InvestCalc.taxa / (1 - 0.15),
        ];
    }

    $("#isento-0").html(accounting.formatMoney(InvestCalc.isento[0], '', 2, ".", ","));
    $("#isento-6").html(accounting.formatMoney(InvestCalc.isento[1], '', 2, ".", ","));
    $("#isento-12").html(accounting.formatMoney(InvestCalc.isento[2], '', 2, ".", ","));
    $("#isento-24").html(accounting.formatMoney(InvestCalc.isento[3], '', 2, ".", ","));

    $("#tributado-0").html(accounting.formatMoney(InvestCalc.tributado[0], '', 2, ".", ","));
    $("#tributado-6").html(accounting.formatMoney(InvestCalc.tributado[1], '', 2, ".", ","));
    $("#tributado-12").html(accounting.formatMoney(InvestCalc.tributado[2], '', 2, ".", ","));
    $("#tributado-24").html(accounting.formatMoney(InvestCalc.tributado[3], '', 2, ".", ","));


    console.log(InvestCalc.isento);

});

})();
