require("../DbConnection/dbConnection");
const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const config = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(config);

app.post("/test", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: "text-curie-001",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 70,
    });

    res.status(200).send(response.data.choices[0].text);
  } catch (e) {
    res.status(500).send({
      API: false,
      message: e.message,
    });
  }
});

module.exports = app;
