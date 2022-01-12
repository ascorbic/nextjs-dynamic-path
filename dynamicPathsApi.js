async function dynamicPaths() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['dynamic-1']);
    }, 200)
  });
};

export { dynamicPaths };