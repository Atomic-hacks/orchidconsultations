export interface TeamMember { name: string; fullName: string; role: string; fullRole?: string; image: string; bio: string; linkedin: string }

export const staff = [
  {
    "name": "Victoria Ajayi",
    "fullName": "Victoria Ajayi",
    "role": "Social Media Manager",
    "image": "https://ik.imagekit.io/shiga/orchid/AJAYE8.jpg?updatedAt=1761094336871",
    "bio": "She manages our social media presence, creating engaging content and helping the brand connect with people across multiple platforms.",
    "linkedin": "#"
  },
  {
    "name": "Martin Nwosu",
    "fullName": "Martin Nwosu",
    "role": "IT Personnel",
    "image": "https://ik.imagekit.io/shiga/orchid/WhatsApp%20Image%202026-02-04%20at%2009.57.00.jpeg",
    "bio": "He keeps our systems running smoothly, providing technical support and ensuring our digital tools work efficiently for the team.",
    "linkedin": "#"
  },
  {
    "name": "Confidence Itoro",
    "fullName": "Confidence Itoro",
    "role": "Business Development Officer",
    "image": "https://ik.imagekit.io/shiga/orchid/WhatsApp%20Image%202026-02-04%20at%2009.57.15.jpeg",
    "bio": "She supports business growth by identifying opportunities, engaging clients, and helping convert leads into lasting partnerships.",
    "linkedin": "#"
  },
  {
    "name": "Salome Uduak",
    "fullName": "Salome Uduak",
    "role": "Admin Officer",
    "image": "https://ik.imagekit.io/shiga/orchid/WhatsApp%20Image%202026-02-04%20at%2009.58.26.jpeg",
    "bio": "She handles daily administrative tasks, keeps records organised, and supports the team to ensure smooth office operations.",
    "linkedin": "#"
  }
] satisfies readonly TeamMember[];
