const express = require('express');
const env = require("dotenv").config().parsed
const app = express();
const adminRouter = require("./Routes/admin")
// const userRouter = require("./routes/user");

// // Middleware for parsing request bodies
app.use(express.json());

// Catch all routes that don't match any other routes and return 404 error
// app.use((req, res, next) => {
//     next(createError(404, `Can't find ${req.originalUrl} on this server!`));
// });

app.use("/admin", adminRouter)
// app.use("/user", userRouter)


app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
});
