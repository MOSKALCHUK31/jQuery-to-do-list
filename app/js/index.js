var tasks = [];

$(".btn-add").on("click",function(){

  $(".container .notif").show();
  setTimeout(function(){
    $(".container .notif").hide();
  }, 1500);

  var task = $("#task").val();
  tasks.push(task);

});

$(".btn-show").on("click", function(){
  var list = "";

  for(var i = 0; i < tasks.length; i++)
    list += "<li>Задание №" + (i + 1) + ": " + tasks[i] + "</li>";

  $("#list").html(list);
});

$("#task").on("focus", function() {
  $("#task").addClass("active");
});

$("#task").on("blur", function() {
  $("#task").removeClass("active");
});
