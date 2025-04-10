document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input input');
    const actionFilter = document.querySelector('.action-filter select');
    const clearFiltersButton = document.querySelector('.clear-filters-button');
    const logList = document.querySelector('.log-list');
    const logItems = Array.from(logList.querySelectorAll('.log-item'));

    function filterLogs() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedAction = actionFilter.value;

        logItems.forEach(item => {
            const activity = item.querySelector('.log-activity').textContent.toLowerCase();
            const description = item.querySelector('.log-description').textContent.toLowerCase();
            const actionMatch = selectedAction === 'Todas las acciones' || activity.includes(selectedAction.toLowerCase());
            const searchMatch = searchTerm === '' || activity.includes(searchTerm) || description.includes(searchTerm);

            if (actionMatch && searchMatch) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterLogs);
    actionFilter.addEventListener('change', filterLogs);

    clearFiltersButton.addEventListener('click', () => {
        searchInput.value = '';
        actionFilter.value = 'Todas las acciones';
        filterLogs();
    });
});