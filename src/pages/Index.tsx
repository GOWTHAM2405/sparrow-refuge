import { PageLayout } from "@/components/page-layout";
import { HeroSection } from "@/components/hero-section";
import { StorySection } from "@/components/story-section";
import { InfoSection } from "@/components/info-section";
import { FeatureCard } from "@/components/feature-card";
import { ProductHighlight } from "@/components/product-highlight";
import { ContactSection } from "@/components/contact-section";
import { SectionDivider } from "@/components/ui/section-divider";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingBag } from "lucide-react";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection
        title="Lets save the skies from going 'Silent'"
        subtitle="Provide a safe home for urban sparrows with our specially designed nest boxes."
        ctaText="Adopt Sparrows"
        ctaLink="/shop"
        imageUrl="images/sr17.png"
        imageAlt="Sparrow on a nest box"
      />

      <section id="mission" className="py-16 md:py-24 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image first on desktop */}
            <div className="w-full md:w-1/2 bg-white order-1 md:order-1">
              <AspectRatio ratio={4/3} className="bg-[#FEFAE0]">
                <img
                  src="images/sr15.jpg"
                  alt="Sparrow nest box in use"
                  className="w-full h-full object-contain rounded"
                />
              </AspectRatio>
            </div>
            <div className="w-full md:w-1/2 order-2 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#283618] mb-6 font-serif">Our Mission</h2>
              <p className="text-lg text-[#606C38] mb-4 font-serif">
                Sparrow Refuge is dedicated to protecting and preserving house sparrow populations in urban environments 
                where their numbers have been drastically declining.
              </p>
              <p className="text-lg text-[#606C38] mb-6 font-serif">
                We create sustainable habitats and raise awareness about the importance of these birds in our ecosystem. 
                Our simple yet effective Sparrow Nest product helps bring these cheerful birds back to our cities.
              </p>
              <Button asChild className="bg-[#606C38] hover:bg-[#283618] text-white">
                <a href="/shop"><ShoppingBag className="mr-2" size={18} />Adopt Sparrows</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <StorySection
        title="The Disappearing Urban Sparrow"
        content="House sparrows have been our companions in human settlements for thousands of years. Yet in the past few decades, their populations have declined by over 60% in some urban areas. Modern building techniques, loss of green spaces, and reduced food sources have all contributed to this alarming trend."
        imageUrl="images/sr10.png"
        imageAlt="Sparrow perched in urban habitat"
      >
        <div className="mt-6">
          <Button asChild className="bg-[#606C38] hover:bg-[#283618] text-white">
            <a href="/shop"><ShoppingBag className="mr-2" size={18} />Adopt Sparrows</a>
          </Button>
        </div>
      </StorySection>

      <SectionDivider />

      <InfoSection 
        title="Why Sparrows Matter"
        subtitle="These small birds play a vital role in our urban ecosystems"
        centered={true}
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Pest Control"
            description="Sparrows naturally control insect populations, reducing the need for harmful pesticides in our cities."
            className="animate-fade-in"
          />
          <FeatureCard
            title="Biodiversity Indicators"
            description="The health of sparrow populations reflects the overall health of our urban environments."
            className="animate-fade-in [animation-delay:200ms]"
          />
          <FeatureCard
            title="Happiness "
            description="Throughout history, sparrows have been symbols of community, joy, and the everyday beauty of nature and makes us happy just be seeing them in our homes."
            className="animate-fade-in [animation-delay:400ms]"
          />
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
          <AspectRatio ratio={16/9} className="bg-muted">
            <img
              src="images/sr20.png"
              alt="Sparrow in natural habitat"
              className="w-full h-full object-contain rounded"
            />
          </AspectRatio>
        </div>
        <div className="text-center mt-8">
          <Button asChild className="bg-[#606C38] hover:bg-[#283618] text-white">
            <a href="/shop"><ShoppingBag className="mr-2" size={18} />Adopt Sparrows</a>
          </Button>
        </div>
      </InfoSection>

      <SectionDivider />

      <ProductHighlight
        title="Introducing the Sparrow Nest"
        description="Our simple solution to help sparrows thrive in urban environments"
        features={[
          "Easy to install on balconies, windows, and gardens",
          "Designed based on sparrows' natural habitat preferences",
          "No maintenance required - sparrows take care of their home",
          "Weather-resistant sustainable materials",
          "Lets sparrows live freely without cages or constraints"
        ]}
        imageUrl="images/sr18.png"
        imageAlt="Sparrow Nest product"
        ctaText="Adopt Sparrows"
        ctaLink="/shop"
      />

      <section className="bg-[#E9EDC9] py-16 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1 bg-[#E9EDC9]">
              <AspectRatio ratio={4/3} className="bg-[#E9EDC9]">
                <img
                  src="images/sr25.png"
                  alt="Join our mission - sparrow community"
                  className="w-full h-full object-contain rounded"
                />
              </AspectRatio>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#283618] mb-6 font-serif">Join Our Mission</h2>
              <p className="text-lg text-[#606C38] mb-8 font-serif">
                Together, we can create urban spaces where sparrows and people thrive side by side.
                Purchase a sparrow nest today and help save our urban bird populations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="outline" className="border-[#606C38] text-[#606C38] hover:bg-[#606C38]/10">
                  <a href="/about-sparrows">Learn About Sparrows</a>
                </Button>
                <Button asChild className="bg-[#606C38] hover:bg-[#283618] text-white">
                  <a href="/shop"><ShoppingBag className="mr-2" size={18} />Adopt Sparrows</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
