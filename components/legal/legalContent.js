// Contenido de las páginas legales (bilingüe). El texto largo vive acá y NO en
// messages/*.json para no inflar el bundle global (esos mensajes se envían al
// cliente en todas las páginas vía NextIntlClientProvider).

export const LAST_UPDATED = "2026-07-07";
export const CONTACT_EMAIL = "alextraverso6@gmail.com";

export const LAST_UPDATED_FORMATTED = {
  es: "7 de julio de 2026",
  en: "July 7, 2026",
};

export const LAST_UPDATED_LABEL = {
  es: "Última actualización",
  en: "Last updated",
};

export const privacyContent = {
  es: {
    title: "Política de Privacidad | Alex Traverso",
    description:
      "Política de privacidad del portfolio y servicios de desarrollo de software de Alex Traverso: qué datos se recopilan, cómo se usan y cuáles son tus derechos.",
    heading: "Política de Privacidad",
    sections: [
      {
        heading: "Introducción",
        paragraphs: [
          "Soy Alex Traverso, desarrollador de software independiente (freelance). Ofrezco servicios de desarrollo web, automatizaciones y proyectos a medida.",
          "Este sitio es mi portfolio: presenta mis servicios y algunos de mis proyectos, y permite que potenciales clientes se pongan en contacto conmigo para consultas o cotizaciones.",
          "Esta Política de Privacidad explica qué datos personales recopilo a través de este sitio, cómo los uso y qué derechos tenés sobre ellos. Se aplica únicamente a este sitio y a mi actividad como desarrollador independiente.",
        ],
      },
      {
        heading: "Qué datos recopilo",
        paragraphs: [
          "Datos que me proporcionás vos: si completás el formulario de contacto o de cotización, recopilo el nombre, el correo electrónico y el mensaje que escribís.",
          "Datos técnicos automáticos: al navegar el sitio, se generan datos técnicos habituales como la dirección IP, el tipo de navegador, el dispositivo, y datos recogidos mediante cookies.",
        ],
      },
      {
        heading: "Cómo se usan los datos",
        paragraphs: ["Utilizo los datos recopilados para:"],
        list: [
          "Responder tus consultas y mensajes.",
          "Elaborar cotizaciones de proyectos.",
          "Dar seguimiento comercial a potenciales clientes.",
          "Entender el uso del sitio y mejorar su contenido y funcionamiento.",
        ],
      },
      {
        heading: "Con quién se comparten los datos",
        paragraphs: [
          "No vendo tus datos personales ni los comparto con terceros para fines de marketing.",
          "Comparto datos únicamente con los proveedores de servicio que necesito para operar el sitio:",
        ],
        list: [
          "Supabase, como base de datos y almacenamiento de la información enviada a través del formulario.",
          "Vercel, como plataforma de hosting del sitio.",
        ],
      },
      {
        heading: "Cookies y tecnologías similares",
        paragraphs: [
          "El sitio utiliza únicamente cookies funcionales, necesarias para su correcto funcionamiento. Actualmente no se usan cookies de analítica ni de terceros. Si en el futuro se incorpora alguna herramienta de analítica, esta política será actualizada.",
          "Podés gestionar, bloquear o eliminar las cookies desde la configuración de tu navegador. Tené en cuenta que deshabilitar ciertas cookies puede afectar algunas funcionalidades del sitio.",
        ],
      },
      {
        heading: "Retención de datos",
        paragraphs: [
          "Conservo los datos de contacto y consultas durante el tiempo necesario para responder tu solicitud y dar seguimiento comercial, y luego durante un período razonable por motivos administrativos o legales. Cuando dejan de ser necesarios, los elimino o los anonimizo.",
        ],
      },
      {
        heading: "Tus derechos",
        paragraphs: [
          "Tenés derecho a acceder a tus datos personales, a rectificarlos y a solicitar su eliminación.",
          "Para ejercer cualquiera de estos derechos, escribime a __EMAIL__. Procesaré tu solicitud en un plazo razonable, habitualmente dentro de los 30 días.",
        ],
      },
      {
        heading: "Seguridad",
        paragraphs: [
          "Adopto medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración. Sin embargo, ningún método de transmisión o almacenamiento en internet es 100% seguro, por lo que no puedo garantizar una seguridad absoluta.",
        ],
      },
      {
        heading: "Menores de edad",
        paragraphs: [
          "Este sitio no está dirigido a menores de 16 años y no recopilo de forma consciente datos personales de menores. Si creés que un menor me proporcionó datos, contactame para eliminarlos.",
        ],
      },
      {
        heading: "Cambios en esta política",
        paragraphs: [
          "Puedo actualizar esta Política de Privacidad ocasionalmente. Cuando lo haga, actualizaré la fecha de “última actualización” que aparece al inicio de esta página. Te recomiendo revisarla periódicamente.",
        ],
      },
      {
        heading: "Contacto",
        paragraphs: [
          "Si tenés preguntas sobre esta Política de Privacidad o sobre el tratamiento de tus datos, escribime a __EMAIL__.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy | Alex Traverso",
    description:
      "Privacy policy for Alex Traverso's software development portfolio and services: what data is collected, how it is used, and your rights.",
    heading: "Privacy Policy",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "I'm Alex Traverso, an independent (freelance) software developer. I offer web development, automation, and custom project services.",
          "This site is my portfolio: it presents my services and some of my projects, and lets potential clients get in touch with me for questions or quotes.",
          "This Privacy Policy explains what personal data I collect through this site, how I use it, and what rights you have over it. It applies only to this site and to my activity as an independent developer.",
        ],
      },
      {
        heading: "What data I collect",
        paragraphs: [
          "Data you provide: if you fill out the contact or quote form, I collect the name, email address, and message you write.",
          "Automatic technical data: while browsing the site, standard technical data is generated, such as your IP address, browser type, device, and data gathered through cookies.",
        ],
      },
      {
        heading: "How the data is used",
        paragraphs: ["I use the collected data to:"],
        list: [
          "Respond to your inquiries and messages.",
          "Prepare project quotes.",
          "Follow up commercially with potential clients.",
          "Understand how the site is used and improve its content and operation.",
        ],
      },
      {
        heading: "Who the data is shared with",
        paragraphs: [
          "I do not sell your personal data, nor do I share it with third parties for marketing purposes.",
          "I only share data with the service providers I need to operate the site:",
        ],
        list: [
          "Supabase, as the database and storage for information submitted through the form.",
          "Vercel, as the site's hosting platform.",
        ],
      },
      {
        heading: "Cookies and similar technologies",
        paragraphs: [
          "The site uses only functional cookies, necessary for it to work properly. Analytics or third-party cookies are not currently used. If any analytics tool is incorporated in the future, this policy will be updated.",
          "You can manage, block, or delete cookies from your browser settings. Note that disabling certain cookies may affect some features of the site.",
        ],
      },
      {
        heading: "Data retention",
        paragraphs: [
          "I keep contact and inquiry data for as long as necessary to respond to your request and follow up commercially, and then for a reasonable period for administrative or legal reasons. When it is no longer needed, I delete or anonymize it.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You have the right to access your personal data, to rectify it, and to request its deletion.",
          "To exercise any of these rights, write to me at __EMAIL__. I will process your request within a reasonable time, usually within 30 days.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "I take reasonable technical and organizational measures to protect your data against unauthorized access, loss, or alteration. However, no method of transmission or storage over the internet is 100% secure, so I cannot guarantee absolute security.",
        ],
      },
      {
        heading: "Minors",
        paragraphs: [
          "This site is not directed at children under 16 and I do not knowingly collect personal data from minors. If you believe a minor has provided me with data, contact me to have it removed.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "I may update this Privacy Policy from time to time. When I do, I will update the “last updated” date shown at the top of this page. I recommend reviewing it periodically.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "If you have questions about this Privacy Policy or how your data is handled, write to me at __EMAIL__.",
        ],
      },
    ],
  },
};

