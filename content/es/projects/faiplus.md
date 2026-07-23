---
title: FAI+
description: Plataforma de educación en línea (LMS) por suscripción para formación profesional enfocada en la infancia, con pagos recurrentes en múltiples divisas, certificaciones individuales y contenido interactivo de cursos
owner: Fundación América por la Infancia
date: 2026-06-09
url: https://www.faiplus.com/
repository: Privado
image: /mockups/faiplus/mockup-01.webp
tags:
  - Nuxt
  - Vue 3
  - PostgreSQL
  - AWS
  - Stripe
  - MercadoPago
  - PayPal
  - Vimeo
  - Tailwind CSS
  - LMS
  - Full Stack
---

## Descripción General

FAI+ es una plataforma de educación en línea por suscripción de la Fundación América por la Infancia, que ofrece formación continua en infancia, apego, trauma, parentalidad y salud mental. La plataforma proporciona más de 40 cursos, diplomados, clases magistrales y podcasts para psicólogos, educadores, terapeutas, trabajadores sociales y cuidadores en toda Latinoamérica, con certificación individual y microlearning a ritmo propio.

Me uní al proyecto en enero de 2026 para retomar un código existente, completar la plataforma y lanzarla a producción — lo cual ocurrió el 9 de junio de 2026. Continúo trabajando como desarrollador Full Stack a cargo del mantenimiento y la mejora continua.

## Mis Contribuciones

- **Desarrollo Frontend**: Construí la capa visual completa de la plataforma, incluyendo el catálogo público de cursos, el dashboard del estudiante, el visualizador de lecciones (integración del player de Vimeo y visor de PDF) y el seguimiento de progreso, totalmente responsivo en dispositivos móviles y tablets
- **Desarrollo Backend**: Desarrollé la capa del servidor con rutas de servidor Nuxt (Nitro) y PostgreSQL, implementando la lógica de negocio, los modelos de datos y las APIs que impulsan el LMS, las suscripciones y el panel administrativo
- **Motor de Suscripciones y Pagos**: Integré Stripe, MercadoPago y PayPal para pagos recurrentes en tres divisas (CLP, USD, MXN), con control de acceso mediante middleware según el estado de la suscripción y autogestión de planes (mejora, cambio y cancelación)
- **Módulos LMS**: Finalicé la integración de contenido interactivo H5P para registrar aprobaciones y notas en la base de datos, y optimicé el mantenedor administrativo de calificaciones para gestionar notas e intentos de examen
- **Certificaciones**: Desarrollé el módulo de certificaciones para la emisión de certificados con validación en línea
- **Sistema de Soporte**: Construí una herramienta de tickets que permite a los estudiantes enviar dudas directamente desde las lecciones, con comunicación externa vía email
- **Infraestructura en la Nube**: Desplegué y opero la plataforma en AWS usando ECS, RDS (PostgreSQL), S3, CloudFront y Lambdas
- **Integraciones de Terceros**: Implementé la integración con Meta Ads para campañas publicitarias y conecté el sistema de facturación para pedidos en pesos chilenos
- **Lanzamiento y QA**: Lideré las pruebas finales, el aseguramiento de calidad del flujo de pago y la puesta en producción
