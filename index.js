export const protego = async (fn) => {
  try {
    const result = typeof fn === "function" ? fn() : fn;
    const awaited = result instanceof Promise ? await result : result;
    return [awaited, null];
  } catch (error) {
    return [null, error];
  }
};
