document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('gridContainer');
    const columns = 16;
    const rows = 9;
    const totalCells = columns * rows;
    
    // Создаем ячейки сетки
    for (let i = 0; i < totalCells; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = i;
        gridContainer.appendChild(gridItem);
    }
    
    // Функция для обновления размера шрифта
    function updateFontSize() {
        const gridItems = document.querySelectorAll('.grid-item');
        const containerHeight = gridContainer.clientHeight;
        const rowHeight = containerHeight / rows;
        const fontSize = rowHeight * 0.7; // 70% от высоты строки
        
        gridItems.forEach(item => {
            item.style.fontSize = `${fontSize}px`;
        });
    }
    
    // Обновляем при загрузке и изменении размера окна
    updateFontSize();
    window.addEventListener('resize', updateFontSize);
});