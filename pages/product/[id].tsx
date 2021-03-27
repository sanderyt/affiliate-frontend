import React, { FC } from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import { Container } from "@material-ui/core";

interface Props {
  name: string;
  images: string[];
}

const Product: FC<Props> = ({ name, images }) => {
  return (
    <Layout>
      <Container fixed>
        <h1>{name}</h1>
        {images &&
          images.map(image => {
            return <img src={image} key={image} />;
          })}
      </Container>
    </Layout>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async context => {
  //Fetch local JSON file here with product data

  return {
    props: {
      ID: "10302720",
      name:
        "Eetkamerstoel Senja - kunststof - groen - naturel hout - Leen Bakker",
      price: { currency: "EUR", amount: 51.990000000000002 },
      URL:
        "https://tc.tradetracker.net/?c=18985&m=1447511&a=252069&u=https%3A%2F%2Fwww.leenbakker.nl%2Fbanken-en-stoelen%2Fstoelen%2Feetkamerstoelen%2Feetkamerstoel-senja-kunststof-groen-naturel-hout",
      images: ["https://static.leenbakker.nl/products/380x380/10302720.jpg"],
      description: null,
      categories: { "Banken & Stoelen": "Banken & Stoelen" },
      properties: {
        brand: ["Leen Bakker"],
        categoryPath: ["Banken & Stoelen>Stoelen>Eetkamerstoelen"],
        color: ["Groen"],
        deliveryCosts: [6.9500000000000002],
        deliveryTime: ["Dit artikel wordt binnen 8 weken bezorgd"],
        descriptionLong: [],
        discount: ["8.00"],
        EAN: ["8714901745671"],
        fromPrice: [59.990000000000002],
        imageURL_large: [],
        imageURL_small: [],
        material: ["Kunststof#Hout"],
        size: [],
        stock: ["10"],
        subcategories: ["Stoelen"],
        subsubcategories: ["Eetkamerstoelen"]
      }
    }
  };
};
