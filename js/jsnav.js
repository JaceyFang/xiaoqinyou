$(function(){

function flel1(el){
  var thesub=$(el).find('.tablnks');
if(thesub.length){
$('.navmod').addClass('now');
}
}/*0.5*/

function flel0(el){
  var thesub=$(el).find('.tablnks');
if(thesub.length){
$('.navmod').removeClass('now');
}
}/*0.5*/

var navitms=$('.navitm');
navitms.length&&navitms.each(function(i,el){

$(el).hover(
function(){flel1(el);},function(){flel0(el);}
);


})

});

