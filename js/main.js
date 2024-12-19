document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav ul li');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'palevioletred';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; 
        });
    });
});

