Uatu.on('after_tab_change', function(tab_page, collection) {
  switch (tab_page) {
    case 'docentes' :
    case 'cursos' :
      var template_id = 'simple_list';
    break;
    case 'buscar':
      var template_id = 'search_form';
    break;
  }

  UPC.views.loadTemplate(template_id, function(parent_content) {
    if (template_id == 'simple_list') {
      UPC.views.loadTemplate('list_item', function(content) {
        var content = UPC.views.populateTemplate(content, collection);
        $('.content').html(parent_content).find('.list').attr('data-collection', tab_page).append(content);
      });
    }
  });
});

Uatu.on('after_swap', function(collection_type, model, collection) {
  UPC.views.loadTemplate('simple_list', function(parent_content) {
    UPC.views.loadTemplate('list_item_section', function(content) {
      console.log(collection[0].get('curso'));
      var content = UPC.views.populateTemplate(content, collection);
      $('.content').html(parent_content).find('.list').append(content);
    });
  });
});

$(document).on('click', '.tab-item a', function(e) {
  e.preventDefault();

  var tab = $(this).parent(),
      tab_bar = tab.parent(),
      tab_page = $(this).data('tab_page');

  tab_bar.find('.tab-item').removeClass('active');
  tab.addClass('active');

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

  Uatu.fire('after_tab_change', null, tab_page, collection || []);
});

$(document).on('click', '.list-item a', function(e) {
  e.preventDefault();

  var collection_type = $(this).parents('.list').data('collection'),
      id = $(this).parent().data('id');

  switch (collection_type) {
    case 'docentes':
      var model = UPC.models.Docente.find(id);
      var collection = model.get('secciones');
    break;
    case 'cursos':
      var model = UPC.models.Curso.find(id);
      var collection = model.get('secciones');
    break;
  }

  Uatu.fire('after_swap', null, collection_type, model, collection);
});