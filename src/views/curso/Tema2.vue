<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Identificación de vulnerabilidades'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-8.mb-5
      .p-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0 La identificación de vulnerabilidades en el <em>software</em> constituye un proceso crítico para anticipar y mitigar posibles riesgos antes de que sean explotados. A través de esta práctica, se examinan componentes, configuraciones y flujos de datos con el fin de detectar fallos que puedan comprometer la seguridad del sistema. Esta tarea no solo implica el uso de herramientas automatizadas, sino también la evaluación manual y contextual realizada por especialistas, lo que permite descubrir debilidades lógicas o de diseño que escapan a los escáneres tradicionales. Una correcta identificación de vulnerabilidades permite a los equipos de desarrollo aplicar medidas correctivas oportunas, fortaleciendo así la protección del <em>software</em> frente a amenazas internas y externas (Gómez Vieites, 2014).
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/1.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto de vulnerabilidad y su impacto en el <em>software</em>
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Una vulnerabilidad en <em>software</em> se define como una debilidad, error o falla en el diseño, desarrollo o configuración de un sistema que puede ser aprovechada por agentes malintencionados para comprometer la seguridad del mismo. Estas vulnerabilidades pueden manifestarse en diferentes capas del <em>software</em>, desde el código fuente hasta la infraestructura que lo soporta, e incluso en la interacción con el usuario final (Gómez Vieites, 2014).
    
        .bg-color-12.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las causas de estas vulnerabilidades son diversas y pueden incluir fallos en la validación de entradas, errores lógicos en algoritmos, malas configuraciones, uso de bibliotecas desactualizadas o inseguras, y falta de controles adecuados. Por ejemplo, un clásico caso es la inyección de código SQL, donde la ausencia de un filtrado correcto permite a un atacante insertar comandos maliciosos que alteran la base de datos, generando desde la pérdida de información hasta la corrupción completa del sistema. Otro ejemplo común es la vulnerabilidad conocida como <em><em>Cross-Site Scripting</em> </em>(XSS), que explota la incapacidad del sistema para controlar contenido malicioso que se ejecuta en el navegador del usuario.
    
    p.mb-5 El impacto que generan estas vulnerabilidades en el <em>software</em> es significativo y puede afectar múltiples dimensiones (Gómez Vieites, 2015). En primer lugar, comprometen la confidencialidad, al permitir el acceso no autorizado a información sensible. También ponen en riesgo la integridad, mediante la alteración o manipulación de datos o procesos críticos. Por último, pueden afectar la disponibilidad, cuando ataques de denegación de servicio u otras técnicas impiden que el sistema funcione correctamente.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-7.p-4.mb-5(data-aos="fade-left")
          p.mb-0 Las consecuencias de no atender estas vulnerabilidades pueden ir desde daños económicos por robo de información, interrupción del negocio o sanciones legales hasta la pérdida de confianza por parte de los usuarios. En contextos críticos como sistemas bancarios, sanitarios o de infraestructura, las fallas pueden incluso poner en riesgo vidas humanas.
        p(data-aos="fade-left") Por ello, la identificación temprana y continua de vulnerabilidades es un proceso fundamental en la gestión de la seguridad del <em>software</em> (Gómez Vieites, 2015). Herramientas automatizadas de análisis de código, pruebas de penetración, revisiones de seguridad y prácticas de desarrollo seguro son algunas de las estrategias empleadas para minimizar estos riesgos. Además, es imprescindible implementar un ciclo de actualización y parcheo constante para corregir vulnerabilidades descubiertas a lo largo del tiempo.
  
    h2.mb-5(data-aos="fade-left") Ejemplo práctico
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/5.png', alt='')
        .col-lg
          .p-4.text-white
            p.mb-0(data-aos="fade-up") Un sistema de comercio electrónico que no valida adecuadamente los campos de entrada para comentarios o formularios puede ser vulnerable a un ataque XSS. Si un atacante introduce un script malicioso en un campo de comentarios, este código podría ejecutarse en el navegador de otros usuarios, robando cookies de sesión y permitiendo la suplantación de identidad. Este tipo de vulnerabilidad afecta directamente la seguridad del usuario y la reputación del sistema.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Clasificación de vulnerabilidades comunes (OWASP, CVE, CWE)

    .bg-full-width.bg-color-8.mb-5
      .p-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0 La clasificación de vulnerabilidades comunes es un aspecto fundamental para entender, gestionar y mitigar riesgos en el desarrollo y mantenimiento de <em>software</em>. Existen diversas organizaciones y estándares que proporcionan esquemas estructurados para categorizar las vulnerabilidades, entre los cuales destacan OWASP, CVE y CWE. Cada uno de estos enfoques cumple un rol particular en la identificación y manejo de las fallas de seguridad, facilitando la comunicación y respuesta ante amenazas (Gómez Vieites, 2015).
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/6.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") OWASP (<em>Open <em>web</em> Application Security Project</em>) 
    p.mb-5 Se enfoca en las vulnerabilidades específicas que afectan aplicaciones <em>web</em>. Este proyecto publica regularmente listados, como el famoso OWASP Top 10, que enumera las diez vulnerabilidades más críticas en aplicaciones <em>web</em>. Entre ellas se encuentran problemas como la inyección (inyección SQL, comandos, LDAP), la pérdida de autenticación o el <em><em>Cross-Site Scripting</em> </em>(XSS). Por ejemplo, una vulnerabilidad de inyección SQL ocurre cuando una aplicación no valida correctamente los datos ingresados por el usuario, permitiendo que un atacante manipule las consultas a la base de datos para acceder o modificar información confidencial (Gómez Vieites, 2014).

    .titulo-figura.mb-4
      h5 Figura 2.
      span OWASP Mobile Top 10.
    div.bg-color-3.p-4
      .row.justify-content-center.align-items-center
        .col-lg-6
          figure
            img(src="@/assets/curso/tema2/7.svg", data-aos="zoom-in")
    figcaption.mt-2.text-center.mb-5 Nota. Tomado de  OWASP Foundation. (s.f.). 

    h2.mb-5(data-aos="fade-left") CVE (<em>Common Vulnerabilities and Exposures</em>) 

    .bg-color-4.p-4.mb-5(data-aos="fade-left")
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Es un sistema internacional de referencia que asigna identificadores únicos a vulnerabilidades conocidas, independientemente de su tipo o contexto. Cada CVE representa una vulnerabilidad específica en un producto o sistema, facilitando su seguimiento y comunicación entre fabricantes, investigadores y usuarios. Por ejemplo, el CVE-2021-44228 identifica una vulnerabilidad crítica en Apache Log4j conocida como Log4Shell, que permitió la ejecución remota de código a través del registro de datos maliciosos. Este estándar ayuda a las organizaciones a priorizar la corrección y monitoreo de vulnerabilidades según su impacto y difusión (Gómez Vieites, 2014).

    .titulo-figura.mb-4
      h5 Figura 3.
      span ¿Qué es una vulnerabilidad común y expuesta (CVE)?. 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-3.mb-lg-0
        div.bg-color-3.p-4
          .row.justify-content-center.align-items-center
            .col-lg-11
              figure
                img(src="@/assets/curso/tema2/9.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-5 Nota. Tomado de Fortinet. (s.f.).  
      .col-lg-5
        .bg-color-7.p-4(data-aos="fade-left")
          h2(data-aos="fade-left") CWE (Common Weakness Enumeration) 
          p.mb-0 Se centra en las debilidades de <em>software</em> subyacentes que pueden llevar a vulnerabilidades. Mientras CVE se dirige a vulnerabilidades específicas, CWE clasifica los defectos o errores en el código y diseño que las originan. Por ejemplo, CWE-89 corresponde a la debilidad conocida como inyección SQL, qué es la raíz de muchas vulnerabilidades reportadas en CVE. Esta clasificación permite a los desarrolladores entender mejor qué patrones de diseño o codificación evitar para prevenir fallas de seguridad recurrentes.
        img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
    
    .row.mb-5
      .col-lg-4.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-2.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En la práctica, estas clasificaciones se complementan y forman un marco integral para la seguridad en <em>software</em>. OWASP ofrece una guía directa para la protección de aplicaciones <em>web</em>, CVE proporciona un catálogo universal de vulnerabilidades para la gestión y monitoreo, y CWE ayuda a enfocar esfuerzos en la mejora del código y arquitectura (Gómez Vieites, 2015).
        h2(data-aos="fade-left") Ejemplo práctico
        p.mb-0 Un equipo de desarrollo puede utilizar la lista OWASP Top 10 para identificar riesgos en su aplicación <em>web</em>, revisar los CVE para detectar vulnerabilidades conocidas en las bibliotecas que utiliza, y estudiar el CWE para corregir las debilidades de diseño en su código fuente.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Fuentes de vulnerabilidades en el ciclo de vida del <em>software</em>
    
    p.mb-5 El ciclo de vida del <em>software</em> (SDLC, por sus siglas en inglés) comprende un conjunto de fases estructuradas que permiten planificar, desarrollar, probar, implementar y mantener un sistema. En cada una de estas fases, pueden generarse o introducirse vulnerabilidades que comprometen la seguridad del <em>software</em>. Identificar estas fuentes es fundamental para implementar controles de seguridad adecuados y proteger la aplicación contra amenazas (Gómez Vieites, 2015).

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/13.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="24.5%" y="46.5%" numero="+")
                h5 Análisis y especificación de requisitos
                p Las vulnerabilidades surgen por no incluir requisitos específicos de seguridad o un análisis incompleto de amenazas. 
                p <b>Ejemplo</b>: Una app financiera que no considera la encriptación de datos durante la transmisión es vulnerable a ataques MITM.
              .bg-color-white.box-shadow.p-3(x="27%" y="81%" numero="+")
                h5 Diseño
                p Se originan al adoptar arquitecturas inseguras, como la falta de segregación de funciones o controles de entrada. 
                p <b>Ejemplo</b>: Un diseño monolítico donde todos los módulos comparten privilegios puede comprometer todo el sistema si uno falla.
              .bg-color-white.box-shadow.p-3(x="76%" y="54%" numero="+")
                h5 Desarrollo o codificación
                p Esta fase presenta alta incidencia de errores humanos y malas prácticas: código inseguro, credenciales expuestas, librerías obsoletas. 
                p <b>Ejemplo</b>: No usar sentencias preparadas en SQL expone a inyecciones, una vulnerabilidad grave y común.
              .bg-color-white.box-shadow.p-3(x="74.5%" y="35%" numero="+")
                h5 Pruebas
                p La falta de pruebas específicas de seguridad permite que fallas críticas pasen inadvertidas. 
                p <b>Ejemplo</b>: No realizar <em>fuzzing </em>impide detectar errores que podrían causar caídas o facilitar ataques DoS
              .bg-color-white.box-shadow.p-3(x="28.6%" y="23.8%" numero="+")
                h5 Implementación y despliegue
                p Configuraciones por defecto, servicios innecesarios activos, puertos abiertos o archivos con permisos excesivos facilitan ataques externos. 
                p <b>Ejemplo</b>: Un servidor <em>web</em> con paneles administrativos accesibles sin autenticación representa un riesgo crítico.
              .bg-color-white.box-shadow.p-3(x="72.2%" y="6%" numero="+")
                h5 Mantenimiento
                p Riesgos por falta de monitoreo, gestión inadecuada de parches o incorporación de nuevas funcionalidades sin análisis de impacto. 
                p <b>Ejemplo</b>: Usar un <em>framework</em> <em>web</em> desactualizado sin aplicar parches deja el sistema expuesto a ataques conocidos.
    
    h2.mb-5(data-aos="fade-left") Ejemplo integral

    .bg-color-4.p-4.mb-5(data-aos="fade-left")
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Un equipo de desarrollo que no incluya requisitos de seguridad desde el análisis, diseñe un sistema sin separación clara de privilegios, implemente código vulnerable a inyección SQL, no realice pruebas de seguridad, despliegue la aplicación con configuraciones inseguras y no actualice ni monitoree adecuadamente su <em>software</em>, crea un entorno extremadamente propenso a ataques.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Herramientas de escaneo y análisis automatizado
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") En la actualidad, la detección temprana y precisa de vulnerabilidades en el <em>software</em> es esencial para garantizar su seguridad. Las herramientas de escaneo y análisis automatizado son aliados clave en este proceso, ya que permiten identificar fallos y riesgos de forma eficiente y sistemática a lo largo del ciclo de vida del desarrollo (Gómez Vieites, 2015).
    
        .bg-color-12.p-4(data-aos="fade-left")
          p.mb-0 Estas herramientas emplean técnicas avanzadas para inspeccionar el código fuente, los binarios o el comportamiento de la aplicación en tiempo de ejecución, reduciendo así la necesidad de intervención manual constante. Esto agiliza las revisiones y disminuye el riesgo de que vulnerabilidades críticas pasen desapercibidas.
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Tipos principales de herramientas
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-13.text-white.text-center Tipo de Análisis
            th.bg-color-13.text-white.text-center Descripción
            th.bg-color-13.text-white.text-center Ejemplo
        tbody.bg-color-9
          tr
            th SAST (<em>Static Application Security Testing</em>)
            td Analiza el código fuente sin ejecutarlo. Permite detectar problemas antes del despliegue.
            td SonarQube, que identifica vulnerabilidades como inyecciones SQL o errores de manejo de memoria.
          tr
            th DAST (<em>Dynamic Application Security Testing</em>)
            td Evalúa la aplicación en ejecución simulando ataques reales.
            td OWASP ZAP, que detecta fallos como XSS o CSRF mediante escaneos dinámicos.
          tr
            th IAST (<em>Interactive Application Security Testing</em>)
            td Combina SAST y DAST, analizando el comportamiento del <em>software</em> durante pruebas funcionales.
            td Contrast Security, que se integra al flujo de desarrollo para detectar fallos de seguridad en tiempo real.
    
    p.mb-5 Los beneficios del uso de herramientas automatizadas son:

    .bg-full-width.bg-color-5
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/16.svg" alt="" style="width: 90px")
              h5.text-center Detección temprana
              p.mb-0.text-center Identifican vulnerabilidades en etapas iniciales del desarrollo, reduciendo costos de corrección.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/17.svg" alt="" style="width: 90px")
              h5.text-center Cobertura amplia
              p.mb-0.text-center Analizan grandes volúmenes de código y simulan múltiples escenarios de ataque.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/18.svg" alt="" style="width: 90px")
              h5.text-center Automatización
              p.mb-0.text-center Se integran en pipelines de integración continua (CI/CD) para realizar escaneos automáticos.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/19.svg" alt="" style="width: 90px")
              h5.text-center Reducción de errores humanos
              p.mb-0.text-center Disminuyen la dependencia de revisiones manuales, que pueden ser lentas o imprecisas.

        h2.mb-5(data-aos="fade-left") Ejemplo práctico
        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-1.text-white.p-4.h-100(data-aos="fade-left")
              p.mb-0 Una empresa que desarrolla una aplicación móvil integra SonarQube en su sistema de control de versiones Git para realizar análisis estático con cada commit. Simultáneamente, ejecuta OWASP ZAP sobre la versión de prueba alojada en un servidor para detectar vulnerabilidades en tiempo de ejecución. Esta combinación permite a los desarrolladores recibir alertas automáticas, corregir errores de seguridad rápidamente y lanzar una versión más robusta del producto.
    
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Pruebas manuales de seguridad (<em>pentesting</em> básico)

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-7.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las pruebas manuales de seguridad, conocidas como <em>pentesting</em> (<em>penetration testing</em>), son una práctica esencial para evaluar la robustez de una aplicación o sistema (Gómez Vieites, 2015). A diferencia de los análisis automatizados, el <em>pentesting</em> implica la intervención directa de un profesional que simula ataques reales para descubrir vulnerabilidades que podrían pasar desapercibidas con herramientas automáticas.
        p(data-aos="fade-left") El objetivo es identificar puntos débiles explotables mediante técnicas controladas, obteniendo una visión profunda y contextualizada del nivel de protección del <em>software</em> frente a amenazas internas o externas. La metodología general del <em>pentesting</em> básico es: 
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/23.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Reconocimiento")
            p Recolección de información sobre el sistema (IP, servicios, SO).
    
          .div(titulo="Escaneo y enumeración")
            p Análisis de servicios detectados para encontrar configuraciones erróneas o vulnerabilidades conocidas. Ejemplo: uso de Nmap.
    
          .div(titulo="Explotación manual")
            p Intento de aprovechar las vulnerabilidades para obtener acceso no autorizado o comprometer el sistema.
    
          .div(titulo="Post-explotación")
            p Evaluación del impacto y recopilación de evidencias para el informe.
          .div(titulo="Reporte y recomendaciones")
            p Documentación de hallazgos, métodos usados y medidas correctivas propuestas.
    
    p.mb-5 Los ejemplos prácticos de <em>pentesting</em> básico son: 
    
    .bg-full-width.bg-color-8.mb-5
      .p-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Inyección SQL manual:</b> Probar campos de entrada con cadenas como ' OR '1'='1 para acceder a datos sin autorización.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Prueba de fuerza bruta</b>: Intentar múltiples combinaciones de credenciales para verificar si existen mecanismos de bloqueo.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Manipulación de parámetros URL</b>: Modificar valores en la URL para intentar acceder a recursos restringidos o alterar comportamientos del sistema.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/24.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 Las ventajas y limitaciones del <em>pentesting</em> manual son:

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Ventajas y limitaciones del análisis manual de vulnerabilidades
    .tabla-a.color-acento-botones
      table
        thead
          tr
            th.bg-color-13.text-white.text-center Ventajas
            th.bg-color-13.text-white.text-center Limitaciones
        tbody.bg-color-9
          tr
            td Detecta vulnerabilidades complejas no visibles para herramientas automáticas.
            td Requiere personal especializado y experimentado.
          tr
            td Evalúa la lógica de negocio y decisiones específicas de implementación.
            td Es más lenta y costosa que las pruebas automatizadas.
          tr
            td Simula ataques reales adaptados al contexto del sistema.
            td —
    
    .bg-color-12.mb-5
      .p-4.px-md-5.py-4
        p.mb-0 El <em>pentesting</em> manual, aunque más exigente en recursos, aporta un valor único al permitir una evaluación precisa y personalizada de la seguridad del sistema.

    #t_2_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.6] Interpretación de reportes de vulnerabilidades y priorización
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/25.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La interpretación de reportes de vulnerabilidades es un proceso clave en la gestión de seguridad durante el desarrollo y mantenimiento del <em>software</em>. Su propósito es transformar la información técnica obtenida en escaneos, auditorías o pruebas manuales en datos comprensibles y accionables para los equipos de desarrollo, seguridad y gestión de proyectos.
        .bg-color-7.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos reportes suelen incluir listados detallados de fallos clasificados por naturaleza, severidad y riesgo. Sin embargo, no todas las vulnerabilidades representan la misma amenaza, por lo que es esencial una priorización adecuada para enfocar esfuerzos en aquellas con mayor impacto (Gómez Vieites, 2014).
        p Para realizar una interpretación efectiva de los reportes de vulnerabilidades, se recomienda seguir los siguientes pasos:
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/27.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Análisis de la descripción técnica")
            p Revisión del origen, forma de explotación y componentes afectados. 
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>: inyección SQL detallada con su ubicación en el código.
    
          .div(titulo="Evaluación del impacto y riesgo")
            p Análisis del posible daño considerando los principios de confidencialidad, integridad y disponibilidad (Gómez Vieites, 2015).
    
          .div(titulo="Clasificación por severidad")
            p Uso de escalas como CVSS (alta, media, baja) para uniformar la evaluación del riesgo.
    
          .div(titulo="Priorización para la corrección")
            p Ordenar la atención de vulnerabilidades según su riesgo, facilidad de explotación y potencial como vector inicial.
          
          .div(titulo="Asignación de responsabilidades y tiempos")
            p Designar equipos responsables y plazos para mitigar cada vulnerabilidad.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/28.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") Los siguientes ejemplos ilustran cómo aplicar esta interpretación en escenarios reales:
    
        .bg-color-12.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Una vulnerabilidad de <em><em>Cross-Site Scripting</em> </em>(XSS) con severidad alta en el módulo de comentarios de un sitio <em>web</em> requiere atención urgente, ya que puede comprometer sesiones de usuario.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Un error de configuración en un servidor de pruebas, sin datos sensibles, se clasifica como de severidad baja y puede corregirse en fases posteriores.

    .bg-full-width.bg-color-14
      .p-4.p-md-5
        p.mb-5 Aplicar una correcta interpretación y priorización de los reportes de vulnerabilidades ofrece múltiples beneficios:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/29.svg" alt="" style="width: 90px")
              h5.text-center Optimización de recursos
              p.mb-0.text-center Enfocar esfuerzos donde realmente importa.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/30.svg" alt="" style="width: 90px")
              h5.text-center Reducción de la ventana de exposición
              p.mb-0.text-center Mitigar rápidamente vulnerabilidades críticas.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/31.svg" alt="" style="width: 90px")
              h5.text-center Mejora continua de la seguridad
              p.mb-0.text-center Procesos estructurados que fortalecen la postura de seguridad.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/32.svg" alt="" style="width: 90px")
              h5.text-center Facilitación de la comunicación entre equipos
              p.mb-0.text-center Claridad técnica y organizativa para actuar con eficiencia.
        
        p.mb-0 Una interpretación adecuada de los reportes permite actuar de forma rápida, coordinada y efectiva, reduciendo riesgos y fortaleciendo la resiliencia del <em>software</em> ante posibles ataques

    .bg-full-width.bg-color-11.mb-0
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Uso de buenas prácticas
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Uso de buenas prácticas, donde se aborda la implementación de estándares y procedimientos seguros en el desarrollo y gestión de <em>software</em>. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Uso de buenas prácticas
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/33.png', alt='')



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/44101 " target="_blank" rel="noopener noreferrer") Chicano Tejada, E. (2015). Gestión de incidentes de seguridad informática (MF0488_3): ( ed.). IC Editorial. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511 " target="_blank" rel="noopener noreferrer") Ortega Candel, J. M. (2018). Seguridad en aplicaciones <em>web</em> Java: ( ed.). RA-MA Editorial. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/50603  " target="_blank" rel="noopener noreferrer") Guillamón Morales, A. (2013). Manual desarrollo de elementos <em>software</em> para gestión de sistemas: ( ed.). Editorial CEP, S.L. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/yXhAbwx9liU?si=UPjGH9XtGPCgftKE " target="_blank" rel="noopener noreferrer") AlbertoLopez Teach Tips (2023, 23 de enero) ¿Qué es un PAYLOAD, un EXPLOIT y una VULNERABILIDAD en CIBERSEGURIDAD? Diferencias | Alberto López [video] YouTube.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=8-3FZ4Opn4U" target="_blank" rel="noopener noreferrer") Ministerio TIC Colombia. (2013, 1 de febrero). Ricardo Suárez - Principios de Programación Segura. [Vídeo]. YouTube.  

 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'SEGURIDAD DE <em>SOFTWARE</em>',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es uno de los principios fundamentales de la seguridad informática?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Maximizar el acceso de usuarios sin restricciones',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Garantizar la confidencialidad, integridad y disponibilidad de la información',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Eliminar todas las contraseñas para facilitar el acceso',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Compartir información sensible sin control',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué representa una vulnerabilidad en el contexto de la seguridad informática?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Una característica que mejora el rendimiento del sistema',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Un punto débil que puede ser explotado para comprometer la seguridad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Una nueva funcionalidad de <em>software</em>',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Un método para aumentar la velocidad de acceso a datos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes es una buena práctica para mejorar la seguridad de un <em>software</em>?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Usar contraseñas fáciles de recordar para todos los usuarios',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Actualizar regularmente el <em>software</em> y aplicar parches de seguridad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Compartir las claves de acceso con el equipo completo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  ' Ignorar las alertas de seguridad para no interrumpir el trabajo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué implica el principio de integridad en la seguridad informática?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Que la información debe estar disponible en todo momento',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Que la información no debe ser modificada sin autorización',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Que todos los usuarios tengan acceso completo al sistema',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Que los datos pueden ser compartidos libremente sin restricciones',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es el propósito principal de identificar vulnerabilidades en un sistema?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mejorar la estética del <em>software</em>',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Detectar puntos débiles para aplicar medidas de protección adecuadas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reducir la funcionalidad del sistema',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Incrementar el consumo de recursos del sistema',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
