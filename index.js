$(document).ready(function() {
  $("#input").keyup(function() {
    var search = $("#input").val();
    if (search.length == 0) {
      $("#wiki0").removeClass("results-border")
      $('#img0').css('background-image', 'none');
      $("#title0").empty(); //title
      $("#snippet0").empty(); //snippetS
      $("#wiki1").removeClass("results-border")
      $('#img1').css('background-image', 'none');
      $("#title1").empty(); //title
      $("#snippet1").empty(); //snippetS
      $("#wiki2").removeClass("results-border")
      $('#img2').css('background-image', 'none');
      $("#title2").empty(); //title
      $("#snippet2").empty(); //snippetS
    } else {
      var wikiSearchUrl1 = "https://en.wikipedia.org/w/api.php?action=query&formatversion=2&generator=prefixsearch&gpssearch=" + search + "&gpslimit=10&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=100&pilimit=10&redirects=&wbptterms=description&format=json&callback=wikiCallback";
      $.ajax({
        url: wikiSearchUrl1,
        dataType: "jsonp",
        success: function(searchResults) {
          $("#wiki0").addClass("results-border")
          $("#img0").empty();
          $('#img0').css('background-image', 'url(' + searchResults.query.pages[0].thumbnail.source + ')');
          $("#title0").text(searchResults.query.pages[0].title); //title
          $("#snippet0").text(searchResults.query.pages[0].terms.description[0]); //snippetS
          $("#link0").attr("href", "https://en.wikipedia.org/wiki/" + searchResults.query.pages[0].title)
          $("#wiki0").mouseover(function() {
            $("#wiki0").css("background-color", "lightblue");
          });
          $("#wiki0").mouseout(function() {
            $("#wiki0").css("background-color", "white");
          });

          $("#wiki1").addClass("results-border")
          $("#img1").empty();
          $('#img1').css('background-image', 'url(' + searchResults.query.pages[1].thumbnail.source + ')');
          $("#title1").text(searchResults.query.pages[1].title); //title
          $("#snippet1").text(searchResults.query.pages[1].terms.description[0]); //snippetS
          $("#link1").attr("href", "https://en.wikipedia.org/wiki/" + searchResults.query.pages[1].title)
          $("#wiki1").mouseover(function() {
            $("#wiki1").css("background-color", "lightblue");
          });
          $("#wiki1").mouseout(function() {
            $("#wiki1").css("background-color", "white");
          });



          $("#wiki2").addClass("results-border")
          $("#img2").empty();
          $('#img2').css('background-image', 'url(' + searchResults.query.pages[2].thumbnail.source + ')');
          $("#title2").text(searchResults.query.pages[2].title); //title
          $("#snippet2").text(searchResults.query.pages[2].terms.description[0]); //snippetS
          $("#link2").attr("href", "https://en.wikipedia.org/wiki/" + searchResults.query.pages[2].title)
          $("#wiki2").mouseover(function() {
            $("#wiki2").css("background-color", "lightblue");
          });
          $("#wiki2").mouseout(function() {
            $("#wiki2").css("background-color", "white");
          });
        }
      });
    }
  });
});
