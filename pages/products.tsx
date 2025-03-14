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

    <style jsx>{`
      .container {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }

      h1 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 30px;
      }

      .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }

      .product-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
      }

      .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }

      .product-card h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      .product-card p {
        font-size: 1rem;
        color: #555;
      }
    `}</style>
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
