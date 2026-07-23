---
title: FAI+
description: Subscription-based e-learning platform (LMS) for childhood-focused professional training, with multi-currency recurring payments, individual certifications, and interactive course content
owner: Fundación América por la Infancia
date: 2026-06-09
url: https://www.faiplus.com/
repository: Private
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

## Overview

FAI+ is a subscription-based online education platform by Fundación América por la Infancia, offering continuous training in childhood development, attachment, trauma, parenting, and mental health. The platform provides 40+ courses, diplomas, masterclasses, and podcasts for psychologists, educators, therapists, social workers, and caregivers across Latin America, with individual certification and self-paced microlearning.

I joined the project in January 2026 to take over an existing codebase, complete the platform, and launch it to production — which happened on June 9, 2026. I continue working as the Full Stack developer in charge of maintenance and continuous improvement.

## My Contributions

- **Frontend Development**: Built the complete visual layer of the platform, including the public course catalog, student dashboard, lesson viewer (Vimeo player and PDF viewer integration), and progress tracking, fully responsive across mobile and tablet devices
- **Backend Development**: Developed the server-side layer with Nuxt (Nitro) server routes and PostgreSQL, implementing the business logic, data models, and APIs powering the LMS, subscriptions, and administrative panel
- **Subscription & Payment Engine**: Integrated Stripe, MercadoPago, and PayPal for recurring payments in three currencies (CLP, USD, MXN), with middleware-based access control tied to subscription status and self-service plan management (upgrade, downgrade, cancellation)
- **LMS Modules**: Finalized the H5P interactive content integration to record approvals and grades in the database, and optimized the administrative gradebook for managing scores and exam attempts
- **Certifications**: Developed the certification module for issuing certificates with online validation
- **Support System**: Built a ticketing tool allowing students to submit questions directly from lessons, with external email communication
- **Cloud Infrastructure**: Deployed and operate the platform on AWS using ECS, RDS (PostgreSQL), S3, CloudFront, and Lambdas
- **Third-Party Integrations**: Implemented Meta Ads integration for advertising campaigns and connected the invoicing system for Chilean peso orders
- **Launch & QA**: Led final testing, payment-flow quality assurance, and production deployment
