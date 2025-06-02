
import { useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { ProductCard } from "@/components/product-card";
import { SectionDivider } from "@/components/ui/section-divider";
import { useToast } from "@/hooks/use-toast";

// Sample product data (in a real app, this would come from an API)
const products = [
  {
    id: "sparrow-nest-standard",
    name: "Standard Sparrow Nest",
    price: 29.99,
    description: "Our classic sparrow nest design, perfect for balconies and windows. Made from sustainable materials that blend with urban environments.",
    imageUrl: "images/sr1.jpg",
  },
  {
    id: "sparrow-nest-deluxe",
    name: "Deluxe Sparrow Nest",
    price: 44.99,
    description: "An upgraded nest design with additional protection from weather elements and predators. Perfect for gardens and larger outdoor spaces.",
    imageUrl: "images/sr13.jpg",
  },
  {
    id: "sparrow-nest-compact",
    name: "Compact Sparrow Nest",
    price: 24.99,
    description: "A smaller nest design for limited spaces. Ideal for apartment dwellers who still want to provide a home for sparrows.",
    imageUrl: "images/sr21.png",
  },
  {
    id: "sparrow-feeder-attachment",
    name: "Nest Feeder Attachment",
    price: 14.99,
    description: "An attachable feeder that complements any of our nest designs. Helps attract sparrows to their new home.",
    imageUrl: "images/sr27.png",
  }
];

const Shop = () => {
  const [cart, setCart] = useState<string[]>([]);
  const { toast } = useToast();

  const handleAddToCart = (id: string) => {
    setCart([...cart, id]);
    toast({
      title: "Added to cart",
      description: "This item has been added to your cart.",
    });
  };

  return (
    <PageLayout>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Shop Sparrow Nests</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Create a welcoming space for house sparrows with our carefully designed nests.
              Each purchase helps fund our conservation efforts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
                onAddToCart={handleAddToCart}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />
      
      <section className="py-16 bg-sparrow-light-brown/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Why Our Sparrow Nests?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
              <p className="text-gray-700">Made from eco-friendly materials that are safe for birds and the environment.</p>
            </div>
            <div className="animate-fade-in [animation-delay:200ms]">
              <h3 className="text-xl font-semibold mb-2">Easy to Install</h3>
              <p className="text-gray-700">No tools required. Simply place or hang in your desired location.</p>
            </div>
            <div className="animate-fade-in [animation-delay:400ms]">
              <h3 className="text-xl font-semibold mb-2">Weather-Resistant</h3>
              <p className="text-gray-700">Designed to withstand various weather conditions throughout the year.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Shop;