export const termsContent = {
  es: {
    title: "Términos del Servicio | Alex Traverso",
    description:
      "Términos del servicio del portfolio de Alex Traverso: condiciones de uso del sitio, propiedad intelectual, cotizaciones y limitación de responsabilidad.",
    heading: "Términos del Servicio",
    sections: [
      {
        heading: "Aceptación de los términos",
        paragraphs: [
          "Al acceder y utilizar este sitio aceptás estos Términos del Servicio. Si no estás de acuerdo con ellos, te pido que no utilices el sitio.",
        ],
      },
      {
        heading: "Descripción del servicio",
        paragraphs: [
          "Soy Alex Traverso, un desarrollador independiente que ofrece servicios de desarrollo de software, automatizaciones y proyectos a medida.",
          "Este sitio funciona como mi portfolio: muestra mis servicios y proyectos, y permite contactarme para realizar consultas o solicitar cotizaciones.",
        ],
      },
      {
        heading: "Uso permitido del sitio",
        paragraphs: [
          "Podés navegar el sitio y contactarme con fines legítimos. Está prohibido, entre otras conductas:",
        ],
        list: [
          "Darle un uso malicioso, ilegal o que perjudique el sitio o a terceros.",
          "Realizar scraping abusivo o recolección automatizada de datos sin autorización.",
          "Intentar vulnerar la seguridad del sitio o acceder a áreas o datos no autorizados.",
          "Reproducir, copiar o distribuir el contenido del sitio sin mi autorización.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        paragraphs: [
          "El contenido de este sitio —incluyendo el código, el diseño, los textos, las imágenes y los proyectos mostrados— me pertenece o se utiliza con la debida autorización, salvo cuando corresponda a un cliente. No podés reutilizarlo sin mi permiso previo por escrito.",
        ],
      },
      {
        heading: "Naturaleza de los proyectos mostrados",
        paragraphs: [
          "Los proyectos que aparecen en el portfolio se muestran con fines demostrativos, para ilustrar mi trabajo y mis capacidades.",
          "Cualquier trabajo realizado para un cliente se rige por un acuerdo o contrato separado con ese cliente, y no por estos Términos.",
        ],
      },
      {
        heading: "Cotizaciones y consultas",
        paragraphs: [
          "Completar el formulario de contacto o solicitar una cotización no genera ninguna obligación contractual para ninguna de las partes. Una relación contractual solo existe cuando hay un acuerdo explícito y por escrito entre vos y yo.",
        ],
      },
      {
        heading: "Limitación de responsabilidad",
        paragraphs: [
          "Este sitio se ofrece “tal cual”, sin garantías de ningún tipo. No garantizo su disponibilidad continua ni la ausencia total de errores. En la medida permitida por la ley, no seré responsable por daños derivados del uso o la imposibilidad de uso del sitio.",
        ],
      },
      {
        heading: "Enlaces a terceros",
        paragraphs: [
          "El sitio puede contener enlaces a sitios web de terceros. No me hago responsable por el contenido, las políticas ni las prácticas de esos sitios externos.",
        ],
      },
      {
        heading: "Ley aplicable",
        paragraphs: [
          "Estos Términos se rigen por las leyes de la República Argentina. Cualquier controversia se someterá a los tribunales competentes de dicha jurisdicción.",
        ],
      },
      {
        heading: "Cambios en los términos",
        paragraphs: [
          "Puedo actualizar estos Términos del Servicio ocasionalmente. Cuando lo haga, actualizaré la fecha de “última actualización” que aparece al inicio de esta página. El uso continuado del sitio implica la aceptación de los términos vigentes.",
        ],
      },
      {
        heading: "Contacto",
        paragraphs: [
          "Si tenés preguntas sobre estos Términos del Servicio, escribime a __EMAIL__.",
        ],
      },
    ],
  },
  en: {
    title: "Terms of Service | Alex Traverso",
    description:
      "Terms of service for Alex Traverso's portfolio: site usage conditions, intellectual property, quotes, and limitation of liability.",
    heading: "Terms of Service",
    sections: [
      {
        heading: "Acceptance of the terms",
        paragraphs: [
          "By accessing and using this site you accept these Terms of Service. If you do not agree with them, please do not use the site.",
        ],
      },
      {
        heading: "Description of the service",
        paragraphs: [
          "I'm Alex Traverso, an independent developer offering software development, automation, and custom project services.",
          "This site works as my portfolio: it showcases my services and projects, and lets you contact me to ask questions or request quotes.",
        ],
      },
      {
        heading: "Permitted use of the site",
        paragraphs: [
          "You may browse the site and contact me for legitimate purposes. The following, among other conduct, is prohibited:",
        ],
        list: [
          "Using it maliciously, illegally, or in a way that harms the site or third parties.",
          "Performing abusive scraping or automated data collection without authorization.",
          "Attempting to breach the site's security or access unauthorized areas or data.",
          "Reproducing, copying, or distributing the site's content without my authorization.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "The content of this site —including the code, design, texts, images, and the projects shown— belongs to me or is used with proper authorization, except where it belongs to a client. You may not reuse it without my prior written permission.",
        ],
      },
      {
        heading: "Nature of the projects shown",
        paragraphs: [
          "The projects appearing in the portfolio are shown for demonstration purposes, to illustrate my work and capabilities.",
          "Any work carried out for a client is governed by a separate agreement or contract with that client, and not by these Terms.",
        ],
      },
      {
        heading: "Quotes and inquiries",
        paragraphs: [
          "Filling out the contact form or requesting a quote does not create any contractual obligation for either party. A contractual relationship only exists when there is an explicit, written agreement between you and me.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "This site is provided “as is”, without warranties of any kind. I do not guarantee its continuous availability or that it will be completely free of errors. To the extent permitted by law, I will not be liable for damages arising from the use of, or inability to use, the site.",
        ],
      },
      {
        heading: "Third-party links",
        paragraphs: [
          "The site may contain links to third-party websites. I am not responsible for the content, policies, or practices of those external sites.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These Terms are governed by the laws of the Argentine Republic. Any dispute will be submitted to the competent courts of that jurisdiction.",
        ],
      },
      {
        heading: "Changes to the terms",
        paragraphs: [
          "I may update these Terms of Service from time to time. When I do, I will update the “last updated” date shown at the top of this page. Continued use of the site implies acceptance of the terms in force.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "If you have questions about these Terms of Service, write to me at __EMAIL__.",
        ],
      },
    ],
  },
};
