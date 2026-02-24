import InputText from "../components/InputText";
import Container from 'react-bootstrap/Container';
import Layout from "../app/Layout";
import ElementsList from "../components/ElementsList";

export default function Home() {
  return <Layout>
    <Container className="justify-content-md-center align-items-center d-flex flex-column vh-100" fluid>
      <InputText></InputText>
      <ElementsList></ElementsList>
    </Container>
  </Layout>
}
