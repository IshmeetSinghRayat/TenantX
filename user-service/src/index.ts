import express from "express";
import { createUser } from "./commands/CreateUser";
import { saveEvent } from "./events/EventStore";

const app = express();
app.use(express.json());

app.post("/users", (req, res) => {
  const { name, role, tenantId } = req.body;
  const newUser = createUser({ name, role, tenantId });
  saveEvent({ type: "UserCreated", data: newUser });
  res.json(newUser);
});

app.listen(3000, () => {
  console.log("User service running on port 3000");
});
