// import { useState, useRef, useEffect } from 'react';
// import { ArrowUpRight, ExternalLink, Play } from 'lucide-react';
// import { GlassCard } from '../ui/GlassCard';
// import { NeuButton } from '../ui/NeuButton';

// // Project Card Component
// const ProjectCard = ({ image, title, description, category, link, videoSrc }) => {
//   // For debugging image paths
//   console.log(`Loading image for ${title}: ${image}`);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);
  
//   const handlePlayVideo = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     if (videoRef.current) {
//       if (videoRef.current.paused) {
//         videoRef.current.play();
//         setIsPlaying(true);
//       } else {
//         videoRef.current.pause();
//         setIsPlaying(false);
//       }
//     }
//   };
  
//   return (
//     <div 
//       className="h-full transition-all duration-500 transform hover:scale-102"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <GlassCard className="h-full flex flex-col overflow-hidden">
//         {/* Project Image or Video */}
//         <div className="relative h-48 md:h-64 mb-4 overflow-hidden rounded-lg">
//           {videoSrc ? (
//             <>
//               <video 
//                 ref={videoRef}
//                 poster={image}
//                 // className="w-full h-full object-cover"
//                 className="w-full h-full object-contain bg-black" // Change from object-cover to object-contain and add bg-black

//                 onClick={handlePlayVideo}
//                 onEnded={() => setIsPlaying(false)}
//               >
//                 <source src={videoSrc} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
              
//               {/* Play button overlay - only show when not playing */}
//               {!isPlaying && (
//                 <div 
//                   className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity cursor-pointer"
//                   onClick={handlePlayVideo}
//                 >
//                   <div className="w-12 h-12 rounded-full bg-indigo-600/80 flex items-center justify-center hover:bg-indigo-500 transition-colors">
//                     <Play size={20} className="text-white ml-1" />
//                   </div>
//                 </div>
//               )}
//             </>
//           ) : (
//             <img 
//               src={image} 
//               alt={title} 
//               className="w-full h-full object-cover"
//               style={{
//                 maxHeight: "100%",
//                 display: "block" // Ensure the image is displayed as a block element
//               }}
//               onError={(e) => {
//                 console.error(`Error loading image: ${image}`);
//                 // Use a data URI placeholder instead of the API placeholder
//                 e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='100%25' height='100%25' fill='%23555'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24px' fill='%23fff'%3E${title}%3C/text%3E%3C/svg%3E";
//               }}
//             />
//           )}
          
//           {/* Category Badge */}
//           <div className="absolute top-3 left-3 flex gap-2">
//   {/* Check if category is a string with delimiter or an array */}
//   {typeof category === 'string' && category.includes('/') ? 
//     category.split('/').map((cat, index) => (
//       <div 
//         key={index} 
//         className="bg-black/50 backdrop-blur-md text-xs py-1 px-2 rounded-full border border-white/10"
//       >
//         {cat}
//       </div>
//     )) 
//     : 
//     <div className="bg-black/50 backdrop-blur-md text-xs py-1 px-2 rounded-full border border-white/10">
//       {category}
//     </div>
//   }
// </div>

//         </div>
        
//         {/* Project Content */}
//         <div className="flex-grow flex flex-col">
//           <h3 className="text-xl font-bold mb-2">{title}</h3>
//           <p className="text-slate-300 text-sm mb-4 flex-grow">{description}</p>
          
//           <a 
//             href={link} 
//             className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors mt-auto"
//             target="_blank"  
//             rel="noopener noreferrer"
//           >
//             <span className="mr-1">View Project</span>
//             <ArrowUpRight size={16} />
//           </a>
//         </div>
//       </GlassCard>
//     </div>
//   );
// };




// const ProjectsGrid = ({ activeFilter }) => {

//   const [visibleCount, setVisibleCount] = useState(9);

//   // Projects data - in a real application, this could be fetched from an API
//   const projects = [
//     {
//       id: 1,
//       title: "Sheshi",
//       description: "Sheshi is a boutique online store for luxury glassware and barware—hand-picked crystal tumblers, wine, whiskey and cocktail glasses curated by two sisters and shipped pan-India.",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/7.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Sheshi-Made-with-Clipchamp.mp4",
//       link: "https://sheshi.co.in/"
//     },
    
