const payload = require('payload');
const path = require('path');



// require('dotenv').config( {path: "C:/Projects/payload-next/.env"});


// const { PAYLOAD_SECRET, MONGODB_URI, PAYLOAD_CONFIG_PATH } = process.env;

const createHomePage = async () => {

    const PAYLOAD_SECRET = "";
    const MONGODB_URI = "";
  await payload.init({
    secret: PAYLOAD_SECRET,
    mongoURL: MONGODB_URI,
    local: true,
  });


  console.log('Seed completed!');
  process.exit(0);
};

// Read from stdin
const stdin = fs.readFileSync(process.stdin.fd, 'utf-8').trim(); // Ensure to trim any leading/trailing whitespace

// Call the loadEnv function and store the result
const payloadConfigPath = createHomePage(stdin);

// Output the PAYLOAD_CONFIG_PATH
console.log(payloadConfigPath);

// createHomePage();