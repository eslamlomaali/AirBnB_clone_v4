$(document).ready(function () {
  let checkedAmenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checkedAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkedAmenities[$(this).data('id')];
    }
    let l = Object.values(checkedAmenities);
    if (l.length > 0) {
      $('div.amens > h4').text(Object.values(checkedAmenities).join(', '));
    } else {
      $('div.amens > h4').html('&nbsp;');
    }
  });
});
