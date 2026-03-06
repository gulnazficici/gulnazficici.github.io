# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Gülnaz Fıçıcı, hosted on GitHub Pages at https://gulnaz.net. Currently a static HTML/CSS coming-soon page with no build tools or dependencies.

## Deployment

The site is deployed via GitHub Pages from the `main` branch. Pushing to `main` automatically publishes changes live. Development work happens on the `develop` branch and is merged into `main` to deploy.

## Structure

The entire site is a single `index.html` file with inline CSS — no build step, no package manager, no external dependencies. To preview locally, open `index.html` directly in a browser or use any static file server (e.g. `python3 -m http.server`).
