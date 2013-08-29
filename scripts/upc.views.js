var UPC = UPC || {};

UPC.views = (function() {
  var replaceTemplate = function(template, model) {
    var content = template;

    var attrs = template.match(/{{(\w|\d|\.)*}}/ig);

    if (attrs) {
      for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i].replace(/{{(.*)}}/ig, '$1');
        attr = attr.split('.');

        var value = model.get(attr[0]);

        for (var j = 1; j < attr.length; j++) {
          value = value.get(attr[j]);
        }

        content = content.replace(attrs[i], value);
      }
    }

    return content;
  };

  return {
    loadTemplate : function(template_id, callback) {
      if ($('#template_' + template_id).length > 0) {
        var template = $('#template_' + template_id).html();
        callback.call(null, template);
      }
    },
    populateTemplate : function(template, collection_or_model) {
      if (collection_or_model instanceof Array) {
        var content = '';

        for (var i = 0; i < collection_or_model.length; i++) {
          var item_content = replaceTemplate(template, collection_or_model[i]);
          content += item_content;
        }
      }
      else {
        var content = replaceTemplate(template, collection_or_model);
      }

      return content;
    }
  };
})();