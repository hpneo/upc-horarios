Uatu.on('after_tab_change', function(tab_page) {
  switch (tab_page) {
    case 'docentes' :
      var collection = UPC.models.Docente.all();
      collection.sort(function(a, b) {
        return a.get('nombre').localeCompare(b.get('nombre'));
      });
    break;
    case 'cursos' :
      var collection = UPC.models.Curso.all();
      collection.sort(function(a, b) {
        return a.get('nombre').localeCompare(b.get('nombre'));
      });
    break;
  }

  var template_list_item = $('#template_list_item');
  $('.list').html('');

  for (var i = 0; i < collection.length; i++) {
    var item = collection[i];
    var template = template_list_item.html();
    var content = template.replace('{{nombre}}', item.get('nombre'));
    $('.list').append(content);
  }
});

$(document).on('click', '.tab-item a', function(e) {
  e.preventDefault();

  var tab = $(this).parent();
  var tab_bar = tab.parent();

  tab_bar.find('.tab-item').removeClass('active');
  tab.addClass('active');

  var tab_page = $(this).data('tab_page');

  $.get('partials/' + tab_page + '.html', function(data) {
    $('.content').html(data);
    Uatu.fire('after_tab_change', null, tab_page);
  });
});