import Head from "next/head";
import axios from "axios";
import LayoutMain from "../../components/LayoutMain";
import useGetAdmin from "../../hooks/useGetAdmin";
import { apis } from "../../utils/endpoints";

export default function Bookings({ data }) {
  const { admin } = useGetAdmin(data.user);

  return (
    <>
      <Head>
        <title>dokto. | Admin | Bookings</title>
      </Head>
      <LayoutMain admin={admin}>
        <div>This is bookings page</div>
      </LayoutMain>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie?.split("; ");
  const token = cookies?.find((item) => item.includes("t="))?.split("t=")[1];
  const data = await axios.post(apis.urlLoggedIn, { token });

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
