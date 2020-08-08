const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  
  tabButtons.forEach(tab => {
   
    tab.setAttribute('aria-selected', false);
  });

  event.currentTarget.setAttribute('aria-selected', true);

  const { id } = event.currentTarget;

  
  console.log(tabPanels);
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));