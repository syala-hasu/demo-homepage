export type Post = {
  title: string
  slug: string
  date: string
  excerpt: string
  coverImage: string
  tags: string[]
  body: string[]
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
    body: [
      'はじめまして。このサイトは、自分の制作物や日々の学びを置いておくための小さな置き場として作りました。',
      '最初から完璧に作り込むのではなく、書きながら少しずつ整えていく予定です。記事も、デザインも、サイト構成も、たぶんしばらく揺れます。',
      'もし読みに来てくれた人がいたら、その時点のスナップショットだと思って気軽に眺めてもらえると嬉しいです。',
    ],
  },
  {
    title: 'Vite + React + TypeScript で始めるミニマル構成',
    slug: 'vite-react-typescript-minimal',
    date: '2026-01-28',
    excerpt:
      '最小構成で動かすためにどんな選択をしたか、ESLint や tsconfig の初期値も含めてざっくりまとめました。',
    coverImage: 'https://picsum.photos/seed/vite-react/800/450',
    tags: ['React', 'TypeScript', 'Vite'],
    body: [
      '個人サイトなので、ライブラリ選定は「あとで剥がしやすいか」を優先しました。Vite + React + TypeScript の標準テンプレートをベースにしています。',
      'ESLint は flat config に寄せて、最初は推奨ルールだけ。スタイルは CSS Modules ではなく、まずはコンポーネント単位の素の CSS で運用してみます。',
      '速さよりも、迷わず触れる状態を保つこと。これがいまの優先順位です。',
    ],
  },
  {
    title: 'React Router でレイアウト共有を整理する',
    slug: 'react-router-shared-layout',
    date: '2026-02-14',
    excerpt:
      'ヘッダー・フッターを各ページで重複させないために、ネストルートと <Outlet /> をどう使ったかの記録です。',
    coverImage: 'https://picsum.photos/seed/router-layout/800/450',
    tags: ['React', 'React Router'],
    body: [
      '各ページに同じヘッダー・フッターを書きたくなかったので、React Router のネストルートで共通レイアウトを 1 箇所にまとめました。',
      'Layout コンポーネントの中に <Outlet /> を置くだけで、子ルートがその位置に差し込まれます。NavLink を使えば現在地のハイライトもすぐ実装できます。',
      'ルーティングとレイアウトの責務がきれいに分かれて、追加ページのコストがぐっと下がりました。',
    ],
  },
  {
    title: 'デザインの最初の一歩は「余白」から',
    slug: 'first-step-is-spacing',
    date: '2026-03-03',
    excerpt:
      '色やフォントよりも先に、行間と余白を整えるだけでサイトの印象は驚くほど変わる、という小さな気づき。',
    coverImage: 'https://picsum.photos/seed/spacing/800/450',
    tags: ['デザイン', 'UI'],
    body: [
      '最初は配色やフォントから手を入れたくなりますが、いったん我慢して余白だけを整えると、それだけで「読める」サイトになります。',
      'line-height は 1.6〜1.8 あたり、見出しと本文の間にしっかり空白を取る。コンポーネント間のギャップもケチらない。',
      '色を足すのは、構造が読み取れるようになってからで十分でした。',
    ],
  },
  {
    title: 'ブログ一覧のカードレイアウトを CSS Grid で組む',
    slug: 'blog-grid-with-css-grid',
    date: '2026-03-22',
    excerpt:
      'auto-fill と minmax() を使って、画面幅に応じて列数が変わるカードグリッドを作ります。',
    coverImage: 'https://picsum.photos/seed/css-grid/800/450',
    tags: ['CSS', 'レイアウト'],
    body: [
      'grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) の一行で、メディアクエリなしに列数が可変なカードレイアウトが組めます。',
      '280px は最小カード幅。これより狭くなりそうな場合は列数が減って、広い画面では自然に列が増えます。',
      'カード側は高さを揃えたいので、内部を Flex にして本文を伸縮させるのが簡単です。',
    ],
  },
  {
    title: '個人サイトに何を書くか問題',
    slug: 'what-to-write-on-personal-site',
    date: '2026-04-09',
    excerpt:
      '更新が止まりがちな個人サイトを、続けられる場所にするために自分なりに決めたゆるいルール。',
    coverImage: 'https://picsum.photos/seed/personal-site/800/450',
    tags: ['雑記'],
    body: [
      '個人サイトはだいたい、最初の数本を書いた直後に止まります。自分も例外ではないので、ハードルを意識的に下げることにしました。',
      'ルールは 3 つ。「書き終わらなくても公開する」「画像がなくても公開する」「あとで書き直していい」。',
      '完成度ではなく、頻度を維持することを最優先にします。',
    ],
  },
  {
    title: 'ダミー記事と一覧ページのモック実装',
    slug: 'mock-posts-and-list-page',
    date: '2026-04-25',
    excerpt:
      '本文はまだないけれど、データ構造と一覧の見た目を先に固めるために用意したモックの話。',
    coverImage: 'https://picsum.photos/seed/mock-posts/800/450',
    tags: ['React', 'モック'],
    body: [
      '実データを揃える前に、ダミーの posts 配列と一覧 UI を先に作りました。データの形が早めに固まると、後続の実装の判断が速くなります。',
      'タイトル / 日付 / 抜粋 / タグ / カバー画像 という最小限のフィールドからスタートして、あとで本文や著者情報を足していく予定です。',
      'まずはモックで動かす。本物のデータに差し替えるのは、いつでもできるので。',
    ],
  },
]
