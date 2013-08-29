var UPC = UPC || {};

UPC.models = {};

var Model = function(source, settings) {
  var dataSource = UPC.data[source];
  var collection = [];

  var singularize = function(string) {
    var sliceLimit = -1;

    if (string.match(/nes$|les$|ces$|ies$|ues$/)) {
      sliceLimit = -2;
    }

    return string.split('').slice(0, sliceLimit).join('');
  }

  var pluralize = function(string) {
    var last_character = string[string.length - 1];
    
    if (['a', 'e', 'i', 'o', 'u'].indexOf(last_character) === -1 || ['i', 'u'].indexOf(last_character) > -1) {
      return string + "es";
    }
    else {
      return string + "s";
    }
  }

  var titleize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function Model(attributes) {
    this.attrs = attributes;
  };

  Model.prototype.get = function(field) {
    var self = this;
    if (settings && settings.has_many && settings.has_many.indexOf(field) > -1) {
      return UPC.data[field].filter(function(item) {
        return item[singularize(source) + '_id'] === self.attrs.id;
      }).map(function(item) {
        var className = UPC.models[titleize(singularize(field))];
        return new className(item);
      });
    }
    else if (settings && settings.belongs_to && settings.belongs_to.indexOf(field) > -1) {
      var className = UPC.models[titleize(field)];
      var attrs = UPC.data[pluralize(field)].filter(function(item) {
        return item.id === self.attrs[field + '_id'];
      })[0];

      return new className(attrs);
    }
    else {
      return this.attrs[field];
    }
  };

  Model.all = function(reset) {
    if (collection.length == 0 || reset === true) {
      for (var i = 0; i < dataSource.length; i++) {
        collection.push(new Model(dataSource[i]));
      }
    }

    return collection;
  };

  Model.find = function(id) {
    if (collection.length == 0) {
      Model.all();
    }

    return collection.filter(function(m) {
      return m.get('id') === id;
    })[0];
  };

  return Model;
};

UPC.models.Docente = new Model('docentes', {
  has_many : ['secciones']
});
UPC.models.Area = new Model('areas', {
  has_many : ['cursos']
});
UPC.models.Curso = new Model('cursos', {
  has_many : ['secciones'],
  belongs_to : ['area']
});
UPC.models.Seccion = new Model('secciones', {
  belongs_to : ['curso', 'docente']
});