import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { LocalOffer, Store, Check } from "@material-ui/icons";

import { Card } from "../components/Card";
import { Grid } from "@material-ui/core";

const Index = () => (
  <Layout>
    <Container fixed>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia,
        tortor et blandit eleifend, est ipsum faucibus tortor, vitae elementum
        tellus purus vitae metus. Integer vehicula ex sed ligula varius pretium.
        Nullam molestie ac justo a lacinia. Nam tristique lacinia nunc non
      </p>
      <h2>Waarom badkamer123.nl?</h2>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Card>
            <Check color="primary" fontSize="large" />
            <h3>Alleen bekende merken</h3>
          </Card>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card>
            <LocalOffer color="primary" fontSize="large" />
            <h3>Vergelijk de beste prijzen</h3>
          </Card>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card>
            <Store color="primary" fontSize="large" />
            <h3>Zeer ruim aanbod van artikelen</h3>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default Index;
