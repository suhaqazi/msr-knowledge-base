# MSR Knowledge Base

[![CI](https://github.com/suhaqazi/msr-knowledge-base/actions/workflows/ci.yml/badge.svg)](https://github.com/suhaqazi/msr-knowledge-base/actions/workflows/ci.yml)

**Live site:** https://suhaqazi.github.io/msr-knowledge-base/

A reference web page for Mining Software Repositories (MSR) researchers, built for COIS 3060H Assignment 1. It organizes MSR knowledge into four tabs: Data Sources, Collection Methods, Analysis Methods, and Publication Venues.

## Development Process

1. Requirements written in `docs/requirements.md` (user stories, acceptance criteria, functional and non-functional requirements)
2. Work planned as GitHub milestones and issues
3. Features built on a `feature/` branch, tests on a separate `test/` branch
4. Pull requests merged into `main`, closing their linked issues
5. GitHub Actions runs the Jest tests on every push and pull request, and deploys `src/` to GitHub Pages on pushes to `main`

## Milestones

| # | Milestone | Status |
|---|-----------|--------|
| 1 | Page Structure & Navigation | Completed (#1, #2) |
| 2 | Data Sources Content | Completed (#3, #4) |
| 3 | Collection Methods Content | Future work (#5) |
| 4 | Analysis Methods Content | Future work (#6) |
| 5 | Publication Venues Content | Future work (#7) |

## Repository Structure

- `.github/workflows/ci.yml` – CI/CD pipeline (test + deploy)
- `docs/requirements.md` – requirements document
- `src/index.html` – page structure and content
- `src/style.css` – styling (rem units)
- `src/script.js` - tab navigation logic
- `tests/navigation.test.js` – automated Jest tests
- `tests/test_checklist.md` – manual test checklist
- `package.json` – test configuration

## Running Tests Locally

    npm install
    npm test

The tests use Jest with jsdom. They check the default tab, tab switching, the active tab highlight, and the Data Sources table content.
