var UPC = UPC || {};

UPC.models = {};

var Model = function(source, settings) {
  var dataSource = UPC.data[source];
  var collection = [];

  function Model(attributes) {
    this.attrs = attributes;

    if (settings && typeof settings.has_many == 'string') {
      this.attrs[settings.has_many] = initializeRelations(this, settings.has_many);
    }
  };

  var singularize = function(string) {
    var sliceLimit = -1;

    if (["a", "e", "i", "o", "u"].indexOf(string[string.length - 3]) === -1 && string[string.length - 2] === "e") {
      sliceLimit = -2;
    }

    return string.split('').slice(0, sliceLimit).join('');
  }

  var titleize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var initializeAttributes = function(id, attributes_source) {
    var attrs = attributes_source[id];
    attrs["id"] = id;

    return attrs;
  };

  var initializeRelations = function(model, has_many) {
    var attrs_collection = [];

    for (var id in UPC.data[has_many]) {
      var attrs = initializeAttributes(id, UPC.data[has_many]);
      attrs_collection.push(attrs);
    }

    return attrs_collection.filter(function(scope) {
      return scope[singularize(source) + "_id"] === model.attrs.id;
    });
  };

  Model.prototype.get = function(field) {
    if (settings.has_many === field) {
      return this.attrs[field].map(function(item, index) {
        var className = UPC.models[titleize(singularize(field))];
        return new className(item);
      });
    }
    else {
      return this.attrs[field];
    }
  };

  Model.all = function(reset) {
    if (collection.length == 0 || reset === true) {
      for (var id in dataSource) {
        var attrs = initializeAttributes(id, dataSource);

        collection.push(new Model(attrs));
      }
    }

    return collection;
  };

  return Model;
};

UPC.models.Docente = new Model('docentes', {
  has_many : 'secciones'
});
UPC.models.Area = new Model('areas', {
  has_many : 'cursos'
});
UPC.models.Curso = new Model('cursos', {
  has_many : 'secciones'
});
UPC.models.Seccion = new Model('secciones');