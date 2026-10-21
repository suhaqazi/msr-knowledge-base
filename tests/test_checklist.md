# Manual Test Checklist – MSR Knowledge Base

| ID | Test Case | Steps | Expected Result | Status |
|---|---|---|---|---|
| TC1 | Default section | Open the page | Data Sources section is visible; other sections are hidden | Pass |
| TC2 | Switch tabs | Click each of the four tabs | Only the clicked section is shown | Pass |
| TC3 | Active tab highlight | Click a tab | Only that tab button is highlighted | Pass |
| TC4 | Data Sources table | Open Data Sources | Table shows 7 sources with name, data provided and description | Pass |
| TC5 | Placeholder sections | Open the other three tabs | A "Coming soon" message is shown | Pass |
| TC6 | Live site | Open the GitHub Pages URL | The page loads and tabs work | Pass |

Automated versions of TC1–TC4 are in `tests/navigation.test.js` and run on every push and pull request through GitHub Actions.
