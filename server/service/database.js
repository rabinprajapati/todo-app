const url = process.env.DB_URL;
const dbconnect = require("mongoose");

const database = async () => {
  try {
    console.log("[+]Connecting to database......");
    await dbconnect.connect(url);
    console.log("[+] Connection sucessful !!!");
  } catch (err) {
    console.log("[+] Error conecting database: " + err);
  }
};

module.exports = { database };
