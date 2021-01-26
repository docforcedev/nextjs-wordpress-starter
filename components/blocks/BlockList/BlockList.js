import RichText from '@/components/atoms/RichText'
import PropTypes from 'prop-types'

/**
 * List Block
 *
 * The core List block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {string}  className Optional classnames.
 * @param {boolean} ordered   Is this an ordered list.
 * @param {string}  anchor    Optional anchor/id.
 * @param {string}  values    The content of the block.
 * @return {Element}          The RichText component.
 */
export default function BlockList({className, ordered, anchor, values}) {
  return (
    <RichText tag={ordered ? 'ol' : 'ul'} className={className} id={anchor}>
      {values}
    </RichText>
  )
}

BlockList.propTypes = {
  anchor: PropTypes.string,
  ordered: PropTypes.bool,
  className: PropTypes.string,
  values: PropTypes.string
}
