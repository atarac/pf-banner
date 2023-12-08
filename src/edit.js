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
		zIndex: 1000,
		position: 'fixed',
		bottom: bannerPosBottom,
		right: bannerPosRight,
	};

	const bannerStyle = {
		width: imgWidth,
		height: imgHeight,
		marginBottom: 26,
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
							{ imgUrl &&
								<MediaUpload
									onSelect={ (media) => setAttributes({ imgUrl: media.url }) }
									allowedTypes={ ['image'] }
									value={ imgUrl }
									render={ ({ open }) => (
										<Button
											onClick={ open }
											className="is-secondary"
											style={{
												marginBottom: '24px'
											}}
										>
											バナー画像を変更する
										</Button>
									)}
								/>
							}
							<TextareaControl
								label="リンクURL"
								value={ linkUrl }
								onChange={ (newLinkUrl) => setAttributes({ linkUrl: newLinkUrl }) }
							/>
							<Button
								onClick={ () => window.open(linkUrl, 'blank') }
								className="is-link"
								style={{
									marginBottom: '24px'
								}}
							>
								リンクを確認する
							</Button>
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
					{ !imgUrl &&
						<MediaUpload
							onSelect={ (media) => setAttributes({ imgUrl: media.url }) }
							allowedTypes={ ['image'] }
							value={ imgUrl }
							render={ ({ open }) => (
								<div class="content-center" style={{ height: imgHeight }}>
									<Button onClick={ open } className="is-secondary">バナー画像を選択する</Button>
								</div>
							)}
						/>
					}
					<a>
						{ imgUrl && <img class="banner-img" src={ imgUrl } alt={ imgAlt } style={ imgStyle }/> }
					</a>
				</div>
			}
		</div>
	);
};
