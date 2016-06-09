$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var sum1 = side1 + side2;
    var sum2 = side2 + side3;
    var sum3 = side1 + side3;
    var result;

    if (sum1 <= side3 || sum2 <= side1 || sum3 <= side2) {
      result = "not a triangle";
    } else if (side1 === side2 && side2 === side3) {
      result = "equilateral";
    } else if (side1 === side2 || side2 === side3 || side3 === side1) {
      result = "isosceles";
    } else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
      result = "scalene"
    }

    $("#output").text(result);
  });
});
