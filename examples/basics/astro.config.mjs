// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '个人主页', // 👈 这里改成你的名字
			defaultLocale: 'zh-cn', // 设置默认语言为中文
			locales: {
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			social: {
				// 👈 把下面的 href 换成你自己的 GitHub 主页链接
				github: 'https://github.com/xiaoxi303', 
			},
			sidebar: [
				{
					label: '关于我',
					items: [
						// 这里对应 src/content/docs/guides/example.md 文件的内容
						{ label: '个人简介', slug: 'guides/example' },
					],
				},
				{
					label: '我的项目',
					// 自动读取 src/content/docs/reference/ 文件夹下的所有 md 文件
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
