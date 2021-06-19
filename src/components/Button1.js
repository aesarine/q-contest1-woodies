import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"children": "Button",
	"color": "--primary",
	"background": "--transparent",
	"border-width": "1px",
	"border-style": "solid",
	"border-color": "--color-primary",
	"border-radius": "6px",
	"transition": "--borderColor",
	"hover-border-color": "--color-accent",
	"active-border-color": "--color-accent",
	"focus-box-shadow": "none",
	"focus-border-color": "--color-accent",
	"font": "700 16px/150% --fontFamily-googleNunito",
	"padding": "8px 36px 8px 36px"
};
const overrides = {};

const Button1 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(Button1, { ...Button,
	defaultProps,
	overrides
});
export default Button1;