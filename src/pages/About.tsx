
import { PageLayout } from "@/components/page-layout";
import { HeroSection } from "@/components/hero-section";
import { StorySection } from "@/components/story-section";
import { InfoSection } from "@/components/info-section";
import { FeatureCard } from "@/components/feature-card";
import { SectionDivider } from "@/components/ui/section-divider";
import { Button } from "@/components/ui/button";
import { TeamMemberCard } from "@/components/team-member-card";

const About = () => {
  const teamMembers = [
    {
      id: "emma-wilson",
      name: "Emma Wilson",
      role: "Founder & Conservation Lead",
      bio: "With a background in urban ecology, Emma founded Sparrow Refugee after noticing the declining sparrow population in her neighborhood. She's dedicated her life to creating spaces where humans and wildlife can thrive together.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "daniel-chen",
      name: "Daniel Chen",
      role: "Product Designer",
      bio: "Daniel combines his love for birds with his expertise in industrial design to create sparrow nests that are both functional for birds and aesthetically pleasing for humans. He's constantly seeking feedback to improve our designs.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "olivia-martinez",
      name: "Olivia Martinez",
      role: "Community Manager",
      bio: "Olivia manages our growing community of sparrow enthusiasts. She's passionate about education and organizing events that bring people together around the shared goal of protecting urban wildlife.",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "alex-johnson",
      name: "Alex Johnson",
      role: "Ornithologist",
      bio: "As our resident bird expert, Alex provides scientific guidance to ensure our nests meet the specific needs of house sparrows. He's conducted extensive research on urban bird populations and habitat adaptation.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    },
  ];
  
  return (
    <PageLayout>
      <HeroSection
        title="About Sparrow Refugee"
        subtitle="The story behind our mission to save urban house sparrows"
        backgroundClass="bg-gradient-to-r from-amber-50 to-amber-100"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto">
            <p>
              Sparrow Refugee was born from a simple observation: the cheerful chirping of house sparrows, 
              once a ubiquitous soundtrack to urban life, was growing increasingly rare in our cities.
            </p>
            <p>
              Founded by a group of urban ecologists, bird enthusiasts, and sustainable design experts, 
              our organization came together with a shared concern about the declining sparrow populations 
              and a determination to create practical solutions.
            </p>
            <p>
              We began by researching the specific needs of house sparrows in urban environments and the 
              various factors contributing to their decline. Our findings led us to develop the Sparrow Nest, 
              a simple yet effective solution designed specifically to provide house sparrows with safe nesting 
              sites in urban areas.
            </p>
            <p>
              Today, Sparrow Refugee works on multiple fronts: developing habitat solutions, conducting research, 
              raising awareness, and collaborating with communities and municipalities to create sparrow-friendly urban spaces.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <InfoSection 
        title="Our Values"
        centered={true}
        className="bg-sparrow-gray"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Simplicity"
            description="We believe in straightforward, accessible solutions that anyone can implement to help house sparrows thrive."
            className="animate-fade-in"
          />
          <FeatureCard
            title="Coexistence"
            description="We envision cities where humans and wildlife can flourish together, enhancing quality of life for all."
            className="animate-fade-in [animation-delay:200ms]"
          />
          <FeatureCard
            title="Sustainability"
            description="Our approach prioritizes long-term ecological balance and environmentally responsible practices."
            className="animate-fade-in [animation-delay:400ms]"
          />
        </div>
      </InfoSection>

      <SectionDivider />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're a diverse group of bird enthusiasts, conservation experts, and designers
              united by our passion to protect urban sparrows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageUrl={member.imageUrl}
                className={`animate-fade-in [animation-delay:${index * 200}ms]`}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 md:py-24 bg-sparrow-light-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 text-center">Our Approach</h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Research & Monitoring</h3>
                <p className="text-gray-700">
                  We conduct scientific studies to better understand sparrow behavior, habitat requirements, and population trends in urban environments. 
                  Our citizen science initiatives engage communities in collecting valuable data that informs conservation strategies.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <blockquote className="italic text-gray-700">
                  "Our monitoring program has documented a 30% increase in sparrow activity in neighborhoods where our nesting solutions have been implemented."
                </blockquote>
                <p className="mt-3 font-sans text-sm text-right text-gray-500">— Dr. Emily Chen, Lead Researcher</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-white rounded-lg p-6 shadow-md">
                <blockquote className="italic text-gray-700">
                  "We've designed the Sparrow Nest to mimic the nooks and crannies that modern architecture often lacks, 
                  creating perfect nesting sites that integrate seamlessly with urban structures."
                </blockquote>
                <p className="mt-3 font-sans text-sm text-right text-gray-500">— Marco Bianchi, Product Designer</p>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Product Development</h3>
                <p className="text-gray-700">
                  Our design team combines ornithological knowledge with sustainable materials to create effective, 
                  durable habitat solutions. The Sparrow Nest is our flagship product, designed specifically for urban environments.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Education & Outreach</h3>
                <p className="text-gray-700">
                  We develop resources and programs to raise awareness about house sparrows and their ecological importance. 
                  By engaging schools, community groups, and local governments, we're building a network of sparrow advocates.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <blockquote className="italic text-gray-700">
                  "Our school workshops have reached over 5,000 students, inspiring the next generation of urban conservationists and sparrow supporters."
                </blockquote>
                <p className="mt-3 font-sans text-sm text-right text-gray-500">— Sofia Patel, Education Coordinator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Join Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            Sparrow Refugee is more than an organization—we're a community of people who believe that even small birds deserve a place in our urban world. 
            We invite you to join our mission in whatever way resonates with you.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Get Involved</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Volunteer with our research and monitoring programs</li>
                <li>Host a workshop or talk in your community</li>
                <li>Participate in World Sparrow Day events (March 20)</li>
                <li>Join our newsletter for updates and tips</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Support Our Work</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Make a donation to fund our conservation efforts</li>
                <li>Purchase a Sparrow Nest when available</li>
                <li>Spread awareness on social media</li>
                <li>Partner with us as a business or organization</li>
              </ul>
            </div>
          </div>
          <Button className="mt-8 bg-sparrow-brown hover:bg-sparrow-brown/90 text-white">
            Contact Us Today
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
