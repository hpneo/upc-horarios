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

var translate3d = function(element, x, y, z) {
  element.css('-webkit-transform', 'translate3d(' + x +',' + y + ', ' + z + ')');
  element.css('-moz-transform', 'translate3d(' + x +',' + y + ', ' + z + ')');
  element.css('-ms-transform', 'translate3d(' + x +',' + y + ', ' + z + ')');
  element.css('-o-transform', 'translate3d(' + x +',' + y + ', ' + z + ')');
  element.css('transform', 'translate3d(' + x +',' + y + ', ' + z + ')');
}

Uatu.on('before_swap', function(collection_type, model, collection) {
  UPC.views.loadTemplate('simple_list', function(parent_content) {
    UPC.views.loadTemplate('list_item_section', function(content) {
      var content = UPC.views.populateTemplate(content, collection);
      content = $(parent_content).filter('.list').attr('data-collection', 'secciones').append(content);
      
      translate3d($('.content').children().first(), '0%', 0, 0);
      translate3d($('.content').children().first().addClass('slide'), '-100%', 0, 0);

      $('.content').prepend(content.addClass('slide'));
      translate3d(content, '100%', 0, 0);
      window.setTimeout(function() {
        translate3d(content, '0%', 0, 0);
      }, 25);
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
    case 'secciones':
      var model = UPC.models.Seccion.find(id);
      collection = [];
    break;
  }

  Uatu.fire('before_swap', null, collection_type, model, collection);
});