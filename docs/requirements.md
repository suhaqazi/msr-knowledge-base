# Requirements Document - MSR Knowledge Base

## 1. Project Overview

**Customer:** MSR Research Group Lead
**Software Engineer:** Suha Qazi

New PhD students joining the Mining Software Repositories (MSR) research group feel overwhelmed. They do not know which data sources exist, how to collect data, which analysis methods to use, or where to publish their work. The customer asked for a simple, single-page web reference guide that organizes this information into four sections that students can switch between.

## 2. Stakeholders

| Stakeholder | Role / Interest |
|---|---|
| MSR Research Group Lead | Customer; wants new students onboarded faster |
| New PhD students | Primary users; need a quick reference guide |
| MSR researchers | Secondary users; look up methods and venues |

## 3. User Stories

| ID | User Story | Priority | Milestone |
|---|---|---|---|
| US1 | As a **PhD student**, I want to **switch between four sections using tabs at the top of the page**, so that **I can quickly find the category I need**. | High | Page Structure & Navigation |
| US2 | As a **PhD student**, I want to **see a list of available data sources with the kind of data each provides and a short description**, so that **I can choose which data to collect for my study**. | High | Data Sources Content |
| US3 | As a **PhD student**, I want to **see data collection methods with what each is used for and its pros and cons**, so that **I can pick the right way to gather my data**. | High | Collection Methods Content |
| US4 | As a **researcher**, I want to **see analysis methods with their type and common use cases**, so that **I can choose a suitable technique for my research question**. | Medium | Analysis Methods Content |
| US5 | As a **researcher**, I want to **compare publication venues by type, focus area, and relevance to MSR**, so that **I can pick the most appropriate venue for my paper**. | Medium | Publication Venues Content |
| US6 | As a **researcher**, I want **the page to be clean, readable, and professional-looking**, so that **I can focus on the content without distractions**. | Medium | Page Structure & Navigation |

## 4. Acceptance Criteria

**US1 – Tab navigation**
- Four tabs are shown at the top: Data Sources, Collection Methods, Analysis Methods, Publication Venues.
- Clicking a tab shows only that section and hides the others.
- The active tab is visually highlighted.
- Data Sources is shown by default when the page loads.

**US2 – Data Sources**
- All 7 sources are listed: GitHub, Stack Overflow, JIRA, App Stores, Travis CI / Jenkins, Mailing Lists, npm Registry.
- Each source shows its name, the kind of data it provides, and a brief description.
- Content is shown in a table.

**US3 – Collection Methods**
- All 6 methods are listed: REST APIs, GraphQL, Web Scraping (Selenium), Web Scraping (BeautifulSoup), Database Dumps, Manual Download.
- Each method shows its name, what it is used for, and its pros and cons.

**US4 – Analysis Methods**
- All 8 methods are listed: Statistical Analysis, Regression Analysis, Thematic Analysis, Grounded Theory, Machine Learning, Time Series Analysis, Network Analysis, Visualization.
- Each method shows its name, type of analysis, and common use cases.

**US5 – Publication Venues**
- All 9 venues are listed: ICSE, FSE, ASE, MSR, EASE, SANER (conferences) and EMSE, TSE, TOSEM (journals).
- Each venue shows its name and abbreviation, type, focus area, and relevance to MSR (High or Medium).
- Conferences and journals are shown separately.

**US6 – Design**
- Simple CSS styling with a clean layout and readable fonts.
- No unnecessary animations.

## 5. Functional Requirements

| ID | Requirement |
|---|---|
| FR1 | The page shall display four navigation tabs. |
| FR2 | The page shall show one section at a time based on the selected tab. |
| FR3 | Each section shall display its content in a table or list format. |
| FR4 | The page shall load with the Data Sources section visible by default. |

## 6. Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR1 | **Usability:** The page shall be simple and easy to navigate. |
| NFR2 | **Readability:** Text and tables shall be clean and easy to read. |
| NFR3 | **Availability:** The page shall be publicly accessible through GitHub Pages. |
| NFR4 | **Maintainability:** Code shall be organized into separate HTML, CSS, and JavaScript files. |
| NFR5 | **Quality:** Automated tests shall run on every push and pull request using GitHub Actions. |

## 7. Out of Scope

- User accounts or login
- Search or filtering
- Editing content through the page
