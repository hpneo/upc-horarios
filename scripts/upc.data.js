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
    id : "SI197",
    nombre : "Plataforma de Desarrollo Java",
    area_id : "CC"
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
    aula : "F15",
    horario : {
      "M" : [14, 16]
    }
  }, {
    id : "SI197-WX51",
    curso_id : "SI197",
    docente_id : "pcsijire",
    aula : "C45",
    horario : {
      "J" : [16, 18],
      "S" : [18, 20]
    }
  }, {
    id : "CC11-1302-SW71",
    curso_id : "CC11",
    docente_id : "pcsijire",
    aula : "H51",
    horario : {
      "M" : [19, 22],
      "J" : [19, 22]
    }
  }, {
    id : "SI327-1302-SI61",
    curso_id : "SI327",
    docente_id : "pcsimsen",
    aula : "F25",
    horario : {
      "M" : [10, 12],
      "X" : [10, 12],
      "J" : [10, 12]
    }
  }, {
    id : "SI328-1302-SW61",
    curso_id : "SI328",
    docente_id : "pcsihewo",
    aula : "C41",
    horario : {
      "L" : [20, 22],
      "S" : [7, 10]
    }
  }, {
    id : "HU187-1302-DE31",
    curso_id : "HU187",
    docente_id : "pchuetor",
    aula : "D46",
    horario : {
      "M" : [16, 19]
    }
  }, {
    id : "SI253-1302-SW71",
    curso_id : "SI253",
    docente_id : "pcsiiana",
    aula : "C45",
    horario : {
      "L" : [20, 22],
      "M" : [20, 22],
      "X" : [20, 22]
    }
  }, {
    id : "CA59-1302-SW31",
    curso_id : "CA59",
    docente_id : "pcadaarr",
    aula : "D21",
    horario : {
      "L" : [20, 22],
      "S" : [10, 13]
    }
  }, {
    id : "MA255-1302-EL51",
    curso_id : "MA255",
    docente_id : "pcmagbau",
    aula : "B52",
    horario : {
      "L" : [17, 19],
      "M" : [17, 19],
      "J" : [19, 21]
    }
  }]
};