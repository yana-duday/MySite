var sendmailURL;
 
sendmailURL = window.location.protocol + "//" + window.location.hostname + '/ajax/sendmail.php';

$('#sendmail').on('submit',function(e) {
  e.preventDefault();
  $('#sendmail *').fadeOut(200);
  $('#sendmail').prepend('Your submission is being processed...');
  $.ajax({
    type     : 'POST',
    cache    : false,
    url      : sendmailURL,
    data     : $(this).serialize(),
    success  : function(data) {
      responseSuccess(data);
      console.log(data);
    },
    error  : function(data) {
      console.log('Silent failure.');
    }
  });
  return false;
});
 
function responseSuccess(data) {
  data = JSON.parse(data);
  if(data.status === 'success') {
    $('#sendmail').html('Submission sent succesfully.');
  } else {
    $('#sendmail').html('Submission failed, please e-mail contact@yanaduday.com directly.');
  }
}
