export type Post = {
  title: string
  slug: string
  date: string
  excerpt: string
  coverImage: string
  tags: string[]
}

export const posts: Post[] = [
  {
    title: 'Hello World — このサイトについて',
    slug: 'hello-world',
    date: '2026-01-12',
    excerpt:
      'デモ用ホームページの最初の記事です。何を作っていて、なぜこのサイトを公開しているのかを簡単に紹介します。',
    coverImage: 'https://picsum.photos/seed/hello-world/800/450',
    tags: ['お知らせ', '雑記'],
  },
  {
    title: 'Vite + React + TypeScript で始めるミニマル構成',
    slug: 'vite-react-typescript-minimal',
    date: '2026-01-28',
    excerpt:
      '最小構成で動かすためにどんな選択をしたか、ESLint や tsconfig の初期値も含めてざっくりまとめました。',
    coverImage: 'https://picsum.photos/seed/vite-react/800/450',
    tags: ['React', 'TypeScript', 'Vite'],
  },
  {
    title: 'React Router でレイアウト共有を整理する',
    slug: 'react-router-shared-layout',
    date: '2026-02-14',
    excerpt:
      'ヘッダー・フッターを各ページで重複させないために、ネストルートと <Outlet /> をどう使ったかの記録です。',
    coverImage: 'https://picsum.photos/seed/router-layout/800/450',
    tags: ['React', 'React Router'],
  },
  {
    title: 'デザインの最初の一歩は「余白」から',
    slug: 'first-step-is-spacing',
    date: '2026-03-03',
    excerpt:
      '色やフォントよりも先に、行間と余白を整えるだけでサイトの印象は驚くほど変わる、という小さな気づき。',
    coverImage: 'https://picsum.photos/seed/spacing/800/450',
    tags: ['デザイン', 'UI'],
  },
  {
    title: 'ブログ一覧のカードレイアウトを CSS Grid で組む',
    slug: 'blog-grid-with-css-grid',
    date: '2026-03-22',
    excerpt:
      'auto-fill と minmax() を使って、画面幅に応じて列数が変わるカードグリッドを作ります。',
    coverImage: 'https://picsum.photos/seed/css-grid/800/450',
    tags: ['CSS', 'レイアウト'],
  },
  {
    title: '個人サイトに何を書くか問題',
    slug: 'what-to-write-on-personal-site',
    date: '2026-04-09',
    excerpt:
      '更新が止まりがちな個人サイトを、続けられる場所にするために自分なりに決めたゆるいルール。',
    coverImage: 'https://picsum.photos/seed/personal-site/800/450',
    tags: ['雑記'],
  },
  {
    title: 'ダミー記事と一覧ページのモック実装',
    slug: 'mock-posts-and-list-page',
    date: '2026-04-25',
    excerpt:
      '本文はまだないけれど、データ構造と一覧の見た目を先に固めるために用意したモックの話。',
    coverImage: 'https://picsum.photos/seed/mock-posts/800/450',
    tags: ['React', 'モック'],
  },
]
