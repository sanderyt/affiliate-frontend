import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";

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
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Card>
            <h1>Hello </h1>
          </Card>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card>
            <h1>Hello </h1>
          </Card>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card>
            <h1>Hello </h1>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default Index;
