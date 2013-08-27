Uatu.on('after_tab_change', function(tab_page) {
  switch (tab_page) {
    case 'docentes' :
      var docentes = UPC.models.Docente.all();
      docentes.sort(function(a, b) {
        return a.get('nombre').localeCompare(b.get('nombre'));
      });

      var template_list_item = $('#template_list_item');
      $('.list').html('');

      for (var i = 0; i < docentes.length; i++) {
        var docente = docentes[i];
        var template = template_list_item.html();
        var content = template.replace('{{nombre}}', docente.get('nombre'));
        $('.list').append(content);
      }
    break;
    case 'cursos' :
      var cursos = UPC.models.Curso.all();
      cursos.sort(function(a, b) {
        return a.get('nombre').localeCompare(b.get('nombre'));
      });

      var template_list_item = $('#template_list_item');
      $('.list').html('');

      for (var i = 0; i < cursos.length; i++) {
        var curso = cursos[i];
        var template = template_list_item.html();
        var content = template.replace('{{nombre}}', curso.get('nombre'));
        $('.list').append(content);
      }
    break;
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