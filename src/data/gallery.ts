export type GalleryCategory = 'Industry Events' | 'Workshops & Capacity Building' | 'Stakeholder & Project Engagements' | 'Media & Milestones';

export interface GalleryItem {
  readonly src: string;
  readonly type: 'image' | 'video';
  readonly category: GalleryCategory;
  readonly title: string;
  readonly alt: string;
  readonly poster?: string;
}

interface GalleryGroup {
  readonly category: GalleryCategory;
  readonly title: string;
  readonly alt: string;
  readonly files: readonly string[];
}

const photos = (...files: readonly string[]) => files;

const groups: readonly GalleryGroup[] = [
  {
    category: 'Industry Events',
    title: 'Industry gathering and publication event',
    alt: 'Orchiddigital representatives and guests at a formal industry gathering',
    files: photos('PHOTO-2026-11-17-19-15-19 2.jpg', 'PHOTO-2026-11-17-19-15-19 3.jpg', 'PHOTO-2026-11-17-19-15-20 2.jpg', 'PHOTO-2026-11-17-19-15-20.jpg'),
  },
  {
    category: 'Stakeholder & Project Engagements',
    title: 'Business and stakeholder meeting',
    alt: 'Business representatives meeting and exchanging ideas',
    files: photos(
      'PHOTO-2026-11-17-19-15-19.jpg',
      'PHOTO-2026-11-17-19-15-28 2.jpg', 'PHOTO-2026-11-17-19-15-28 3.jpg',
      'PHOTO-2026-11-17-19-15-29 2.jpg', 'PHOTO-2026-11-17-19-15-29 3.jpg', 'PHOTO-2026-11-17-19-15-29 4.jpg', 'PHOTO-2026-11-17-19-15-29 5.jpg', 'PHOTO-2026-11-17-19-15-29.jpg',
      'PHOTO-2026-11-17-19-15-30 2.jpg', 'PHOTO-2026-11-17-19-15-30 3.jpg', 'PHOTO-2026-11-17-19-15-30 4.jpg', 'PHOTO-2026-11-17-19-15-30.jpg',
      'PHOTO-2026-11-17-19-15-31 2.jpg', 'PHOTO-2026-11-17-19-15-31.jpg',
    ),
  },
  {
    category: 'Industry Events',
    title: 'Niger Delta Economic and Investment Summit',
    alt: 'Delegates and Orchiddigital representatives at the Niger Delta Economic and Investment Summit',
    files: photos(
      'PHOTO-2026-11-17-19-15-21 2.jpg',
      'PHOTO-2026-11-17-19-15-22 2.jpg', 'PHOTO-2026-11-17-19-15-22.jpg',
      'PHOTO-2026-11-17-19-15-23 2.jpg', 'PHOTO-2026-11-17-19-15-23 3.jpg', 'PHOTO-2026-11-17-19-15-23.jpg',
      'PHOTO-2026-11-17-19-15-24 2.jpg', 'PHOTO-2026-11-17-19-15-24.jpg',
      'PHOTO-2026-11-17-19-15-25 2.jpg', 'PHOTO-2026-11-17-19-15-25 3.jpg', 'PHOTO-2026-11-17-19-15-25.jpg',
      'PHOTO-2026-11-17-19-15-26 2.jpg', 'PHOTO-2026-11-17-19-15-26 3.jpg', 'PHOTO-2026-11-17-19-15-26.jpg',
      'PHOTO-2026-11-17-19-15-27 2.jpg', 'PHOTO-2026-11-17-19-15-27 3.jpg', 'PHOTO-2026-11-17-19-15-27.jpg',
      'PHOTO-2026-11-17-19-15-28.jpg',
    ),
  },
  {
    category: 'Stakeholder & Project Engagements',
    title: 'NICOWA Medical Village project engagement',
    alt: 'Stakeholders gathered at the NICOWA Medical Village project event',
    files: photos(
      'PHOTO-2026-11-17-19-15-31 3.jpg', 'PHOTO-2026-11-17-19-15-31 4.jpg',
      'PHOTO-2026-11-17-19-15-32 2.jpg', 'PHOTO-2026-11-17-19-15-32 3.jpg', 'PHOTO-2026-11-17-19-15-32 4.jpg', 'PHOTO-2026-11-17-19-15-32.jpg',
    ),
  },
  {
    category: 'Workshops & Capacity Building',
    title: 'PIND capacity-building and business linkage workshop',
    alt: 'Participants and facilitators at a PIND capacity-building and business linkage workshop',
    files: photos(
      'PHOTO-2026-11-17-19-15-32 5.jpg',
      'PHOTO-2026-11-17-19-15-33 2.jpg', 'PHOTO-2026-11-17-19-15-33 3.jpg', 'PHOTO-2026-11-17-19-15-33 4.jpg', 'PHOTO-2026-11-17-19-15-33.jpg',
      'PHOTO-2026-11-17-19-15-34 2.jpg', 'PHOTO-2026-11-17-19-15-34 3.jpg', 'PHOTO-2026-11-17-19-15-34.jpg',
    ),
  },
  {
    category: 'Industry Events',
    title: 'Business and energy sector conferences',
    alt: 'Orchiddigital representatives participating in business and energy sector conferences',
    files: photos(
      'PHOTO-2026-11-17-19-15-34 4.jpg', 'PHOTO-2026-11-17-19-15-35 2.jpg', 'PHOTO-2026-11-17-19-15-35 3.jpg', 'PHOTO-2026-11-17-19-15-35.jpg',
      'PHOTO-2026-11-17-19-15-36.jpg', 'PHOTO-2026-11-17-19-15-37 2.jpg',
      'PHOTO-2026-11-17-19-15-39 2.jpg', 'PHOTO-2026-11-17-19-15-39 3.jpg', 'PHOTO-2026-11-17-19-15-39 4.jpg',
    ),
  },
  {
    category: 'Media & Milestones',
    title: 'Media conversations and speaking engagements',
    alt: 'Orchiddigital representatives in interviews and speaking engagements',
    files: photos('PHOTO-2026-11-17-19-15-20 3.jpg', 'PHOTO-2026-11-17-19-15-21.jpg', 'PHOTO-2026-11-17-19-15-36 2.jpg'),
  },
  {
    category: 'Media & Milestones',
    title: 'Recognition and professional milestone',
    alt: 'Team members marking a professional recognition and milestone',
    files: photos('PHOTO-2026-11-17-19-15-37.jpg'),
  },
  {
    category: 'Stakeholder & Project Engagements',
    title: 'Rivers State MSME loan scheme engagement',
    alt: 'Orchiddigital representatives at the Rivers State Government and Bank of Industry MSME loan scheme event',
    files: photos(
      'PHOTO-2026-11-17-19-15-38 2.jpg', 'PHOTO-2026-11-17-19-15-38 3.jpg', 'PHOTO-2026-11-17-19-15-38 4.jpg', 'PHOTO-2026-11-17-19-15-38.jpg', 'PHOTO-2026-11-17-19-15-39.jpg',
    ),
  },
];

