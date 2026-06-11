# 🍹 Aqua-Kool-Drinks

[![TypeScript](https://img.shields.io/badge/language-TypeScript-blue.svg?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/runtime-Node.js-green.svg?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/build%20tool-Vite-purple.svg?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Docker](https://img.shields.io/badge/container-Docker-blue.svg?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)

A fully responsive, containerized full-stack web application built using TypeScript, Node.js, and Vite. This repository showcases production-ready frontend styling alongside a backend service structured for modern containerized deployments.

---

## 🚀 Key Features

* **Strictly Typed Stack:** End-to-end development utilizing TypeScript for scalable and maintainable code.
* **Optimized Production Builds:** Powered by Vite for ultra-fast Hot Module Replacement (HMR) during development and lightweight asset bundling for production.
* **Containerized Deployment:** Includes a multi-stage `Dockerfile` and `.dockerignore` for minimal, secure production container image sizing.
* **Secure Environment Configuration:** Decoupled runtime configuration using `.env` frameworks to prevent sensitive key leakage.

---

## 🧰 Tech Stack

* **Frontend & Build Tooling:** TypeScript, HTML5, CSS3, Vite
* **Backend Runtime:** Node.js, `server.ts`
* **DevOps & Infrastructure:** Docker

---

## 📁 Repository Structure

```text
├── src/                  # Application source code (Components, logic, styles)
├── dockerfile            # Docker configuration for containerizing the application
├── .dockerignore         # Ensures node_modules and build artifacts aren't baked into images
├── .env.example          # Template for required environment variables
├── package.json          # Node.js dependencies and script configurations
├── tsconfig.json         # TypeScript compiler options
└── vite.config.ts        # Vite build engine adjustments
