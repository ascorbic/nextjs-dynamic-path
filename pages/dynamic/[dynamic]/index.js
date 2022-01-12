import { dynamicPaths } from '../../../dynamicPathsApi';

function Dynamic() {
  return <div>This is the page with a dynamic path.</div>;
};

export const getStaticPaths = async() => {
  let paths = await dynamicPaths();
  paths = paths.map(path => `/dynamic/${path}`);
  return { paths, fallback: false };
};

export const getStaticProps = ({ params }) => {
  return { props: params };
};

export default Dynamic;