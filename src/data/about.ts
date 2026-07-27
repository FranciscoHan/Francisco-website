export interface IAbout {
  id: string
  title: string
  subtitle: string
  description: string
  advantages: string[]
  vision: string
  imageUrl: string
}

export const MOCK_ABOUT: IAbout[] = [
  {
    id: '1',
    title: '关于饭壳文化',
    subtitle: 'Francisco Entertainment',
    description: '饭壳文化是一家总部位于杭州的涉外娱乐经纪公司，专注于中韩艺人合作与娱乐内容运营，致力于搭建亚洲娱乐文化交流的桥梁。',
    advantages: [
      '丰富的韩国艺人资源与合作渠道',
      '专业的活动策划与执行团队',
      '成熟的商务合作与IP运营经验',
    ],
    vision: '成为亚洲领先的涉外娱乐经纪公司，连接优质内容与全球市场。',
    imageUrl: '',
  },
]
