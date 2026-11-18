export interface TeamMember { name: string; fullName: string; role: string; fullRole?: string; image: string; bio: string; linkedin: string }

export const staff = [
  {
    "name": "Chisom Esther Owuamanam",
    "fullName": "Chisom Esther Owuamanam",
    "role": "Admin Officer",
    "image": "/PHOTO-2026-11-17-19-09-38 4.jpg",
    "bio": "She supports day-to-day administration, record keeping, scheduling, and internal coordination to help the office run smoothly.",
    "linkedin": "#"
  },
  {
    "name": "Victoria Ajayi",
    "fullName": "Victoria Ajayi",
    "role": "Social Media Manager",
    "image": "",
    "bio": "She manages our social media presence, creating engaging content and helping the brand connect with people across multiple platforms.",
    "linkedin": "#"
  },
  {
    "name": "Martin Nwosu",
    "fullName": "Martin Nwosu",
    "role": "IT Personnel",
    "image": "",
    "bio": "He keeps our systems running smoothly, providing technical support and ensuring our digital tools work efficiently for the team.",
    "linkedin": "#"
  },
  {
    "name": "Confidence Itoro",
    "fullName": "Confidence Itoro",
    "role": "Business Development Officer",
    "image": "",
    "bio": "She supports business growth by identifying opportunities, engaging clients, and helping convert leads into lasting partnerships.",
    "linkedin": "#"
  },
  {
    "name": "Salome Uduak",
    "fullName": "Salome Uduak",
    "role": "Admin Officer",
    "image": "",
    "bio": "She handles daily administrative tasks, keeps records organised, and supports the team to ensure smooth office operations.",
    "linkedin": "#"
  }
] satisfies readonly TeamMember[];
