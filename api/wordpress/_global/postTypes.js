// Define valid WP post types (singular and plural GraphQL names).
export const postTypes = {
  career: {
    pluralName: 'careers',
    route: 'careers'
  },
  comment: {
    pluralName: 'comments',
    route: null
  },
  event: {
    pluralName: 'events',
    route: 'events'
  },
  mediaItem: {
    pluralName: 'mediaItems',
    route: null
  },
  page: {
    pluralName: 'pages',
    route: ''
  },
  portfolio: {
    pluralName: 'portfolios',
    route: 'portfolio'
  },
  post: {
    pluralName: 'posts',
    route: 'blog'
  },
  service: {
    pluralName: 'services',
    route: 'service'
  },
  team: {
    pluralName: 'teams',
    route: 'team'
  },
  testimonial: {
    pluralName: 'testimonials',
    route: 'testimonial'
  }
}

// Define hierarchical post types.
export const hierarchicalPostTypes = ['page']

/**
 * Check if post type is valid.
 *
 * @author WebDevStudios
 * @param {string} postType WP post type.
 * @return {boolean}        Whether provided post type is valid.
 */
export function isValidPostType(postType) {
  return Object.keys(postTypes).includes(postType)
}

/**
 * Check if post type is hierarchical.
 *
 * @author WebDevStudios
 * @param {string} postType WP post type.
 * @return {boolean}        Whether provided post type is hierarchical.
 */
export function isHierarchicalPostType(postType) {
  return hierarchicalPostTypes.includes(postType)
}