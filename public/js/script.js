console.log("Hello, world! We are now in script.js ...");

function setupTabs() {
    document.querySelectorAll(".tabs__button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;

            // Select and button on which the "data" attribute exists, and then pick for "tab"
            // Example: data-for-tab (using camelCase)...
            const tabNumber = button.dataset.forTab;

            // Select a specific tab (data-tab="?") using the query button.dataset.forTab stored in tabsNumber
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

            // Remove all active buttons
            sideBar.querySelectorAll(".tabs__button").forEach(button => {
                button.classList.remove("tabs__button--active");
            });

            // Remove all active content (no tab-button pressed)
            tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
                tab.classList.remove("tabs__content--active");
            });

            button.classList.add("tabs_button--active");
            tabToActivate.classList.add("tabs__content--active");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
});