const app = getApp()

Page({
  data:{
    imgUrls: [ //轮播图片路径
      '/images/wx.png',
      '/images/vr.png',
      '/images/iqiyi.png'
    ],
    articleLists:[
      {
        avatarUrl:'/images/avatar/1.png',
        date:'Nev 25 2018',
        title:'正是虾肥蟹壮时',
        imgUrl:'/images/post/crab.png',
        content:'皮皮虾是生活在海底的一种软壳动物，广泛分布于大西洋，太平洋中国南海沿岸。深受世界广大人民喜爱与追捧。',
        thumbs:'92',
        comment:'65'
      },
      {
        avatarUrl: '/images/avatar/2.png',
        date: 'Nev 12 2017',
        title: '慵懒的猫喵',
        imgUrl: '/images/post/cat.png',
        content: '说它老实吧，它的确有时候很乖。它会找个暖和的地方，成天睡大觉，无忧无虑，什么事也不过问。可是它决定要出去玩玩，就会出走一天一夜',
        thumbs: '56',
        comment: '26'
      },
      {
        avatarUrl: '/images/avatar/3.png',
        date: 'Nev 12 2017',
        title: '过年回家路',
        imgUrl: '/images/post/sls.jpg',
        content: '说它老实吧，它的确有时候很乖。它会找个暖和的地方，成天睡大觉，无忧无虑，什么事也不过问。可是它决定要出去玩玩，就会出走一天一夜',
        thumbs: '56',
        comment: '26'
      },
      {
        avatarUrl: '/images/avatar/4.png',
        date: 'Oct 12 2016',
        title: '比利林恩的中场战事',
        imgUrl: '/images/post/bl.png',
        content: '和想象中的不一样，一种慢慢浸透的真实感，在战争戏和Half time show这种需要现场感的场景非常有效。李安说自己抛砖引玉，每次看李安的电影都是种享受，不论从拍摄方面还是人生方面都会学到很多。能看这种导演的电影实在是荣幸',
        thumbs: '56',
        comment: '26'
      }
    ],
  },
  
})
