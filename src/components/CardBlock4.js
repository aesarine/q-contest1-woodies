import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image } from "@quarkly/widgets";
const defaultProps = {
	"height": "320px",
	"flex": "0 0 auto",
	"border-radius": "100px 0 100px 0",
	"margin": "0px 40px 0px 0px",
	"box-shadow": "--card",
	"src": "https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/dis1.png?v=2021-06-18T12:53:57.928Z",
	"lg-margin": "0px 32px 32px 0px",
	"lg-border-radius": "50px 0 50px 0",
	"md-height": "240px",
	"md-margin": "0px 16px 16px 0px",
	"sm-width": "calc(50% - 16px)",
	"sm-max-width": "175px",
	"object-fit": "cover"
};
const overrides = {};

const CardBlock4 = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Image {...rest} />;
};

Object.assign(CardBlock4, { ...Image,
	defaultProps,
	overrides
});
export default CardBlock4;