Troubleshooting Guide: Dockerizing a Vite/TypeScript & Node.js App
Overview
This document outlines a series of build and runtime errors encountered while configuring a multi-stage Dockerfile for a React (Vite) frontend and Node.js (TypeScript) backend.

Issue 1: Missing Source Files During Build
Error Log Snippet:

error during build:
[vite:build-html] Failed to resolve /src/main.tsx from /app/index.html
The command '/bin/sh -c npm run build' returned a non-zero code: 1

Root Cause: The src folder was missing from the local working directory when the docker build command was executed. Consequently, the Dockerfile instruction COPY . . copied an incomplete workspace into the container. When Vite attempted to bundle the app, the source files did not exist inside the container.

Resolution: Always verify the build context before running Docker commands. Run ls -la (Linux/Mac) or dir (Windows) in the terminal to visually confirm all necessary folders (like src) are present in the current directory before triggering the build.

Issue 2: Execution of Raw TypeScript in Production
Error Log Snippet:

> react-example@0.0.0 start
> node server.ts
Error: Cannot find module '/app/server.ts'
Root Cause: The package.json start script was set to "start": "node server.ts". In a multi-stage Docker build optimized for production, only the compiled /dist folder is copied to the final image. The raw server.ts file was intentionally left behind in the builder stage for security and image size optimization.

Resolution: Update the start script in package.json to point to the compiled JavaScript executable rather than the raw TypeScript file.

Fixed Script: "start": "node dist/server.js"

Issue 3: Invalid JSON Formatting in package.json
Error Log Snippets:

npm error Missing script: "start"
npm error code EJSONPARSE
npm error JSON.parse Unexpected non-whitespace character after JSON...
Root Cause: Manual edits and copy-pasting inside package.json resulted in malformed JSON syntax. Specifically, the file contained duplicated "scripts" blocks, nested objects without proper key-value mapping, and missing commas between top-level configurations. Because JSON is strictly parsed, npm crashed immediately.

Resolution: Reformat the package.json to ensure strict JSON compliance. Remove nested/duplicate blocks and ensure commas correctly separate the scripts, dependencies, and devDependencies objects.

Issue 4: Incomplete Build Pipeline (Missing Backend Bundle)
Error Log Snippet:

> react-example@0.0.0 start
> node dist/server.js
Error: Cannot find module '/app/dist/server.js'
Root Cause: The build command ("build": "vite build") was only configured to bundle the React frontend. It did not compile the backend Node.js server (server.ts). Therefore, when Docker copied the /dist folder to the production stage, server.js did not exist, causing the container to crash on startup.

Resolution: Expand the build script to compile both the frontend and the backend sequentially. Using esbuild provides a fast, dependency-free way to transpile the TypeScript server file into the dist folder.

Fixed Script: "build": "vite build && npx --yes esbuild server.ts --bundle --platform=node --format=esm --packages=external --outfile=dist/server.js"

Minor Warning: Legacy Docker Builder
Log Snippet:

DEPRECATED: The legacy builder is deprecated and will be removed in a future release.
Root Cause: The standard docker build command uses an older image building engine that lacks modern caching and concurrency features.

Resolution: Transition to Docker's modern BuildKit engine by appending buildx to the command line instructions.

Updated Command: docker buildx build -t image-name .
