import Blocks from '@/components/molecules/Blocks'
import PropTypes from 'prop-types'

/**
 * Freeform Block
 *
 * The core Freeform block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props             The component properties.
 * @param  {Array}   props.innerBlocks The array of inner blocks to display.
 * @param  {string}  props.content     The content of the block.
 * @return {Element}                   The Code component.
 */
export default function BlockMediaText({innerBlocks, content}) {
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: content}} />
      {innerBlocks && <Blocks blocks={innerBlocks} />}
    </>
  )
}

BlockMediaText.propTypes = {
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.object,
      name: PropTypes.string
    })
  ),
  content: PropTypes.string
}
