<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Principios de seguridad informática'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los principios de seguridad informática constituyen los fundamentos esenciales que guían la protección de los sistemas, datos y servicios digitales. Desde una perspectiva organizacional y técnica, estos principios establecen criterios como la confidencialidad, la integridad, la disponibilidad, la autenticación y la no repudio, asegurando que la información solo sea accesible a quienes están autorizados, que permanezca sin alteraciones indebidas y que esté disponible cuando se requiera. Estos valores fundamentales permiten diseñar infraestructuras y procesos resilientes frente a amenazas internas y externas, fortaleciendo así la confianza en los entornos digitales (Escrivá Gascó, 2013).
    
    .titulo-figura.mb-4
      h5 Figura 1.
      span Confidencialidad, integridad y disponibilidad
    div.bg-color-3.p-4
      .row.justify-content-center.align-items-center
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
    figcaption.mt-2.text-center.mb-5 Nota. Tomado de Universidad Pontificia Comillas. (s.f.). 

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Confidencialidad de la información
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          p.mb-0 La confidencialidad de la información es uno de los pilares fundamentales de la seguridad informática y tiene como propósito garantizar que los datos sensibles solo sean accesibles para personas, sistemas o procesos autorizados. Este principio abarca desde archivos personales hasta bases de datos empresariales o gubernamentales, y su incumplimiento puede derivar en filtraciones, suplantación de identidad o violaciones legales (Escrivá Gascó, 2013).
        p(data-aos="fade-left") Para preservar la confidencialidad, se implementan múltiples mecanismos técnicos y administrativos. A continuación, se presentan algunos de los más comunes:
    
    .bg-full-width.bg-color-5
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/4.svg" alt="" style="width: 90px")
              h5.text-center Cifrado
              p.mb-0.text-center Transforma la información en un formato ilegible sin la clave adecuada. Ejemplo: cifrado de correos electrónicos financieros.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/5.svg" alt="" style="width: 90px")
              h5.text-center Control de acceso
              p.mb-0.text-center Restringe los permisos según el rol del usuario. Ejemplo: médicos acceden a historiales clínicos, personal administrativo solo a datos generales.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/6.svg" alt="" style="width: 90px")
              h5.text-center VPN (red privada virtual)
              p.mb-0.text-center Crea una conexión segura entre el usuario y la red. Ejemplo: acceso remoto seguro a sistemas internos.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/7.svg" alt="" style="width: 90px")
              h5.text-center Protocolo seguro (HTTPS)
              p.mb-0.text-center Protege la transmisión de datos en redes públicas. Ejemplo: navegación segura en sitios <em>web</em> oficiales.
        .bg-full-width.bg-color-1.mb-5
          .p-4.px-md-5.py-4.text-white
            p.mb-0 El uso adecuado de estas técnicas no solo protege a las organizaciones frente a amenazas externas, sino que también garantiza el cumplimiento de normativas legales como el RGPD (Reglamento General de Protección de Datos) o la Ley de Protección de Datos Personales, que exigen salvaguardias estrictas para la información personal (Costas Santos, 2015).
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Integridad de los datos
    
    .bg-full-width.bg-color-6
      .p-4.px-md-5
        p.mb-5 La integridad de los datos es un principio fundamental en la seguridad informática que se enfoca en preservar la exactitud, consistencia y confiabilidad de la información a lo largo de su ciclo de vida (Costas Santos, 2015). A diferencia de la confidencialidad, que limita el acceso, la integridad vela porque la información almacenada o transmitida sea genuina y veraz, evitando modificaciones no autorizadas causadas por errores humanos, fallos técnicos, ataques maliciosos o procesos defectuosos. Existen varios tipos de integridad que deben ser considerados:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/8.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Física
                p.mb-0 Protección de dispositivos y medios de almacenamiento ante daños físicos como fallos de <em>hardware</em>, desastres naturales o cortes eléctricos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/9.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Lógica
                p.mb-0 Garantiza la coherencia interna de los datos dentro de una base de datos o sistema, evitando inserciones, actualizaciones o eliminaciones incorrectas.
         
    h2(data-aos="fade-left") Mecanismos para garantizar la integridad
    p.mb-5 Para garantizar la integridad de los datos, se emplean diversas herramientas y técnicas especializadas:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Funciones <em>hash</em>")
            p Algoritmos como SHA-256 generan un valor único para cada archivo. Si hay alteraciones, el <em>hash</em> cambia. Ejemplo: verificación de integridad al descargar <em>software</em>.
    
          .div(titulo="Firmas digitales")
            p Combinan <em>hash</em>ing y cifrado asimétrico para validar autenticidad e integridad. Común en correos seguros y documentos electrónicos.
    
          .div(titulo="Control de versiones")
            p Herramientas como Git registran cambios, autores y permiten revertir errores. Útil en desarrollo de <em>software</em>.
    
          .div(titulo="Restricciones en bases de datos")
            p Uso de claves primarias, foráneas y validaciones que aseguran la lógica del negocio. Ejemplo: evitar cantidades negativas en ventas.
    
    h2(data-aos="fade-left") Ejemplos prácticos
    p.mb-5 Estos mecanismos se aplican en contextos reales donde la precisión y fidelidad de los datos son cruciales:

    .bg-full-width.bg-color-3
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Sistema bancario</b>: la integridad es esencial para transferencias y pagos. Se utilizan logs, auditorías y validaciones cruzadas para prevenir errores y fraudes.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Historia clínica electrónica</b>: la modificación indebida de diagnósticos o tratamientos pone en riesgo la vida. Se aplican firmas electrónicas, controles de acceso y auditorías.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Sistemas electorales digitales</b>: la integridad de votos y resultados es crucial. Se emplean algoritmos criptográficos y bitácoras inmutables para proteger el proceso.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/11.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-11
        p.banner-text Cuando la integridad se ve comprometida, pueden surgir consecuencias graves: decisiones erróneas basadas en datos falsos, fraudes financieros, responsabilidades legales o incluso riesgos para la salud y la seguridad pública (Costas Santos, 2015).

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Disponibilidad de los sistemas
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La disponibilidad es uno de los pilares fundamentales de la seguridad informática, junto con la confidencialidad y la integridad. Este principio busca asegurar que los sistemas, servicios y datos estén accesibles y operativos cuando los usuarios autorizados los necesiten (Costas Santos, 2015). No basta con que el sistema esté “encendido”; también debe responder correctamente, con el rendimiento adecuado y de forma segura ante múltiples solicitudes (Escrivá Gascó, 2013).
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En entornos críticos como la banca, la salud o el comercio electrónico, incluso breves periodos de inactividad pueden traducirse en pérdidas millonarias o afectar gravemente a las personas.

    .bg-full-width.bg-color-6
      .p-4.px-md-5
        h2(data-aos="fade-left") Estrategias para garantizar la disponibilidad
        p.mb-5 Para mantener la continuidad operativa, se aplican diversas estrategias técnicas y organizativas, resumidas en la siguiente tabla:

        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/15.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Redundancia de <em>hardware</em>
                  p.text-center.mb-0 Componentes duplicados (servidores, discos) que reemplazan a los fallidos. Ejemplo: centros de datos con servidores en clúster.
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/16.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Sistemas de respaldo (<em>backups</em>)
                  p.text-center.mb-0 Copias periódicas que permiten restaurar la información. Ejemplo: <em>backups</em> diarios en plataformas educativas.
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/17.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Balanceadores de carga
                  p.text-center.mb-0 Distribuyen el tráfico entre servidores. Ejemplo: plataformas como Amazon o Netflix.
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/18.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Planes de recuperación ante desastres (DRP)
                  p.text-center.mb-0 Protocolos para actuar frente a catástrofes como incendios o ciberataques.
              .bg-color-white.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/19.png' alt='AvatarTop').mx-auto.mb-3
                div.p-4
                  h4.text-center.mb-4 Protección contra ataques DDoS
                  p.text-center.mb-0 <em>Firewalls</em>, filtros y servicios especializados que mitigan ataques de denegación de servicio.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/14.png', alt='')
    
    h2(data-aos="fade-left") Ejemplos prácticos
    p.mb-5 Estos mecanismos se implementan especialmente en los siguientes contextos:

    .bg-full-width.bg-color-8.mb-5
      .p-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Hospital digital</b>: los sistemas de historia clínica electrónica deben estar disponibles 24/7. Se utilizan servidores espejo y suministro eléctrico ininterrumpido.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Servicios financieros en línea</b>: las aplicaciones bancarias requieren acceso constante. Se emplean arquitecturas distribuidas en la nube para tolerancia a fallos. 
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Sistemas de reservas aéreas</b>: operan en tiempo real y múltiples zonas horarias. Se aplican soluciones de alta disponibilidad geográfica.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/20.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/21.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Consecuencias de la falta de disponibilidad
        p Cuando un sistema falla y no está disponible, pueden surgir diversas consecuencias: 
    
        .bg-color-9.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Pérdidas económicas por interrupciones del servicio.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Afectación a la reputación de la organización.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Problemas legales si existen acuerdos de nivel de servicio (SLA) incumplidos.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Pérdida de confianza por parte de los usuarios.
        .bg-color-10.p-4(data-aos="fade-left")
          p.mb-0 Por ello, garantizar la disponibilidad no es solo una cuestión técnica, sino una responsabilidad crítica para la continuidad del negocio.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Autenticación y control de acceso 
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/22.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.text-white.p-4.h-100(data-aos="fade-left")
          p.mb-0 En el ámbito de la seguridad informática, la autenticación y el control de acceso son mecanismos fundamentales para proteger los recursos digitales frente a accesos no autorizados. Ambos trabajan conjuntamente para asegurar que solo las personas adecuadas ingresen a los sistemas, aplicaciones y datos, y únicamente con los permisos apropiados.
    
    h2(data-aos="fade-left") Autenticación: verificar identidades
    p.mb-5 La autenticación tiene como objetivo confirmar la identidad de un usuario, dispositivo o sistema antes de permitirle el acceso (Escrivá Gascó, 2013). Responde a la pregunta: ¿Quién eres tú?

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-11.p-4(data-aos="fade-left").h-100
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/tema1/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Por conocimiento
              p.mb-0 Basada en algo que el usuario sabe. Ejemplo: contraseña o PIN.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-11.p-4(data-aos="fade-left").h-100
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/tema1/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Por posesión
              p.mb-0 Basada en algo que el usuario tiene. Ejemplo: token o código por SMS.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-11.p-4(data-aos="fade-left").h-100
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/tema1/25.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Biométrica
              p.mb-0 Usa características físicas. Ejemplo: huella dactilar o reconocimiento facial.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-11.p-4(data-aos="fade-left").h-100
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/tema1/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Multifactor (MFA)
              p.mb-0 Combina dos o más métodos anteriores. Ejemplo: contraseña + código en app móvil.

    .bg-color-7.mb-5
      .p-4.px-md-5
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/27.svg", style="max-width: 190px").mx-auto
          .col-lg
            p.mb-0 <b>Ejemplo</b>: Una aplicación bancaria solicita la contraseña del usuario y luego un código generado en una app de autenticación para validar su identidad.

    .bg-full-width.bg-color-6
      .p-4.px-md-5
        h2(data-aos="fade-left") Control de acceso: definir quién puede hacer qué
        p.mb-5 Una vez autenticado, el sistema aplica el control de acceso, que define a qué recursos puede ingresar el usuario y qué acciones puede realizar (Costas Santos, 2015). Responde a la pregunta: ¿Qué tienes permitido hacer?

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/28.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Acceso discrecional (DAC)
                p.mb-0 El propietario del recurso define los permisos.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/29.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Acceso obligatorio (MAC)
                p.mb-0 Basado en niveles de seguridad predefinidos y reglas rígidas.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/30.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Basado en roles (RBAC)
                p.mb-0 Permisos asignados según el rol del usuario.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/31.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Basado en atributos (ABAC)
                p.mb-0 Evalúa condiciones como ubicación, dispositivo o tiempo.

    .bg-color-12.mb-5
      .p-4.px-md-5
        .row.align-items-center
          .col-lg-auto.order-2
            img(src="@/assets/curso/tema1/32.svg", style="max-width: 190px").mx-auto
          .col-lg.order-1.mb-3.mb-lg-0
            p.mb-0 <b>Ejemplo</b>: En un sistema hospitalario, un médico puede editar historiales clínicos de sus pacientes, mientras que el recepcionista solo accede a datos de contacto. Esto ejemplifica el modelo RBAC.
    
    h2(data-aos="fade-left") Importancia en la seguridad
    p.mb-5 La autenticación y el control de acceso constituyen la <b>primera línea de defensa</b> frente a ciberataques, fugas de datos o accesos indebidos (Costas Santos, 2015). Su implementación correcta protege la confidencialidad, integridad y disponibilidad de la información.

    .bg-full-width.bg-color-8.mb-5
      .p-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                h5 Las buenas prácticas recomendadas son:  
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Utilizar contraseñas robustas y con fecha de caducidad.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Implementar autenticación multifactor siempre que sea posible. 
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Aplicar el principio de mínimo privilegio: otorgar solo los permisos estrictamente necesarios.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Auditar accesos regularmente y actualizar permisos obsoletos. 
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Bloquear cuentas tras múltiples intentos fallidos de autenticación.
              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/33.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-11.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") No repudio y trazabilidad
            p.mb-4(data-aos="fade-right") Se invita a leer el documento No repudio y trazabilidad, donde se aborda la importancia de la responsabilidad y la auditabilidad en el desarrollo y uso de <em>software</em>. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> No repudio y trazabilidad.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/34.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40458" target="_blank" rel="noopener noreferrer") Baca Urbina, G. (2016). Introducción a la seguridad informática: ( ed.). Grupo Editorial Patria.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=WRT1J2rLXd4 " target="_blank" rel="noopener noreferrer") Rivera, R. (2019, 24 de octubre). Principios de la Seguridad de la Información.  [Vídeo]. YouTube.   



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
