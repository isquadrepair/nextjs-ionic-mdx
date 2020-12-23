import React from "react";
import { useRouter } from "next/router";
import ExploreContainer from "../components/ExploreContainer";
import Layout from "../components/Layout";

const Page: React.FC = () => {
  const { pathname } = useRouter();

  return <Layout pageName="Next.js with Ionic">INDEX PaGE</Layout>;
};

export const getStaticProps = (context) => {
  return { props: { pageName: "Home Page" } };
};
export default Page;
