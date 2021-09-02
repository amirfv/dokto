import Head from "next/head";
import LayoutMain from "../components/LayoutMain";
import { apis } from "../utils/endpoints";
import axios from "axios";
import useGetAdmin from "../hooks/useGetAdmin";

export default function Dashboard({ data }) {
  const { admin } = useGetAdmin(data.user);

  return (
    <>
      <Head>
        <title>dokto. | Admin | Dashboard</title>
      </Head>
      <LayoutMain admin={admin}>
        <div>This is Dashboard</div>
      </LayoutMain>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie?.split("; ");
  const token = cookies?.find((item) => item.includes("t="))?.split("t=")[1];

  let data;
  try {
    data = await axios.post(apis.urlLoggedIn, { token });
  } catch (error) {}

  if (!token) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: data.data,
    },
  };
}
