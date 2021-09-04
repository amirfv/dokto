const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const errorHandler = require("./middlewares/error");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const clientDomainAdmin = process.env.CLIENT_DOMAIN_ADMIN;
const clientDomainProvider = process.env.CLIENT_DOMAIN_PROVIDER;

const origin = [clientDomainAdmin, clientDomainProvider];
app.use(cors({ origin, credentials: true }));

mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/auth", require("./routes/user"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/symptom", require("./routes/symptom"));
app.use("/api/service", require("./routes/service"));

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
