module.exports = {
  env: {
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_COMMIT_REF: process.env.VERCEL_GITHUB_COMMIT_REF,
  },
};
