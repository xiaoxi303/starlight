// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import markdocGrammar from './grammars/markdoc.tmLanguage.json';

const site = 'https://cc.xoxoo.eu.cc/';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Xiaoxi 的个人主页',
      lastUpdated: true,

      // 默认主题：暗色
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },

      // 默认深色模式
      expressiveCode: {
        themes: ['dark-plus'],
        shiki: { langs: [markdocGrammar] },
      },

      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/xiaoxi303' },
      ],

      // Head 注入：SEO + 预连接优化
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content: '视频剪辑, AI编程, 个人博客, Xiaoxi, 跨界创作',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'author',
            content: 'Xiaoxi',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: `${site}og-image.png`,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
      ],

      customCss: ['./src/assets/landing.css'],

      sidebar: [
        {
          label: '👋 关于我',
          items: [
            { label: '个人简介', link: '/about/intro/' },
            { label: '技能与履历', link: '/about/resume/' },
          ],
        },
        {
          label: '💻 项目展示',
          autogenerate: { directory: 'projects' },
        },
        {
          label: '📝 技术笔记',
          collapsed: false,
          autogenerate: { directory: 'notes' },
        },
        {
          label: '🔗 更多链接',
          items: [
            { label: '联系我', link: '/contact/' },
          ],
        },
      ],

      plugins: [
        starlightLinksValidator(),
      ],
    }),
  ],
});
