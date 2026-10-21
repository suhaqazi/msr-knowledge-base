// Shows the selected tab's section and highlights its button
function showTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.tab-panel').forEach(function (panel) {
    panel.classList.toggle('active', panel.id === tabName);
  });
}

// Connects each tab button to showTab
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      showTab(btn.dataset.tab);
    });
  });
}

// In the browser, start the tabs when the page loads.
// In tests (Node), export the functions so they can be tested.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { showTab, initTabs };
} else {
  document.addEventListener('DOMContentLoaded', initTabs);
}
