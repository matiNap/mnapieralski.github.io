console.log("TEst", process.env);

export default {
  ...JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG),
};
