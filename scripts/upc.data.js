var UPC = UPC || {};

UPC.data = {
  docentes : [{
    id : "pchucinc",
    nombre : "Incháustegui Pérez, Carlos Miguel"
  }, {
    id : "pcsijire",
    nombre : "Irey Núñez, Jorge Luis"
  }, {
    id : "pcsimsen",
    nombre : "Senmache Sarmiento, José Manuel Martín"
  }, {
    id : "pcsihewo",
    nombre : "Wong Urquiza, Henry Joe"
  }, {
    id : "pchuetor",
    nombre : "Torres Arancivia, Eduardo Luciano"
  }, {
    id : "pcsiiana",
    nombre : "Anache Pupo, Ilver"
  }, {
    id : "pcadaarr",
    nombre : "Arrieta Quispe, Alejandro Enrique"
  }, {
    id : "pcmagbau",
    nombre : "Bautista Vallejo, Gabriel Fortunato"
  }],
  areas : [{
    id : "HU",
    nombre : "Humanidades"
  }, {
    id: "CC",
    nombre : "Computacion e Informática"
  }, {
    id: "CA",
    nombre : "Contabilidad y Administración"
  }, {
    id: "MA",
    nombre : "Ciencias"
  }],
  cursos : [{
    id: "HU51",
    nombre : "Análisis ambiental",
    area_id : "HU"
  }, {
    id : "CC11",
    nombre : "Desarrollo para Dispositivos Móviles",
    area_id : "CC"
  }, {
    id : "SI327",
    nombre : "Ingeniería Economica y Financiera",
    area_id : "CC"
  }, {
    id : "SI328",
    nombre : "Pruebas de Software",
    area_id : "CC"
  }, {
    id : "HU187",
    nombre : "Temas de historia del Perú",
    area_id : "HU"
  }, {
    id : "SI253",
    nombre : "Arquitectura del Software",
    area_id : "CC"
  }, {
    id : "CA59",
    nombre : "Contabilidad y Presupuestos",
    area_id : "CA"
  }, {
    id : "MA255",
    nombre : "Física 3",
    area_id : "MA"
  }],
  secciones : [{
    id : "HU51-1302-CI03",
    curso_id : "HU51",
    docente_id : "pchucinc",
    horario : {
      "M" : [14, 16]
    }
  },
  {
    id : "CC11-1302-SW71",
    curso_id : "CC11",
    docente_id : "pcsijire",
    horario : {
      "M" : [19, 22],
      "J" : [19, 22]
    }
  },
  {
    id : "SI327-1302-SI61",
    curso_id : "SI327",
    docente_id : "pcsimsen",
    horario : {
        "M" : [10, 12],
      "X" : [10, 12],
      "J" : [10, 12]
    }
  },
  {
    id : "SI328-1302-SW61",
    curso_id : "SI328",
    docente_id : "pcsihewo",
    horario : {
      "L" : [20, 22],
      "S" : [7, 10]
    }
  },
  {
    id : "HU187-1302-DE31",
    curso_id : "HU187",
    docente_id : "pchuetor",
    horario : {
      "M" : [16, 19]
    }
  },
  {
    id : "SI253-1302-SW71",
    curso_id : "SI253",
    docente_id : "pcsiiana",
    horario : {}
  },
  {
    id : "CA59-1302-SW31",
    curso_id : "CA59",
    docente_id : "pcadaarr",
    horario : {}
  },
  {
    id : "MA255-1302-EL51",
    curso_id : "MA255",
    docente_id : "pcmagbau",
    horario : {}
  }]
};