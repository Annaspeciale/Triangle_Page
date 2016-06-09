$(document).ready(function() {
  $("form#triangle").submit(function) {
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    $("output").text(result);
  });
});
