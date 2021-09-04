import axios from "axios";
import LayoutMain from "../../components/LayoutMain";
import useGetAdmin from "../../hooks/useGetAdmin";
import { apis } from "../../utils/endpoints";

export default function Settings({ data }) {
  const { admin } = useGetAdmin(data.user);

  return (
    <LayoutMain admin={admin}>
      <div>This is settings page</div>
    </LayoutMain>
  );
}

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie?.split("; ");
  const token = cookies?.find((item) => item.includes("t="))?.split("t=")[1];

  let data;
  try {
    data = await axios.post(apis.urlLoggedIn, { token });
  } catch (error) {
    console.log(error);
  }

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
