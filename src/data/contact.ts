export interface IContact {
  id: string
  address: string
  email: string
  socialLinks: { name: string; url: string; icon: string; handle: string }[]
}

export const MOCK_CONTACT: IContact = {
  id: '1',
  address: '杭州市拱墅区石祥路298号启鼎中心T1号楼807',
  email: 'hanyiliang@francisco.com.cn',
  socialLinks: [
    { name: '微博', url: 'https://weibo.com/u/1719612345', icon: 'weibo', handle: '饭壳文化' },
    { name: '小红书', url: '#', icon: 'xiaohongshu', handle: '饭壳文化' },
    { name: '抖音', url: '#', icon: 'douyin', handle: '饭壳文化' },
  ],
}
