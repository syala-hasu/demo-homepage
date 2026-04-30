export type Persona = {
  name: string
  avatarUrl: string
  heroImageUrl: string
  heroImageAlt: string
  tagline: string
  bio: string
  countriesVisited: number
  basedIn: string
  yearsTraveling: number
  favoriteRegion: string
}

export const persona: Persona = {
  name: 'Aoi Tachibana',
  avatarUrl: 'https://placehold.co/240x240/2b6cb0/ffffff?text=Aoi',
  heroImageUrl: 'https://picsum.photos/seed/aoi-travel-hero/1280/720',
  heroImageAlt: '夕暮れの路地に灯がともる、海沿いの街並み',
  tagline: '世界の路地裏から、おかえりなさいの一杯を。',
  bio: 'カメラとノートを片手に、ふらりと知らない街へ降り立つのが好きな旅ブロガーです。観光名所よりも、地元の人が通う食堂や朝市、夕方の路地裏に流れる空気が大好物。「行ってみたい」を「明日の予定」に変えるような、等身大の旅の記録をお届けしています。',
  countriesVisited: 32,
  basedIn: '東京 / Tokyo, Japan',
  yearsTraveling: 8,
  favoriteRegion: '東南アジアと地中海沿岸',
}