//     {
//       id: 2,
//       title: "Ascent Industrial Manufacturers",
//       description: "Ascent Industries is an ISO 9001-certified Indian manufacturer (est. 2011) that produces precision CNC-machined, sheet-metal and laser-cut components—high-quality import-substitutes supplied to a broad range of industrial clients worldwide.",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/3.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Ascent-Google-Chrome-2024-10-16-22-57-00-online-video-cutter.com_.mp4",
//       link: "https://ascentindustries.in/"
//     },
//     {
//       id: 3,
//       title: "Marketing Conclave",
//       description: "Marketing Conclave (MarCon) is IAMAI’s annual digital-marketing summit—its 19th edition—bringing 1,500+ brands, agencies and tech leaders together in Mumbai for a packed one-day agenda of 30 sessions across four tracks.",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/2.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Marcon-Made-with-Clipchamp.mp4",
//       link: "https://eventsites.iamai.in/marketingconclave.com/"
//     },
//     {
//       id: 4,
//       title: "Toonzkart",
//       description: "ToonzKart is an India-based online “learning megastore” where parents and students can shop by school for books, stationery, toys and other study essentials—covering everything from nursery through college at fair prices and fast delivery. ",
//       category: "software",
//       tags: ["software"],
//       image: "/images/projects/5.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Recording-2025-04-02-201430.mp4",
//       link: "https://www.toonzkart.com/"
//     },
//     {
//       id: 5,
//       title: "Kushagra Kid",
//       description: "Kushagra Kid offers research-driven, bi-monthly home-learning kits packed with 30+ multi-sensory activities that accelerate brain development for children aged 0–5.",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/4.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Kushagra-Kid-Made-with-Clipchamp-online-video-cutter.com_.mp4",
//       link: "https://main.kushagrakid.com/"
//     },
//     {
//       id: 6,
//       title: "Punjabi Rishtey",
//       description: "A 22-year-old Punjabi marriage bureau reborn online: the platform offers only verified profiles, blends traditional values with an AI-assisted matchmaking algorithm, and guides users through a simple four-step journey—sign-up, find matches, express interest, start the shaadi story—while guaranteeing privacy, dedicated support and a rich record of real success stories.",
//       category: "software",
//       tags: ["software"],
//       image: "/images/projects/6.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Recording-2025-04-02-203811.mp4",
//       link: "https://user-frontend-seven-virid.vercel.app/"
//     },
//     {
//       id: 7,
//       title: "Vipulanchal Investments",
//       description: "Vipulanchal Wealth Management (brand tagline “nifty-fifty”) is an Indore-based Motilal Oswal associate that guides retail investors through IEPF claims, physical-to-Demat share conversion, Demat account opening and goal-based direct-equity investing—delivering full-stack broking, mutual-fund and tax-planning services under one roof. ",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/8.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Vipul-Anchal-Investments-Google-Chrome-2024-10-16-21-12-20-online-video-cutter.com_.mp4",
//       // link: "https://highcrestrealtors.com/"
//     },
//     {
//       id: 8,
//       title: "High-Crest-Realtors",
//       description: "High Crest Realtors is an Indore-based, customer-focused real-estate consultancy that guides clients through buying, selling, renting and even building or renovating properties, backed by in-house construction and interior-design services.",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/1.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/High-Crest-Realtors-Made-with-Clipchamp-1.mp4",
//       link: "https://highcrestrealtors.com/"
//     },
//     {
//       id: 9,
//       title: "FIWE",
//       description: "FiWe (Financial Wellness Education) creates hands-on, screen-free financial-literacy curricula for K–12 schools—interactive workbooks and tactile challenges that build life-skills, money-management habits and career readiness, with core grade-aligned programs, topic-focused enrichment courses and take-home workshops for parents. ",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/9.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Fiwe-Website-Google-Chrome-2024-10-15-20-49-33-online-video-cutter.com_-1.mp4",
//       // link: "https://highcrestrealtors.com/"
//     },
//     {
//       id: 10,
//       title: "Womenses",
//       description: "Womenses is a Shopify-based wellness brand that formulates herbal capsules targeting women’s health concerns—fertility, PCOS/PCOD, irregular periods, cramps, white discharge and weight management—sold direct-to-consumer through its online store. ",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/10.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/WOMENSES-Google-Chrome-2024-10-16-22-24-15-online-video-cutter.com_.mp4",
//       link: "https://womenses.com/"
//     },
//     {
//       id: 11,
//       title: "Metaphor World",
//       description: "Metaphor World is a Dubai-based Shopify store that curates best-selling notebooks, NCERT books and everyday stationery—your one-stop online haven for school, office and creative supplies at exclusive prices. ",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/11.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Recording 2025-04-24 170549.mp4",
//       link: "https://www.metaphorworld.com/"
//     },    {
//       id: 12,
//       title: "Dream Vista Realtors",
//       description: "Dream Vista Realtors is a Dubai-based agency that simplifies buying, selling and renting luxury homes and commercial spaces with deep local market insight and client-first, end-to-end service.  ",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/12.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Dream.mp4",
//       link: "https://dreamvistarealtors.com/"
//     },
//     {
//       id: 13,
//       title: "Rare Ventures",
//       description: "Rare Ventures is a Central-India real-estate consultancy that helps individuals, HNIs and corporates invest in residential, commercial and agricultural properties—as well as new-age options like REITs, fractional ownership and AIFs—through transparent, end-to-end service. ",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/13.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Rare-Ventures.mp4",
//       link: "https://rareventures.in/"
//     },
//     {
//       id: 14,
//       title: "Modernizing Biz",
//       description: "Modernizing Biz is a podcast platform that distills real-life stories and actionable advice from industry leaders to help entrepreneurs and small-business owners level up. ",
//       category: "web",
//       tags: ["web"],
//       image: "/images/projects/14.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/Modernizing-Biz-Podcast-Google-Chrome-2024-10-16-22-19-14-online-video-cutter.com_.mp4",
//       link: "https://modernizingbiz.com/"
//     },
//     {
//       id: 15,
//       title: "Spark Machineries",
//       description: "Spark Machineries delivers multilevel, fully-automated robotic parking systems—rotary, puzzle, pit and stack configurations—that maximise space, cut retrieval times and bolster security for crowded urban sites. ",
//       category: "software/mobile",
//       tags: ["software", "mobile"],
//       image: "/images/projects/16.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/WhatsApp-Video-2024-10-16-at-21.44.54_e2ae5fad-online-video-cutter.com_.mp4",
//       // link: "https://highcrestrealtors.com/"
//     },
//     {
//       id: 16,
//       title: "Ferrywala - Consumer",
//       description: "A hyper-local marketplace app that pins nearby street vendors and daily-needs services—Sabjiwalas, Falwalas, Atalewalas, gardeners, watchmen and more—on an interactive map, letting consumers discover India’s “hidden gems,” get real-time alerts and buy from 10 + curated categories while digitally empowering un-organised workers with GPS training, verified profiles and ratings.",
//       category: "software/mobile",
//       tags: ["software", "mobile"],
//       image: "/images/projects/17.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/WhatsApp-Video-2024-10-16-at-21.03.17_c0d5d0b0-online-video-cutter.com-2.mp4",
//       link: "https://play.google.com/store/apps/details?id=com.ferrywalaa"
//     },
//     {
//       id: 17,
//       title: "Swagni",
//       description: "Swagni’s automated Agnihotra system now syncs perfectly with sunrise / sunset via an RTC module, boosting timing accuracy and ease of use. These upgrades lifted user engagement and satisfaction by 25 %, driving more repeat sessions from precision-focused users.",
//       category: "hardware/iot",
//       tags: ["hardware", "iot"],
//       image: "/images/projects/20.png", 
//       // Add a black background color to make the play button more visible
//       backgroundColor: "#000", // Restore original path
//       videoSrc: "/videos/projects/FDownloader.Net_AQPchp_wRCU9ej01EGDB2P7W5GjhktTPkcFVLWyBtZ5UYNE80OBE8Otg-Kr02AuBW_MbcGwn5-Ooco4d0M3tUNQm_360p_(SD).mp4",
//       // link: "https://highcrestrealtors.com/"
//     },
//     {
//     id: 18,
//     title: "Ferrywala - Provider",
//     description: "A super–simple companion app for street vendors and local helpers. All you do is toggle your location ON when you’re open for business and OFF when you’re done. Shoppers nearby instantly see you on their map and can head straight to your spot.",
//     category: "software/mobile",
//     tags: ["software", "mobile"],
//     image: "/images/projects/21.png", 
//     // Add a black background color to make the play button more visible
//     backgroundColor: "#000", // Restore original path
//     videoSrc: "/videos/projects/WhatsApp-Video-2024-10-16-at-21.03.11_ea8e52e4-online-video-cutter.com_-1.mp4",
//     link: "https://play.google.com/store/apps/details?id=com.ferrywalaa.provider"
//   },
//   {
//     id: 19,
//     title: "Rotary Parking",
//     description: "Table-top prototype of an automated rotary car-parking tower: a stepper-motor–driven carousel lifts and rotates 10 miniature cars on stacked platforms, demonstrating how vertical, multilevel parking can pack more vehicles into a tiny footprint for dense urban sites.",
//     category: "hardware/iot",
//     tags: ["hardware", "iot"],
//     image: "/images/projects/22.jpg", 
//     // Add a black background color to make the play button more visible
//     backgroundColor: "#000", // Restore original path
//     videoSrc: "/videos/projects/WhatsApp Video 2025-04-20 at 16.34.36_150cb081.mp4",
//     // link: "https://highcrestrealtors.com/"
//   },
//   {
//     id: 20,
//     title: "Parking Detection and Management System",
//     description: "Compact parking-bay occupancy demo: four overhead IR sensors watch each slot; when a spot is empty the system triggers an ultra-short-throw “billboard” projection onto the vacant space, monetising idle bays. The moment a vehicle is detected, the projector for that slot shuts off—switching ad revenue to guidance mode while confirming the space is taken.",
//     category: "hardware/iot",
//     tags: ["hardware", "iot"],
//     image: "/images/projects/18.jpg", 
//     // Add a black background color to make the play button more visible
//     backgroundColor: "#000", // Restore original path
   
