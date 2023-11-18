const express = require('express');
const app = express();
const port = 6009;

app.get('/ispalindrome/:number', (req, res) => {
    const number = req.params.number.toString();

    if (!isPositiveInteger(number)) {
        return res.status(400).json({ error: 'Invalid input. Please provide a positive integer.' });
    }

    const reversedNumber = number.split('').reverse().join('');

    if (number === reversedNumber) {
        return res.json({ number, isPalindrome: true });
    } else {
        return res.json({ number, isPalindrome: false });
    }
});

function isPositiveInteger(value) {
    // Check if the value is a positive integer
    return /^[1-9]\d*$/.test(value);
}
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});