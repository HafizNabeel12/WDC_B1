"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Helper to get user_id from cookies
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
  };

  useEffect(() => {
    const fetchCartData = async () => {
      const userId = getCookie("user_id");
      if (!userId) return;

      try {
        // Fetch cart items
        const cartRes = await fetch(`/api/cart?user_id=${userId}`);
        const cartData = await cartRes.json();

        // Get all product IDs from cart
        const productIds = cartData.res.map((item: any) => item.product_id);

        // Fetch full product info from Sanity
        const productsData = await client.fetch(
          `*[_type == "product" && _id in $ids]`,
          { ids: productIds }
        );

        setCartItems(cartData.res);
        setProducts(productsData);
      } catch (err) {
        console.error("Error fetching cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  // Helper to get full product details by ID
  const getProduct = (id: string) => {
    return products.find((p: any) => p._id === id);
  };

  // Calculate total cart value
  const total = cartItems.reduce((acc, item) => {
    const product = getProduct(item.product_id);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  if (loading) return <p className="p-6">Loading cart...</p>;

  if (!cartItems.length) return <p className="p-6">Your cart is empty.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => {
          const product = getProduct(item.product_id);
          if (!product) return null;

          return (
            <div key={item.product_id} className="border p-4 rounded flex gap-4 bg-gray-50">
              <img
                src={urlFor(product.image).url()}
                alt={product.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${product.price * item.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-right mt-6 text-xl font-bold">
        Total Cart Value: ${total}
      </div>
    </div>
  );
}