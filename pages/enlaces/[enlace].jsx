import Layout from '../../components/Layout';
import axiosInstance from '../../config/axios';

export async function getServerSideProps({ params }) {
  const resultado = await axiosInstance.get(`/api/enlaces/${params.enlace}`);

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
  console.log(enlaces);
  return (
    <Layout>
      <h1 className="text-4xl text-center text-gray-700">
        Descarga tu archivo:
      </h1>
      <div className="flex items-center justify-center mt-10">
        <a
          href={`${process.env.backendURL}/api/archivos/${enlaces.archivo}`}
          className="bg-red-500 text-center px-10 py-3 rounded uppercase font-bold text-white cursor-pointer"
          download
        >
          Aquí
        </a>
      </div>
    </Layout>
  );
}
