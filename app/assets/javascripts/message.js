$(function(){
  function buildHTML(Message){
    var insertImage = (message.image.url)? '<img class="lower-message__image" src="${message.image.url}">' : "";
      var html = `
          <div class = "flex-message" "message_id = ${Message.id}">
            <div class="upper-message">
              <div class="upper-message__user-name">${Message.user_name}</div>
              <div class="upper-message__date">${Message.date}</div>
            </div>
            <div class="lower-message">
              <div class="lower-message__content">${Message.content}</div>
            </div>
            ${insertImage}
          </div>
            `
    return html;
  }

$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.header__lower').append(html);
      $('.header__lower').animate({scrollTop: $('.header__lower')[0].scrollHeight}, 'fast');
      $("#new_message")[0].reset();
    })
    .fail(function(){
      alert('error');
    })
    return false;
  })
});
