import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "#",
	"display": "inline-block",
	"margin": "0px 48px 0px 0px",
	"font": "--paragraph",
	"text-decoration-line": "initial",
	"color": "--primary",
	"hover-color": "--accent",
	"active-color": "--accent",
	"transition": "--color",
	"children": "Some text",
	"xl-margin": "0px 24px 0px 0px",
	"lg-display": "block",
	"lg-text-align": "right",
	"lg-margin": "0px 0px 0px 0px",
	"lg-font": "300 18px/150% --fontFamily-googleNunito",
	"lg-padding": "4px 0px 4px 0px",
	"padding": "4px 0px 4px 0px"
};
const overrides = {};

const HeaderLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(HeaderLink, { ...Link,
	defaultProps,
	overrides
});
export default HeaderLink;