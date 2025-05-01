
import { PageLayout } from "@/components/page-layout";
import { CommunitySignupForm } from "@/components/community-signup-form";
import { SectionDivider } from "@/components/ui/section-divider";

const Community = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Join Our Community</h1>
            <p className="text-lg text-gray-700">
              Become part of a growing movement dedicated to protecting house sparrows and enriching urban biodiversity.
              Together, we can make a difference in creating more welcoming spaces for our feathered neighbors.
            </p>
          </div>
          
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-center">Sign Up Now</h2>
            <CommunitySignupForm />
          </div>
        </div>
      </section>

      <SectionDivider />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">Community Benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Stay Informed</h3>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>• Monthly newsletter with sparrow conservation updates</li>
                <li>• Early access to our research findings</li>
                <li>• Tips for attracting and supporting sparrows</li>
                <li>• Urban birding resources and guides</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in [animation-delay:200ms]">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Get Involved</h3>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>• Invitations to community bird watching events</li>
                <li>• Opportunities to participate in citizen science projects</li>
                <li>• Connect with other sparrow enthusiasts</li>
                <li>• Share your sparrow stories and photos</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in [animation-delay:400ms]">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Special Access</h3>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>• Exclusive discounts on Sparrow Nest products</li>
                <li>• First access to new designs and limited editions</li>
                <li>• Free online workshops about urban wildlife</li>
                <li>• Community-only content and resources</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in [animation-delay:600ms]">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Make An Impact</h3>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>• Be part of a wider conservation movement</li>
                <li>• Help track sparrow populations in your area</li>
                <li>• Contribute to our community knowledge base</li>
                <li>• Inspire others in your neighborhood</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Community;
