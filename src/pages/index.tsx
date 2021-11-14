import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 35, '1'),
    new Cliente('FY', 35, '2'),
    new Cliente('Pi', 35, '3')
  ]
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600
    text-white
    `}>
    <Layout titulo ="Cadastro Simples">
      <Tabela clientes={clientes}></Tabela>
    </Layout>
    </div>
  )
}
