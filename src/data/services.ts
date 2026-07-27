export interface IService {
  id: string
  title: string
  description: string
  features: string[]
  iconName: string
}

export const MOCK_SERVICES: IService[] = [
  {
    id: '1',
    title: '艺人涉外经纪',
    description: '韩国艺人中国区独家代理，提供全流程专业经纪服务',
    features: ['中国区代理', '行程管理', '商务对接'],
    iconName: 'user',
  },
  {
    id: '2',
    title: '活动策划执行',
    description: '粉丝见面会、演唱会等大型活动全案策划与落地执行',
    features: ['粉丝见面会', '演唱会', '品牌活动'],
    iconName: 'calendar',
  },
  {
    id: '3',
    title: '商务合作',
    description: '品牌代言、跨界联名与IP商业化运营全链路服务',
    features: ['品牌代言', '跨界联名', 'IP商业化'],
    iconName: 'briefcase',
  },
]
