
import { PageLayout } from "@/components/page-layout";
import { HeroSection } from "@/components/hero-section";
import { StorySection } from "@/components/story-section";
import { InfoSection } from "@/components/info-section";
import { FeatureCard } from "@/components/feature-card";
import { ProductHighlight } from "@/components/product-highlight";
import { ContactSection } from "@/components/contact-section";
import { SectionDivider } from "@/components/ui/section-divider";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection
        title="Give Sparrows a Home in Our Urban World"
        subtitle="Protecting house sparrows in urban areas and promoting biodiversity where we live"
        ctaText="Learn More"
        ctaLink="#mission"
        backgroundClass="bg-gradient-to-br from-amber-50 to-amber-100"
      />

      <section id="mission" className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            Sparrow Refugee is dedicated to protecting and preserving house sparrow populations in urban environments 
            where their numbers have been drastically declining.
          </p>
          <p className="text-lg text-gray-700">
            We create sustainable habitats and raise awareness about the importance of these birds in our ecosystem. 
            Through our simple yet effective Sparrow Nest product, we aim to bring these cheerful birds back to our cities.
          </p>
        </div>
      </section>

      <SectionDivider />

      <StorySection
        title="The Disappearing Urban Sparrow"
        content="House sparrows have been our companions in human settlements for thousands of years. Yet in the past few decades, their populations have declined by over 60% in some urban areas. Modern building techniques, loss of green spaces, and reduced food sources have all contributed to this alarming trend."
        imageUrl="https://images.unsplash.com/photo-1591445313121-6ec078571574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        imageAlt="Sparrow in an urban environment"
      />

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
        ctaText="Coming Soon"
        ctaLink="/shop"
      />

      <section className="bg-sparrow-light-brown/20 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            Together, we can create urban spaces where sparrows and people thrive side by side.
            Learn more about our initiative and how you can help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" className="border-sparrow-brown text-sparrow-brown hover:bg-sparrow-brown/10">
              <a href="/about">About Sparrow Refugee</a>
            </Button>
            <Button asChild className="bg-sparrow-brown hover:bg-sparrow-brown/90 text-white">
              <a href="/about-sparrows">Discover House Sparrows</a>
            </Button>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
