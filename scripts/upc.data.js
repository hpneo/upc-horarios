var UPC = UPC || {};

UPC.data = {
  docentes : {
    "pchucinc" : {
      nombre : "Incháustegui Pérez, Carlos Miguel"
    },
    "pcsijire" : {
      nombre : "Irey Núñez, Jorge Luis"
    },
    "pcsimsen" : {
      nombre : "Senmache Sarmiento, José Manuel Martín"
    },
    "pcsihewo" : {
      nombre : "Wong Urquiza, Henry Joe"
    },
    "pchuetor" : {
      nombre : "Torres Arancivia, Eduardo Luciano"
    }
  },
  areas : {
    "HU" : {
      nombre : "Humanidades"
    },
    "CC" : {
      nombre : "Computacion e Informática"
    }
  },
  cursos : {
    "HU51" : {
      nombre : "Análisis ambiental",
      area_id : "HU"
    },
    "CC11" : {
      nombre : "Desarrollo para Dispositivos Móviles",
      area_id : "CC"
    },
    "SI327" : {
      nombre : "Ingeniería Economica y Financiera",
      area_id : "CC"
    },
    "SI328" : {
      nombre : "Pruebas de Software",
      area_id : "CC"
    },
    "HU187" : {
      nombre : "Temas de historia del Perú",
      area_id : "HU"
    }
  },
  secciones : {
    "HU51-1302-CI03" : {
      curso_id : "HU51",
      docente_id : "pchucinc",
      horario : {
        "M" : [14, 16]
      }
    },
    "CC11-1302-SW71" : {
      curso_id : "CC11",
      docente_id : "pcsijire",
      horario : {
        "M" : [19, 22],
        "J" : [19, 22]
      }
    },
    "SI327-1302-SI61" : {
      curso_id : "SI327",
      docente_id : "pcsimsen",
      horario : {
        "M" : [10, 12],
        "X" : [10, 12],
        "J" : [10, 12]
      }
    },
    "SI328-1302-SW61" : {
      curso_id : "SI328",
      docente_id : "pcsihewo",
      horario : {
        "L" : [20, 22],
        "S" : [7, 10]
      }
    },
    "HU187-1302-DE31" : {
      curso_id : "HU187",
      docente_id : "pchuetor",
      horario : {
        "M" : [16, 19]
      }
    }
  }
};