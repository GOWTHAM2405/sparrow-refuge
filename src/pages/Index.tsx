
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
        title="Protect Sparrows with Our Nest Boxes"
        subtitle="Provide a safe home for urban sparrows with our specially designed nest boxes."
        ctaText="Shop Sparrow Nests"
        ctaLink="/shop"
        imageUrl="/lovable-uploads/e3333151-69e8-4069-b686-69f334fa73d7.png"
        imageAlt="Sparrow on a nest box"
      />

      <section id="mission" className="py-16 md:py-24 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
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
                <a href="/shop"><ShoppingBag className="mr-2" size={18} />Buy a Sparrow Nest</a>
              </Button>
            </div>
            <div className="w-full md:w-1/2 bg-white p-2 border border-[#DDA15E]">
              <AspectRatio ratio={4/3} className="bg-muted">
                <div className="w-full h-full flex items-center justify-center bg-[#E9EDC9] text-[#606C38]">
                  Photo Container
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <StorySection
        title="The Disappearing Urban Sparrow"
        content="House sparrows have been our companions in human settlements for thousands of years. Yet in the past few decades, their populations have declined by over 60% in some urban areas. Modern building techniques, loss of green spaces, and reduced food sources have all contributed to this alarming trend."
        imageUrl="https://images.unsplash.com/photo-1591445313121-6ec078571574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        imageAlt="Sparrow in an urban environment"
      >
        <div className="mt-6">
          <Button asChild className="bg-[#606C38] hover:bg-[#283618] text-white">
            <a href="/shop"><ShoppingBag className="mr-2" size={18} />Help Sparrows Now</a>
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
            title="Cultural Significance"
            description="Throughout history, sparrows have been symbols of community, joy, and the everyday beauty of nature."
            className="animate-fade-in [animation-delay:400ms]"
          />
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
          <AspectRatio ratio={16/9} className="bg-muted">
            <div className="w-full h-full flex items-center justify-center bg-[#E9EDC9] text-[#606C38]">
              Photo Container
            </div>
          </AspectRatio>
        </div>
        <div className="text-center mt-8">
          <Button asChild className="bg-[#606C38] hover:bg-[#283618] text-white">
            <a href="/shop"><ShoppingBag className="mr-2" size={18} />Browse Sparrow Nests</a>
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
        imageUrl="https://images.unsplash.com/photo-1591758879073-6fc9c4ee5162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
        imageAlt="Sparrow Nest product"
        ctaText="Shop Now"
        ctaLink="/shop"
      />

      <section className="bg-[#E9EDC9] py-16 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AspectRatio ratio={4/3} className="bg-muted">
                <div className="w-full h-full flex items-center justify-center bg-[#FEFAE0] text-[#606C38]">
                  Photo Container
                </div>
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
                  <a href="/shop"><ShoppingBag className="mr-2" size={18} />Shop Sparrow Nests</a>
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
