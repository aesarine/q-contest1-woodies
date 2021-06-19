import React from "react";
import atomize from "@quarkly/atomize";
import { useOverrides } from "@quarkly/components";
import { Input, Box } from "@quarkly/widgets";
import Button2 from "./Button2";
const Form = atomize.form();
const defaultProps = {
	"flex": "1 1 auto",
	"width": "calc(50% - 30px)",
	"display": "flex",
	"justify-content": "flex-end",
	"align-items": "center",
	"margin": "0px 0px 0px 0px",
	"padding": "0px 0px 0px 30px",
	"sm-width": "100%",
	"sm-padding": "0px 0px 0px 0px"
};
const overrides = {
	"input": {
		"kind": "Input",
		"props": {
			"border-radius": "6px 0 0 6px",
			"placeholder": "Your email address",
			"color": "--primary",
			"width": "100%",
			"border-color": "--color-accent",
			"font": "--paragraph"
		}
	},
	"button2": {
		"kind": "Button2",
		"props": {
			"border-radius": "0 6px 6px 0",
			"children": "Subscribe"
		}
	}
};

const SubscribeForm = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Form {...rest}>
		<Input {...override("input")} />
		<Button2 {...override("button2")} />
		{children}
	</Form>;
};

Object.assign(SubscribeForm, { ...Box,
	defaultProps,
	overrides
});
export default SubscribeForm;