import { DefaultSeo } from 'next-seo'

const DefaultSEO = () => {
  return (
    <>
      <DefaultSeo
        defaultTitle='どれカラ -カラオケ選曲アプリ-'
        description='どれカラはカラオケで歌う曲を自分でまとめて，ランダムに選曲してくれるアプリです．'
        openGraph={{
          type: 'website',
          title: 'どれカラ',
          description:
            'どれカラはカラオケで歌う曲を自分でまとめて，ランダムに選曲してくれるアプリです．',
          site_name: 'どれカラ',
          url: 'http://ec2-54-250-152-70.ap-northeast-1.compute.amazonaws.com/login',
        }}
      />
    </>
  )
}

export default DefaultSEO
