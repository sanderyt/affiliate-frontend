import React, { FC } from "react";
import { GetServerSideProps } from "next";

import Layout from "../../components/Layout";
import { Container, Grid, Box } from "@material-ui/core";
import { Button } from "../../components/Button";
import { LocalOffer } from "@material-ui/icons";

import { FromPrice, Price } from "./styles";

interface Props {
  name: string;
  images: string[];
  description: string;
  properties: any;
  price: any;
}

const Product: FC<Props> = ({
  name,
  images,
  description,
  properties,
  price
}) => {
  return (
    <Layout>
      <Container fixed>
        <h1>{name}</h1>
        <Grid container>
          <Grid item md={6}>
            {images &&
              images.map(image => {
                return <img src={image} key={image} />;
              })}
          </Grid>
          <Grid item md={6}>
            <Box display="flex">
              <FromPrice>{`€${properties.fromPrice[0]}`}</FromPrice>
              <Price>{`€${price.amount}`}</Price>
            </Box>
            <h3>Omschrijving</h3>
            <p>{description}</p>
            <Box display="flex" flexDirection="column">
              <span>{properties.deliveryTime[0]}</span>
              <span>{properties.deliveryCosts[0]}</span>
              <Button color="secondary">
                <LocalOffer />
                {`Bestel met €${properties.discount[0]} korting`}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async () => {
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
      description:
        "Eetkamerstoel Senja is bekleed met kunststof in de kleur groen en heeft een onderstel van naturel hout. Eetkamerstoel Senja heeft een moderne look. Deze trendy kuipstoel wordt gekenmerkt door eenvoudige maar praktische vormgeving. Deze kuipstoel heeft alles wat je van een modern stoeltje mag verwachten. Stevige houten poten met een industriële look en een kunstsof kuipje met een fijn zitcomfort.",
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
