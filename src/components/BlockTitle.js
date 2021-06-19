import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Text, Strong, Hr, Box } from "@quarkly/widgets";
const defaultProps = {
	"display": "flex",
	"align-items": "center",
	"justify-content": "flex-start",
	"width": "100%",
	"margin": "120px 0px 64px 0px",
	"xl-margin": "90px 0px 48px 0px",
	"md-margin": "45px 0px 24px 0px",
	"lg-margin": "60px 0px 32px 0px",
	"sm-flex-wrap": "wrap",
	"sm-margin": "30px 0px 32px 0px"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "32px",
			"height": "32px",
			"src": "https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/title.svg?v=2021-06-18T12:25:48.491Z",
			"flex": "0  0 auto",
			"lg-width": "24px",
			"lg-height": "24px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--h3",
			"white-space": "nowrap",
			"flex": "0 0 auto",
			"margin": "16px 0px 16px 8px",
			"lg-font": "400 24px/1.2 --fontFamily-googleNunito",
			"children": <Strong
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Who we are
			</Strong>,
			"xs-font": "400 24px/1.2 \"Nunito\", sans-serif"
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {
			"width": "100%",
			"border-color": "--color-secondary",
			"flex": "1 1 auto",
			"padding": "0px 0px 0px 0px",
			"margin": "0px 4px 0px 16px",
			"sm-margin": "0px 0px 0px 0px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--h2",
			"margin": "0px 0px 0px 0px",
			"color": "--category",
			"text-transform": "uppercase",
			"white-space": "nowrap",
			"flex": "0  0 auto",
			"lg-font": "800 48px/1.2 --fontFamily-googleNunito",
			"lg-font": "800 36px/1.2 --fontFamily-googleNunito",
			"sm-width": "100%",
			"sm-text-align": "right",
			"sm-margin": "16px 0px 0px 0px",
			"children": "ABOUT US"
		}
	}
};

const BlockTitle = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		<Text {...override("text")} />
		<Hr {...override("hr")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(BlockTitle, { ...Box,
	defaultProps,
	overrides
});
export default BlockTitle;