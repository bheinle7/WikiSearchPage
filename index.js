$(document).ready(function() {
  $("#input").keyup(function() {
    var search = $("#input").val();
    var wikiSearchUrl =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      search +
      "&prop=pageimages&format=json&callback=wikiCallback";
    var wikiSearchUrl1 = "https://en.wikipedia.org/w/api.php?action=query&formatversion=2&generator=prefixsearch&gpssearch="+search+"&gpslimit=10&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=100&pilimit=10&redirects=&wbptterms=description&format=json&callback=wikiCallback";
    $.ajax({
      url: wikiSearchUrl1,
      dataType: "jsonp",
      success: function(searchResults) {
        $("#wiki0").addClass("results-border")
        $("#img0").empty();
        $('#img0').css('background-image', 'url(' + searchResults.query.pages[0].thumbnail.source + ')');
        $("#title0").text(searchResults.query.pages[0].title); //title
        $("#snippet0").text(searchResults.query.pages[0].terms.description[0]); //snippetS
      }
    });
  });
});
