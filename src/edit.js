import { useBlockProps, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, TextareaControl, TextControl, Button, Icon } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
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
	}

	const blockprops = useBlockProps({
		style: bannerStyle
	});


	return (
		<div class="banner-position" style={ bannerPosition }>
			<Button
				className={ isImgVisible ? "is-img-visible" : "is-img-unvisible" }
				onClick={ () => setAttributes({ isImgVisible: !isImgVisible }) }
			>
				{ isImgVisible ? <Icon icon="dismiss"/> : 'バナーを表示'}
			</Button>

			{ isImgVisible && 
				<div { ...blockprops }>
					<InspectorControls>
						<PanelBody title="バナーの基本設定">
							<MediaUpload
								onSelect={ (media) => setAttributes({ imgUrl: media.url }) }
								allowedTypes={ ['image'] }
								value={ imgUrl }
								render={ ({ open }) => (
									<Button onClick={ open } className="is-secondary mb24">バナー画像を選択する</Button>
								)}
							/>
							<TextareaControl
								label="リンクURL"
								value={ linkUrl }
								onChange={ (newLinkUrl) => setAttributes({ linkUrl: newLinkUrl }) }
							/>
							<TextControl
								label="幅"
								value={ imgWidth }
								onChange={ (newWidth) => setAttributes({ imgWidth: newWidth }) }
							/>
							<TextControl
								label="高さ"
								value={ imgHeight }
								onChange={ (newHeight) => setAttributes({ imgHeight: newHeight }) }
							/>
							<TextControl
								label="位置（下から）"
								value={ bannerPosBottom }
								onChange={ (newBottom) => setAttributes({ bannerPosBottom: newBottom }) }
							/>
							<TextControl
								label="位置（右から）"
								value={ bannerPosRight }
								onChange={ (newRight) => setAttributes({ bannerPosRight: newRight }) }
							/>
						</PanelBody>
					</InspectorControls>
							<a href={ linkUrl }>
								{ imgUrl && <img class="banner-img" src={ imgUrl } alt={ imgAlt } style={ imgStyle }/> }
							</a>
				</div>
			}
		</div>
	);
};
