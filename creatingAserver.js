const express = require('express')
const app = express()
const port = 4000

let users = [{
  name: "john",
  kidneys: [
    { status: "healthy" },
    { status: "unhealthy" },]
}]

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
  const johnKidney = users[0].kidneys;
  const totalKidneys = johnKidney.length;
  res.json({
    totalKidneys,
    johnKidney
  })
})

app.post('/', (req, res) => {
  const kidney = req.body.kidney;
  users[0].kidneys.push({
    status: kidney
  })

  res.json({
    message: "kidney pushed"
  })

})

app.put('/', (req, res) => {

  // this is using map

  // let healthyKidneys = [];
  // users[0].kidneys = users[0].kidneys.map((kidney) =>{
  //   if (kidney.status === "unhealthy") {
  //      kidney.status = "healthy";
  //   }
  //   healthyKidneys = kidney;
  // })
  // users[0].kidneys = healthyKidneys;

  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].status === "unhealthy") {
      users[0].kidneys[i].status = "healthy"
    }
  }
  res.json({ msg: "all unhealthy kidneys fixed nd are healthy now" });
})

app.delete('/', (req, res) => {
  if (check()) {
    res.json({ msg: "There are still unhealthy kidneys" });
  } else {
    res.status(411).json({ msg: "All kidneys are healthy now" });
  }
});


function check() {
  let atLeastOneUnHealthy = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].status === "unhealthy") {
      atLeastOneUnHealthy = true;
    }
  }
  return atLeastOneUnHealthy;

}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
