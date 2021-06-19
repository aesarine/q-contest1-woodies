import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Logo",
	"display": "flex",
	"justify-content": "flex-start",
	"align-items": "center",
	"flex": "0 0 auto"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/logo.svg?v=2021-06-18T10:14:37.770Z",
			"width": "32px",
			"height": "32px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--primary",
			"letter-spacing": "6px",
			"margin": "0px 0px 0px 8px",
			"children": "WOODIES",
			"font": "--h4"
		}
	}
};

const Logo = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		<Text {...override("text")} />
		{children}
	</Box>;
};

Object.assign(Logo, { ...Box,
	defaultProps,
	overrides
});
export default Logo;