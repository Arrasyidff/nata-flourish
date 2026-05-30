const products = [
  "Sofa Set",
  "Bantal Sofa",
  "Kasur",
  "Bean Bag",
  "Payung Pantai",
];

export default function FooterProducts() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-body-2 font-medium uppercase text-green-light">
        Produk Kami
      </p>
      <ul className="flex flex-col gap-2">
        {products.map((product) => (
          <li key={product} className="text-body-2 font-normal text-green-light-active">
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
}
