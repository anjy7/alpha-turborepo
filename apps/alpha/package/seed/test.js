// import buildConfig from "../../payload.config.ts"
// import payload from "payload";

// import { getPayload } from 'payload'
// import configPromise from "@payload-config";

import { getPayload } from 'payload'

import payloadConfig from '../../payload.config.js'

// export const getPayloadClient = () => getPayload({ config: payloadConfig })

const createHomePage = async () => {
  
  const config = buildConfig();
  console.log("config",config)
  
  const payload = await getPayload({ config: configPromise })
  // await payload.init({
  //   config: config,
  // });


  console.log('Seed completed!');
  process.exit(0);
};


const payloadConfigPath = createHomePage();

console.log("payloadConfigPath");
