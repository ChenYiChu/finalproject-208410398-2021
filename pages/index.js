import  Layout from '../components/layout/Layout';
import MenuContainer from '../components/home/MenuContainer';

export async function getServerSideProps(){
const response = await fetch('https://crownstrapi-1092-2n.herokuapp.com/categories');
    const categories = await response.json();

    return{
      props:{
        categories
      }
    }
}

// https://dry-wave-60207.herokuapp.com/api/categories

export default function Home({categories}) {
  console.log('index',categories);
  return (
    <Layout>
      <MenuContainer key={categories[0].cid} categories={categories} />
    </Layout>
  )
}
