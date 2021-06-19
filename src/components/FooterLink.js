import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "#",
	"children": "Some text",
	"font": "300 14px/150% --fontFamily-googleNunito",
	"text-decoration-line": "initial",
	"color": "--secondary",
	"hover-color": "--accent",
	"active-color": "--accent",
	"transition": "--color",
	"margin": "16px 0px 16px 0px",
	"display": "block"
};
const overrides = {};

const FooterLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(FooterLink, { ...Link,
	defaultProps,
	overrides
});
export default FooterLink;