function calculate() {
    const operation = document.getElementById('operation').value;
    const numbersInput = document.getElementById('numbers').value;
    let result = '';

    if (numbersInput.trim() === '') {
        result = 'Please input a number';
    } else {
        const numbers = numbersInput.split(',').map(Number);

        switch (operation) {
            case 'Select the operation:-':
                result = 'Please select an operation';
                break;
            case 'mean':
                const sum = numbers.reduce((a, b) => a + b, 0);
                const mean = sum / numbers.length;
                result = `Mean: ${mean}`;
                break;
            case 'median':
                numbers.sort((a, b) => a - b);
                const mid = Math.floor(numbers.length / 2);
                const median = numbers.length % 2 !== 0 ? numbers[mid] : (numbers[mid - 1] + numbers[mid]) / 2;
                result = `Median: ${median}`;
                break;
            case 'mode':
                const frequency = {};

                numbers.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
                const maxFreq = Math.max(...Object.values(frequency));

                if (Object.values(frequency).every(value => value === maxFreq) && maxFreq === 1) {
                    result = "No mode";
                } else {
                    const modes = Object.entries(frequency)
                        .filter(([key, value]) => value === maxFreq)
                        .map(([key]) => key);
                    result = `Mode: ${modes.join(' and ')}`;
                }
                break;
            default:
                result = 'Invalid operation';
        }
    }

    document.getElementById('result').innerText = result+" Units";
}