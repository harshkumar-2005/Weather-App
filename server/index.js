import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
const KEY = process.env.KEY;

app.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        "Message": "Health is good"
    })
});

app.get('/v1/api/weather', async (req, res) => {
    try {
        const city = req.query.city;

        if (!city) {
            return res.status(400).json({
                success: false,
                message: 'City name is required'
            });
        }

        const url = new URL('https://api.openweathermap.org/data/2.5/weather');
        url.searchParams.append('q', city);
        url.searchParams.append('appid', KEY);
        url.searchParams.append('units', 'metric');

        const response = await fetch(url);

        if (!response.ok) {
            return res.status(response.status).json({
                success: false,
                message: 'Failed to fetch weather data'
            });
        }

        const data = await response.json();

        const { weather, main, visibility, wind, clouds, name } = data;

        const result = { weather, main, visibility, wind, clouds, name };

        res.status(200).json({
            success: true,
            result: result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

app.listen(port, "0.0.0.0", () => {
    console.log(`App is running at http://localhost:${port}`);
})