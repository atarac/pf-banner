import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { 
		linkUrl, 
		imgUrl, 
		imgAlt, 
		imgWidth, 
		imgHeight, 
		bannerPosBottom, 
		bannerPosRight,
		isImgVisible
	} = attributes;

	const bannerPosition = {
		position: 'fixed',
		bottom: bannerPosBottom,
		right: bannerPosRight,
	};

	const bannerStyle = {
		width: imgWidth,
		height: imgHeight,
	};

	const imgStyle = {
		width: imgWidth,
		height: imgHeight,
	};

	const blockprops = useBlockProps.save({
		style: bannerStyle
	});

	if (!isImgVisible) {
		return null;
	}

	return (
		<div className="banner-position" style={ bannerPosition }>
			<button className="invisible-button">
				<span className="dashicons dashicons-dismiss"></span>
			</button>
			<div {...blockprops}>
				<a href={ linkUrl }>
					{imgUrl && <img className="banner-img" src={ imgUrl } alt={ imgAlt } style={ imgStyle }/>}
				</a>
			</div>
		</div>
	);
};
