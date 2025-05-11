function updateClock() {
    const now = new Date();
    
    // Get time components
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
    
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Get date components
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const dayNumber = now.getDate();
    const year = now.getFullYear();
    
    // Update the DOM
    document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
    document.querySelector('.ampm').textContent = ampm;
    
    document.querySelector('.day').textContent = day;
    document.querySelector('.month').textContent = month;
    document.querySelector('.day-number').textContent = dayNumber;
    document.querySelector('.year').textContent = year;
    
    // Request animation frame for smooth updates
    requestAnimationFrame(updateClock);
}

// Start the clock
updateClock();
