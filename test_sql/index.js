$(document).ready(function() {
  $('.save').click(function() {
    var uname = $('#uname').val();
    var pswd = $('#pswd').val();

    if(uname == '' || pswd == '') {
      $('.done').hide();
      $('.erro').show();
    }
    else {
      $.ajax({
        type: 'POST',
        url: '/addUser',
        data: {uname: uname, pswd: pswd},
        success: function() {
          $('.erro').hide();
          $('.done').show();
          $('#uname').val('');
          $('#pswd').val('');
        },
        error: function() {
          alert('Error occurred ');
        }
      });
    }
  });
});
