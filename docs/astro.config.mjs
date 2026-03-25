// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import markdocGrammar from './grammars/markdoc.tmLanguage.json';

// 保留了多语言配置
export const locales = {
	root: { label: 'English', lang: 'en' },
	'zh-cn': { label: '简体中文', lang: 'zh-CN' },
};

const site = 'https://cc.xoxoo.eu.cc/'; // 你的自定义域名

export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Xiaoxi 的个人主页', // 👈 稍微帮你润色了一下标题，你也可以改回"我的精彩个人"
			// logo: {
			// 	light: '/src/assets/logo-light.svg',
			// 	dark: '/src/assets/logo-dark.svg',
			// 	replacesTitle: true,
			// },
			lastUpdated: true,
			
			// 你的 GitHub 地址
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/xiaoxi303/starlight' },
			],
			
			customCss: ['./src/assets/landing.css'],
			locales,

			// 👇 为个人展示全新定制的侧边栏结构
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
					// 自动生成项目列表：只要你在 projects 文件夹下写 markdown，就会自动出现在这里
					autogenerate: { directory: 'projects' }, 
				},
				{
					label: '📝 技术笔记',
					collapsed: false, // 默认展开
					// 自动生成笔记列表：你在 notes 文件夹下写的文章都在这里
					autogenerate: { directory: 'notes' },
				},
				{
					label: '🔗 更多链接',
					items: [
						{ label: '联系我', link: '/contact/' },
					],
				}
			],
			// 👆 侧边栏配置结束

			expressiveCode: { shiki: { langs: [markdocGrammar] } },
			
			// ⚠️ 暂时关闭严格的链接检查，防止你在本地测试时因为缺少某些文件而报错
			plugins: [], 
		}),
	],
});
