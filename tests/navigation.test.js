const fs = require('fs');
const path = require('path');
const { initTabs } = require('../src/script.js');

// Load a fresh copy of the page before each test
beforeEach(() => {
  const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
  document.documentElement.innerHTML = html;
  initTabs();
});

function isActive(id) {
  return document.getElementById(id).classList.contains('active');
}

describe('Tab navigation', () => {

  test('Data Sources section is shown by default', () => {
    expect(isActive('data-sources')).toBe(true);
    expect(isActive('collection-methods')).toBe(false);
  });

  test('clicking Collection Methods shows it and hides Data Sources', () => {
    document.getElementById('tab-collection-methods').click();
    expect(isActive('collection-methods')).toBe(true);
    expect(isActive('data-sources')).toBe(false);
  });

  test('only the clicked tab button is highlighted', () => {
    document.getElementById('tab-publication-venues').click();
    const activeButtons = document.querySelectorAll('.tab-btn.active');
    expect(activeButtons.length).toBe(1);
    expect(activeButtons[0].id).toBe('tab-publication-venues');
  });

});

describe('Data Sources content', () => {

  test('the table lists all 7 data sources', () => {
    const rows = document.querySelectorAll('#data-sources-table tbody tr');
    expect(rows.length).toBe(7);
  });

  test('every required data source name appears in the table', () => {
    const tableText = document.getElementById('data-sources-table').textContent;
    const sources = ['GitHub', 'Stack Overflow', 'JIRA', 'App Stores',
                     'Travis CI / Jenkins', 'Mailing Lists', 'npm Registry'];
    sources.forEach(source => {
      expect(tableText).toContain(source);
    });
  });

});
