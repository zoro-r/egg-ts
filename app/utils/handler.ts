
/**
 * params
 */
export const success = (params: any) => {
  return {
    code: 0,
    data: params,
  };
};

/**
 * params
 */
export const fail = (params: any) => {
  return {
    code: 1,
    message: params,
  };
};

export default {
  success,
  fail,
};
