import Container from '@/components/atoms/Container'
import Layout from '@/components/common/Layout'
import getPagePropTypes from '@/functions/getPagePropTypes'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'
import Page from './[...slug]'

// Define route post type.
const postType = 'page'

/**
 * Render the Custom404 component.
 *
 * @author WebDevStudios
 * @param  {object}  props           The component attributes as props.
 * @param  {object}  props.post      Post data from WordPress.
 * @param  {object}  props.restProps Other data passed in to 404.
 * @return {Element}                 The Custom404 component.
 */
export default function Custom404({post, ...restProps}) {
  const {seo, ...postData} = post

  // Update robots SEO meta.
  seo.metaRobotsNofollow = 'noindex'
  seo.metaRobotsNoindex = 'nofollow'

  console.error('Custom404: post: ', post)
  console.error('Custom404: restProps: ', restProps)

  // Display dynamic page data if 404 page retrieved from WP.
  if (postData && Object.keys(postData).length > 0) {
    return <Page post={post} />
  }

  return (
    <Layout seo={{...seo}}>
      <Container>
        <article>
          <h1>404 Not Found</h1>
          <p>That page could not be found!</p>
        </article>
      </Container>
    </Layout>
  )
}

/**
 * Get post static props.
 *
 * @author WebDevStudios
 * @return {object} Post props.
 */
export async function getStaticProps() {
  return await getPostTypeStaticProps({slug: '404'}, postType)
}

Custom404.propTypes = {
  ...getPagePropTypes(postType)
}
