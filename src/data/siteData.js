export const organization = {
  name: 'Shiv Rekha Gurukul',
  tagline: 'Education for Every Child',
  phone: '+91 00000 00000',
  email: 'hello@shivrekhagurukul.org',
  address: 'Organization address will be updated here',
}

export const images = {
  hero: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1500&q=85',
  classroom: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85',
  teacher: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1100&q=85',
  books: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1100&q=85',
  children: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1100&q=85',
  learning: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1100&q=85',
  writing: 'https://images.unsplash.com/photo-1491309055486-24ae511c15c7?auto=format&fit=crop&w=1100&q=85',
}

export const programs = [
  {
    number: '01',
    title: 'Free Education',
    hindi: 'निःशुल्क शिक्षा',
    description: 'Creating access to learning opportunities for children who may otherwise face financial barriers.',
    image: images.classroom,
    icon: 'BookOpen',
  },
  {
    number: '02',
    title: 'Learning Support',
    hindi: 'पढ़ाई में सहयोग',
    description: 'Encouraging children with guidance, learning resources and a supportive environment.',
    image: images.books,
    icon: 'GraduationCap',
  },
  {
    number: '03',
    title: 'Holistic Development',
    hindi: 'समग्र विकास',
    description: 'Supporting confidence, creativity, values and the skills children need to grow.',
    image: images.children,
    icon: 'Sprout',
  },
]

export const galleryImages = [
  { src: images.classroom, alt: 'Children learning in a classroom', category: 'Learning' },
  { src: images.books, alt: 'Students learning together', category: 'Learning' },
  { src: images.children, alt: 'Children participating in an activity', category: 'Activities' },
  { src: images.teacher, alt: 'Teacher supporting students', category: 'Teaching' },
  { src: images.learning, alt: 'Children learning together', category: 'Activities' },
  { src: images.writing, alt: 'A student studying', category: 'Learning' },
]
