var EXPAND_ALL_STRING = "[expand-all]";
var COLLAPSE_ALL_STRING = "[collapse-all]";
var EXPAND_STRING = "expand";
var COLLAPSE_STRING = "collapse";

$(document).ready(function(){
    $(".detailtext").hide();

    $( "div[id=expand]" ).click(function() {
        if($(this).text() == COLLAPSE_STRING) {
            $(this).next("div").toggle("slow");
            $(this).text(EXPAND_STRING);
        }
        else {
            $(this).next("div").toggle("slow");
            $(this).text(COLLAPSE_STRING);
        }
        if (allInState(COLLAPSE_STRING)) {
            $(".expand-all").text(COLLAPSE_ALL_STRING);
        } else if (allInState(EXPAND_STRING)) {
            $(".expand-all").text(EXPAND_ALL_STRING);
        }
    });

    $( ".expand-all" ).click(function() {
        if($(this).text() == COLLAPSE_ALL_STRING) {
            $("div[id=expand]").each(function(index) {
                if ($(this).text() == COLLAPSE_STRING) {
                    $(this).click();
                }
            });
            $(this).text(EXPAND_ALL_STRING);
        }
        else {
            $("div[id=expand]").each(function(index) {
                if ($(this).text() == EXPAND_STRING) {
                    $(this).click();
                }
            });
            $(this).text(COLLAPSE_ALL_STRING);
        }
    });

});

function allInState(state) {
    var result = true;
    $("div[id=expand]").each(function(index) {
        if ($(this).text() != state) {
            result = false;
        }
    });
    return result;
}
