var translate3d = function(element, x, y, z) {
  element.css('-webkit-transform', 'translate3d(' + x +',' + y + ', ' + z + ')');
  element.css('-moz-transform', 'translate3d(' + x +',' + y + ', ' + z + ')');
  element.css('-ms-transform', 'translate3d(' + x +',' + y + ', ' + z + ')');
  element.css('-o-transform', 'translate3d(' + x +',' + y + ', ' + z + ')');
  element.css('transform', 'translate3d(' + x +',' + y + ', ' + z + ')');
}

var swapContent = function(previous, next) {
  translate3d(previous, '0%', 0, 0);
  translate3d(previous.addClass('slide'), '-100%', 0, 0);

  $('.content').prepend(next.addClass('slide'));
  translate3d(next, '100%', 0, 0);
  window.setTimeout(function() {
    translate3d(next, '0%', 0, 0);

    window.setTimeout(function() {
      previous.remove();
    }, 251);
  }, 25);
}

var timeFormatter = function(time) {
  if (time > 12) {
    return (time - 12) + " PM";
  }
  else {
    return time + " AM";
  }
}

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

Uatu.on('after_click_list_item', function(collection_type, model, collection) {
  if (collection_type == 'secciones') {
    UPC.views.loadTemplate(collection_type, function(content) {
      var content = UPC.views.populateTemplate(content, model);
      content = $(content);

      var horario = model.get('horario');

      for(d in horario) {
        var hours = horario[d];
        var hours_list = content.find('.list#' + d);

        hours_list.append('<li>' + timeFormatter(hours[0]) + ' - ' + timeFormatter(hours[1]) + '</li>');
      }

      swapContent($('.content').children().first(), content);
    });
  }
  else {
    UPC.views.loadTemplate('simple_list', function(parent_content) {
      UPC.views.loadTemplate('list_item_section', function(content) {
        var content = UPC.views.populateTemplate(content, collection);
        content = $(parent_content).filter('.list').attr('data-collection', 'secciones').append(content);
        
        swapContent($('.content').children().first(), content);
      });
    });
  }
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

  Uatu.fire('after_click_list_item', null, collection_type, model, collection);
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

$(document).on('click', '.segmented-controller a', function(e) {
  e.preventDefault();

  var segmented_tab = $(this).parent();
  var segmented_controller = segmented_tab.parent();
  var segmented_container = segmented_controller.parent();
  var segmented_tab_id = $(this).attr('href');
  var segmented_list = segmented_container.find('.list' + segmented_tab_id);

  segmented_controller.children('li').removeClass('active');
  segmented_tab.addClass('active');

  segmented_container.find('.list').hide();
  segmented_list.show();
});