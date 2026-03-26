// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import markdocGrammar from './grammars/markdoc.tmLanguage.json';

const site = 'https://cc.xoxoo.eu.cc/'; // 你的自定义域名

export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Xiaoxi 的个人主页',
			lastUpdated: true,
			
			// 👇 这里是关键修改：把网站的根目录语言直接设为中文
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/xiaoxi303/starlight' },
			],
			
			customCss: ['./src/assets/landing.css'],

			// 👇 中文侧边栏
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
				}
			],

			expressiveCode: { shiki: { langs: [markdocGrammar] } },
			plugins: [], 
		}),
	],
});
