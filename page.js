    function updateCurrentTime() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const currentDay = daysOfWeek[currentDate.getUTCDay()];
        const currentUTC = currentDate.toISOString().substr(0, 10) + ' ' + currentDate.toTimeString().substr(0, 8);

        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
        document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTC;

        setTimeout(updateCurrentTime, 1000); 
    }
    updateCurrentTime();

