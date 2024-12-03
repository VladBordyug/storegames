document.addEventListener('DOMContentLoaded', () => {
    const ratingBars = document.querySelectorAll('.rating-bar');
  
    
    ratingBars.forEach(bar => {
      const online = bar.getAttribute('data-online'); 
      bar.style.height = `${online * 1.5}px`;
      const tooltip = bar.querySelector('.tooltip');
      tooltip.textContent = `${online} користувачів`; 
  });
