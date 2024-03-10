import buildConfig from "../../payload.config.ts"
import payload from "payload";

const createHomePage = async () => {

    const config = buildConfig();
    console.log("config",config)

  await payload.init({
    config: config,
  });


  console.log('Seed completed!');
  process.exit(0);
};


const payloadConfigPath = createHomePage();

console.log("payloadConfigPath");
