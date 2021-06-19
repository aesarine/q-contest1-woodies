import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"children": "Button",
	"font": "--paragraph",
	"color": "--white",
	"background": "--color-accent",
	"border-radius": "6px",
	"transition": "--backgroundColor",
	"hover-background": "--color-primary",
	"focus-background": "--color-primary",
	"focus-box-shadow": "none"
};
const overrides = {};

const Button2 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(Button2, { ...Button,
	defaultProps,
	overrides
});
export default Button2;