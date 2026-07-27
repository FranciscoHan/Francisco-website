export interface ICompany {
  id: string
  name: string
  nameEn: string
  tagline: string
  subtitle: string
  description: string
  positioning: string
  advantages: string[]
  vision: string
  founder: string
  founderTitle: string
  headquarters: string
}

export const MOCK_COMPANY: ICompany = {
  id: '1',
  name: '饭壳文化',
  nameEn: 'Francisco Entertainment',
  tagline: '让热爱更近一点',
  subtitle: '饭壳文化 · Francisco Entertainment',
  description: '饭壳文化是一家专注于涉外娱乐经纪的创新型公司，总部位于杭州。我们致力于搭建中韩娱乐产业的合作桥梁，为艺人、品牌和粉丝创造卓越价值。',
  positioning: '专注涉外娱乐经纪的新锐公司',
  advantages: [
    '丰富的韩国艺人资源与合作网络',
    '专业的活动策划与执行团队',
    '成熟的商务合作与IP运营经验',
    '深耕中韩娱乐市场的行业洞察',
  ],
  vision: '成为连接亚洲娱乐产业的核心纽带，推动中韩文化交流与商业合作的深度融合。',
  founder: 'Francisco Han',
  founderTitle: '创始人 & CEO',
  headquarters: '杭州拱墅',
}
