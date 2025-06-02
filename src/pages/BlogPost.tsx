import { useParams } from "react-router-dom";
import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

// Sample blog data (in a real app, this would come from a CMS or API)
const blogPosts = [
	{
		id: "1",
		slug: "house-sparrow-decline",
		title: "Understanding the House Sparrow Decline in Urban Areas",
		excerpt: "House sparrow populations have declined dramatically in many cities around the world. This article explores the causes and what we can do to help reverse this trend.",
		date: "2023-11-15T12:00:00Z",
		imageUrl: "/images/sr3.png",
		content: `
      <p>House sparrows (Passer domesticus) have been our companions in human settlements for thousands of years. These small, unassuming birds have adapted remarkably well to urban environments, nesting in building crevices and feeding on scraps. Yet, in recent decades, their populations have declined dramatically in many cities around the world.</p>
      
      <h2>The Alarming Decline</h2>
      
      <p>Studies have shown that house sparrow populations have decreased by over 60% in some urban areas since the 1980s. In London, for example, the house sparrow population fell by 71% between 1994 and 2002. Similar trends have been observed across Europe and parts of North America and Asia.</p>
      
      <p>This decline is particularly concerning because house sparrows are considered an indicator species. Their population health reflects the overall health of our urban environments. When sparrows disappear, it suggests broader ecological issues that could eventually affect human well-being as well.</p>
      
      <h2>Why Are Sparrows Disappearing?</h2>
      
      <p>Researchers have identified several potential causes for the house sparrow decline:</p>
      
      <ul>
        <li><strong>Modern Building Design</strong>: Contemporary buildings often lack the nooks and crannies that sparrows use for nesting.</li>
        <li><strong>Loss of Green Spaces</strong>: Urbanization has reduced gardens, parks, and other green areas that provide food and shelter.</li>
        <li><strong>Food Sources</strong>: Changes in human behavior (less outdoor eating, better waste management) have reduced food availability.</li>
        <li><strong>Pollution</strong>: Air pollution, especially from vehicle emissions, may affect sparrows' respiratory systems and food sources.</li>
        <li><strong>Electromagnetic Radiation</strong>: Some studies suggest that radiation from cell phone towers may disrupt sparrows' ability to navigate.</li>
        <li><strong>Predation</strong>: Increased numbers of urban predators like cats and sparrowhawks may be affecting populations.</li>
      </ul>
      
      <h2>What Can We Do?</h2>
      
      <p>The good news is that individuals can make a difference in helping sparrow populations recover:</p>
      
      <ol>
        <li>Install nesting sites like our Sparrow Nests, which are specifically designed to meet the needs of house sparrows in urban environments.</li>
        <li>Plant native shrubs and hedges that provide shelter and nesting sites.</li>
        <li>Create feeding areas with appropriate bird feed (sparrows prefer seeds like millet and cracked corn).</li>
        <li>Reduce pesticide use in gardens, as these chemicals can harm sparrows directly or reduce their insect food sources.</li>
        <li>Participate in citizen science projects that monitor sparrow populations in your area.</li>
      </ol>
      
      <p>By taking these simple actions, we can help reverse the decline and ensure that future generations will continue to enjoy the cheerful chirping of house sparrows in our cities.</p>
      
      <h2>Sparrow Refugee's Commitment</h2>
      
      <p>Our mission at Sparrow Refugee is to make it easy for urban dwellers to support house sparrow populations. Through our specially designed nests and community education efforts, we're working to create cities where humans and sparrows can thrive side by side.</p>
      
      <p>Join our movement by installing a Sparrow Nest, participating in our community programs, or simply spreading awareness about the importance of these humble birds in our urban ecosystems.</p>
    `,
	},
	{
		id: "2",
		slug: "creating-sparrow-friendly-balcony",
		title: "How to Create a Sparrow-Friendly Balcony in Your Apartment",
		excerpt: "Even with limited space, apartment dwellers can provide safe havens for sparrows. Learn how to transform your balcony into a bird-friendly oasis.",
		date: "2023-10-22T12:00:00Z",
		imageUrl: "/images/sr18.png",
		content: `
      <p>Living in an apartment doesn't mean you can't contribute to urban wildlife conservation. Even a small balcony can become a haven for house sparrows with a few thoughtful additions. This guide will help you transform your limited outdoor space into a sparrow-friendly oasis.</p>
      
      <h2>Why Balconies Matter for Sparrows</h2>
      
      <p>As cities expand and natural habitats shrink, every bit of bird-friendly space matters. Balconies offer several advantages:</p>
      
      <ul>
        <li>They're elevated, providing safety from many ground predators</li>
        <li>They're often sheltered, offering protection from extreme weather</li>
        <li>They provide an interface between human homes and the natural world</li>
        <li>Collectively, balconies across a city can create a network of wildlife-friendly spaces</li>
      </ul>
      
      <h2>Creating Your Sparrow-Friendly Balcony</h2>
      
      <h3>1. Install a Sparrow Nest</h3>
      
      <p>The foundation of any sparrow-friendly balcony is a proper nesting site. Our Compact Sparrow Nest is specifically designed for balconies and small spaces. It can be easily mounted on walls or railings without damaging property (perfect for renters). Position the nest in a sheltered location away from strong winds and direct afternoon sun.</p>
      
      <h3>2. Add Native Plants</h3>
      
      <p>Even in containers, plants can provide food and shelter for sparrows:</p>
      
      <ul>
        <li>Ornamental grasses provide seeds and nesting materials</li>
        <li>Sunflowers offer seeds in late summer and fall</li>
        <li>Herbs like dill, fennel, and coriander produce seeds birds love</li>
        <li>Native flowering plants attract insects that sparrows feed to their young</li>
      </ul>
      
      <p>Use a variety of containers at different heights to create a multi-layered habitat. Consider a mix of hanging planters, railing planters, and floor pots.</p>
      
      <h3>3. Provide Water</h3>
      
      <p>A small, shallow water dish is crucial for drinking and bathing. Place it where sparrows can easily access it but also have a clear view of their surroundings (birds are vulnerable when bathing). Change the water daily to prevent mosquito breeding and disease spread.</p>
      
      <h3>4. Offer Appropriate Food</h3>
      
      <p>While natural food sources from plants are ideal, supplemental feeding can help sparrows thrive, especially in winter:</p>
      
      <ul>
        <li>White millet is a sparrow favorite</li>
        <li>Cracked corn is inexpensive and popular with sparrows</li>
        <li>Black oil sunflower seeds provide excellent nutrition</li>
      </ul>
      
      <p>Use a small tray feeder or a railing-mounted feeder designed for small birds. Avoid mesh feeders that require birds to cling, as sparrows prefer to perch while feeding.</p>
      
      <h3>5. Create Safe Perches</h3>
      
      <p>Sparrows like to perch and socialize. Consider adding:</p>
      
      <ul>
        <li>Small branches secured to railing</li>
        <li>A decorative trellis</li>
        <li>Hanging rope perches</li>
      </ul>
      
      <p>These perches should be placed near feeding or nesting areas but still allow sparrows a clear escape route if they feel threatened.</p>
      
      <h2>Balcony Considerations</h2>
      
      <h3>Safety First</h3>
      
      <p>Ensure all items are securely fastened to withstand wind. For high-rise apartments, consider using mesh barriers to prevent birds from flying into glass doors or windows while still maintaining visibility.</p>
      
      <h3>Neighbor Relations</h3>
      
      <p>Be mindful of potential seed scatter or droppings. Use seed catchers under feeders and regularly clean your balcony floor. Consider sharing your sparrow conservation efforts with neighbors—you might inspire others to join the cause!</p>
      
      <h3>Seasonal Adjustments</h3>
      
      <p>Adapt your balcony bird sanctuary with the seasons:</p>
      
      <ul>
        <li><strong>Spring</strong>: Provide nesting materials like chemical-free pet hair, small twigs, or natural fibers</li>
        <li><strong>Summer</strong>: Ensure water is always available during hot days</li>
        <li><strong>Fall</strong>: Increase seed offerings as natural food sources diminish</li>
        <li><strong>Winter</strong>: Add wind breaks around nests and ensure food is available early in the day</li>
      </ul>
      
      <h2>Observing Your Visitors</h2>
      
      <p>Keep a simple journal of the birds that visit your balcony. Note behaviors, feeding preferences, and any nesting activity. This can be a rewarding way to connect with nature and contribute valuable citizen science data.</p>
      
      <p>With these simple additions, your apartment balcony can become an important refuge for house sparrows in the urban landscape. Remember that consistency is key—once birds discover your sparrow-friendly balcony, they'll come to rely on the resources you provide.</p>
    `,
	},
	{
		id: "3",
		slug: "sparrow-nest-maintenance",
		title: "Seasonal Guide: Maintaining Your Sparrow Nest Throughout the Year",
		excerpt: "While our nests are designed to be low-maintenance, here are some seasonal tips to ensure they remain attractive and safe for sparrows year-round.",
		date: "2023-09-18T12:00:00Z",
		imageUrl: "/images/sr26.png",
		content: `
      <p>Our Sparrow Nests are designed to be as low-maintenance as possible, mimicking the durability of natural nesting sites. However, a little seasonal attention will ensure your nest remains safe, clean, and attractive to sparrows year after year. This guide provides simple maintenance tips for each season.</p>
      
      <h2>Spring (March-May): Preparing for Nesting Season</h2>
      
      <p>Spring is when house sparrows begin their breeding season, making it the most critical time for nest maintenance.</p>
      
      <h3>Early Spring Checklist:</h3>
      
      <ul>
        <li><strong>Clean the nest:</strong> Before nesting season begins in earnest (ideally in late February or early March), gently remove the old nesting material. Wear gloves and a mask, as old nests may contain parasites or droppings. Dispose of old material away from your home.</li>
        <li><strong>Inspect for damage:</strong> Check the structure for any cracks, loose parts, or water damage from winter weather.</li>
        <li><strong>Check mounting hardware:</strong> Ensure the nest is still securely attached to your wall, fence, or post.</li>
        <li><strong>Clear entrance holes:</strong> Make sure the entrance is unobstructed and the proper size (house sparrows need a hole about 32-38mm in diameter).</li>
      </ul>
      
      <h3>During Nesting Season:</h3>
      
      <p>Once birds begin nesting (typically March through July), minimize disturbance. Avoid cleaning or maintaining occupied nests. Signs of occupation include:</p>
      
      <ul>
        <li>Birds regularly entering and exiting</li>
        <li>Nesting material being carried inside</li>
        <li>Chirping sounds coming from the nest</li>
        <li>Parents bringing food (indicating hatchlings)</li>
      </ul>
      
      <h2>Summer (June-August): Monitoring Activity</h2>
      
      <p>Summer may see multiple broods of sparrows using your nest.</p>
      
      <h3>Summer Maintenance:</h3>
      
      <ul>
        <li><strong>Observe from a distance:</strong> Monitor activity without disturbing the birds.</li>
        <li><strong>Maintain nearby water sources:</strong> If you provide a birdbath or water dish, clean it frequently in hot weather to prevent algae and mosquito growth.</li>
        <li><strong>Manage surrounding vegetation:</strong> Trim any plants that may have grown to block the entrance, but avoid major landscape changes near active nests.</li>
        <li><strong>Protect from extreme heat:</strong> If your nest receives direct afternoon sun, consider adding temporary shade during heatwaves.</li>
      </ul>
      
      <h2>Fall (September-November): Post-Breeding Cleanup</h2>
      
      <p>Once breeding season has ended and all fledglings have left (usually by early fall), it's time for annual maintenance.</p>
      
      <h3>Fall Checklist:</h3>
      
      <ul>
        <li><strong>Thorough cleaning:</strong> Remove all nesting material and clean the interior with a mild solution of biodegradable soap and water. Rinse thoroughly and allow to dry completely.</li>
        <li><strong>Disinfection (if necessary):</strong> If you noticed parasites or disease, disinfect with a bird-safe solution like a 10% bleach solution (1 part bleach to 9 parts water). Rinse extremely well and allow to fully air dry for several days.</li>
        <li><strong>Structural repairs:</strong> Fix any damage to the nest structure. Our replacement parts are available if needed.</li>
        <li><strong>Predator guards:</strong> Consider adding or checking predator guards if you've had issues with squirrels, cats, or larger birds.</li>
      </ul>
      
      <h2>Winter (December-February): Protection and Preparation</h2>
      
      <p>While breeding activity pauses in winter, sparrows may still use nests as roosting sites during cold weather.</p>
      
      <h3>Winter Considerations:</h3>
      
      <ul>
        <li><strong>Weatherproofing:</strong> Ensure the nest is waterproof and that drainage holes are clear to prevent water accumulation.</li>
        <li><strong>Wind protection:</strong> Check that the nest is secure enough to withstand winter storms.</li>
        <li><strong>Roosting adaptation:</strong> Consider adding a small amount of clean straw or wood shavings (not cotton or synthetic materials) to provide insulation for winter roosting.</li>
        <li><strong>Plan for spring:</strong> Order any replacement parts or additional nests to install before the next breeding season.</li>
      </ul>
      
      <h2>General Year-Round Maintenance Tips</h2>
      
      <h3>Record Keeping:</h3>
      
      <p>Maintain a simple log of:</p>
      
      <ul>
        <li>When the nest was installed</li>
        <li>Cleaning and maintenance dates</li>
        <li>Occupancy periods</li>
        <li>Number of broods/fledglings (if observable)</li>
        <li>Any problems encountered</li>
      </ul>
      
      <p>This information can be valuable for your own reference and can contribute to citizen science efforts tracking urban bird populations.</p>
      
      <h3>Photography:</h3>
      
      <p>Consider setting up a weather-resistant camera to monitor activity without disturbing the birds. Many of our community members enjoy documenting their sparrow families throughout the seasons. Just be sure to position cameras at a respectful distance and avoid using flash.</p>
      
      <h3>Community Sharing:</h3>
      
      <p>Join our online community to share your experiences and learn from other Sparrow Nest owners. Collective knowledge helps us all become better stewards for our urban bird populations.</p>
      
      <p>With these simple seasonal maintenance routines, your Sparrow Nest will remain a safe, attractive home for generations of sparrows, contributing to the conservation of these beloved urban birds.</p>
    `,
	},
	{
		id: "4",
		slug: "sparrow-community-stories",
		title: "Community Stories: How Sparrows Changed Our Neighborhood",
		excerpt: "Read inspiring stories from our community members who have seen positive changes in their neighborhoods after installing sparrow nests.",
		date: "2023-08-05T12:00:00Z",
		imageUrl: "/images/sr16.jpg",
		content: "Lorem ipsum...",
	},
	{
		id: "5",
		slug: "sparrows-urban-biodiversity",
		title: "The Role of Sparrows in Urban Biodiversity",
		excerpt: "Sparrows are more than just charming birds – they play a crucial role in maintaining ecological balance in our cities. Learn about their importance.",
		date: "2023-07-12T12:00:00Z",
		imageUrl: "/images/sr22.png",
		content: "Lorem ipsum...",
	},
	{
		id: "6",
		slug: "feeding-sparrows-properly",
		title: "Guide to Feeding Sparrows: Do's and Don'ts",
		excerpt: "While installing a nest is a great first step, learning how to properly feed sparrows can further help their populations thrive in urban areas.",
		date: "2023-06-30T12:00:00Z",
		imageUrl: "/images/sr20.png",
		content: "Lorem ipsum...",
	},
];

