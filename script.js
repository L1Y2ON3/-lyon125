document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;

    // Validation...
    if(day < 1 || day > 31 || month < 1 || month > 12 || !gender) {
        alert("Please enter valid data.");
        return;
    }

    // Calculate the day of the week
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const d = Math.floor((CC - 2 * CC - 1) + (5 * YY / 4) + (26 * (month + 1) / 10) + day) % 7;

    // Map result to Akan Names
    const names = {
        0: gender === 'male' ? 'Kwasi' : 'Akosua',
        1: gender === 'male' ? 'Kwadwo' : 'Adwoa',
        2: gender === 'male' ? 'Kwabena' : 'Abenaa',
        3: gender === 'male' ? 'Kwaku' : 'Akua',
        4: gender === 'male' ? 'Yaw' : 'Yaa',
        5: gender === 'male' ? 'Kofi' : 'Afua',
        6: gender === 'male' ? 'Kwame' : 'Ama'
    };

    document.getElementById('result').innerText = `Your Akan name is: ${names[d]}`;
});
