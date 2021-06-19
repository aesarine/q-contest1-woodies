import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
import FooterLink from "./FooterLink";
const defaultProps = {
	"quarkly-title": "Column",
	"margin": "0px 5% 0px 0px",
	"md-width": "20%",
	"sm-width": "45%"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--h5",
			"children": "Some text"
		}
	},
	"link2": {
		"kind": "Link2",
		"props": {}
	},
	"link3": {
		"kind": "Link2",
		"props": {}
	},
	"link4": {
		"kind": "Link2",
		"props": {}
	}
};

const FooterColumn = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		{children}
		<FooterLink {...override("link2")} />
		<FooterLink {...override("link3")} />
		<FooterLink {...override("link4")} />
	</Box>;
};

Object.assign(FooterColumn, { ...Box,
	defaultProps,
	overrides
});
export default FooterColumn;