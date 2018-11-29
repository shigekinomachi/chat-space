$(function() {
  var user_search_result = $("#user-search-result")
  var chat_group_users = $("#chat-group-users")

  function appendUser(user) {
    var html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
      </div>
    `
    user_search_result.append(html);
  }

  function appendNoUser(noUser) {
    var html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${ noUser }</p>
    `
    user_search_result.append(html);
  }

  function appendMember(id, name){
    var html = `
      <div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
        <input name='group[user_ids][]' type='hidden' value="${id}">
        <p class='chat-group-user__name'>${name}</p>
        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
      </div>`
    chat_group_users.append(html);
  }

  $(document).on("click", ".chat-group-user__btn--add", function() {
    var id = $(this).data('user-id');
    var name = $(this).data('user-name');
    appendMember(id, name);
    $(this).parent().remove();
  });

  $(document).on("click", ".chat-group-user__btn--remove ", function(){
    $(this).parent().remove();
  });

  $('#user-search-field').on('keyup', function(){    var input = $(this).val();
    if (input !==""){

    $.ajax({
      type: 'GET',
      data: { keyword: input },
      url: '/users',
      dataType: 'json',
    })

    .done(function(users) {
      $('#user-search-result').empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
    })
      $('#user-search-field').prop('disabled', false);
      } else {
        appendNoUser("一致するユーザーはありません");
        }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  }
      else{
        $('#user-search-result').empty();
      }
  });
});
