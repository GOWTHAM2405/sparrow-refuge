
import { PageLayout } from "@/components/page-layout";
import { HeroSection } from "@/components/hero-section";
import { StorySection } from "@/components/story-section";
import { InfoSection } from "@/components/info-section";
import { FeatureCard } from "@/components/feature-card";
import { SectionDivider } from "@/components/ui/section-divider";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const AboutSparrows = () => {
  return (
    <PageLayout>
      <HeroSection
        title="About House Sparrows"
        subtitle="The small birds with a big impact on our urban ecosystems"
        imageUrl="images/sr16.jpg"
        imageAlt="Close-up of a house sparrow"
        overlayColor="bg-black/40"
        ctaText="Adopt Sparrows"
        ctaLink="/shop"
      />

      <SectionDivider />

      <StorySection
        title="How House Sparrows Live"
        content="House sparrows are highly social birds that live in colonies. They build their nests in small cavities in buildings, 
        under eaves, in wall vents, and other sheltered spaces in human structures. Their nests are simple but effective - messy spheres of grass, 
        feathers, string, and other soft materials."
        imageUrl="images/sr20.png"
        imageAlt="House sparrow on branch"
        reversed={true}
      >
        <p className="text-base md:text-lg text-gray-700 mb-6">
          A sparrow pair will raise 2-3 broods each year, with 4-5 eggs per clutch. The female incubates the eggs for about 11 days, 
          and then both parents feed the nestlings for another 14-16 days until they fledge. Even after leaving the nest, 
          young sparrows continue to be fed by their parents for about another week.
        </p>
        <Button asChild className="bg-[#606C38] hover:bg-[#283618] text-white">
          <a href="/shop"><ShoppingBag className="mr-2" size={18} />Adopt Sparrows</a>
        </Button>
      </StorySection>

      <InfoSection 
        title="Sparrow Characteristics"
        subtitle="These small birds have distinctive traits that make them special"
        centered={true}
        className="bg-sparrow-gray"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Appearance"
            description="Males have gray crowns, chestnut backs, and black bibs. Females are predominantly brown with striped backs and pale eye stripes."
            className="animate-fade-in"
          />
          <FeatureCard
            title="Size"
            description="Small birds measuring 14-16cm in length with a wingspan of about 19-25cm, weighing around 24-40g."
            className="animate-fade-in [animation-delay:200ms]"
          />
          <FeatureCard
            title="Diet"
            description="Primarily seed-eaters but also consume insects, especially when feeding their young. In urban areas, they often rely on human food scraps."
            className="animate-fade-in [animation-delay:400ms]"
          />
          <FeatureCard
            title="Song"
            description="Their cheerful chirping is a familiar sound in urban areas. Males sing to establish territory and attract mates."
            className="animate-fade-in [animation-delay:600ms]"
          />
        </div>
      </InfoSection>

      <SectionDivider />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">Why Are Sparrows Disappearing?</h2>
            <div className="prose prose-lg mx-auto">
              <p>
                The decline of house sparrows in urban areas can be attributed to several factors:
              </p>
              <ul>
                <li>
                  <strong>Modern Building Techniques:</strong> Contemporary architecture often lacks the nooks and crannies that sparrows use for nesting.
                </li>
                <li>
                  <strong>Loss of Urban Green Spaces:</strong> Parks, gardens, and overgrown areas provide essential food and shelter for sparrows.
                </li>
                <li>
                  <strong>Reduced Food Sources:</strong> Changes in waste management and cleaner streets mean fewer food scraps for sparrows.
                </li>
                <li>
                  <strong>Air Pollution:</strong> Vehicle emissions and other pollutants can harm sparrows and reduce insect populations they feed on.
                </li>
                <li>
                  <strong>Electromagnetic Radiation:</strong> Some studies suggest that the increase in cell phone towers and wireless networks may affect sparrow navigation and health.
                </li>
                <li>
                  <strong>Predation:</strong> Increased numbers of urban predators like domestic cats can impact sparrow populations.
                </li>
              </ul>
              <p>
                The decline of house sparrows is more than just the loss of one species. As indicator species, their disappearance signals broader 
                environmental issues in our urban ecosystems. By helping house sparrows, we're creating healthier cities for all living things, including ourselves.
              </p>
              <div className="text-center mt-8">
                <Button asChild className="bg-[#606C38] hover:bg-[#283618] text-white">
                  <a href="/shop"><ShoppingBag className="mr-2" size={18} />Adopt Sparrows Today</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sparrow-light-brown/20 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">How You Can Help</h2>
          <p className="text-lg text-gray-700 mb-6">
            Even small actions can make a big difference for our sparrow populations
          </p>
          <div className="max-w-3xl mx-auto text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Create Habitat</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Install bird houses or nesting boxes</li>
                  <li>Plant native shrubs that provide cover</li>
                  <li>Create "messy corners" in your garden</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Provide Food</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Set up bird feeders with mixed seeds</li>
                  <li>Plant seed-producing native plants</li>
                  <li>Avoid pesticides that kill insects</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Spread Awareness</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Tell others about sparrow conservation</li>
                  <li>Join local bird monitoring programs</li>
                  <li>Support urban green space initiatives</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Support Our Work</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Participate in our citizen science projects</li>
                  <li>Get a Sparrow Nest when available</li>
                  <li>Donate to support our conservation efforts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button asChild className="bg-[#606C38] hover:bg-[#283618] text-white">
            <a href="/shop"><ShoppingBag className="mr-2" size={18} />Adopt Sparrows</a>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutSparrows;
