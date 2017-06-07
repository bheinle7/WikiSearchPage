$(document).ready(function() {
  $("#input").keyup(function() {
    var search = $("#input").val();
    var wikiSearchUrl =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      search +
      "&prop=pageimages&format=json&callback=wikiCallback";
    var wikiSearchUrl1 = "https://en.wikipedia.org/w/api.php?action=query&formatversion=2&list=search&utf8=1&srsearch=" + search;
    $.ajax({
      url: wikiSearchUrl,
      dataType: "jsonp",
      success: function(searchResults) {
        $("#img1").append('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/' + search + '.jpg/80px-' + search + '.jpg" alt="poo"/>'); //picture
        $("p:first").text(searchResults[1][0]); //title
        $("p:last").text(searchResults[2][0]); //snippet
      }
    });
  });
});
