import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready ");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "a 1 joke",
      content: "This is a jokw",
    },
    {
      id: 2,
      title: "a 2 joke",
      content: "This is a jokw",
    },
    {
      id: 3,
      title: "a 3 joke",
      content: "This is a jokw",
    },
    {
      id: 4,
      title: "a 4 joke",
      content: "This is a jokw",
    },
  ];
  res.send(jokes);
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
