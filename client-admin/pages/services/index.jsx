import Head from "next/head";
import axios from "axios";
import LayoutMain from "../../components/LayoutMain";
import useGetAdmin from "../../hooks/useGetAdmin";
import { apis } from "../../utils/endpoints";
import ServiceTable from "../../components/Service/ServiceTable";
import ServiceHeader from "../../components/Service/ServiceHeader";
import { useState } from "react";
import ServiceInput from "../../components/Service/ServiceInput";

export default function Services({ data }) {
  const { admin } = useGetAdmin(data.user);
  const [toggleInput, setToggleInput] = useState("");
  const [input, setInput] = useState({});

  const handleShowInput = (type) => setToggleInput(type);
  const handleInput = ({ currentTarget }) => setInput({ ...input, [currentTarget.id]: currentTarget.value });

  return (
    <>
      <Head>
        <title>dokto. | Admin | Services</title>
      </Head>
      <LayoutMain admin={admin}>
        <div className="my-3 w-full grid grid-cols-2 gap-8">
          <div className="col-span-2 xl:col-span-1">
            <div className="bg-white shadow rounded-lg">
              <div className="p-4">
                <ServiceHeader type="service" title="Services Offered List" btnName="Add New Service" handleShowInput={handleShowInput} showInput={toggleInput} />
              </div>
              {toggleInput === "service" && <ServiceInput type="service" input={input} handleInput={handleInput} handleShowInput={handleShowInput} />}
              {toggleInput !== "service" && <ServiceTable type="service" />}
            </div>
          </div>

          <div className="col-span-2 xl:col-span-1">
            <div className="bg-white shadow rounded-lg">
              <div className="p-4">
                <ServiceHeader type="symptom" title="Symptoms List" btnName="Add New Symptom" handleShowInput={handleShowInput} showInput={toggleInput} />
              </div>
              {toggleInput === "symptom" && <ServiceInput type="symptom" input={input} handleInput={handleInput} handleShowInput={handleShowInput} />}
              {toggleInput !== "symptom" && <ServiceTable type="symptom" />}
            </div>
          </div>
        </div>
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
