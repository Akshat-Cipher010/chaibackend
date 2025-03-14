import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

// get a list of 5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: 'A joke', joke: 'Why don\'t scientists trust atoms? Because they make up everything.' },
        { id: 2, title: 'Another joke', content: 'Why don\'t eggs tell jokes? They\'re worried they\'ll crack each other up.' },
        { id: 3, title: 'A third joke', content: 'Why did the tomato turn red? Because it saw the salad dressing.' },
        { id: 4, title: 'A fourth joke', content: 'What do you call a fake noodle? An impasta.' },
        { id: 5, title: 'A fifth joke', content: 'Why did the scarecrow win an award? Because he was outstanding in his field.' }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
