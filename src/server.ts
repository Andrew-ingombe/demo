import express from 'express';
const app = express();
const PORT = process.env.PORT || 1337;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'Server is running on Node.js',
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
