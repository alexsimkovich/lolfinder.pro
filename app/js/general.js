/**
 * Created by Alex.Simkovic on 19.02.2015.
 */
$(function(){

  $(".radio-inline").find(".radio-inline_box:first input").trigger("click");
  $(".search-summoner_group").focusin(function() {
    $(this).find(".search-summoner_placeholder").hide();
  });

  $(".search-summoner_group").focusout(function() {
    $(this).find(".search-summoner_placeholder").show();
  });
});

