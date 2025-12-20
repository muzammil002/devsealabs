import { Building2, HeartPulse, GraduationCap, ShoppingCart, Plane, Landmark, Factory, Truck, Rocket, Sprout, Dumbbell, Pickaxe, Leaf, Film, Users, Briefcase, LucideIcon } from 'lucide-react';

export interface ProjectType {
  title: string;
  purpose: string;
  keyFeatures: string[];
  businessValue: string[];
}

export interface Industry {
  id: string;
  icon: LucideIcon;
  name: string;
  shortDescription: string;
  fullDescription: string;
  overview: string;
  services: string[];
  technologies: string[];
  benefits: string[];
  projectTypes?: ProjectType[];
  caseStudy?: {
    title: string;
    description: string;
    results: { metric: string; label: string }[];
  };
}

export const industries: Industry[] = [
  {
    id: 'finance-banking-insurance',
    icon: Landmark,
    name: 'Finance, Banking & Insurance',
    shortDescription: 'Digital banking platforms, payment systems, lending solutions, and blockchain applications for financial services.',
    fullDescription: 'devsealabs is a reliable partner for financial services companies of all sizes, from startups to established banks. We assist them in embracing cutting-edge technologies, meeting evolving customer expectations, and navigating regulatory changes across various regions.',
    overview: 'Our extensive expertise includes payments, open banking, digital banking platforms, mobile banking apps, lending systems, blockchain applications, investment and trading solutions, and more. We understand the critical importance of security, compliance, and reliability in the financial sector.',
    services: [
      'Digital Banking Platforms',
      'Payment Processing Systems',
      'Mobile Banking Applications',
      'Lending & Credit Solutions',
      'Blockchain & Cryptocurrency',
      'Investment & Trading Platforms',
      'Risk Management Systems',
      'Regulatory Compliance Solutions',
      'Open Banking Integration',
      'Fraud Detection & Prevention'
    ],
    technologies: ['Java', '.NET', 'Python', 'React', 'Node.js', 'AWS', 'Azure', 'Blockchain', 'Kubernetes', 'PostgreSQL'],
    benefits: [
      'Enhanced security and compliance',
      'Improved customer experience',
      'Reduced operational costs',
      'Faster time to market',
      'Scalable infrastructure',
      'Real-time transaction processing'
    ],
    projectTypes: [
      {
        title: 'Digital Banking Platforms',
        purpose: 'To provide comprehensive online and mobile banking experiences that enable customers to manage accounts, transfer funds, pay bills, and access financial services 24/7.',
        keyFeatures: [
          'Multi-channel banking (web, mobile, tablet)',
          'Real-time account balance and transaction history',
          'Bill payment and money transfer capabilities',
          'Biometric authentication and multi-factor security',
          'Personal financial management tools',
          'Integration with payment gateways and third-party services'
        ],
        businessValue: [
          'Reduces operational costs by automating routine transactions',
          'Improves customer satisfaction with convenient access',
          'Increases customer retention and engagement',
          'Enables data-driven insights into customer behavior'
        ]
      },
      {
        title: 'Payment Processing Systems',
        purpose: 'To facilitate secure, fast, and reliable payment transactions across multiple channels and payment methods.',
        keyFeatures: [
          'Support for credit cards, debit cards, ACH, wire transfers',
          'PCI-DSS compliant payment processing',
          'Real-time fraud detection and prevention',
          'Payment gateway integration',
          'Transaction reconciliation and reporting',
          'Multi-currency support for international payments'
        ],
        businessValue: [
          'Increases transaction processing speed and efficiency',
          'Reduces fraud-related losses',
          'Improves cash flow management',
          'Enhances customer trust and satisfaction'
        ]
      },
      {
        title: 'Lending & Credit Solutions',
        purpose: 'To automate and streamline the loan origination, underwriting, and servicing processes while ensuring regulatory compliance.',
        keyFeatures: [
          'Automated loan application processing',
          'Credit scoring and risk assessment algorithms',
          'Document management and e-signature integration',
          'Loan servicing and payment tracking',
          'Regulatory compliance and reporting',
          'Customer portal for loan management'
        ],
        businessValue: [
          'Accelerates loan approval times',
          'Reduces manual processing costs',
          'Improves risk assessment accuracy',
          'Enhances customer experience throughout the loan lifecycle'
        ]
      },
      {
        title: 'Investment & Trading Platforms',
        purpose: 'To provide sophisticated platforms for investment management, trading, portfolio analysis, and market data visualization.',
        keyFeatures: [
          'Real-time market data and analytics',
          'Portfolio management and tracking',
          'Automated trading algorithms',
          'Risk analysis and reporting tools',
          'Compliance monitoring and reporting',
          'Mobile trading applications'
        ],
        businessValue: [
          'Enables faster trade execution',
          'Provides comprehensive portfolio insights',
          'Reduces operational risks through automation',
          'Increases client engagement and retention'
        ]
      },
      {
        title: 'Regulatory Compliance Solutions',
        purpose: 'To help financial institutions maintain compliance with evolving regulations such as KYC, AML, GDPR, and SOX.',
        keyFeatures: [
          'Automated compliance monitoring and reporting',
          'KYC/AML screening and verification',
          'Transaction monitoring and alerting',
          'Regulatory reporting automation',
          'Audit trail and documentation management',
          'Integration with regulatory databases'
        ],
        businessValue: [
          'Reduces compliance-related penalties and risks',
          'Streamlines audit processes',
          'Ensures timely regulatory reporting',
          'Protects institutional reputation'
        ]
      }
    ]
  },
  {
    id: 'ecommerce-retail-consumer',
    icon: ShoppingCart,
    name: 'E-Commerce, Retail & Consumer Goods',
    shortDescription: 'Custom and platform-based eCommerce solutions designed to reduce operational costs and increase revenue.',
    fullDescription: 'devsealabs provides cutting-edge eCommerce solutions tailored for both online and offline retail businesses. Our team develops custom and platform-based software designed to reduce operational costs by improving efficiency and transparency within the digital ecosystem.',
    overview: 'Leveraging over 17 years of experience in digital shelf analytics and a deep understanding of the needs of merchants and buyers, we ensure higher conversion rates and increased revenue. We help businesses create seamless shopping experiences across all channels.',
    services: [
      'Custom eCommerce Development',
      'Platform Integration (Shopify, Magento, WooCommerce)',
      'Mobile Commerce Solutions',
      'Inventory Management Systems',
      'Order Fulfillment Automation',
      'Customer Relationship Management',
      'Analytics & Business Intelligence',
      'Payment Gateway Integration',
      'Multi-vendor Marketplace',
      'Personalization & Recommendation Engines'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PHP', 'Python', 'Shopify', 'Magento', 'WooCommerce', 'AWS', 'MongoDB'],
    benefits: [
      'Higher conversion rates',
      'Improved customer satisfaction',
      'Reduced operational costs',
      'Better inventory management',
      'Multi-channel integration',
      'Data-driven insights'
    ],
    projectTypes: [
      {
        title: 'Custom eCommerce Platforms',
        purpose: 'To build scalable, feature-rich online stores tailored to specific business needs with seamless shopping experiences.',
        keyFeatures: [
          'Product catalog management with advanced filtering',
          'Shopping cart and checkout optimization',
          'Payment gateway integration (Stripe, PayPal, etc.)',
          'Order management and tracking',
          'Customer account management',
          'Multi-language and multi-currency support'
        ],
        businessValue: [
          'Increases online sales and revenue',
          'Improves customer shopping experience',
          'Reduces cart abandonment rates',
          'Enables global market expansion'
        ]
      },
      {
        title: 'Multi-Vendor Marketplace Platforms',
        purpose: 'To create platforms where multiple sellers can list and sell products, similar to Amazon or eBay.',
        keyFeatures: [
          'Vendor registration and management',
          'Commission and payment management',
          'Product listing and inventory management',
          'Order routing and fulfillment',
          'Rating and review system',
          'Admin dashboard for marketplace control'
        ],
        businessValue: [
          'Creates new revenue streams through commissions',
          'Expands product catalog without inventory investment',
          'Increases platform value and user engagement',
          'Enables rapid marketplace growth'
        ]
      },
      {
        title: 'Inventory Management Systems',
        purpose: 'To optimize inventory levels, reduce stockouts, and automate inventory tracking across multiple channels.',
        keyFeatures: [
          'Real-time inventory tracking',
          'Multi-warehouse management',
          'Automated reorder points and alerts',
          'Barcode scanning and RFID integration',
          'Inventory forecasting and analytics',
          'Integration with eCommerce and POS systems'
        ],
        businessValue: [
          'Reduces inventory carrying costs',
          'Prevents stockouts and overstock situations',
          'Improves order fulfillment accuracy',
          'Provides data-driven inventory decisions'
        ]
      },
      {
        title: 'Personalization & Recommendation Engines',
        purpose: 'To deliver personalized shopping experiences and product recommendations that increase conversion rates.',
        keyFeatures: [
          'AI-powered product recommendations',
          'Personalized homepage and category pages',
          'Behavioral tracking and analysis',
          'Dynamic pricing and promotions',
          'Customer segmentation',
          'A/B testing and optimization tools'
        ],
        businessValue: [
          'Increases average order value',
          'Improves customer engagement and retention',
          'Boosts conversion rates',
          'Enhances customer satisfaction'
        ]
      }
    ]
  },
  {
    id: 'healthcare-life-sciences',
    icon: HeartPulse,
    name: 'Healthcare, Life Sciences & Pharmaceutical',
    shortDescription: 'HIPAA-compliant healthcare software, EHR/EMR systems, telehealth platforms, and AI-driven health solutions.',
    fullDescription: 'devsealabs develops customized healthcare software solutions that adhere to industry regulations such as MDR, GDPR, and HIPAA, with a strong focus on data security.',
    overview: 'Leveraging our expertise and experience, we create scalable, adaptable solutions that integrate seamlessly with existing healthcare systems. Our offerings include EHR/EMR systems, telehealth platforms, HL7/FHIR integrations, health consulting, AI-driven solutions, IMS platforms, and technologies for wearable devices, among others.',
    services: [
      'EHR/EMR Systems',
      'Telehealth Platforms',
      'HL7/FHIR Integration',
      'Medical Device Software',
      'Pharmacy Management Systems',
      'Laboratory Information Systems',
      'Patient Portal Development',
      'Healthcare Analytics',
      'Wearable Device Integration',
      'Clinical Trial Management'
    ],
    technologies: ['Java', '.NET', 'Python', 'React', 'Angular', 'HL7', 'FHIR', 'AWS', 'Azure', 'HIPAA Compliance'],
    benefits: [
      'HIPAA/GDPR compliance',
      'Improved patient care',
      'Streamlined workflows',
      'Better data interoperability',
      'Enhanced security',
      'Reduced administrative burden'
    ],
    projectTypes: [
      {
        title: 'Electronic Health Records (EHR/EMR) Systems',
        purpose: 'To digitize and centralize patient health information, enabling healthcare providers to access comprehensive patient data efficiently.',
        keyFeatures: [
          'Patient demographics and medical history',
          'Clinical documentation and charting',
          'Prescription management and e-prescribing',
          'Lab results integration and viewing',
          'Appointment scheduling and reminders',
          'HIPAA-compliant data security'
        ],
        businessValue: [
          'Improves patient care coordination',
          'Reduces medical errors',
          'Streamlines clinical workflows',
          'Ensures regulatory compliance'
        ]
      },
      {
        title: 'Telehealth Platforms',
        purpose: 'To enable remote patient consultations, virtual care delivery, and telemedicine services.',
        keyFeatures: [
          'Video consultation capabilities',
          'Secure messaging and file sharing',
          'Appointment scheduling and reminders',
          'Prescription management',
          'Integration with EHR systems',
          'HIPAA-compliant video conferencing'
        ],
        businessValue: [
          'Expands patient access to care',
          'Reduces healthcare facility costs',
          'Improves patient convenience',
          'Enables remote patient monitoring'
        ]
      },
      {
        title: 'Patient Portal Solutions',
        purpose: 'To empower patients with secure access to their health information and communication tools.',
        keyFeatures: [
          'Patient registration and authentication',
          'Medical records viewing and download',
          'Appointment scheduling and management',
          'Secure messaging with providers',
          'Prescription refill requests',
          'Bill payment and insurance information'
        ],
        businessValue: [
          'Improves patient engagement',
          'Reduces administrative workload',
          'Enhances patient satisfaction',
          'Increases operational efficiency'
        ]
      },
      {
        title: 'Healthcare Analytics Platforms',
        purpose: 'To provide data-driven insights for population health management, clinical outcomes, and operational efficiency.',
        keyFeatures: [
          'Clinical data analytics and reporting',
          'Population health dashboards',
          'Predictive analytics for risk assessment',
          'Quality metrics and performance tracking',
          'Cost analysis and resource optimization',
          'Integration with multiple data sources'
        ],
        businessValue: [
          'Improves clinical outcomes',
          'Reduces healthcare costs',
          'Enables evidence-based decision making',
          'Supports value-based care initiatives'
        ]
      }
    ]
  },
  {
    id: 'manufacturing',
    icon: Factory,
    name: 'Manufacturing',
    shortDescription: 'MES solutions that enhance manufacturing processes with real-time visibility and automated data collection.',
    fullDescription: 'devsealabs creates MES solutions that enhance manufacturing processes and integrate smoothly with existing ERP and PLC systems.',
    overview: 'Our solutions offer real-time visibility and control through automated data collection from equipment, leading to improved quality control, full product traceability, optimized production planning, and efficient resource management.',
    services: [
      'Manufacturing Execution Systems (MES)',
      'Production Planning & Scheduling',
      'Quality Management Systems',
      'Supply Chain Integration',
      'IoT & Sensor Integration',
      'Predictive Maintenance',
      'Real-time Monitoring',
      'Inventory Optimization',
      'Equipment Management',
      'Data Analytics & Reporting'
    ],
    technologies: ['Java', '.NET', 'Python', 'IoT', 'PLC Integration', 'SCADA', 'SQL Server', 'Azure', 'AWS', 'Kubernetes'],
    benefits: [
      'Improved production efficiency',
      'Reduced downtime',
      'Better quality control',
      'Cost optimization',
      'Real-time visibility',
      'Enhanced traceability'
    ]
  },
  {
    id: 'erp',
    icon: Briefcase,
    name: 'Enterprise Resource Planning (ERP)',
    shortDescription: 'ERP implementation, integration, and optimization for SAP, Salesforce, MS Dynamics 365, and Odoo.',
    fullDescription: 'With expertise in ERP platforms such as SAP, Salesforce, MS Dynamics 365, and Odoo, devsealabs offers a comprehensive range of services, including ERP implementation, integration, support, consulting, and development.',
    overview: 'Our team also optimizes business processes for both SMEs and large enterprises with tailored ERP, CRM, HRM, and more, ensuring smooth integration and maximizing ROI.',
    services: [
      'SAP Implementation & Support',
      'MS Dynamics 365 Development',
      'Salesforce Customization',
      'Odoo Development',
      'ERP Integration Services',
      'Business Process Optimization',
      'Custom Module Development',
      'Data Migration',
      'ERP Consulting',
      'Training & Support'
    ],
    technologies: ['SAP', 'MS Dynamics 365', 'Salesforce', 'Odoo', 'ABAP', 'C#', '.NET', 'Python', 'SQL Server', 'Oracle'],
    benefits: [
      'Streamlined operations',
      'Improved data accuracy',
      'Better decision-making',
      'Reduced costs',
      'Enhanced collaboration',
      'Scalable solutions'
    ]
  },
  {
    id: 'logistics-supply-chain',
    icon: Truck,
    name: 'Logistics, Supply Chain & Transportation',
    shortDescription: 'Custom solutions for streamlined supply chain management, automated logistics, and real-time tracking.',
    fullDescription: 'devsealabs specializes in creating custom solutions for streamlined supply chain management, automated logistics, optimized order fulfillment, and data-driven insights.',
    overview: 'Our expertise includes ERP software, warehouse and transportation management systems, real-time tracking, and more, enabling clients to enhance efficiency, improve customer satisfaction, and reduce costs.',
    services: [
      'Warehouse Management Systems (WMS)',
      'Transportation Management Systems (TMS)',
      'Route Optimization',
      'Fleet Management',
      'Real-time Tracking & Visibility',
      'Inventory Management',
      'Order Fulfillment Automation',
      'Supply Chain Analytics',
      'Last-mile Delivery Solutions',
      'Integration with Carriers'
    ],
    technologies: ['Java', '.NET', 'Python', 'React', 'Node.js', 'IoT', 'GPS Integration', 'AWS', 'Azure', 'PostgreSQL'],
    benefits: [
      'Improved efficiency',
      'Reduced transportation costs',
      'Better inventory management',
      'Enhanced visibility',
      'Faster delivery times',
      'Customer satisfaction'
    ]
  },
  {
    id: 'education',
    icon: GraduationCap,
    name: 'Education',
    shortDescription: 'Custom Learning Management Systems (LMS), LCMS, LXP, and AI-powered eLearning solutions.',
    fullDescription: 'devsealabs equips EdTech companies, educational institutions, and enterprises with intuitive eLearning solutions designed for interactive learning and powered by AI.',
    overview: 'Our expertise includes developing custom Learning Management Systems (LMS), Learning Content Management Systems (LCMS), Learning Experience Platforms (LXP), and more, all aimed at boosting learning efficiency and minimizing costs.',
    services: [
      'Learning Management Systems (LMS)',
      'Learning Content Management (LCMS)',
      'Learning Experience Platforms (LXP)',
      'Student Information Systems',
      'Virtual Classroom Solutions',
      'Assessment & Testing Platforms',
      'Gamification & Engagement',
      'Mobile Learning Apps',
      'AI-Powered Personalization',
      'Analytics & Reporting'
    ],
    technologies: ['React', 'Angular', 'Node.js', 'Python', 'MongoDB', 'AWS', 'Azure', 'AI/ML', 'WebRTC', 'LTI Integration'],
    benefits: [
      'Enhanced learning outcomes',
      'Improved engagement',
      'Scalable solutions',
      'Cost-effective delivery',
      'Personalized learning',
      'Better analytics'
    ]
  },
  {
    id: 'aerospace-defense',
    icon: Rocket,
    name: 'Aerospace & Defense',
    shortDescription: 'Advanced avionics systems, military-grade cybersecurity, and high-stakes engineering solutions.',
    fullDescription: 'The Aerospace & Defense industry is one of the most complex and technologically demanding sectors in the world. From advanced avionics systems to military-grade cybersecurity protocols, this sector requires unwavering precision, rapid innovation, and an uncompromising commitment to safety and compliance.',
    overview: 'Operating in this environment means working within rigorous timelines, global supply chains, and high-stakes engineering ecosystems where the margin for error is virtually zero.',
    services: [
      'Avionics Software Development',
      'Flight Management Systems',
      'Mission Planning Systems',
      'Cybersecurity Solutions',
      'Simulation & Training Systems',
      'Data Analytics & Intelligence',
      'System Integration',
      'Compliance & Certification',
      'Legacy System Modernization',
      'Real-time Monitoring Systems'
    ],
    technologies: ['C++', 'Java', 'Ada', 'Python', 'Real-time Systems', 'DO-178C', 'Cybersecurity', 'AWS GovCloud', 'Kubernetes', 'PostgreSQL'],
    benefits: [
      'Enhanced safety',
      'Regulatory compliance',
      'Improved efficiency',
      'Cost optimization',
      'Advanced capabilities',
      'Secure systems'
    ]
  },
  {
    id: 'agriculture-agritech',
    icon: Sprout,
    name: 'Agriculture & Agritech',
    shortDescription: 'Intelligent, data-driven agricultural systems for scalable, smart, and sustainable solutions.',
    fullDescription: 'The agricultural landscape is undergoing a monumental shift. From traditional practices rooted in centuries-old techniques to intelligent, data-driven systems, the agriculture and agritech industry is embracing digital transformation at an accelerating pace.',
    overview: 'As global challenges like climate change, food insecurity, and labor shortages intensify, the need for scalable, smart, and sustainable agricultural solutions has never been greater.',
    services: [
      'Farm Management Systems',
      'Precision Agriculture Solutions',
      'IoT Sensor Integration',
      'Crop Monitoring & Analytics',
      'Livestock Management',
      'Supply Chain Optimization',
      'Weather & Climate Analytics',
      'Marketplace Platforms',
      'Mobile Applications',
      'Data Analytics & AI'
    ],
    technologies: ['Python', 'React', 'Node.js', 'IoT', 'Machine Learning', 'AWS', 'Azure', 'PostgreSQL', 'MongoDB', 'Docker'],
    benefits: [
      'Increased yield',
      'Reduced waste',
      'Cost optimization',
      'Sustainable practices',
      'Better decision-making',
      'Improved efficiency'
    ]
  },
  {
    id: 'sports-fitness-recreation',
    icon: Dumbbell,
    name: 'Sports, Fitness & Recreation',
    shortDescription: 'Personalized training apps, virtual coaching, real-time performance tracking, and event management.',
    fullDescription: 'The sports, fitness, and recreation industry is experiencing a transformative era driven by technology and digital engagement.',
    overview: 'From personalized training apps and virtual coaching to real-time performance tracking and online event management, this sector has embraced innovation to reach broader audiences, enhance user experiences, and streamline operations.',
    services: [
      'Fitness & Training Apps',
      'Wearable Device Integration',
      'Performance Analytics',
      'Event Management Systems',
      'Virtual Coaching Platforms',
      'Social Fitness Networks',
      'Nutrition Tracking',
      'Gym Management Systems',
      'Sports Analytics',
      'Live Streaming Solutions'
    ],
    technologies: ['React Native', 'Flutter', 'Node.js', 'Python', 'AWS', 'WebRTC', 'IoT', 'Machine Learning', 'MongoDB', 'Redis'],
    benefits: [
      'Enhanced user engagement',
      'Better performance tracking',
      'Improved user experience',
      'Scalable platforms',
      'Data-driven insights',
      'Community building'
    ]
  },
  {
    id: 'mining-oil-gas',
    icon: Pickaxe,
    name: 'Mining, Oil & Gas',
    shortDescription: 'Digital transformation solutions for legacy systems, safety protocols, and supply chain optimization.',
    fullDescription: 'The Mining, Oil & Gas sector is the backbone of the global economy, providing the critical resources needed to fuel industries, power cities, and manufacture goods.',
    overview: 'However, despite its magnitude, the sector has traditionally lagged in digital transformation. Legacy systems, safety concerns, supply chain complexities, and environmental regulations have posed significant barriers to technological evolution.',
    services: [
      'Asset Management Systems',
      'Safety & Compliance Solutions',
      'Predictive Maintenance',
      'Supply Chain Optimization',
      'Real-time Monitoring',
      'Data Analytics & Reporting',
      'Legacy System Modernization',
      'IoT Integration',
      'Environmental Monitoring',
      'Workforce Management'
    ],
    technologies: ['Java', '.NET', 'Python', 'IoT', 'SCADA', 'AWS', 'Azure', 'SQL Server', 'Kubernetes', 'Docker'],
    benefits: [
      'Improved safety',
      'Cost reduction',
      'Better compliance',
      'Enhanced efficiency',
      'Predictive insights',
      'Optimized operations'
    ]
  },
  {
    id: 'environmental-sustainability',
    icon: Leaf,
    name: 'Environmental & Sustainability',
    shortDescription: 'Solutions for environmental responsibility, carbon footprint reduction, and circular economy principles.',
    fullDescription: 'The urgency for environmental responsibility and sustainable development is no longer a corporate afterthought—it\'s a global imperative.',
    overview: 'Organizations across the world are realigning their business strategies to meet stricter environmental regulations, reduce carbon footprints, and implement circular economy principles. The Environmental & Sustainability sector has emerged as one of the most critical areas for innovation, technology, and collaboration.',
    services: [
      'Carbon Footprint Tracking',
      'Sustainability Reporting',
      'Energy Management Systems',
      'Waste Management Solutions',
      'Environmental Monitoring',
      'ESG Compliance Platforms',
      'Renewable Energy Solutions',
      'Supply Chain Sustainability',
      'Data Analytics & Reporting',
      'IoT Environmental Sensors'
    ],
    technologies: ['Python', 'React', 'Node.js', 'IoT', 'Machine Learning', 'AWS', 'Azure', 'PostgreSQL', 'MongoDB', 'Blockchain'],
    benefits: [
      'Regulatory compliance',
      'Cost savings',
      'Improved reputation',
      'Data-driven decisions',
      'Sustainability goals',
      'Transparency'
    ]
  },
  {
    id: 'construction-real-estate',
    icon: Building2,
    name: 'Construction & Real Estate',
    shortDescription: 'Smart city solutions, project management systems, and PropTech platforms for modern real estate.',
    fullDescription: 'In a world where skylines are constantly evolving and smart cities are no longer a vision but a reality, the construction and real estate development industry stands as one of the cornerstones of modern society.',
    overview: 'Yet despite its critical importance, the sector often struggles with outdated systems, disjointed communication, lack of transparency, budget overruns, and project delays.',
    services: [
      'Project Management Systems',
      'Building Information Modeling (BIM)',
      'Property Management Platforms',
      'Real Estate Marketplaces',
      'Smart Building Solutions',
      'Construction Analytics',
      'Document Management',
      'IoT Integration',
      'Virtual & Augmented Reality',
      'Financial Management Systems'
    ],
    technologies: ['React', 'Angular', '.NET', 'Python', 'BIM', 'IoT', 'AWS', 'Azure', 'PostgreSQL', 'MongoDB'],
    benefits: [
      'Improved project visibility',
      'Reduced delays',
      'Cost control',
      'Better collaboration',
      'Enhanced efficiency',
      'Data-driven decisions'
    ]
  },
  {
    id: 'media-entertainment-publishing',
    icon: Film,
    name: 'Media, Entertainment & Publishing',
    shortDescription: 'Digital-first content platforms, streaming solutions, and collaborative publishing systems.',
    fullDescription: 'In an era where digital content reigns supreme, the Media, Entertainment & Publishing industry is undergoing a seismic transformation.',
    overview: 'Traditional workflows are giving way to digital-first strategies, content creation is more collaborative and data-driven, and audience engagement now depends heavily on technology platforms. As streaming, digital publishing, and personalized media consumption explode across the globe, the need for custom-built digital platforms has never been more urgent.',
    services: [
      'Content Management Systems',
      'Streaming Platforms',
      'Video Processing & Delivery',
      'Digital Publishing Solutions',
      'Content Distribution Networks',
      'Analytics & Personalization',
      'User Engagement Platforms',
      'Rights Management',
      'Live Streaming Solutions',
      'Mobile Applications'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Azure', 'CDN', 'WebRTC', 'MongoDB', 'Redis'],
    benefits: [
      'Enhanced user experience',
      'Scalable platforms',
      'Better content delivery',
      'Data-driven insights',
      'Cost optimization',
      'Global reach'
    ]
  },
  {
    id: 'nonprofit-ngo',
    icon: Users,
    name: 'Non-Profit & NGO',
    shortDescription: 'Transparency, efficiency, and impact measurement solutions for social impact organizations.',
    fullDescription: 'In a world grappling with socio-economic disparities, climate crises, humanitarian challenges, and healthcare emergencies, non-profit organizations and NGOs stand at the frontline of change.',
    overview: 'They work tirelessly to deliver social value, uplift communities, and advocate for human rights. However, as missions scale and stakeholder expectations evolve, these organizations face increasing demands for transparency, efficiency, and impact measurement.',
    services: [
      'Donor Management Systems',
      'Fundraising Platforms',
      'Volunteer Management',
      'Impact Measurement Tools',
      'Grant Management Systems',
      'Program Management',
      'Financial Management',
      'Communication Platforms',
      'Mobile Applications',
      'Analytics & Reporting'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Salesforce', 'AWS', 'Azure', 'PostgreSQL', 'MongoDB', 'Stripe', 'PayPal'],
    benefits: [
      'Improved efficiency',
      'Better transparency',
      'Enhanced impact measurement',
      'Cost reduction',
      'Better donor engagement',
      'Scalable operations'
    ]
  }
];

export const getIndustryById = (id: string): Industry | undefined => {
  return industries.find(industry => industry.id === id);
};

export const getIndustrySlug = (name: string): string => {
  return name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

