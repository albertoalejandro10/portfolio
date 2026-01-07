---
title: Trader-Buddy
description: High-level trading performance & journaling platform
image: https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80
owner: Takumi Software
date: September 2025
url: Private
repository: Private
tags:
  - Nuxt
  - Vue 3
  - Go
  - gRPC
  - MongoDB
  - Firebase
  - WebSocket
  - Pinia
  - i18n
  - Full Stack
---

## Overview

Trader-Buddy is a comprehensive trading performance and journaling platform designed to help active traders record, enrich, and analyze their trading activities. The platform combines real-time market data collection with detailed trade logging, broker report ingestion, and sophisticated performance analytics to enable data-driven trading decisions.

## My Contributions

- **Frontend Application**: Developed complete Nuxt 3 single-page application with Vue 3, Pinia state management, and chart visualization
- **Backend API**: Built Go-based gRPC service with REST gateway for comprehensive trading data management
- **Real-time Data Endpoints**: Implemented WebSocket (WSS) endpoints for live market data retrieval and monitoring
- **Broker Integration**: Created automated IBKR TLG report ingestion system for bulk trade data import
- **Statistics Engine**: Developed on-demand calculators for win rates, profit factors, Kelly %, drawdowns, and distribution analytics
- **Chart Analytics**: Built multi-series categorical charts (hour-of-day, duration ranges, price/volume tiers, P&L evolution)
- **Calendar Aggregation**: Implemented daily profit/loss summaries and trade count tracking
- **Asset Management**: Developed Base64 upload system with DigitalOcean Spaces storage for screenshots, PDFs, and video clips
- **AI Enrichment**: Integrated RSS feed processing with OpenAI filtering for market intelligence (70% accuracy threshold)
- **Notification System**: Set up multi-channel notifications via Slack webhooks
- **Authentication**: Implemented Firebase Auth with platform JWT issuance and impersonation support
