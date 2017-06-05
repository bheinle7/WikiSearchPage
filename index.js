m$(document).ready(function() {
  $("#city").keyup(function() {
    var search = $("#city").val();
    //alert(search);
    var wikiSearchUrl =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      search +
      "&format=json&callback=wikiCallback";
    $.ajax({
      url: wikiSearchUrl,
      dataType: "jsonp",
      success: function(searchResults) {
        $("#wiki0").html(searchResults[1][1]);
        $("#wiki1").html(searchResults[1][2]);
        $("#wiki2").html(searchResults[1][3]);
      }
    });
  });
});
