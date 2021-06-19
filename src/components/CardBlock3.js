import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
import Button1 from "./Button1";
const defaultProps = {
	"padding": "24px 16px 24px 16px",
	"background": "--special1",
	"border-radius": "0 100px 0 100px",
	"lg-border-radius": "0 50px 0 50px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"color": "--primary",
			"margin": "0px 0px 0px 0px",
			"padding": "0px 0px 0px 0px",
			"font": "--h4",
			"lg-font": "700 18px/1.2 \"Nunito\", sans-serif",
			"children": "Desk"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"height": "240px",
			"lg-height": "180px",
			"md-height": "120px",
			"width": "100%",
			"margin": "30px 0px 24px 0px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"justify-content": "flex-end"
		}
	},
	"button1": {
		"kind": "Button1",
		"props": {
			"children": "Shop Now",
			"md-padding": "0px 0px 0px 0px",
			"md-border-width": "0px 0px 1px 0px",
			"md-border-radius": "0px"
		}
	}
};

const CardBlock3 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Box {...override("box")} />
		<Box {...override("box1")}>
			<Button1 {...override("button1")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(CardBlock3, { ...Box,
	defaultProps,
	overrides
});
export default CardBlock3;