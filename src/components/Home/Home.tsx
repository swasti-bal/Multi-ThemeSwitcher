import { useEffect, useState } from "react"

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch products
  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  // Shuffle feature
  const shuffleProducts = () => {
    const shuffled = [...products].sort(() => Math.random() - 0.5)
    setProducts(shuffled)
  }

  return (
    <div className="pt-20 px-4 flex flex-col items-center">
      {/* Intro Content */}
      <div className="max-w-xl text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Themed App</h1>
        <p className="text-lg">
          This project demonstrates theme switching, API integration, and responsive design using React + Tailwind.
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={shuffleProducts}
        className="mb-8 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        🔀 Shuffle Products
      </button>

      {/* Product List */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
           <div
  key={product.id}
  className="bg-white rounded-lg shadow-md hover:shadow-xl transition mx-auto w-72 h-[300px] flex flex-col justify-between p-4"
>
  <div className="flex-1 flex flex-col items-center">
    <img
      src={product.image}
      alt={product.title}
      className="h-32 object-contain mb-4"
    />
    <h2 className="font-semibold text-base text-gray-800 text-center line-clamp-2">
      {product.title}
    </h2>
  </div>

  <div className="mt-4 text-center">
    <p className="text-gray-600 font-medium text-lg">${product.price}</p>
  </div>
</div>

          ))}
        </div>
      )}
    </div>
  )
}
