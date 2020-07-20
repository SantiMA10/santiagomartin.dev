export const isTestEnv = () => {
  return process.env.NEXT_PUBLIC_NODE_ENV === "test";
};

export const isDevEnv = () => {
  return process.env.NEXT_PUBLIC_NODE_ENV === "development";
};

export const isProdEnv = () => {
  return (
    process.env.NEXT_PUBLIC_NODE_ENV === "production" ||
    process.env.NEXT_PUBLIC_COMMIT_REF?.includes("master") ||
    location?.href?.includes("https://santiagomartin.dev")
  );
};
