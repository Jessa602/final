const WishlistPage = () => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <div>
      <h1>Wishlist</h1>
      <div className="products">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
