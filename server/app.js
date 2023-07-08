import databaseConnection from "./config/mongoose.js";
import app from "./config/express.js";

const port = 3030;


const start = async () => {
  await databaseConnection();
  app.listen(port, () => {
    console.log(`Server Is Running on ${port}`);
  });
};

start();

export default app