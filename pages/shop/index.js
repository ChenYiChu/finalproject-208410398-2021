import  Layout from '../../components/layout/Layout';
import ItemContainer from '../../components/shop/item_container';

export async function getServerSideProps(){
    const response = await fetch('https://crownstrapi-1092-2n.herokuapp.com/products');
    const categories = await response.json();

    return{
      props:{
        categories
      }
    }
}

// https://dry-wave-60207.herokuapp.com/api/shop

export default function Home({categories}) {
  console.log('index',categories);
  return (
    <Layout>
      <ItemContainer key={categories[0].cid} categories={categories} />
    </Layout>
  )
}
