import React, { useState } from 'react'
import { Box,  Button,  Container,  Divider,  Grid,  Stack,  Typography } from '@mui/material'
import BlogProps from './BlogProps'
import Category from './Category'




const Blog = ({searchQuery,isHome = false}) => {

const api=[ {
    "id": 3,
    "title": "Making wearable medical devices more patient-friendly with Professor Esther Rodriguez-Villegas from Acurable",
    "image": "https://techcrunch.com/wp-content/uploads/2022/05/found-2022-featured.jpg?w=430&h=230&crop=1",
    "category": "Health",
    "author": "Darrell Etherington",
    "authorPic": "author1.jpg",
    "published_date": "October 4, 2025",
    "reading_time": "25 minutes",
    "content": "Welcome back to Found, where we deep dive into the stories behind the most innovative startups. This week, Darrell Etherington joins Becca Szkutak for an extensive conversation with Professor Esther Rodriguez-Villegas, the visionary founder of Acurable. The core mission of their discussion centers on a critical evolution in healthcare: making medical-grade wearable devices as seamless and unobtrusive as a simple adhesive bandage. Professor Rodriguez-Villegas explains how her team is revolutionizing the diagnosis of obstructive sleep apnea (OSA) through their flagship product, the AcuPebble. Unlike traditional diagnostic methods that involve a labyrinth of wires, uncomfortable headgears, and expensive overnight stays in sleep labs, the AcuPebble uses advanced acoustic sensing technology to monitor respiratory functions from the comfort of the patient's own bed. This innovation is not just about comfort; it is about accessibility. By simplifying the user experience, Acurable is ensuring that thousands of undiagnosed patients can finally receive the clinical-grade data they need without the psychological and physical barriers of bulky hospital equipment. The conversation also explores the rigorous engineering challenges of miniaturizing sophisticated medical sensors while maintaining 100% accuracy in data collection. As we move further into 2026, the trend of 'hospital-at-home' is becoming a reality, and Professor Esther's work stands at the forefront of this movement. They discuss the future of the company, potential expansions into monitoring other chronic respiratory conditions, and how patient-centric design is no longer an optional luxury but a fundamental requirement for the next generation of biotech hardware. The episode concludes with insights into the regulatory hurdles of the FDA and the importance of clinical trials in building trust with both doctors and patients worldwide. This detailed look into Acurable’s journey highlights how true innovation happens at the intersection of high-level engineering and deep human empathy.",
    "tags": [
        "Biotech",
        "Health",
        "Innovation",
        "WearableTech",
        "SleepApnea",
        "FutureOfHealthcare"
    ]
},
    {
    "id": 4,
    "title": "Rainforest raises $8.5M to help software companies embed financial services, payments",
    "image": "https://techcrunch.com/wp-content/uploads/2015/02/shutterstock_128451140.jpg?w=430&h=230&crop=1",
    "category": "Fintech",
    "author": "Mary Ann Azevedo",
    "authorPic": "author1.jpg",
    "published_date": "November 12, 2025",
    "reading_time": "30 minutes",
    "content": "In November 2019, Andreessen Horowitz General Partner Angela Strange famously declared that, 'Every company will be a fintech company.' As we move through late 2025, this prediction has not only come true but has evolved into a fundamental business requirement. Rainforest, an Atlanta-based fintech startup, is at the heart of this revolution, recently securing $8.5 million in seed funding to expand its infrastructure. The core problem Rainforest solves is the immense complexity non-financial software companies face when trying to offer payments or banking services. Historically, a vertical SaaS company—like one built for gym management or HVAC contractors—had to choose between a shallow referral model with low margins or a grueling, multi-year process of becoming a full-fledged payment facilitator. Rainforest eliminates this trade-off by offering a 'Payfac-as-a-Service' model. This allows software firms to integrate deep financial capabilities using just a few lines of code while maintaining control over the user experience and customer data. With the new capital, Rainforest is aggressively hiring engineering talent to build out advanced fraud detection and multi-currency support, aiming to facilitate billions in transaction volume. Joshua Silver, the founder of Rainforest and a veteran in the payments space, emphasizes that embedded finance is the 'secret weapon' for increasing customer retention and unlocking new revenue streams without adding a single new customer. As software becomes the primary interface for how businesses interact with money, companies like Rainforest are the essential plumbing making it possible. This seed round, backed by major investors like Accel and Matrix Partners, signals a massive shift in how we think about the future of financial services—moving them away from traditional banks and directly into the software tools we use every day. By 2026, experts predict that over 70% of small business payments will flow through these types of embedded platforms, making Rainforest's mission more critical than ever.",
    "tags": [
        "Fintech",
        "EmbeddedFinance",
        "SaaS",
        "VentureCapital",
        "Payments",
        "Rainforest"
    ]
},
    {
    "id": 5,
    "title": "Pow.bio says biomanufacturing is broken and its continuous fermentation tech will fix it",
    "image": "https://techcrunch.com/wp-content/uploads/2023/10/Pow-Lab2.jpg?w=430&h=230&crop=1",
    "category": "Startups",
    "author": "Christine Hall",
    "authorPic": "author1.jpg",
    "published_date": "September 25, 2025",
    "reading_time": "28 minutes",
    "content": "Pow.bio is on a mission to solve what many industry experts call the 'valley of death' in biomanufacturing. Currently, the process of fermentation—used to create everything from lab-grown meat to sustainable plastic alternatives—is dominated by batch processing. This traditional method is inherently inefficient: you fill a giant tank, let the microbes grow, harvest them, and then spend days cleaning the tank to start all over again. Pow.bio argues that this 'broken' system is the primary reason why high-tech bio-products remain too expensive for mass-market adoption. To fix this, the startup has developed an automated, continuous fermentation platform that operates more like a high-speed assembly line than a kitchen. By maintaining a constant state of production, Pow.bio’s technology can achieve yields that are five to ten times higher than traditional methods while using significantly smaller footprints. As of late 2025, the company has successfully scaled its pilot plant, demonstrating that it can run for hundreds of hours without contamination—a major technical hurdle that has held back continuous bioprocessing for decades. This breakthrough is critical because it significantly lowers the capital expenditure (CAPEX) required to build new bio-factories. Investors are taking note, as this technology provides a clear path to price parity with petroleum-based products. The leadership team at Pow.bio emphasizes that if we want a truly sustainable bio-economy by 2026 and beyond, we must move away from the artisanal batch methods of the past and embrace the industrial-scale efficiency of continuous manufacturing. Their platform also incorporates advanced AI monitoring to predict microbial health and optimize output in real-time, ensuring that every drop of product meets rigorous clinical standards. This shift not only impacts food and materials but could also revolutionize how we produce life-saving medicines and vaccines on short notice.",
    "tags": [
        "Startups",
        "Biotech",
        "Sustainability",
        "Manufacturing",
        "Biofuel",
        "Innovation"
    ]
},
    {
    "id": 6,
    "title": "Recapitalization, $60M Series D support growth of e-commerce financier Clearco",
    "image": "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1314165902.jpg?w=430&h=230&crop=1",
    "category": "Fintech",
    "author": "Christine Hall",
    "authorPic": "author1.jpg",
    "published_date": "August 15, 2025",
    "reading_time": "25 minutes",
    "content": "Today’s news marks a significant and strategic turnaround for Clearco, a company that has navigated a tumultuous journey of ups and downs over the past few years. As we reach the mid-point of 2025, Clearco has officially announced a massive $60 million Series D funding round coupled with a comprehensive recapitalization plan. This move is designed to stabilize the firm’s balance sheet and provide the necessary fuel for its next phase of global expansion. Clearco, formerly known as Clearbanc, was a pioneer in the 'revenue-based financing' space, offering e-commerce founders an alternative to traditional venture capital by providing non-dilutive funding in exchange for a percentage of future sales. However, shifting market conditions and rising interest rates in previous years forced the company to undergo significant restructuring and layoffs. This new injection of capital, led by long-term institutional investors, signals a renewed vote of confidence in Clearco’s AI-driven underwriting model. The company's proprietary technology analyzes real-time marketing and sales data from thousands of e-commerce platforms to make funding decisions in as little as 20 minutes, bypassing the biases often found in traditional banking. Beyond just capital, Clearco is now positioning itself as a holistic growth partner, offering founders advanced benchmarking tools and insights to optimize their advertising spend and inventory management. The recapitalization process effectively resets the company’s valuation to reflect current market realities, allowing employees and new investors to participate in future upside. Industry analysts suggest that this successful pivot could serve as a blueprint for other 'unicorn' startups looking to survive and thrive in a more disciplined economic environment. As we look toward 2026, Clearco’s leadership is focused on sustainable profitability and expanding their footprint into emerging markets where e-commerce is seeing double-digit growth. This $60M round isn't just a lifeline; it’s a strategic foundation that ensures Clearco remains a dominant player in the democratized finance movement for digital entrepreneurs worldwide.",
    "tags": [
        "Fintech",
        "E-commerce",
        "Funding",
        "VentureCapital",
        "Clearco",
        "BusinessGrowth"
    ]
},
    {
    "id": 7,
    "title": "Rabbit's Next-Gen AI: Revolutionary LAM Models Redefining Software Interaction in 2025",
    "image": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1325174870.jpg?w=430&h=230&crop=1",
    "category": "AI",
    "author": "Kyle Wiggers",
    "authorPic": "author1.jpg",
    "published_date": "2025-03-15",
    "reading_time": "8 minutes",
    "content": "What if you could interact with any piece of software using natural language? As of 2025, Rabbit is leading a paradigm shift with its Large Action Model (LAM) that understands software interfaces like a human. Instead of just generating text, this AI translates natural language prompts into machine-executable commands across various platforms. Imagine a world where complex tasks—from booking international travel to managing professional workflows—are handled by an AI that navigates apps on your behalf. This evolution marks the end of traditional UI navigation and the beginning of a seamless, intent-driven digital experience.",
    "tags": [
        "AI", 
        "Machine Learning", 
        "Future Tech", 
        "Rabbit LAM"
    ]
},
    {
        "id": 8,
        "title": "Okta's 2025 Roadmap: Weaving Multi-Model AI Across the Identity Fabric",
        "image": "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1350618660.jpg?w=430&h=230&crop=1",
        "category": "Security",
        "author": "Ron Miller",
        "authorPic": "author1.jpg",
        "published_date": "2025-01-12",
        "reading_time": "7 minutes",
        "content": "In 2025, generative AI has moved beyond hype to become the core of identity management. Okta has successfully integrated multiple AI models into its platform to predict and block sophisticated identity-based attacks before they occur. This 'AI-first' security approach allows for seamless user authentication while maintaining a zero-trust architecture, ensuring that every digital interaction is verified in real-time with unprecedented accuracy.",
        "tags": ["Security", "AI Integration", "Identity Tech"]
    },
    {
        "id": 9,
        "title": "Yubico Simplifies Enterprise Security in 2025 with Zero-Friction Key Deployment",
        "image": "https://techcrunch.com/wp-content/uploads/2023/10/yubikey.jpg?w=430&h=230&crop=1",
        "category": "Enterprise",
        "author": "Frederic Lardinois",
        "authorPic": "author1.jpg",
        "published_date": "2025-02-05",
        "reading_time": "6 minutes",
        "content": "Physical security keys remain the gold standard for account protection. To eliminate deployment friction, Yubico now offers pre-registered hardware keys that work straight out of the box for enterprise users. By 2025, this seamless onboarding process has become essential for remote workforces, combining military-grade hardware security with a user experience as simple as plugging in a USB drive.",
        "tags": ["Cybersecurity", "Enterprise Tech", "Hardware Security"]
    },
    {
        "id": 10,
        "title": "Blackbird Dominates Restaurant Loyalty: Scaling the $24M Vision into 2025",
        "image": "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1238043769.jpg?w=430&h=230&crop=1",
        "category": "Startups",
        "author": "Kyle Wiggers",
        "authorPic": "author1.jpg",
        "published_date": "2025-03-20",
        "reading_time": "9 minutes",
        "content": "Blackbird Labs, led by the co-founders of Resy and Eater, has transformed how restaurants engage with their regulars. Entering 2025, their loyalty platform uses blockchain-backed incentives to reward diners, moving beyond simple stamps to personalized hospitality experiences. With a fresh $24M in funding, Blackbird is building a decentralized network where local restaurants can compete with global chains through deep data insights and community loyalty.",
        "tags": ["Startups", "Hospitality Tech", "Loyalty Programs"]
    },
    {
        "id": 11,
        "title": "TC Startup Battlefield 2025: Master Class on Product-Market Fit in the AI Era",
        "image": "https://techcrunch.com/wp-content/uploads/2023/10/battlefield-biotics-ai.jpg?w=430&h=230&crop=1",
        "category": "Growth",
        "author": "Neesha A. Tambe",
        "authorPic": "author1.jpg",
        "published_date": "2025-04-10",
        "reading_time": "7 minutes",
        "content": "Defining early-stage product-market fit has never been more challenging than in 2025's crowded AI landscape. In this master class with Flourish Ventures, we explore the new metrics of success. It’s no longer just about user growth, but about sustainable utility and ethical AI integration. Founders are learning how to pivot quickly while maintaining a clear vision that resonates with both investors and a more tech-savvy global audience.",
        "tags": ["Growth", "Entrepreneurship", "VC Insights"]
    },
    {
        "id": 12,
        "title": "Vespa’s Independence: How Yahoo’s Search Tech Became an AI Powerhouse in 2025",
        "image": "https://techcrunch.com/wp-content/uploads/2023/02/GettyImages-1242149379.jpg?w=430&h=230&crop=1",
        "category": "AI",
        "author": "Kyle Wiggers",
        "authorPic": "author1.jpg",
        "published_date": "2025-05-18",
        "reading_time": "8 minutes",
        "content": "Yahoo has officially completed the spin-off of Vespa, transforming it into a standalone big data serving engine. In 2025, Vespa has emerged as a critical infrastructure for real-time AI applications, handling massive datasets for vector search and recommendation systems. This move allows the technology to grow beyond the Yahoo ecosystem, providing the open-source community with a robust tool to power the next generation of intelligent applications.",
        "tags": ["AI", "Open Source", "Big Data"]
    },
    {
        "id": 13,
        "title": "Okta Personal: Integrating Uno to Redefine Consumer Password Security in 2025",
        "image": "https://techcrunch.com/wp-content/uploads/2023/03/Uno.jpg?w=430&h=230&crop=1",
        "category": "Apps",
        "author": "Ivan Mehta",
        "authorPic": "author1.jpg",
        "published_date": "2025-06-12",
        "reading_time": "7 minutes",
        "content": "Following the acquisition of Uno, Okta has launched its personalized security tier for individual users. By mid-2025, Okta Personal provides a bridge between corporate-grade security and consumer convenience. The app automates password rotation and identity protection across all devices, making the technology once reserved for big companies accessible to every individual seeking to secure their digital footprint.",
        "tags": ["Apps", "Cybersecurity", "Consumer Tech"]
    },
    {
        "id": 14,
        "title": "CoPilot’s 2025 Vision: Remote Coaching Reaches New Heights with $6.5M Series A-1",
        "image": "https://techcrunch.com/wp-content/uploads/2023/10/copilot-screenshots.jpg?w=430&h=230&crop=1",
        "category": "Apps",
        "author": "Aisha Malik",
        "authorPic": "author1.jpg",
        "published_date": "2025-07-22",
        "reading_time": "8 minutes",
        "content": "The digital fitness revolution continues in 2025 as CoPilot secures additional funding to expand its remote coaching platform. By pairing users with elite fitness coaches via AI-enhanced tracking, the app provides a level of personalization that traditional gyms cannot match. The $6.5M investment is being funneled into real-time bio-feedback features, ensuring that users stay motivated and safe during their home workouts.",
        "tags": ["Apps", "HealthTech", "Fitness"]
    },
    {
        "id": 15,
        "title": "Opsera’s 2025 Expansion: Modernizing DevOps for the AI-Native Enterprise",
        "image": "https://techcrunch.com/wp-content/uploads/2023/08/GettyImages-1439425791-1.jpg?w=430&h=230&crop=1",
        "category": "Startups",
        "author": "Kyle Wiggers",
        "authorPic": "author1.jpg",
        "published_date": "2025-08-05",
        "reading_time": "7 minutes",
        "content": "Opsera has raised $12 million to further its mission of simplifying DevOps for complex enterprise environments. In 2025, their platform offers automated CI/CD pipelines that are specifically optimized for AI and machine learning workflows. Despite a tougher funding climate, Opsera’s focus on efficiency and tool-chain flexibility has made it an essential partner for companies looking to accelerate their digital transformation.",
        "tags": ["Startups", "DevOps", "Software Engineering"]
    },
    {
        "id": 16,
        "title": "European Media Freedom Act 2025: A New Era for Digital Journalism",
        "image": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1459166551.jpg?w=430&h=230&crop=1",
        "category": "AI",
        "author": "Natasha Lomas",
        "authorPic": "author1.jpg",
        "published_date": "2025-09-14",
        "reading_time": "8 minutes",
        "content": "In a landmark vote, EU lawmakers have passed the Media Freedom Act to protect independent journalism from arbitrary takedowns by tech giants. By 2025, these regulations have forced social media platforms to be more transparent about their moderation algorithms. This shift ensures that public-interest journalism is not silenced by automated systems, fostering a more diverse and accountable digital town square across Europe.",
        "tags": ["Policy", "Journalism", "Regulation"]
    },
    {
        "id": 17,
        "title": "Defending Against 2025 Cyber Threats: 5 Critical Strategy Shifts for Boards",
        "image": "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1455969376.jpg?w=430&h=230&crop=1",
        "category": "Work",
        "author": "Jim Broome",
        "authorPic": "author1.jpg",
        "published_date": "2025-10-02",
        "reading_time": "7 minutes",
        "content": "As we move through 2025, the cybersecurity landscape has become increasingly volatile. High-profile breaches have shown that traditional security perimeters are no longer sufficient. This guide outlines five essential changes—from adopting hardware-based MFA to implementing AI-driven threat hunting—that every organization must take to avoid becoming the next victim of global cybercrime syndicates.",
        "tags": ["Work", "Cybersecurity", "Leadership"]
    },
    {
        "id": 18,
        "title": "Uber Connect 2025: Revolutionizing Last-Mile Logistics for Everyone",
        "image": "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1455969376.jpg?w=430&h=230&crop=1",
        "category": "Apps",
        "author": "Rebecca Bellan",
        "authorPic": "author1.jpg",
        "published_date": "2025-11-10",
        "reading_time": "6 minutes",
        "content": "Uber is significantly expanding its peer-to-peer delivery service, Uber Connect, as of late 2025. The service now includes seamless integration with local retailers and post offices, allowing users to schedule courier pickups with a single tap. This expansion focuses on reducing urban congestion by utilizing the existing network of Uber drivers to handle small-scale logistics, making package delivery faster and more affordable.",
        "tags": ["Apps", "Logistics", "Gig Economy"]
    },
    {
        "id": 19,
        "title": "The 2025 Open Banking Boom: Brite and the Rise of A2A Payments",
        "image": "https://techcrunch.com/wp-content/uploads/2023/04/hero-option-2-1.jpg?w=430&h=230&crop=1",
        "category": "Startups",
        "author": "Mike Butcher",
        "authorPic": "author1.jpg",
        "published_date": "2025-11-28",
        "reading_time": "8 minutes",
        "content": "Open Banking has reached a tipping point in 2025, with account-to-account (A2A) payments becoming a mainstream alternative to credit cards. Brite’s recent $60M funding round highlights the massive demand for faster, cheaper payment methods across Europe. By bypassing traditional card networks, these fintech startups are reducing costs for merchants and providing consumers with a more secure way to pay directly from their bank accounts.",
        "tags": ["FinTech", "Startups", "Economy"]
    },
    {
        "id": 20,
        "title": "Krafton India's 2025 Incubator: Building the Next Global Gaming Hits in India",
        "image": "https://techcrunch.com/wp-content/uploads/2023/10/krafton-india-ceo-sean-hyunil-sohn.jpeg?w=430&h=230&crop=1",
        "category": "Gaming",
        "author": "Jagmeet Singh",
        "authorPic": "author1.jpg",
        "published_date": "2025-12-05",
        "reading_time": "7 minutes",
        "content": "Krafton India has launched a dedicated gaming incubator to nurture local talent and expand the gaming ecosystem. In 2025, India has become a hub for mobile gaming innovation, and this incubator provides developers with the resources, mentorship, and funding needed to create world-class titles. Krafton’s commitment reflects the growing importance of the Indian market in the global gaming industry.",
        "tags": ["Gaming", "Startups", "India Tech"]
    },
     ]

     const [selectedBlog, setSelectedBlog] = useState(null);

     const [activeCategory, setActiveCategory] = useState("All"); 

     const searchResults = api.filter((post) => {
        const query = searchQuery ? searchQuery.toLowerCase().trim() : "";
        return post.title.toLowerCase().includes(query);
    });

        
         const categories = ["All", ...new Set(api.map(item => item.category))];
    const categoryFiltered = activeCategory === "All" 
        ? api 
        : api.filter(post => post.category === activeCategory);



          const filteredBlogs = api.filter((post) => {
    // 1. Category check
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;

    // 2. Search check (Innum safe-ah handle pannuvom)
    const query = searchQuery ? searchQuery.toLowerCase().trim() : "";
    const matchesSearch = post.title.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
});


  return (
    <>
     {!isHome && (
   <Box height={400} color='white' bgcolor='black' display="flex"
  flexDirection="column" 
  justifyContent="center" 
  alignItems="center"   
      
  textAlign="center"  >

   

        <Typography variant='h2' component='span'  color='white' paddingBottom={2}  > Blog page</Typography>

        
        
        

     </Box>
      )}

        <Container maxWidth="lg" sx={{ py: 5 }}>

          
            
             {selectedBlog ? (
                /* --- DETAIL VIEW --- */
                <Box>
                    <Button variant="outlined" onClick={() => setSelectedBlog(null)} sx={{ mb: 4 }}>
                        ← Back
                    </Button>
                    {/* Detail content logic... */}
                </Box>
            ) : (
                /* --- LIST VIEW --- */
                <Box>
                    {/* CASE A: Search Bar-la user edhavadhu type panna (Search Results View) */}
                    {searchQuery && searchQuery.trim().length > 0 ? (
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#d32f2f' }}>
                                Search Results for: "{searchQuery}"
                            </Typography>
                            <Grid container spacing={3}>
                                {searchResults.map((post) => (
                                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                                        <Box onClick={() => setSelectedBlog(post)}>
                                            <BlogProps cards={post} />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                            {searchResults.length === 0 && <Typography sx={{mt:4}}>No results found!</Typography>}
                            <Divider sx={{ my: 6 }} />
                        </Box>
                    ) : null}

                    {/* CASE B: Normal List View (Search empty-ah irukkum podhu idhu full-ah theriyum) */}
                    {!searchQuery && (
                        <Box>
                            {/* Category Filter Buttons */}
                            <Stack direction="row" spacing={2} sx={{ mb: 5, overflowX: 'auto', justifyContent: 'center' }}>
                                {categories.map((cat) => (
                                    <Button 
                                        key={cat}
                                        variant={activeCategory === cat ? "contained" : "outlined"}
                                        onClick={() => setActiveCategory(cat)}
                                        sx={{ borderRadius: '20px' }}
                                    >
                                        {cat}
                                    </Button>
                                ))}
                            </Stack>

                            <Category name={activeCategory} />
                            <Grid container spacing={3}>
                                {categoryFiltered.map((post) => (
                                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                                        <Box onClick={() => setSelectedBlog(post)}>
                                            <BlogProps cards={post} />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )}
                </Box>
            )}
    </Container>




        

         

     </>
  )
}

export default Blog