//   },
//   ];

//   // Filter projects based on active filter
//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.tags.includes(activeFilter));

//   return (
//     <div>
//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredProjects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             image={project.image}
//             title={project.title}
//             description={project.description}
//             category={project.category}
//             link={project.link}
//             videoSrc={project.videoSrc}
//           />
//         ))}
//       </div>
      
//       {/* Empty state when no projects match filter */}
//       {filteredProjects.length === 0 && (
//         <div className="text-center py-16">
//           <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
//           <p className="text-slate-300 mb-8">No projects match the selected filter criteria.</p>
//           <NeuButton 
//             onClick={() => setActiveFilter('all')}
//             className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
//           >
//             View All Projects
//           </NeuButton>
//         </div>
//       )}
      
//       {/* Load More Button - only show if there are projects */}
//       {filteredProjects.length > 0 && (
//         <div className="text-center mt-12">
//           <NeuButton className="bg-white/5 hover:bg-white/10 px-8">
//             <span className="mr-2">Load More Projects</span>
//             <ExternalLink size={16} />
//           </NeuButton>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectsGrid;



import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ExternalLink, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { NeuButton } from '../ui/NeuButton';

// Project Card Component
const ProjectCard = ({ image, title, description, category, link, videoSrc }) => {
  // For debugging image paths
  console.log(`Loading image for ${title}: ${image}`);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
  const handlePlayVideo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  return (
    <div 
      className="h-full transition-all duration-500 transform hover:scale-102"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassCard className="h-full flex flex-col overflow-hidden">
        {/* Project Image or Video */}
        <div className="relative h-48 md:h-64 mb-4 overflow-hidden rounded-lg">
          {videoSrc ? (
            <>
              <video 
                ref={videoRef}
                poster={image}
                className="w-full h-full object-contain bg-black"
                onClick={handlePlayVideo}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play button overlay - only show when not playing */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity cursor-pointer"
                  onClick={handlePlayVideo}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-600/80 flex items-center justify-center hover:bg-indigo-500 transition-colors">
                    <Play size={20} className="text-white ml-1" />
                  </div>
                </div>
              )}
            </>
          ) : (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
              style={{
                maxHeight: "100%",
                display: "block"
              }}
              onError={(e) => {
                console.error(`Error loading image: ${image}`);
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='100%25' height='100%25' fill='%23555'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24px' fill='%23fff'%3E${title}%3C/text%3E%3C/svg%3E";
              }}
            />
          )}
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3 flex gap-2">
            {typeof category === 'string' && category.includes('/') ? 
              category.split('/').map((cat, index) => (
                <div 
                  key={index} 
                  className="bg-black/50 backdrop-blur-md text-xs py-1 px-2 rounded-full border border-white/10"
                >
                  {cat}
                </div>
              )) 
              : 
              <div className="bg-black/50 backdrop-blur-md text-xs py-1 px-2 rounded-full border border-white/10">
                {category}
              </div>
            }
          </div>
        </div>
        
        {/* Project Content */}
        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-slate-300 text-sm mb-4 flex-grow">{description}</p>
          
          {link && (
            <a 
              href={link} 
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors mt-auto"
              target="_blank"  
              rel="noopener noreferrer"
            >
              <span className="mr-1">View Project</span>
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </GlassCard>
    </div>
  );
};

