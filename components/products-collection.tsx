'use client'

import { Product } from './product-section'
import { ProductCard } from './ProductCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ProductsCollection({
  products,
  isCarousel
}: {
  products: Product[]
  isCarousel: boolean
}) {
  if (isCarousel) {
    return (
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1">
                <ProductCard
                  name={product.name}
                  price={product.price}
                  originalPrice={product.price}
                  discount={45}
                  rating={product.rating.rate}
                  reviews={product.rating.count}
                  image={product.image}
                  isNew={true}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          originalPrice={product.price}
          discount={20}
          rating={product.rating.rate}
          reviews={product.rating.count}
          image={product.image}
          isNew={true}
        />
      ))}
    </div>
  )
}
