/**
 * Created by Alex.Simkovic on 19.02.2015.
 */

function setSearchVerticallyCenter() {
  var h = $(".form-summoner_search").innerHeight();
  $(".form-summoner_search").css("margin-top",-(h/2) + "px");
}

$(document).ready(function(e){
  $('.search-panel .dropdown-menu').find('a').click(function(e) {
    e.preventDefault();
    var param = $(this).attr("href").replace("#","");
    var concept = $(this).text();
    $('.search-panel span#search_concept').text(concept);
    $('.input-group #search_param').val(param);
  });

  setSearchVerticallyCenter();
});


