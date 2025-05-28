import express from 'express';

const app = express();
import { BACKEND_URI } from '@repo/common/config';
app.get('/', (req, res) => {
    res.json({
        message: 'hello world' + BACKEND_URI
    });
});

app.listen(3000);
