import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import useGetAdmin from "../../hooks/useGetAdmin";
import useService from "../../hooks/useService";
import LayoutMain from "../../components/LayoutMain";
import ServiceTable from "../../components/Service/ServiceTable";
import ServiceHeader from "../../components/Service/ServiceHeader";
import ServiceInput from "../../components/Service/ServiceInput";
import { apis } from "../../utils/endpoints";
import styles from "./Services.module.css";
import ServiceError from "../../components/Service/ServiceError";

export default function Services({ data }) {
  const { admin } = useGetAdmin(data.user);
  const { toggleInput, error, input, symptoms, handleSubmit, handleInput, handleShowInput, handleEdit, handleRemove } = useService();

  return (
    <>
      <Head>
        <title>dokto. | Admin | Services</title>
      </Head>
      <LayoutMain admin={admin}>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.card}>
              <div className={styles.headerContainer}>
                <ServiceHeader
                  type="service"
                  title={toggleInput === "service" ? "Add a New Service" : "Services Offered List"}
                  btnName="Add New Service"
                  handleShowInput={handleShowInput}
                  showInput={toggleInput}
                />
              </div>
              {toggleInput === "service" && error && <ServiceError error={error} />}
              {toggleInput === "service" && (
                <ServiceInput
                  type="service"
                  input={input}
                  handleInput={handleInput}
                  handleShowInput={handleShowInput}
                  placeholderName="Blood Test"
                  placeholderDesc="The blood test is to check the overall health condition based on the blood..."
                  handleSubmit={handleSubmit}
                />
              )}
              {toggleInput !== "service" && <ServiceTable type="service" data={[]} handleEdit={handleEdit} handleRemove={handleRemove} />}
            </div>
          </div>

          <div className={styles.subContainer}>
            <div className={styles.card}>
              <div className={styles.headerContainer}>
                <ServiceHeader
                  type="symptom"
                  title={toggleInput === "symptom" ? "Add a New Symptom" : "Symptoms List"}
                  btnName="Add New Symptom"
                  handleShowInput={handleShowInput}
                  showInput={toggleInput}
                />
              </div>
              {toggleInput === "symptom" && error && <ServiceError error={error} />}
              {toggleInput === "symptom" && (
                <ServiceInput
                  type="symptom"
                  input={input}
                  handleInput={handleInput}
                  handleShowInput={handleShowInput}
                  placeholderName="Mild Fever"
                  placeholderDesc="The common fever that average people easily catch up..."
                  handleSubmit={handleSubmit}
                />
              )}
              {toggleInput !== "symptom" && <ServiceTable type="symptom" data={symptoms} handleEdit={handleEdit} handleRemove={handleRemove} />}
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
