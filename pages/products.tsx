import { GetServerSideProps } from 'next';

type Product = {
  id: number;
  title: string;
  description: string;
};

type ProductsPageProps = {
  products: Product[];
};

const ProductsPage = ({ products }: ProductsPageProps) => (
  <div className="container">
    <h1>Products</h1>
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
};

export default ProductsPage;
