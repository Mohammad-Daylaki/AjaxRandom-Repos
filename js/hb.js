$(document).ready(function(){
  var context = {title: "MY NEW POST", body: "this is my first post"}
  var source = $('#firstTemplate').html()

  var funk = Handlebars.compile(source)
  $('body').append(funk(context))

  var data={
          people: [
            {firstName: "Yehuda", lastName: "Katz"},
            {firstName: "Carl", lastName: "Lerche"},
            {firstName: "Alan", lastName: "Johnson"}
  ]
}
})