const BlogPost = () => {
	const { slug } = useParams();
	const post = blogPosts.find((post) => post.slug === slug);

	if (!post) {
		return (
			<PageLayout>
				<div className="pt-32 pb-16 text-center">
					<h1 className="text-2xl font-semibold mb-4">Blog Post Not Found</h1>
					<p className="mb-6">We couldn't find the blog post you're looking for.</p>
					<Button asChild>
						<Link to="/blog">Back to Blog</Link>
					</Button>
				</div>
			</PageLayout>
		);
	}

	return (
		<PageLayout>
			<article className="pt-32 pb-16">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Removed the 'Back to all articles' button as requested */}

					<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
						{post.title}
					</h1>

					<p className="text-gray-600 mb-8">
						{formatDistanceToNow(new Date(post.date), { addSuffix: true })}
					</p>

					<div className="mb-10 rounded-lg overflow-hidden">
						<img
							src={post.imageUrl}
							alt={post.title}
							className="w-full h-auto"
						/>
					</div>

					<div
						className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:font-serif prose-a:text-sparrow-brown"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>

					<div className="mt-16 pt-8 border-t border-gray-200">
						<h3 className="text-xl font-semibold mb-4">Continue Reading</h3>
						<div className="grid md:grid-cols-2 gap-6">
							{blogPosts
								.filter((p) => p.id !== post.id)
								.slice(0, 2)
								.map((relatedPost) => (
									<div
										key={relatedPost.id}
										className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
									>
										<Link to={`/blog/${relatedPost.slug}`} className="block">
											<div className="h-48 overflow-hidden">
												<img
													src={relatedPost.imageUrl}
													alt={relatedPost.title}
													className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
												/>
											</div>
											<div className="p-4">
												<h4 className="text-lg font-semibold line-clamp-2 mb-2">
													{relatedPost.title}
												</h4>
												<p className="text-gray-600 text-sm">
													{formatDistanceToNow(new Date(relatedPost.date), {
														addSuffix: true,
													})}
												</p>
											</div>
										</Link>
									</div>
								))}
						</div>
					</div>
				</div>
			</article>
		</PageLayout>
	);
};

export default BlogPost;
