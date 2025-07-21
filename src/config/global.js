export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Conceptos básicos de seguridad',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Principios de seguridad informática',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Confidencialidad de la información',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Integridad de los datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Disponibilidad de los sistemas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Identificación de vulnerabilidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Concepto de vulnerabilidad y su impacto en el <em>software</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Clasificación de vulnerabilidades comunes (OWASP, CVE, CWE)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Fuentes de vulnerabilidades en el ciclo de vida del <em>software</em>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Herramientas de escaneo y análisis automatizado',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Pruebas manuales de seguridad (<em>pentesting</em> básico)',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo:
              'Interpretación de reportes de vulnerabilidades y priorización',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Escrivá Gascó, G. (2013). Seguridad informática: ( ed.). Macmillan Iberia, S.A.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/43260',
    },
    {
      referencia:
        'Costas Santos, J. (2015). Seguridad informática: ( ed.). RA-MA Editorial.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/62452',
    },
    {
      referencia:
        'Gómez Vieites, Á. (2015). Auditoría de seguridad informática: ( ed.). RA-MA Editorial.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/62464',
    },
    {
      referencia:
        'Gómez Vieites, Á. (2014). Enciclopedia de la seguridad informática: (2 ed.). RA-MA Editorial.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106416',
    },
    {
      referencia:
        'Omaña, M. (2012). Manufactura esbelta: una contribución para el desarrollo de <em>software</em> con calidad: ( ed.). Red Enlace.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/98547',
    },
    {
      referencia:
        'Giménez Albacete, J. F. (2023). Seguridad en equipos informáticos. IFCT0109: (2 ed.). IC Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/232697 ',
    },
    {
      referencia:
        'Universidad Pontificia Comillas. (s.f.). Confidencialidad, integridad y disponibilidad [Imagen]. Ciberseguridad Comillas. ',
      link:
        'https://ciberseguridad.comillas.edu/confidentiality-integrity-and-availability/',
    },
    {
      referencia:
        'OWASP Foundation. (s.f.). OWASP Mobile Top 10. [Imagen]. OWASP. ',
      link: 'https://owasp.org/www-project-mobile-top-10/',
    },
    {
      referencia:
        'Lozano, L., & Barrientos, J. (2023). [Imagen]. Ciclo de vida de Desarrollo Seguro de Software. En ResearchGate. ',
      link:
        'https://www.researchgate.net/figure/Figura-3-Ciclo-de-vida-de-Desarrollo-Seguro-de-<em>software</em>_fig3_366369323',
    },
    {
      referencia:
        'Fortinet. (s.f.). ¿Qué es una vulnerabilidad común y expuesta (CVE)?. Fortinet. ',
      link: 'https://www.fortinet.com/lat/resources/cyberglossary/cve',
    },
  ],
  glosario: [
    {
      termino: 'Autenticación',
      significado:
        'proceso mediante el cual se verifica la identidad de un usuario o sistema para permitir el acceso a recursos protegidos.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'principio de seguridad que asegura que la información solo sea accesible para las personas autorizadas y se mantenga protegida contra accesos no autorizados.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'garantía de que los sistemas, datos y servicios estén accesibles y operativos cuando los usuarios legítimos los requieran.',
    },
    {
      termino: 'Integridad',
      significado:
        'propiedad que asegura que los datos y sistemas no han sido alterados de manera no autorizada, manteniendo su exactitud y confiabilidad.',
    },
    {
      termino: 'Mínimo privilegio',
      significado:
        'principio de seguridad que establece que cada usuario o proceso debe tener solo los permisos estrictamente necesarios para realizar sus tareas.',
    },
    {
      termino: '<em>Pentesting</em> (Pruebas de penetración)',
      significado:
        'evaluación manual o automatizada que simula ataques para identificar vulnerabilidades en sistemas o aplicaciones.',
    },
    {
      termino: 'Principios de codificación segura',
      significado:
        'conjunto de normas y prácticas recomendadas para escribir código que minimice vulnerabilidades y errores de seguridad.',
    },
    {
      termino: 'Principios de seguridad informática',
      significado:
        'conjunto de conceptos fundamentales que guían la protección de la información, incluyendo confidencialidad, integridad, disponibilidad, autenticación, entre otros.',
    },
    {
      termino: 'Rebase',
      significado:
        'técnica en control de versiones que permite reorganizar y aplicar <em>commits</em> sobre otra base, como alternativa a la fusión para evitar conflictos.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de rastrear el origen y los cambios realizados en un sistema o dato, facilitando la auditoría y el análisis de eventos.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'debilidad o falla en un sistema, aplicación o proceso que puede ser explotada para comprometer su seguridad.',
    },
  ],
}
