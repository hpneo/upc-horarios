$(document).on('click', '.tab-item a', function(e) {
  e.preventDefault();

  var tab = $(this).parent();
  var tab_bar = tab.parent();

  tab_bar.find('.tab-item').removeClass('active');
  tab.addClass('active');

  var tab_page = $(this).data('tab_page');
  console.log(tab_page);

  $.get('partials/' + tab_page + '.html', function(data) {
    $('.content').html(data);
  });
});