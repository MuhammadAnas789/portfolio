const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Anas",
  url: "https://manas-engineer.vercel.app",
  email: "manas2k00@gmail.com",
  jobTitle: "Software Engineer",
  description:
    "Software Engineer specializing in Laravel, Next.js, Vue.js, and TypeScript",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://linkedin.com/in/muhammadanas2k00",
    "https://github.com/MuhammadAnas789",
  ],
  knowsAbout: [
    "Laravel",
    "Next.js",
    "Vue.js",
    "PHP",
    "TypeScript",
    "JavaScript",
    "MySQL",
    "Redis",
    "Docker",
    "REST APIs",
    "WebSockets",
    "Full Stack Development",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Namal University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mianwali",
      addressCountry: "PK",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Anas — Software Engineer",
  url: "https://manas-engineer.vercel.app",
  author: {
    "@type": "Person",
    name: "Muhammad Anas",
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Muhammad Anas",
    jobTitle: "Software Engineer",
    url: "https://manas-engineer.vercel.app",
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema, profilePageSchema]),
      }}
    />
  );
}
