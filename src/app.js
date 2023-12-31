require("dotenv").config();
const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");

const config = new Configuration({
  apiKey: process.env.APIKey,
});
const openai = new OpenAIApi(config);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/test", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: "text-curie-001",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 500,
    });

    res.status(200).send(response.data.choices[0].text);
  } catch (e) {
    res.status(500).send({
      API: false,
      message: e.message,
    });
  }
});

app.get("*", (req, res) => {
  res.status(404).send({
    API: false,
    message: "Invalid Link !..",
  });
});
module.exports = app;
