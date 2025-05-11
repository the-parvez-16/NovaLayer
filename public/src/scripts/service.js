document.addEventListener('DOMContentLoaded', function () {
    // Service content data
    const servicesData = {
        //Web-dev
        custom: {
            title: "Custom Website Development",
            content: `
            <div class="service-details">
                <h3>Tailored Web Solutions</h3>
                <p>We build completely custom websites designed specifically for your business needs and brand identity.</p>
                
                <h4>Key Features:</h4>
                <ul>
                    <li>100% unique design (no templates)</li>
                    <li>Mobile-first responsive development</li>
                    <li>SEO-optimized architecture</li>
                    <li>Custom functionality development</li>
                    <li>Performance optimization</li>
                    <li>Cross-browser compatibility</li>
                </ul>
                
                <h4>Technologies We Use:</h4>
                <ul>
                    <li>HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>React.js, Vue.js, Angular</li>
                    <li>Node.js, Python, PHP</li>
                    <li>MongoDB, PostgreSQL, MySQL</li>
                    <li>GraphQL, REST APIs</li>
                    <li>Webpack, Babel, Sass</li>
                </ul>
            </div>
        `
        },
        ecommerce: {
            title: "E-commerce Development",
            content: `
            <div class="service-details">
                <h3>Powerful Online Stores</h3>
                <p>We develop high-converting e-commerce websites with all the features you need to sell online successfully.</p>
                
                <h4>E-commerce Features:</h4>
                <ul>
                    <li>Product catalog management</li>
                    <li>Secure payment gateways integration</li>
                    <li>Shopping cart and checkout system</li>
                    <li>Inventory and order management</li>
                    <li>Customer accounts and reviews</li>
                    <li>Shipping and tax calculation</li>
                </ul>
                
                <h4>Platforms We Work With:</h4>
                <ul>
                    <li>Custom e-commerce solutions</li>
                    <li>Shopify development</li>
                    <li>WooCommerce (WordPress)</li>
                    <li>Magento/Adobe Commerce</li>
                    <li>BigCommerce</li>
                    <li>Headless commerce solutions</li>
                </ul>
            </div>
        `
        },
        webapps: {
            title: "Web Application Development",
            content: `
            <div class="service-details">
                <h3>Interactive Web Applications</h3>
                <p>We build dynamic web applications with complex functionality and seamless user experiences.</p>
                
                <h4>Web App Capabilities:</h4>
                <ul>
                    <li>User authentication and authorization</li>
                    <li>Real-time data processing</li>
                    <li>Interactive dashboards</li>
                    <li>Complex form handling</li>
                    <li>Data visualization</li>
                    <li>API integrations</li>
                </ul>
                
                <h4>Types of Web Apps We Build:</h4>
                <ul>
                    <li>SaaS platforms</li>
                    <li>CRM and ERP systems</li>
                    <li>Project management tools</li>
                    <li>Collaboration platforms</li>
                    <li>Data analytics dashboards</li>
                    <li>Custom business solutions</li>
                </ul>
            </div>
        `
        },
        cms: {
            title: "CMS Development",
            content: `
            <div class="service-details">
                <h3>Content Management Solutions</h3>
                <p>We create easy-to-manage websites with powerful content management capabilities.</p>
                
                <h4>CMS Features:</h4>
                <ul>
                    <li>Custom theme development</li>
                    <li>Plugin/module customization</li>
                    <li>Headless CMS implementations</li>
                    <li>Multi-language support</li>
                    <li>User role management</li>
                    <li>Content versioning</li>
                </ul>
                
                <h4>Platforms We Specialize In:</h4>
                <ul>
                    <li>WordPress (custom themes/plugins)</li>
                    <li>Shopify (theme development)</li>
                    <li>Drupal</li>
                    <li>Joomla</li>
                    <li>Strapi</li>
                    <li>Contentful</li>
                </ul>
            </div>
        `
        },
        api: {
            title: "API Integration",
            content: `
            <div class="service-details">
                <h3>Seamless System Integration</h3>
                <p>We connect your website with external services and internal systems through secure API integrations.</p>
                
                <h4>Integration Services:</h4>
                <ul>
                    <li>Payment gateway integration</li>
                    <li>CRM/ERP system connections</li>
                    <li>Marketing automation tools</li>
                    <li>Shipping and logistics APIs</li>
                    <li>Social media platform APIs</li>
                    <li>Custom API development</li>
                </ul>
                
                <h4>Our Integration Approach:</h4>
                <ol>
                    <li>Requirement analysis</li>
                    <li>API documentation review</li>
                    <li>Authentication setup</li>
                    <li>Endpoint integration</li>
                    <li>Data mapping and transformation</li>
                    <li>Testing and error handling</li>
                </ol>
            </div>
        `
        },
        maintenance: {
            title: "Website Maintenance",
            content: `
            <div class="service-details">
                <h3>Ongoing Support & Maintenance</h3>
                <p>We provide comprehensive website maintenance services to keep your site secure, fast, and up-to-date.</p>
                
                <h4>Maintenance Services:</h4>
                <ul>
                    <li>Regular security updates</li>
                    <li>Performance optimization</li>
                    <li>Content updates and changes</li>
                    <li>Backup management</li>
                    <li>Uptime monitoring</li>
                    <li>Emergency support</li>
                </ul>
                
                <h4>Our Maintenance Plans:</h4>
                <ul>
                    <li><strong>Basic:</strong> Security updates, monthly backups</li>
                    <li><strong>Standard:</strong> Weekly updates, performance checks</li>
                    <li><strong>Premium:</strong> Daily monitoring, content updates</li>
                    <li><strong>Enterprise:</strong> Dedicated support, SLA guarantees</li>
                </ul>
            </div>
        `
        },
        //Video Editing
        commercial: {
            title: "Commercial Video Editing",
            content: `
                <div class="service-details">
                    <h3>High-Impact Commercial Videos</h3>
                    <p>Our commercial video editing service transforms your raw footage into compelling ads that drive conversions and brand recognition.</p>
                    
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Precise pacing for maximum impact</li>
                        <li>Dynamic transitions and effects</li>
                        <li>Professional color grading</li>
                        <li>Sound design and audio mixing</li>
                        <li>Optimized for all platforms (TV, social, web)</li>
                        <li>Multiple versions for A/B testing</li>
                    </ul>
                    
                    <h4>Our Process:</h4>
                    <ol>
                        <li>Initial consultation to understand campaign goals</li>
                        <li>Storyboard and concept development</li>
                        <li>Footage review and selection</li>
                        <li>Rough cut for approval</li>
                        <li>Final editing with effects and audio</li>
                        <li>Delivery in all required formats</li>
                    </ol>
                </div>
            `
        },
        corporate: {
            title: "Corporate Video Editing",
            content: `
                <div class="service-details">
                    <h3>Professional Corporate Videos</h3>
                    <p>We create polished corporate videos that effectively communicate your message and enhance your brand image.</p>
                    
                    <h4>Services Include:</h4>
                    <ul>
                        <li>Company profile videos</li>
                        <li>Training and instructional videos</li>
                        <li>Product demonstration videos</li>
                        <li>Executive message videos</li>
                        <li>Event highlight reels</li>
                        <li>Testimonial and case study videos</li>
                    </ul>
                    
                    <h4>Why Choose Us?</h4>
                    <ul>
                        <li>10+ years corporate video experience</li>
                        <li>Understanding of corporate branding</li>
                        <li>Professional voiceover integration</li>
                        <li>Subtitles and closed captions</li>
                        <li>Quick turnaround times</li>
                        <li>Confidentiality guaranteed</li>
                    </ul>
                </div>
            `
        },
        social: {
            title: "Social Media Video Editing",
            content: `
                <div class="service-details">
                    <h3>Viral-Worthy Social Content</h3>
                    <p>We edit videos specifically optimized for social media platforms to maximize engagement and sharing.</p>
                    
                    <h4>Platform Specialization:</h4>
                    <ul>
                        <li>Instagram Reels & Stories</li>
                        <li>TikTok trends and effects</li>
                        <li>YouTube Shorts</li>
                        <li>Facebook/Instagram ads</li>
                        <li>LinkedIn professional videos</li>
                        <li>Twitter video clips</li>
                    </ul>
                    
                    <h4>Our Approach:</h4>
                    <ul>
                        <li>First 3-second hook to stop scrolling</li>
                        <li>Vertical and square formats</li>
                        <li>Captions for sound-off viewing</li>
                        <li>Trending music and effects</li>
                        <li>Hashtag strategy included</li>
                        <li>Analytics-driven optimizations</li>
                    </ul>
                </div>
            `
        },
        music: {
            title: "Music Video Editing",
            content: `
                <div class="service-details">
                    <h3>Cinematic Music Videos</h3>
                    <p>We create music videos that visually amplify your audio and create memorable experiences.</p>
                    
                    <h4>Editing Techniques:</h4>
                    <ul>
                        <li>Beat-synced editing</li>
                        <li>Lyric visualization</li>
                        <li>Conceptual storytelling</li>
                        <li>Performance enhancement</li>
                        <li>Special effects integration</li>
                        <li>Color grading for mood</li>
                    </ul>
                    
                    <h4>Genres We Work With:</h4>
                    <ul>
                        <li>Pop/Rock</li>
                        <li>Hip-Hop/Rap</li>
                        <li>Electronic/Dance</li>
                        <li>R&B/Soul</li>
                        <li>Country</li>
                        <li>Alternative/Indie</li>
                    </ul>
                </div>
            `
        },
        wedding: {
            title: "Wedding Video Editing",
            content: `
                <div class="service-details">
                    <h3>Cinematic Wedding Films</h3>
                    <p>We transform your wedding footage into a beautiful, emotional film you'll treasure forever.</p>
                    
                    <h4>Our Wedding Packages Include:</h4>
                    <ul>
                        <li>Highlight film (3-5 minutes)</li>
                        <li>Full ceremony edit</li>
                        <li>Reception highlights</li>
                        <li>Same-day edit option</li>
                        <li>Drone footage integration</li>
                        <li>Customized soundtrack</li>
                    </ul>
                    
                    <h4>Special Touches:</h4>
                    <ul>
                        <li>Slow motion effects</li>
                        <li>Black & white sequences</li>
                        <li>Vintage film looks</li>
                        <li>Audio sweetening</li>
                        <li>Guest message compilation</li>
                        <li>Custom DVD/Blu-ray packaging</li>
                    </ul>
                </div>
            `
        },
        animation: {
            title: "2D/3D Animation",
            content: `
                <div class="service-details">
                    <h3>Custom Animated Videos</h3>
                    <p>We create engaging animated videos that explain complex ideas simply and memorably.</p>
                    
                    <h4>Animation Styles:</h4>
                    <ul>
                        <li>2D Character Animation</li>
                        <li>3D Product Visualization</li>
                        <li>Whiteboard Animation</li>
                        <li>Motion Graphics</li>
                        <li>Infographic Animation</li>
                        <li>Mixed Media Animation</li>
                    </ul>
                    
                    <h4>Our Animation Process:</h4>
                    <ol>
                        <li>Concept development</li>
                        <li>Scriptwriting</li>
                        <li>Storyboarding</li>
                        <li>Voiceover recording</li>
                        <li>Animation production</li>
                        <li>Sound design and delivery</li>
                    </ol>
                </div>
            `
        },
        //Thumbnail
        youtube: {
            title: "YouTube Thumbnail Design",
            content: `
                <div class="service-details">
                    <h3>High-Click YouTube Thumbnails</h3>
                    <p>We design thumbnails that stand out in YouTube's competitive landscape and significantly increase your click-through rates.</p>
                    
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Bold, attention-grabbing text</li>
                        <li>High-contrast color schemes</li>
                        <li>Emotionally compelling facial expressions</li>
                        <li>Strategic use of arrows and circles</li>
                        <li>Brand consistency across your channel</li>
                        <li>Mobile-optimized designs</li>
                    </ul>
                    
                    <h4>Our Process:</h4>
                    <ol>
                        <li>Analyze your niche and competitors</li>
                        <li>Develop thumbnail concepts based on video content</li>
                        <li>Create 3 initial design options</li>
                        <li>Refine based on your feedback</li>
                        <li>Deliver final files in multiple formats</li>
                        <li>Provide A/B testing recommendations</li>
                    </ol>
                </div>
            `
        },
        tiktok: {
            title: "TikTok Thumbnail Design",
            content: `
                <div class="service-details">
                    <h3>Engaging TikTok Covers</h3>
                    <p>We create thumbnails that make viewers stop scrolling and watch your TikTok videos to completion.</p>
                    
                    <h4>Special Features:</h4>
                    <ul>
                        <li>Vertical format optimization</li>
                        <li>First-frame impact for auto-play</li>
                        <li>Trend-appropriate styling</li>
                        <li>High-energy visual elements</li>
                        <li>Branded templates for consistency</li>
                        <li>Text placement that avoids UI elements</li>
                    </ul>
                    
                    <h4>Why Our TikTok Thumbnails Work:</h4>
                    <ul>
                        <li>Designed for sound-off viewing</li>
                        <li>Quick-read messaging</li>
                        <li>Emotionally provocative imagery</li>
                        <li>Platform-specific best practices</li>
                        <li>Tested color psychology</li>
                        <li>Optimized for FYP algorithm</li>
                    </ul>
                </div>
            `
        },
        instagram: {
            title: "Instagram Thumbnail Design",
            content: `
                <div class="service-details">
                    <h3>Scroll-Stopping Instagram Thumbnails</h3>
                    <p>We design cohesive thumbnails that maintain your aesthetic while driving higher engagement rates.</p>
                    
                    <h4>Services Include:</h4>
                    <ul>
                        <li>IGTV episode covers</li>
                        <li>Reels thumbnails</li>
                        <li>Carousel post covers</li>
                        <li>Story highlight icons</li>
                        <li>Branded templates</li>
                        <li>Feed layout mockups</li>
                    </ul>
                    
                    <h4>Our Instagram Approach:</h4>
                    <ul>
                        <li>Cohesive color palette</li>
                        <li>Consistent typography</li>
                        <li>Grid layout planning</li>
                        <li>Hashtag integration</li>
                        <li>CTA optimization</li>
                        <li>Profile aesthetic analysis</li>
                    </ul>
                </div>
            `
        },
        podcast: {
            title: "Podcast Thumbnail Design",
            content: `
                <div class="service-details">
                    <h3>Professional Podcast Artwork</h3>
                    <p>We create episode-specific thumbnails that communicate your content at a glance across all platforms.</p>
                    
                    <h4>Design Elements:</h4>
                    <ul>
                        <li>Legible text at small sizes</li>
                        <li>Guest photo integration</li>
                        <li>Episode number visibility</li>
                        <li>Brand consistency</li>
                        <li>Platform-specific variations</li>
                        <li>Seasonal themes</li>
                    </ul>
                    
                    <h4>Platform Optimization:</h4>
                    <ul>
                        <li>Spotify square format</li>
                        <li>Apple Podcasts requirements</li>
                        <li>YouTube podcast versions</li>
                        <li>Social media shareables</li>
                        <li>Website player compatibility</li>
                        <li>Mobile app display testing</li>
                    </ul>
                </div>
            `
        },
        course: {
            title: "Online Course Thumbnail Design",
            content: `
                <div class="service-details">
                    <h3>High-Converting Course Thumbnails</h3>
                    <p>We design thumbnails that communicate value and increase enrollment rates for your online courses.</p>
                    
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Clear value proposition</li>
                        <li>Professional yet approachable</li>
                        <li>Trust-building elements</li>
                        <li>Platform-specific optimization</li>
                        <li>Series consistency</li>
                        <li>Benefit-focused messaging</li>
                    </ul>
                    
                    <h4>Platform Specialization:</h4>
                    <ul>
                        <li>Udemy course images</li>
                        <li>Teachable lesson thumbnails</li>
                        <li>Kajabi product covers</li>
                        <li>Thinkific course artwork</li>
                        <li>Membership site graphics</li>
                        <li>Sales page headers</li>
                    </ul>
                </div>
            `
        },
        illustrations: {
            title: "Custom Illustrated Thumbnails",
            content: `
                <div class="service-details">
                    <h3>Unique Illustrated Thumbnails</h3>
                    <p>We create custom illustrated thumbnails that establish your brand identity and make your content instantly recognizable.</p>
                    
                    <h4>Illustration Styles:</h4>
                    <ul>
                        <li>Cartoon character designs</li>
                        <li>Minimalist vector art</li>
                        <li>Hand-drawn aesthetics</li>
                        <li>Isometric designs</li>
                        <li>3D rendered elements</li>
                        <li>Mixed media compositions</li>
                    </ul>
                    
                    <h4>Benefits of Illustrated Thumbnails:</h4>
                    <ul>
                        <li>Stand out from photo-based competitors</li>
                        <li>Establish unique brand identity</li>
                        <li>Consistent character representation</li>
                        <li>Flexible for various content types</li>
                        <li>Easily adaptable templates</li>
                        <li>Timeless appeal beyond trends</li>
                    </ul>
                </div>
            `
        },
        //Script Writing
        screenplays: {
            title: "Feature Film Screenplays",
            content: `
                <div class="service-details">
                    <h3>Compelling Feature-Length Scripts</h3>
                    <p>We craft professionally formatted screenplays that tell compelling stories with strong character arcs and cinematic potential.</p>
                    
                    <h4>Key Features:</h4>
                    <ul>
                        <li>90-120 page industry-standard scripts</li>
                        <li>Three-act structure development</li>
                        <li>Character bios and arcs</li>
                        <li>Dialogue polishing</li>
                        <li>Scene-by-scene breakdowns</li>
                        <li>Multiple revisions</li>
                    </ul>
                    
                    <h4>Our Process:</h4>
                    <ol>
                        <li>Initial consultation to understand your vision</li>
                        <li>Concept development and treatment</li>
                        <li>Outline and beat sheet creation</li>
                        <li>First draft delivery</li>
                        <li>Revision rounds based on feedback</li>
                        <li>Final polish and formatting</li>
                    </ol>
                </div>
            `
        },
        tv: {
            title: "Television Scripts",
            content: `
                <div class="service-details">
                    <h3>Episodic Television Writing</h3>
                    <p>We create binge-worthy TV scripts with compelling season arcs and memorable characters.</p>
                    
                    <h4>Services Include:</h4>
                    <ul>
                        <li>TV pilot scripts (30-60 pages)</li>
                        <li>Series bible development</li>
                        <li>Episode outlines</li>
                        <li>Showrunner services</li>
                        <li>Writer's room participation</li>
                        <li>Pitch deck creation</li>
                    </ul>
                    
                    <h4>Genres We Specialize In:</h4>
                    <ul>
                        <li>Drama</li>
                        <li>Comedy</li>
                        <li>Sci-Fi/Fantasy</li>
                        <li>Crime/Procedural</li>
                        <li>Animation</li>
                        <li>Reality TV formats</li>
                    </ul>
                </div>
            `
        },
        commercial: {
            title: "Commercial Script Writing",
            content: `
                <div class="service-details">
                    <h3>High-Impact Ad Scripts</h3>
                    <p>We write scripts for commercials that grab attention and drive conversions.</p>
                    
                    <h4>Formats We Write:</h4>
                    <ul>
                        <li>30-second TV spots</li>
                        <li>15-second digital ads</li>
                        <li>Radio commercials</li>
                        <li>Social media video scripts</li>
                        <li>Infomercials</li>
                        <li>Branded content</li>
                    </ul>
                    
                    <h4>Our Approach:</h4>
                    <ul>
                        <li>Strong hook in first 3 seconds</li>
                        <li>Clear value proposition</li>
                        <li>Emotional or humorous appeal</li>
                        <li>Strong call-to-action</li>
                        <li>Platform-specific optimization</li>
                        <li>A/B testing variations</li>
                    </ul>
                </div>
            `
        },
        corporate: {
            title: "Corporate Script Writing",
            content: `
                <div class="service-details">
                    <h3>Professional Business Scripts</h3>
                    <p>We create scripts that effectively communicate your corporate message with clarity and impact.</p>
                    
                    <h4>Script Types:</h4>
                    <ul>
                        <li>Training and educational videos</li>
                        <li>Product demonstration scripts</li>
                        <li>Company profile videos</li>
                        <li>Executive presentations</li>
                        <li>Investor pitch videos</li>
                        <li>Internal communications</li>
                    </ul>
                    
                    <h4>Why Choose Us?</h4>
                    <ul>
                        <li>Understand corporate tone and branding</li>
                        <li>Simplify complex information</li>
                        <li>Professional yet approachable style</li>
                        <li>SEO-optimized when needed</li>
                        <li>Quick turnaround times</li>
                        <li>Confidentiality guaranteed</li>
                    </ul>
                </div>
            `
        },
        web: {
            title: "Web Series Scripts",
            content: `
                <div class="service-details">
                    <h3>Digital-First Series Writing</h3>
                    <p>We craft scripts specifically designed for online platforms with binge-worthy episodic content.</p>
                    
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Short-form episodic structure (5-15 min episodes)</li>
                        <li>Strong hooks to keep viewers watching</li>
                        <li>Optimized for mobile viewing</li>
                        <li>Interactive storytelling elements</li>
                        <li>Social media integration</li>
                        <li>Season arc planning</li>
                    </ul>
                    
                    <h4>Platform Specialization:</h4>
                    <ul>
                        <li>YouTube Originals</li>
                        <li>Instagram/TikTok series</li>
                        <li>Facebook Watch</li>
                        <li>Streaming platform shorts</li>
                        <li>Branded content series</li>
                        <li>Crowdfunded projects</li>
                    </ul>
                </div>
            `
        },
        games: {
            title: "Video Game Script Writing",
            content: `
                <div class="service-details">
                    <h3>Immersive Game Narratives</h3>
                    <p>We create interactive stories and dialogue that bring video game worlds to life.</p>
                    
                    <h4>Game Writing Services:</h4>
                    <ul>
                        <li>Main storyline development</li>
                        <li>Branching dialogue trees</li>
                        <li>Character backstories and arcs</li>
                        <li>World-building and lore</li>
                        <li>Quest and mission writing</li>
                        <li>Cutscene scripting</li>
                    </ul>
                    
                    <h4>Game Genres We Work With:</h4>
                    <ul>
                        <li>RPGs</li>
                        <li>Adventure games</li>
                        <li>Visual novels</li>
                        <li>Action games</li>
                        <li>MMORPGs</li>
                        <li>Mobile games</li>
                    </ul>
                </div>
            `
        },
        //logo
        branding: {
            title: "Complete Brand Identity",
            content: `
                <div class="service-details">
                    <h3>Comprehensive Branding Package</h3>
                    <p>We create complete brand identities that communicate your values and differentiate you in the market.</p>
                    
                    <h4>Package Includes:</h4>
                    <ul>
                        <li>Primary logo design</li>
                        <li>Alternative logo versions</li>
                        <li>Custom color palette</li>
                        <li>Typography system</li>
                        <li>Brand pattern/textures</li>
                        <li>Comprehensive brand guidelines</li>
                    </ul>
                    
                    <h4>File Deliverables:</h4>
                    <ul>
                        <li>Vector files (AI, EPS, PDF)</li>
                        <li>Transparent PNG files</li>
                        <li>Print-ready files</li>
                        <li>Social media kit</li>
                        <li>Favicon package</li>
                        <li>Brand guidelines PDF</li>
                    </ul>
                </div>
            `
        },
        minimalist: {
            title: "Minimalist Logo Design",
            content: `
                <div class="service-details">
                    <h3>Clean, Simple Logo Designs</h3>
                    <p>We create minimalist logos that communicate your brand essence with elegance and clarity.</p>
                    
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Simplified visual elements</li>
                        <li>Strategic negative space</li>
                        <li>Modern typography</li>
                        <li>Limited color palette</li>
                        <li>Scalable designs</li>
                        <li>Timeless appeal</li>
                    </ul>
                    
                    <h4>Best For:</h4>
                    <ul>
                        <li>Tech startups</li>
                        <li>Professional services</li>
                        <li>Luxury brands</li>
                        <li>Modern lifestyle brands</li>
                        <li>Architecture/design firms</li>
                        <li>Minimalist aesthetics</li>
                    </ul>
                </div>
            `
        },
        mascot: {
            title: "Mascot Logo Design",
            content: `
                <div class="service-details">
                    <h3>Custom Character Mascots</h3>
                    <p>We design memorable mascots that personify your brand and create emotional connections.</p>
                    
                    <h4>Our Process:</h4>
                    <ol>
                        <li>Character concept development</li>
                        <li>Personality traits definition</li>
                        <li>Initial sketch concepts</li>
                        <li>Color palette exploration</li>
                        <li>Final vector illustration</li>
                        <li>Alternative expressions/poses</li>
                    </ol>
                    
                    <h4>Style Options:</h4>
                    <ul>
                        <li>Cartoonish and playful</li>
                        <li>Realistic and detailed</li>
                        <li>Geometric and modern</li>
                        <li>Vintage and retro</li>
                        <li>Hand-drawn aesthetic</li>
                        <li>3D rendered characters</li>
                    </ul>
                </div>
            `
        },
        typography: {
            title: "Typography Logo Design",
            content: `
                <div class="service-details">
                    <h3>Custom Lettering & Wordmarks</h3>
                    <p>We craft unique typographic logos that make your name the star of your brand identity.</p>
                    
                    <h4>Typography Styles:</h4>
                    <ul>
                        <li>Hand-lettered scripts</li>
                        <li>Custom sans-serif fonts</li>
                        <li>Serif sophistication</li>
                        <li>Geometric typefaces</li>
                        <li>Vintage-inspired lettering</li>
                        <li>Modern calligraphy</li>
                    </ul>
                    
                    <h4>Special Techniques:</h4>
                    <ul>
                        <li>Letterform customization</li>
                        <li>Creative ligatures</li>
                        <li>Negative space integration</li>
                        <li>Letter stacking options</li>
                        <li>Monogram development</li>
                        <li>Responsive typography systems</li>
                    </ul>
                </div>
            `
        },
        "3d": {
            title: "3D Logo Design",
            content: `
                <div class="service-details">
                    <h3>Dimensional 3D Logos</h3>
                    <p>We create logos with depth and realism for a modern, high-tech appearance.</p>
                    
                    <h4>3D Techniques:</h4>
                    <ul>
                        <li>Extruded typography</li>
                        <li>Isometric designs</li>
                        <li>Realistic materials/textures</li>
                        <li>Lighting and shadows</li>
                        <li>Perspective effects</li>
                        <li>Animated versions available</li>
                    </ul>
                    
                    <h4>Applications:</h4>
                    <ul>
                        <li>Gaming companies</li>
                        <li>Tech startups</li>
                        <li>Architecture firms</li>
                        <li>Product packaging</li>
                        <li>Event branding</li>
                        <li>Digital platforms</li>
                    </ul>
                </div>
            `
        },
        redesign: {
            title: "Logo Redesign Service",
            content: `
                <div class="service-details">
                    <h3>Logo Modernization</h3>
                    <p>We refresh outdated logos while maintaining brand recognition and equity.</p>
                    
                    <h4>Redesign Process:</h4>
                    <ol>
                        <li>Current logo audit</li>
                        <li>Competitive analysis</li>
                        <li>Brand positioning review</li>
                        <li>Modernization concepts</li>
                        <li>Gradual evolution options</li>
                        <li>Complete redesign options</li>
                    </ol>
                    
                    <h4>Redesign Benefits:</h4>
                    <ul>
                        <li>Maintain brand recognition</li>
                        <li>Appeal to new audiences</li>
                        <li>Improve versatility</li>
                        <li>Enhance professionalism</li>
                        <li>Optimize for digital use</li>
                        <li>Future-proof your brand</li>
                    </ul>
                </div>
            `
        }
    };

    // Modal functionality
    const modalOverlay = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

    // Open modal with service details
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const service = this.getAttribute('data-service');
            const serviceData = servicesData[service];

            if (serviceData) {
                modalTitle.textContent = serviceData.title;
                modalBody.innerHTML = serviceData.content;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', function () {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside content
    modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Animate elements when they come into view
    const animateElements = document.querySelectorAll('.service-card, .section-title, .portfolio-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });
});