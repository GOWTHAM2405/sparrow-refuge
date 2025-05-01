
import { PageLayout } from "@/components/page-layout";
import { TeamMemberCard } from "@/components/team-member-card";
import { SectionDivider } from "@/components/ui/section-divider";

// Sample team data (in a real app, this might come from an API)
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

const Team = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Meet Our Team</h1>
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
      
      <section className="py-16 bg-sparrow-light-brown/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Our Shared Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">Coexistence</h3>
              <p className="text-gray-700">We believe humans and wildlife can thrive together in urban spaces with thoughtful design.</p>
            </div>
            <div className="animate-fade-in [animation-delay:200ms]">
              <h3 className="text-xl font-semibold mb-2">Science-Driven</h3>
              <p className="text-gray-700">Our approach is guided by research and continuous learning about bird behavior.</p>
            </div>
            <div className="animate-fade-in [animation-delay:400ms]">
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-700">We're building a movement of people who care about urban biodiversity.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
