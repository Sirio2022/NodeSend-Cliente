import Layout from '../../components/Layout';
import axiosInstance from '../../config/axios';

export async function getServerSideProps({ params }) {
  const { enlace } = params;

  const resultado = await axiosInstance.get(`/api/enlaces/${params.enlace}`);
  console.log(resultado);
  return {
    props: {
      enlaces: resultado.data,
    },
  };
}

export async function getServerSidePaths() {
  // Consultar los enlaces
  const enlaces = await axiosInstance.get('api/enlaces/');
  return {
    paths: enlaces.data.enlaces.map((enlace) => ({
      params: { enlace: enlace.url },
    })),
    fallback: false,
  };
}

export default function Enlace({ enlaces }) {
  return (
    <Layout>
      <h1>Desde [enlace].jsx</h1>
    </Layout>
  );
}
