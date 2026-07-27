export interface ICase {
  id: string
  name: string
  date: string
  type: '粉丝见面会' | '演唱会' | '品牌活动' | '商务合作'
  coverUrl: string
  description: string
  featured?: boolean
  status?: '火热进行中' | '即将开启' | '已结束'
  extraImageUrl?: string
  location?: string
  highlight?: string
  extraImageUrl2?: string
  textCover?: boolean
  textCoverLine1?: string
  textCoverLine2?: string
  textCoverArtists?: string[]
}

export const MOCK_CASES: ICase[] = [
  {
    id: '1',
    name: '2026 TEEN TOP 粉丝见面会 中国站',
    date: '2026.08.29',
    type: '粉丝见面会',
    coverUrl: 'https://aka.doubaocdn.com/s/oCDv1wqgmM',
    description: '韩国二代传奇男团 TEEN TOP 近10年首次登陆国内，Francisco Entertainment 全案策划执行粉丝见面会，含粉丝互动、福利环节、票务运营全链路服务。',
    featured: true,
    status: '火热进行中',
    extraImageUrl: 'https://aka.doubaocdn.com/s/V2Bg1wqgmM',
    location: '重庆',
    highlight: '二代男团近10年首次登陆国内',
  },
  {
    id: '2',
    name: '神话 SHINHWA 粉丝见面会',
    date: '2025.12.21',
    type: '粉丝见面会',
    location: '武汉',
    coverUrl: 'https://aka.doubaocdn.com/s/dNDh1wqh2U',
    description: '韩国最长寿元祖男团神话 SHINHWA 粉丝见面会，承载一代韩流记忆，打造专属粉丝互动体验',
    extraImageUrl: 'https://aka.doubaocdn.com/s/B57w1wqh2U',
    extraImageUrl2: 'https://aka.doubaocdn.com/s/wXhb1wqh2U',
  },
  {
    id: '3',
    name: '大美长江 Super Star 演唱会',
    date: '2024.09.22',
    type: '演唱会',
    coverUrl: '',
    description: '大美长江 Super Star 群星演唱会，集结张信哲、张韶涵、小鬼王琳凯、房东的猫等实力歌手，呈现跨世代音乐盛宴',
    location: '重庆奥体中心体育场',
    textCover: true,
    textCoverLine1: '大美长江',
    textCoverLine2: 'Super Star',
    textCoverArtists: ['张信哲', '张韶涵', '小鬼王琳凯', '房东的猫'],
  },
]
