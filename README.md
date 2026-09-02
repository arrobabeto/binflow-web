# Binflow — Landing Page

Landing page de **Binflow**, una herramienta con IA para la autogestión de páginas web.

## Estado

Proyecto en fase inicial. El diseño de la landing se extrae desde Figma y se
implementa sobre la rama `develop`.

## Setup local

1. Copia la plantilla de variables de entorno:

   ```bash
   cp .env.example .env
   ```

2. Rellena en `.env`:
   - `FIGMA_TOKEN` — Personal Access Token de Figma.
   - `FIGMA_FILE` — ID del archivo de Figma de la landing.

El archivo `.env` está ignorado por git y nunca se sube al repositorio.

## Ramas

- `main` — rama estable.
- `develop` — rama de trabajo activo.
