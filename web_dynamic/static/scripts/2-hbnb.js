$(document).ready(function () {
  let checkedAmens = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checkedAmens[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkedAmens[$(this).data('id')];
    }
    let l = Object.values(checkedAmens);
    if (l.length > 0) {
      $('div.amens > h4').text(Object.values(checkedAmens).join(', '));
    } else {
      $('div.amens > h4').html('&nbsp;');
    }
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (textStatus === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
});
