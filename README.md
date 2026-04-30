# demo-homepage

Vite + React + TypeScript で構築されたデモホームページ。

## 必要環境

- Node.js 20 以上
- pnpm 9 以上

## セットアップ

```sh
pnpm install
```

## 開発サーバー起動

```sh
pnpm dev
```

http://localhost:5173 で表示されます。

## ビルド

```sh
pnpm build
```

## Lint / フォーマット

```sh
pnpm lint
pnpm format
```

## テスト

Vitest + React Testing Library で単体テストを実行します。

```sh
pnpm test       # watch モード
pnpm test:run   # 1 回だけ実行 (CI 向け)
pnpm test:ui    # ブラウザ UI 付き
```