export const galleryItems: readonly GalleryItem[] = [
  ...groups.flatMap((group) => group.files.map((file, index) => ({
    src: `/images/gallery/${file}`,
    type: 'image' as const,
    category: group.category,
    title: group.files.length > 1 ? `${group.title} ${String(index + 1).padStart(2, '0')}` : group.title,
    alt: group.alt,
  }))),
  {
    src: '/images/gallery/VIDEO-2026-11-17-19-15-21.mp4',
    poster: '/images/gallery/posters/project-site.jpg',
    type: 'video',
    category: 'Stakeholder & Project Engagements',
    title: 'Project site visit',
    alt: 'Video from an Orchiddigital project site visit',
  },
  {
    src: '/images/gallery/VIDEO-2026-11-17-19-15-36.mp4',
    poster: '/images/gallery/posters/south-south-media-week.jpg',
    type: 'video',
    category: 'Industry Events',
    title: 'South South Media Week address',
    alt: 'Video of a speaker addressing the South South Media Week audience',
  },
  {
    src: '/images/gallery/VIDEO-2026-11-17-19-15-37.mp4',
    poster: '/images/gallery/posters/media-interview.jpg',
    type: 'video',
    category: 'Media & Milestones',
    title: 'Orchiddigital media interview',
    alt: 'Video of an Orchiddigital representative during a media interview',
  },
];

export const galleryCategories = ['All', 'Industry Events', 'Workshops & Capacity Building', 'Stakeholder & Project Engagements', 'Media & Milestones'] as const;
