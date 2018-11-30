$(document).on('turbolinks:load', function(){

  function buildHTML(message){
    var insertImage = (message.image)? `<img class="lower-message__image" src="${message.image}">` : "";
      var html = `
          <div class = "flex-message" data-message-id = ${message.id}>
            <div class="upper-message">
              <div class="upper-message__user-name">${message.name}</div>
              <div class="upper-message__date">${message.created_at}</div>
            </div>
            <div class="lower-message">
              <div class="lower-message__content">${message.content}</div>
              ${insertImage}
            </div>
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
      $('.messages').append(html);
      $('.header__lower').animate({scrollTop: $('.header__lower')[0].scrollHeight}, 'fast');
      $("#new_message")[0].reset();
    })
    .fail(function(){
      alert('error');
    })
    .always(function(){
      $('.form__submit').prop('disabled', false);
    })
  })

  $(function() {
    var interval = setInterval(updateMessage, 5000);
    function updateMessage() {
      if (location.href.match(/\/groups\/\d+\/messages/)) {
        var lastMessageId = $('.flex-message:last').data('message-id') || 0;
        $.ajax({
          url: location.href,
          type: "GET",
          data: { id: lastMessageId },
          dataType: "json",
        })
        .done(function(autoMessages) {
          var insertHTML = '';
          autoMessages.forEach(function(message){
            insertHTML += buildHTML(message);
            $('.messages').append(insertHTML);
            $('.header__lower').animate({scrollTop: $('.header__lower')[0].scrollHeight}, 'fast');
        });
      })
        .fail(function(){
          alert("自動更新に失敗しました")
        })
      } else {
      clearInterval(interval);
      }
    }
  });
});