const ProjectsGrid = ({ activeFilter }) => {
  // State to track how many projects to show
  const [visibleCount, setVisibleCount] = useState(9);
  
  // Projects data
  const projects = [
    {
      id: 1,
      title: "Sheshi",
      description: "Sheshi is a boutique online store for luxury glassware and barware—hand-picked crystal tumblers, wine, whiskey and cocktail glasses curated by two sisters and shipped pan-India.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/7.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Sheshi-Made-with-Clipchamp.mp4",
      link: "https://sheshi.co.in/"
    },
    
    {
      id: 2,
      title: "Ascent Industrial Manufacturers",
      description: "Ascent Industries is an ISO 9001-certified Indian manufacturer (est. 2011) that produces precision CNC-machined, sheet-metal and laser-cut components—high-quality import-substitutes supplied to a broad range of industrial clients worldwide.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/3.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Ascent-Google-Chrome-2024-10-16-22-57-00-online-video-cutter.com_.mp4",
      link: "https://ascentindustries.in/"
    },
    {
      id: 3,
      title: "Marketing Conclave",
      description: "Marketing Conclave (MarCon) is IAMAI's annual digital-marketing summit—its 19th edition—bringing 1,500+ brands, agencies and tech leaders together in Mumbai for a packed one-day agenda of 30 sessions across four tracks.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/2.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Marcon-Made-with-Clipchamp.mp4",
      link: "https://eventsites.iamai.in/marketingconclave.com/"
    },
    {
      id: 4,
      title: "Toonzkart",
      description: "ToonzKart is an India-based online \"learning megastore\" where parents and students can shop by school for books, stationery, toys and other study essentials—covering everything from nursery through college at fair prices and fast delivery.",
      category: "software",
      tags: ["software"],
      image: "/images/projects/5.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Recording-2025-04-02-201430.mp4",
      link: "https://www.toonzkart.com/"
    },
    {
      id: 5,
      title: "Kushagra Kid",
      description: "Kushagra Kid offers research-driven, bi-monthly home-learning kits packed with 30+ multi-sensory activities that accelerate brain development for children aged 0–5.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/4.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Kushagra-Kid-Made-with-Clipchamp-online-video-cutter.com_.mp4",
      link: "https://main.kushagrakid.com/"
    },
    {
      id: 6,
      title: "Punjabi Rishtey",
      description: "A 22-year-old Punjabi marriage bureau reborn online: the platform offers only verified profiles, blends traditional values with an AI-assisted matchmaking algorithm, and guides users through a simple four-step journey—sign-up, find matches, express interest, start the shaadi story—while guaranteeing privacy, dedicated support and a rich record of real success stories.",
      category: "software",
      tags: ["software"],
      image: "/images/projects/6.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Recording-2025-04-02-203811.mp4",
      link: "https://user-frontend-seven-virid.vercel.app/"
    },
    {
      id: 7,
      title: "Vipulanchal Investments",
      description: "Vipulanchal Wealth Management (brand tagline \"nifty-fifty\") is an Indore-based Motilal Oswal associate that guides retail investors through IEPF claims, physical-to-Demat share conversion, Demat account opening and goal-based direct-equity investing—delivering full-stack broking, mutual-fund and tax-planning services under one roof.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/8.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Vipul-Anchal-Investments-Google-Chrome-2024-10-16-21-12-20-online-video-cutter.com_.mp4",
    },
    {
      id: 8,
      title: "High-Crest-Realtors",
      description: "High Crest Realtors is an Indore-based, customer-focused real-estate consultancy that guides clients through buying, selling, renting and even building or renovating properties, backed by in-house construction and interior-design services.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/1.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/High-Crest-Realtors-Made-with-Clipchamp-1.mp4",
      link: "https://highcrestrealtors.com/"
    },
    {
      id: 9,
      title: "FIWE",
      description: "FiWe (Financial Wellness Education) creates hands-on, screen-free financial-literacy curricula for K–12 schools—interactive workbooks and tactile challenges that build life-skills, money-management habits and career readiness, with core grade-aligned programs, topic-focused enrichment courses and take-home workshops for parents.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/9.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Fiwe-Website-Google-Chrome-2024-10-15-20-49-33-online-video-cutter.com_-1.mp4",
    },
    {
      id: 10,
      title: "Womenses",
      description: "Womenses is a Shopify-based wellness brand that formulates herbal capsules targeting women's health concerns—fertility, PCOS/PCOD, irregular periods, cramps, white discharge and weight management—sold direct-to-consumer through its online store.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/10.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/WOMENSES-Google-Chrome-2024-10-16-22-24-15-online-video-cutter.com_.mp4",
      link: "https://womenses.com/"
    },
    {
      id: 11,
      title: "Metaphor World",
      description: "Metaphor World is a Dubai-based Shopify store that curates best-selling notebooks, NCERT books and everyday stationery—your one-stop online haven for school, office and creative supplies at exclusive prices.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/11.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Recording 2025-04-24 170549.mp4",
      link: "https://www.metaphorworld.com/"
    },    
    {
      id: 12,
      title: "Dream Vista Realtors",
      description: "Dream Vista Realtors is a Dubai-based agency that simplifies buying, selling and renting luxury homes and commercial spaces with deep local market insight and client-first, end-to-end service.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/12.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Dream.mp4",
      link: "https://dreamvistarealtors.com/"
    },
    {
      id: 13,
      title: "Rare Ventures",
      description: "Rare Ventures is a Central-India real-estate consultancy that helps individuals, HNIs and corporates invest in residential, commercial and agricultural properties—as well as new-age options like REITs, fractional ownership and AIFs—through transparent, end-to-end service.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/13.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Rare-Ventures.mp4",
      link: "https://rareventures.in/"
    },
    {
      id: 14,
      title: "Modernizing Biz",
      description: "Modernizing Biz is a podcast platform that distills real-life stories and actionable advice from industry leaders to help entrepreneurs and small-business owners level up.",
      category: "web",
      tags: ["web"],
      image: "/images/projects/14.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/Modernizing-Biz-Podcast-Google-Chrome-2024-10-16-22-19-14-online-video-cutter.com_.mp4",
      link: "https://modernizingbiz.com/"
    },
    {
      id: 15,
      title: "Spark Machineries",
      description: "Spark Machineries delivers multilevel, fully-automated robotic parking systems—rotary, puzzle, pit and stack configurations—that maximise space, cut retrieval times and bolster security for crowded urban sites.",
      category: "software/mobile",
      tags: ["software", "mobile"],
      image: "/images/projects/16.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/WhatsApp-Video-2024-10-16-at-21.44.54_e2ae5fad-online-video-cutter.com_.mp4",
    },
    {
      id: 16,
      title: "Ferrywala - Consumer",
      description: "A hyper-local marketplace app that pins nearby street vendors and daily-needs services—Sabjiwalas, Falwalas, Atalewalas, gardeners, watchmen and more—on an interactive map, letting consumers discover India's \"hidden gems,\" get real-time alerts and buy from 10 + curated categories while digitally empowering un-organised workers with GPS training, verified profiles and ratings.",
      category: "software/mobile",
      tags: ["software", "mobile"],
      image: "/images/projects/17.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/WhatsApp-Video-2024-10-16-at-21.03.17_c0d5d0b0-online-video-cutter.com-2.mp4",
      link: "https://play.google.com/store/apps/details?id=com.ferrywalaa"
    },
    {
      id: 17,
      title: "Swagni",
      description: "Swagni's automated Agnihotra system now syncs perfectly with sunrise / sunset via an RTC module, boosting timing accuracy and ease of use. These upgrades lifted user engagement and satisfaction by 25 %, driving more repeat sessions from precision-focused users.",
      category: "hardware/iot",
      tags: ["hardware", "iot"],
      image: "/images/projects/20.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/FDownloader.Net_AQPchp_wRCU9ej01EGDB2P7W5GjhktTPkcFVLWyBtZ5UYNE80OBE8Otg-Kr02AuBW_MbcGwn5-Ooco4d0M3tUNQm_360p_(SD).mp4",
    },
    {
      id: 18,
      title: "Ferrywala - Provider",
      description: "A super–simple companion app for street vendors and local helpers. All you do is toggle your location ON when you're open for business and OFF when you're done. Shoppers nearby instantly see you on their map and can head straight to your spot.",
      category: "software/mobile",
      tags: ["software", "mobile"],
      image: "/images/projects/21.png", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/WhatsApp-Video-2024-10-16-at-21.03.11_ea8e52e4-online-video-cutter.com_-1.mp4",
      link: "https://play.google.com/store/apps/details?id=com.ferrywalaa.provider"
    },
    {
      id: 19,
      title: "Rotary Parking",
      description: "Table-top prototype of an automated rotary car-parking tower: a stepper-motor–driven carousel lifts and rotates 10 miniature cars on stacked platforms, demonstrating how vertical, multilevel parking can pack more vehicles into a tiny footprint for dense urban sites.",
      category: "hardware/iot",
      tags: ["hardware", "iot"],
      image: "/images/projects/22.jpg", 
      backgroundColor: "#000",
      videoSrc: "/videos/projects/WhatsApp Video 2025-04-20 at 16.34.36_150cb081.mp4",
    },
    {
      id: 20,
      title: "Parking Detection and Management System",
      description: "Compact parking-bay occupancy demo: four overhead IR sensors watch each slot; when a spot is empty the system triggers an ultra-short-throw \"billboard\" projection onto the vacant space, monetising idle bays. The moment a vehicle is detected, the projector for that slot shuts off—switching ad revenue to guidance mode while confirming the space is taken.",
      category: "hardware/iot",
      tags: ["hardware", "iot"],
      image: "/images/projects/18.jpg", 
      backgroundColor: "#000",
    },
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  // Get only the visible projects
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  
  // Handler for loading more projects
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9); // Load 9 more projects
  };

  return (
    <div>
      {/* Projects Grid - only showing visible projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            category={project.category}
            link={project.link}
            videoSrc={project.videoSrc}
          />
        ))}
      </div>
      
      {/* Empty state when no projects match filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
          <p className="text-slate-300 mb-8">No projects match the selected filter criteria.</p>
          <NeuButton 
            onClick={() => setActiveFilter('all')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
          >
            View All Projects
          </NeuButton>
        </div>
      )}
      
      {/* Load More Button - only show if there are more projects to load */}
      {visibleProjects.length < filteredProjects.length && (
        <div className="text-center mt-12">
          <NeuButton 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            onClick={handleLoadMore}
          >
            <span className="mr-2">Load More Projects</span>
            <ExternalLink size={16} />
          </NeuButton>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;