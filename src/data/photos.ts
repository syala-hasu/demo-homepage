export type Photo = {
  id: string
  src: string
  alt: string
  location: string
  caption: string
}

export const photos: Photo[] = [
  {
    id: 'kyoto-arashiyama',
    src: 'https://picsum.photos/seed/kyoto-arashiyama/800/600',
    alt: '竹林の小径を見上げた風景',
    location: '京都・嵐山',
    caption: '朝の光が差し込む竹林。空気がしんと澄んでいた。',
  },
  {
    id: 'tokyo-shibuya',
    src: 'https://picsum.photos/seed/tokyo-shibuya/800/600',
    alt: '夜のスクランブル交差点',
    location: '東京・渋谷',
    caption: 'ネオンと人波。都市の鼓動を感じる夜。',
  },
  {
    id: 'hokkaido-biei',
    src: 'https://picsum.photos/seed/hokkaido-biei/800/600',
    alt: '丘陵地帯に広がる花畑',
    location: '北海道・美瑛',
    caption: '色の帯が地平線まで続く、夏のパッチワークの丘。',
  },
  {
    id: 'okinawa-ishigaki',
    src: 'https://picsum.photos/seed/okinawa-ishigaki/800/600',
    alt: '透明度の高い海と白い砂浜',
    location: '沖縄・石垣島',
    caption: '波の音だけが響く、誰もいないビーチで一息。',
  },
  {
    id: 'nagano-kamikochi',
    src: 'https://picsum.photos/seed/nagano-kamikochi/800/600',
    alt: '澄んだ川と山並み',
    location: '長野・上高地',
    caption: '梓川の水音に耳をすませながら、ゆっくり歩く時間。',
  },
  {
    id: 'kanazawa-kenrokuen',
    src: 'https://picsum.photos/seed/kanazawa-kenrokuen/800/600',
    alt: '雪吊りが施された庭園',
    location: '石川・金沢',
    caption: '兼六園の冬支度。職人の手仕事に見惚れる。',
  },
  {
    id: 'nara-deer',
    src: 'https://picsum.photos/seed/nara-deer/800/600',
    alt: '公園にたたずむ鹿',
    location: '奈良・奈良公園',
    caption: '鹿せんべいを差し出すと、丁寧にお辞儀された。',
  },
  {
    id: 'fukuoka-yatai',
    src: 'https://picsum.photos/seed/fukuoka-yatai/800/600',
    alt: '夜の屋台の灯り',
    location: '福岡・中洲',
    caption: '提灯の明かりに誘われて、湯気の向こうへ。',
  },
  {
    id: 'kagoshima-yakushima',
    src: 'https://picsum.photos/seed/kagoshima-yakushima/800/600',
    alt: '苔むした森の中の道',
    location: '鹿児島・屋久島',
    caption: '雨上がりの森。緑の濃さに息をのむ。',
  },
  {
    id: 'aomori-oirase',
    src: 'https://picsum.photos/seed/aomori-oirase/800/600',
    alt: '渓流と紅葉',
    location: '青森・奥入瀬',
    caption: '流れる水と落ち葉の赤。秋の音が聴こえる。',
  },
  {
    id: 'hiroshima-miyajima',
    src: 'https://picsum.photos/seed/hiroshima-miyajima/800/600',
    alt: '海に浮かぶ朱色の鳥居',
    location: '広島・宮島',
    caption: '潮が引いて、鳥居の足元まで歩いていけた。',
  },
  {
    id: 'shizuoka-fuji',
    src: 'https://picsum.photos/seed/shizuoka-fuji/800/600',
    alt: '湖越しの富士山',
    location: '静岡・田貫湖',
    caption: '逆さ富士が見えた朝。三脚を立てて待った甲斐があった。',
  },
]
