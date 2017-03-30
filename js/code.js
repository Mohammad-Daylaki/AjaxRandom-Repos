//$.get(url,function(data){
//})

$(document).ready(function(){
  $('#searchhLink').click(ajaxRequest);
})
function ajaxRequest(e) {
  e.preventDefault();
  var qry=$('txtSearch').val();
  $.get('https://api.github.com/search/repositories?q='+qry,function(data){
        $.each(data.items, function(index,itm){
          $('div.result').append(`<a href='${itm.html_url}'>${itm.name}<br>`);
        })
  })
}
