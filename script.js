document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const currentMonth = document.getElementById('current-month');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const modal = document.getElementById('activity-modal');
    const closeModal = document.querySelector('.close');
    const categorySelect = document.getElementById('category');
    const categories = ['Work', 'School', 'Family', 'Gym', 'Other'];

    let date = new Date();

    function renderCalendar() {
        calendar.innerHTML = '';
        const month = date.getMonth();
        const year = date.getFullYear();
        currentMonth.textContent = date.toLocaleString('default', { month: 'long' }) + ' ' + year;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            calendar.appendChild(emptyCell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'day';
            dayCell.textContent = day;
            dayCell.addEventListener('click', () => openModal(day));
            calendar.appendChild(dayCell);
        }
    }

    function openModal(day) {
        modal.style.display = 'block';
    }

    closeModal.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    prevMonthButton.onclick = () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    }

    nextMonthButton.onclick = () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    }

    function populateCategorySelect() {
        categorySelect.innerHTML =


