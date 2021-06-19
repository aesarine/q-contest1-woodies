import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"position": "relative",
	"display": "flex",
	"flex-direction": "column",
	"align-items": "center",
	"padding": "0px 20px 0px 20px",
	"sm-margin": "0px 0px 20px 0px",
	"sm-width": "calc(50% - 40px)",
	"sm-flex": "0 0 auto"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/shop1.png?v=2021-06-18T13:03:23.057Z",
			"width": "100%",
			"max-width": "120px",
			"max-height": "120px",
			"height": "100%",
			"lg-max-width": "90px",
			"lg-max-height": "90px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "normal 600 96px/1.2 --fontFamily-googleNunito",
			"color": "--color1",
			"position": "absolute",
			"top": "10px",
			"left": "0px",
			"opacity": ".25",
			"children": "1"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--h4",
			"text-align": "center",
			"children": "Choose Design",
			"margin": "24px 0px 0px 0px",
			"lg-font": "700 18px/1.2 \"Nunito\", sans-serif",
			"md-font": "700 16px/1.2 \"Nunito\", sans-serif"
		}
	}
};

const CardBlock2 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(CardBlock2, { ...Box,
	defaultProps,
	overrides
});
export default CardBlock2;