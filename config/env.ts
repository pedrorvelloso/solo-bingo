const firebase = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

const publicEnv = {
  bingo: {
    version: process.env.NEXT_PUBLIC_BINGO_VERSION,
    url: process.env.NEXT_PUBLIC_BINGO_URL,
  },
};

export { firebase, publicEnv };
