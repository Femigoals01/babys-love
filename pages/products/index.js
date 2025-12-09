// import Head from 'next/head'
// import Header from '../../components/Header'
// import ProductCard from '../../components/ProductCard'
// import { products } from '../../lib/products'


// export default function ProductsPage() {
// return (
// <div>
// <Head><title>Products — BabyBasket</title></Head>
// <Header />
// <main className="container grid">
// {products.map(p => <ProductCard product={p} key={p.id} />)}
// </main>
// </div>
// )
// }



import Head from "next/head";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { products } from "../../lib/products";
import { useState, useMemo } from "react";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");

  // Extract unique categories
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // FILTER + SEARCH + SORT (Smart Pipeline)
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    // Search
    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting
    if (sort === "low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "a-z") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [search, category, sort]);

  return (
    <div>
      <Head>
        <title>Products — BabyBasket</title>
      </Head>

      <Header />

      <main className="container">

        {/* ---------- FILTER BAR ---------- */}
        <div className="filters">
          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Category Dropdown */}
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          {/* Sorting Dropdown */}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="none">Sort</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="a-z">Name: A → Z</option>
          </select>
        </div>


        {/* ---------- PRODUCTS GRID ---------- */}
        <div className="product-grid">
          {filteredProducts.length === 0 ? (
            <p className="empty">No products found.</p>
          ) : (
            filteredProducts.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))
          )}
        </div>
      </main>


      {/* ---------- STYLES ---------- */}
      <style jsx>{`
        .filters {
          display: flex;
          gap: 15px;
          margin: 20px 0;
          flex-wrap: wrap;
        }

        input,
        select {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 15px;
        }

        input {
          flex: 1;
          min-width: 200px;
        }

        select {
          min-width: 160px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .empty {
          font-size: 1.2rem;
          color: #999;
          padding: 40px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
