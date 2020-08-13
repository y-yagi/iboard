import { useUser } from "../lib/useUser";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Bookmarks from "../components/bookmarks";
import SectionSeparotr from "../components/section-separator";
import Head from "next/head";
import Link from "next/link";

const Index = () => {
  const { user, logout } = useUser();

  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in.{" "}
          <Link href={"/auth"}>
            <a>Sign in</a>
          </Link>
        </p>
      </>
    );
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Information Board</title>
        </Head>
        <Container>
          <Intro />
          <Bookmarks />
          <SectionSeparotr />
        </Container>
      </Layout>
    </>
  );
};

export default Index;
