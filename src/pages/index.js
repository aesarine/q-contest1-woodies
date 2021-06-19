import React from "react";
import theme from "theme";
import { Theme, Link, Box, Section, Strong, Text, Image, Icon, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { FaStar } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			quarkly-title="Header"
			padding="20px 30px 20px 80px"
			box-sizing="border-box"
			position="relative"
			z-index="2"
			height="114px"
			lg-height="auto"
			lg-padding="20px 30px 20px 40px"
			xs-padding="20px 30px 20px 16px"
		>
			<Override
				slot="SectionContent"
				width="100%"
				flex-direction="row"
				justify-content="space-between"
				max-width="100%"
				align-items="center"
			/>
			<Components.Logo />
			<Components.QuarklycommunityKitMobileSidePanel
				quarkly-title="Menu"
				min-width="none"
				breakpoint="lg"
				menuPosition="right"
				xs-position="absolute"
				xs-right="30px"
			>
				<Override slot="Children" lg-height="100%" />
				<Override
					slot="Content"
					background="none"
					lg-background="--color-white"
					lg-padding="60px 40px 24px 16px"
					padding="0px 16px 0px 16px"
				/>
				<Override slot="Button Text" lg-display="none" />
				<Override slot="Cross" lg-right="32px" lg-top="24px" />
				<Box
					quarkly-title="Box"
					display="flex"
					justify-content="flex-end"
					align-items="center"
					lg-flex-direction="column"
					lg-height="100%"
					lg-align-items="flex-end"
					lg-justify-content="space-between"
				>
					<Box quarkly-title="Links" lg-width="100%" lg-margin="16px 0px 0px 0px">
						<Components.HeaderLink>
							Home
						</Components.HeaderLink>
						<Components.HeaderLink>
							About Us
						</Components.HeaderLink>
						<Components.HeaderLink>
							How it works
						</Components.HeaderLink>
						<Components.HeaderLink>
							Categories
						</Components.HeaderLink>
						<Components.HeaderLink>
							Testimony
						</Components.HeaderLink>
					</Box>
					<Components.Button1 lg-margin="24px 0px 0px 0px">
						SIGN UP
					</Components.Button1>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
			<Box
				quarkly-title="Background"
				position="absolute"
				top={0}
				right={0}
				background="--special1"
				height="768px"
				width="calc(50vw - 480px)"
				min-width="75px"
				xl-height="650px"
				lg-min-width="90px"
				lg-border-radius="0 0 0 100px"
				lg-height="600px"
				sm-display="none"
				md-height="415px"
			/>
		</Section>
		<Section quarkly-title="Home" padding="0 0 0 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="center"
				justify-content="space-between"
				position="relative"
				padding="150px 0px 200px 0px"
				xl-padding="75px 0px 100px 0px"
				lg-padding="50px 0px 75px 0px"
				md-padding="25px 0px 50px 0px"
				max-width="970px"
			/>
			<Box max-width="500px" quarkly-title="Title" md-max-width="340px">
				<Text
					font="--title"
					margin="16px 0px 24px 0px"
					lg-margin="16px 0px 16px 0px"
					md-font="400 24px/1.2 &quot;Nunito&quot;, sans-serif"
					xs-font="400 20px/1.2 &quot;Nunito&quot;, sans-serif"
				>
					Are you looking for{" "}
					<Strong>
						woodden furniture
					</Strong>
					{" "}for your place?
				</Text>
				<Text font="--h1" margin="16px 0px 24px 0px" md-font="700 48px/1.2 &quot;Nunito&quot;, sans-serif">
					This is the Right Place
				</Text>
				<Components.Button2>
					Explore Furniture
				</Components.Button2>
			</Box>
			<Box
				display="flex"
				justify-content="flex-end"
				position="absolute"
				right={0}
				z-index="1"
				quarkly-title="Image"
				top="-114px"
			>
				<Box
					quarkly-title="Background"
					position="relative"
					z-index="1"
					height="768px"
					width="370px"
					background="--special1"
					border-radius="0 0 0 100px"
					xl-width="275px"
					xl-height="650px"
					lg-display="none"
				/>
				<Image
					height="382px"
					src="https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/logo.png?v=2021-06-18T12:16:21.700Z"
					position="absolute"
					bottom="18px"
					right="250px"
					z-index="2"
					xl-height="305px"
					xl-top="320px"
					xl-right="180px"
					lg-display="none"
				/>
				<Image
					src="https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/header.png?v=2021-06-18T11:27:14.579Z"
					position="absolute"
					z-index="3"
					bottom="60px"
					width="568px"
					xl-width="426px"
					xl-top="150px"
					lg-display="none"
				/>
			</Box>
		</Section>
		<Section quarkly-title="About Us" position="relative" z-index="1" padding="0 0 0 0">
			<Override slot="SectionContent" max-width="970px" />
			<Components.BlockTitle />
			<Box
				display="flex"
				justify-content="space-between"
				align-items="center"
				sm-flex-direction="column"
				sm-align-items="flex-start"
			>
				<Box
					width="280px"
					height="380px"
					background="--special2"
					border-radius="0 100px  0 100px"
					position="relative"
					lg-width="210px"
					lg-height="285px"
					md-width="140px"
					md-height="190px"
				>
					<Image
						src="https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/logo.png?v=2021-06-18T12:16:21.700Z"
						height="382px"
						flex="1 1 auto"
						position="absolute"
						right="80px"
						top="254px"
						lg-height="305px"
						lg-top="190px"
						md-height="254px"
						md-top="95px"
						md-right="40px"
					/>
					<Image
						height="306px"
						src="https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/about1.png?v=2021-06-18T13:50:46.159Z"
						flex="1 1 auto"
						position="absolute"
						bottom={0}
						left="40px"
						lg-height="230px"
						lg-top="50px"
						md-height="154px"
						md-top="25px"
						md-left="20px"
					/>
				</Box>
				<Box max-width="440px" lg-max-width="320px" md-max-width="300px" sm-margin="16px 0px 0px 0px">
					<Text font="400 36px/1.2 --fontFamily-googleNunito" lg-font="400 24px/1.2 --fontFamily-googleNunito" xs-font="400 20px/1.2 --fontFamily-googleNunito">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							WOODIES
						</Strong>
						{" "}is the{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							home of modern wooden furniture
						</Strong>
					</Text>
					<Text font="400 24px/1.2 --fontFamily-googleNunito" lg-font="400 18px/1.2 --fontFamily-googleNunito" lg-margin="0px 0px 16px 0px" xs-font="400 16px/1.2 --fontFamily-googleNunito">
						the answer to your need for furniture with shapes, sizes and colors.{" "}
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				justify-content="space-between"
				align-items="center"
				position="relative"
				xl-position="static"
				sm-flex-direction="column-reverse"
				sm-align-items="flex-end"
			>
				<Box
					max-width="640px"
					xl-min-height="384px"
					xl-display="flex"
					xl-flex-direction="column"
					xl-justify-content="center"
					lg-min-height="288px"
					lg-max-width="510px"
					md-min-height="192px"
					md-max-width="360px"
				>
					<Text font="--title" lg-font="400 24px/1.2 --fontFamily-googleNunito" md-max-width="320px" xs-font="400 20px/1.2 --fontFamily-googleNunito">
						Customized furniture{" "}
						<Strong>
							made just for you
						</Strong>
					</Text>
					<Text font="400 24px/1.2 --fontFamily-googleNunito" lg-font="400 18px/1.2 --fontFamily-googleNunito" lg-margin="0px 0px 16px 0px" xs-font="400 16px/1.2 --fontFamily-googleNunito">
						Get it easy to adjust furniture to the shape and size of your dwelling or business.
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/about2.png?v=2021-06-18T13:50:41.747Z"
					height="384px"
					flex="0 0 auto"
					position="relative"
					bottom={0}
					right={0}
					xl-position="absolute"
					lg-height="288px"
					md-height="192px"
					sm-position="relative"
					sm-right="-5vw"
				/>
			</Box>
		</Section>
		<Section quarkly-title="How it Works" position="relative" z-index="1" padding="0 0 0 0">
			<Override slot="SectionContent" align-items="center" max-width="970px" />
			<Components.BlockTitle>
				<Override slot="text">
					<Strong>
						How to custom
					</Strong>
				</Override>
				<Override slot="text1">
					How it Works
				</Override>
			</Components.BlockTitle>
			<Box
				quarkly-title="Cards"
				display="flex"
				justify-content="space-between"
				width="100%"
				margin="0px 0px 64px 0px"
				sm-flex-wrap="wrap"
				sm-margin="0px 0px 48px 0px"
			>
				<Components.CardBlock2>
					<Override slot="text" left="2px" lg-font="normal 600 72px/1.2 --fontFamily-googleNunito" lg-left="8px" />
				</Components.CardBlock2>
				<Components.CardBlock2 sm-margin="0px 0px 20px 0px">
					<Override slot="image" src="https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/shop2.png?v=2021-06-18T13:03:11.462Z" />
					<Override
						slot="text"
						left="16px"
						lg-font="normal 600 72px/1.2 --fontFamily-googleNunito"
						lg-left="26px"
						sm-left="10px"
					>
						2
					</Override>
					<Override slot="text1">
						Area measuring
					</Override>
				</Components.CardBlock2>
				<Components.CardBlock2 sm-margin="20px 0px 0px 0px">
					<Override slot="image" src="https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/shop3.png?v=2021-06-18T13:02:59.628Z" />
					<Override
						slot="text"
						left="-20px"
						lg-font="normal 600 72px/1.2 --fontFamily-googleNunito"
						lg-left="-10px"
						sm-left="10px"
					>
						3
					</Override>
					<Override slot="text1">
						Budgeting
					</Override>
				</Components.CardBlock2>
				<Components.CardBlock2 sm-margin="20px 0px 0px 0px">
					<Override slot="image" src="https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/shop4.png?v=2021-06-18T13:02:47.965Z" />
					<Override
						slot="text"
						left="-18px"
						lg-font="normal 600 72px/1.2 --fontFamily-googleNunito"
						lg-left="-10px"
						sm-left="10px"
					>
						4
					</Override>
					<Override slot="text1">
						Production
					</Override>
				</Components.CardBlock2>
			</Box>
			<Components.Button2>
				Get Personalized Now
			</Components.Button2>
		</Section>
		<Section quarkly-title="Categories" position="relative" z-index="1" padding="0 0 0 0">
			<Override slot="SectionContent" max-width="970px" />
			<Components.BlockTitle>
				<Override slot="text">
					<Strong>
						What we have
					</Strong>
				</Override>
				<Override slot="text1">
					Categories
				</Override>
			</Components.BlockTitle>
			<Box
				quarkly-title="Cards"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="56px"
				lg-grid-gap="32px"
				md-grid-gap="24px"
				sm-grid-gap="16px"
				sm-grid-template-columns="repeat(2, 1fr)"
			>
				<Components.CardBlock3>
					<Override slot="box" margin="30px 0px 24px -16px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/cat1.png?v=2021-06-18T13:21:22.449Z) 0% 50% /auto no-repeat scroll padding-box" lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/cat1.png?v=2021-06-18T13:21:22.449Z) 0% 50% /contain no-repeat scroll padding-box" />
				</Components.CardBlock3>
				<Components.CardBlock3 background="--special2">
					<Override slot="text">
						Chair
					</Override>
					<Override slot="box" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/cat2.png?v=2021-06-18T13:21:22.453Z) 50% 50% /auto no-repeat scroll padding-box" lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/cat2.png?v=2021-06-18T13:21:22.453Z) 50% 50% /contain no-repeat scroll padding-box" />
				</Components.CardBlock3>
				<Components.CardBlock3 background="--special3">
					<Override slot="text">
						Kitchenware
					</Override>
					<Override slot="box" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/cat3.png?v=2021-06-18T13:21:22.463Z) 50% 50% /auto no-repeat scroll padding-box" lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/cat3.png?v=2021-06-18T13:21:22.463Z) 50% 50% /contain no-repeat scroll padding-box" />
				</Components.CardBlock3>
				<Components.CardBlock3 background="--special2">
					<Override slot="text">
						Electronics
					</Override>
					<Override slot="box" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/cat5.png?v=2021-06-18T13:21:22.456Z) 50% 50% /auto no-repeat scroll padding-box" lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/cat5.png?v=2021-06-18T13:21:22.456Z) 50% 50% /contain no-repeat scroll padding-box" />
				</Components.CardBlock3>
				<Components.CardBlock3 background="--special1">
					<Override slot="text">
						Book Shelf
					</Override>
					<Override slot="box" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/cat4.png?v=2021-06-18T13:21:22.455Z) 50% 50% /auto no-repeat scroll padding-box" lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/cat4.png?v=2021-06-18T13:21:22.455Z) 50% 50% /contain no-repeat scroll padding-box" />
				</Components.CardBlock3>
			</Box>
		</Section>
		<Section quarkly-title="Testimony" position="relative" z-index="1" padding="0 0 0 0">
			<Override slot="SectionContent" max-width="970px" />
			<Components.BlockTitle>
				<Override slot="text">
					<Strong>
						What they say
					</Strong>
				</Override>
				<Override slot="text1">
					Testimony
				</Override>
			</Components.BlockTitle>
			<Box display="flex" align-items="flex-start" lg-flex-wrap="wrap">
				<Components.CardBlock4 />
				<Components.CardBlock4 src="https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/dis2.png?v=2021-06-18T12:53:49.018Z" />
				<Box>
					<Box
						quarkly-title="Card"
						border-radius="0 100px 0 100px"
						background="rgba(0, 0, 0, 0)"
						flex="1 1 auto"
						border-width="1px"
						border-style="solid"
						border-color="#a8dcec"
						padding="54px 16px 54px 16px"
						lg-border-radius="0 50px 0 50px"
						md-padding="27px 16px 27px 16px"
					>
						<Box display="flex" padding="0px 0px 0 0px" margin="0px 0px 16px 0px">
							<Icon category="fa" icon={FaStar} color="#ffc107" />
							<Icon category="fa" icon={FaStar} color="#ffc107" />
							<Icon category="fa" icon={FaStar} color="#ffc107" />
							<Icon category="fa" icon={FaStar} color="#ffc107" />
							<Icon category="fa" icon={FaStar} color="#ffc107" />
						</Box>
						<Text color="--primary" font="--paragraph">
							My experience with WOODIES is a complete success, from customed furniture, range of product, modern design, purchasing experience, the delivery and newsletter. Litterally everything is great. Thank you!
						</Text>
						<Box display="flex" align-items="center" justify-content="flex-start" padding="0px 0px 0 0px">
							<Image
								width="40px"
								height="40px"
								margin="0px 10px 0px 0px"
								src="https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/photo.png?v=2021-06-18T13:36:36.957Z"
								border-radius="50%"
							/>
							<Text font="--small" color="#afafaf" margin="0 0px 0 0px">
								Sandra Dewi
								<br />
								Jakarta Selatan
							</Text>
						</Box>
					</Box>
					<Box display="flex" justify-content="space-between" align-items="center">
						<Text>
							<Link href="https://quarkly.io/preview#/index" font="300 14px/150% --fontFamily-googleNunito" color="#c4c4c4" text-decoration-line="initial">
								← 
Previous
							</Link>
						</Text>
						<Text color="--primary" font="300 14px/150% --fontFamily-googleNunito">
							Next →{" "}
						</Text>
					</Box>
					<Box display="flex" justify-content="flex-end" align-items="center">
						<Hr
							width="40px"
							border-radius="4px"
							border-width={0}
							border-color="--color-accent"
							background="--color-accent"
							height="8px"
							margin="0px 0px 0px 8px"
							padding="0px 0px 0px 0px"
						/>
						<Hr
							width="40px"
							border-radius="4px"
							border-width={0}
							border-color="#e5e5e5"
							height="8px"
							margin="0px 0px 0px 8px"
							padding="0px 0px 0px 0px"
							background="#E5E5E5"
						/>
						<Hr
							width="40px"
							border-radius="4px"
							border-width={0}
							border-color="#e5e5e5"
							height="8px"
							margin="0px 0px 0px 8px"
							padding="0px 0px 0px 0px"
							background="#E5E5E5"
						/>
						<Hr
							width="40px"
							border-radius="4px"
							border-width={0}
							border-color="#e5e5e5"
							height="8px"
							margin="0px 0px 0px 8px"
							padding="0px 0px 0px 0px"
							background="#E5E5E5"
						/>
						<Hr
							width="40px"
							border-radius="4px"
							border-width={0}
							border-color="#e5e5e5"
							height="8px"
							margin="0px 0px 0px 8px"
							padding="0px 0px 0px 0px"
							background="#E5E5E5"
						/>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			quarkly-title="Subscribe"
			position="relative"
			z-index="2"
			padding="120px 0 40px 0"
			lg-padding="90px 0 30px 0"
			md-padding="60px 0 20px 0"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="center"
				sm-flex-direction="column"
				sm-align-items="flex-start"
				max-width="970px"
			/>
			<Box flex="1 1 auto" width="50%" sm-width="100%" sm-margin="0px 0px 16px 0px">
				<Text color="--black" margin="0px 0px 0px 0px" font="--h5">
					Subscribe to our newsletter
				</Text>
				<Text color="--primary" margin="0px 0px 0px 0px" font="--paragraph">
					A monthly digest of the new WOODIES products, hot offers, and resources.
				</Text>
			</Box>
			<Components.SubscribeForm />
		</Section>
		<Section quarkly-title="Footer" position="relative" lg-padding="16px 0 16px 0">
			<Override slot="SectionContent" max-width="970px" />
			<Box
				height="0px"
				min-height="0px"
				position="relative"
				quarkly-title="Hr"
				margin="0px 0px 32px 0px"
			>
				<Hr
					width="720px"
					border-color="--color-black"
					opacity=".1"
					position="absolute"
					z-index="2"
					max-width="100%"
					quarkly-title="Line"
				/>
			</Box>
			<Box
				quarkly-title="Columns"
				display="inline-flex"
				margin="0px 0px 30px 0px"
				width="auto"
				lg-margin="0px 0px 16px 0px"
				position="relative"
				z-index="2"
				md-flex-wrap="wrap"
			>
				<Components.FooterColumn md-margin="0px 0px 0px 0px" md-width="100%" md-order="5" sm-width="100%">
					<Override
						slot="link2"
						href="tel:0128967453"
						md-display="inline-block"
						md-margin="16px 16px 16px 0px"
						sm-display="block"
					>
						(012) 8967453
					</Override>
					<Override
						slot="link3"
						href="mailto:woodies@gmail.com"
						md-display="inline-block"
						md-margin="16px 16px 16px 0px"
						sm-display="block"
					>
						woodies@gmail.com
					</Override>
					<Override slot="link4" md-display="inline-block" md-margin="16px 16px 16px 0px" sm-display="block">
						Jakarta, Indonesia
					</Override>
					<Override slot="text" display="none" />
					<Hr
						width="100%"
						border-color="--color-black"
						opacity=".1"
						quarkly-title="Line"
						display="none"
						md-display="block"
						position="relative"
						padding="0px 0px 0px 0px"
						margin="16px 0px 32px 0px"
					/>
					<Components.Logo margin="10px 0px 0px 0px" />
				</Components.FooterColumn>
				<Components.FooterColumn>
					<Override slot="text">
						Product
					</Override>
					<Override slot="link2">
						Furnitures
					</Override>
					<Override slot="link3">
						Packages
					</Override>
					<Override slot="link4">
						Services
					</Override>
				</Components.FooterColumn>
				<Components.FooterColumn>
					<Override slot="text">
						Resources
					</Override>
					<Override slot="link2" font="300 14px/150% --fontFamily-googleNunito">
						Blog
					</Override>
					<Override slot="link3">
						FAQs
					</Override>
					<Override slot="link4">
						Contact Us
					</Override>
				</Components.FooterColumn>
				<Components.FooterColumn>
					<Override slot="text">
						Company
					</Override>
					<Override slot="link2">
						About Us
					</Override>
					<Override slot="link3">
						Jobs
					</Override>
					<Override slot="link4">
						Our Team
					</Override>
				</Components.FooterColumn>
				<Components.FooterColumn>
					<Override slot="text">
						Follow Us
					</Override>
					<Override slot="link2">
						Facebook
					</Override>
					<Override slot="link3">
						Instagram
					</Override>
					<Override slot="link4">
						Twitter
					</Override>
				</Components.FooterColumn>
			</Box>
			<Text
				font="--small"
				text-align="center"
				color="--secondary"
				position="relative"
				z-index="2"
			>
				© 2020 WOODIES
			</Text>
			<Box
				display="flex"
				justify-content="flex-end"
				position="absolute"
				right={0}
				bottom={0}
				z-index="1"
				quarkly-title="Image"
				lg-opacity=".5"
				lg-position="absolute"
				md-opacity=".375"
				sm-opacity=".25"
			>
				<Box
					quarkly-title="Shadow"
					position="absolute"
					right={0}
					bottom={0}
					top={0}
					left={0}
					z-index="1"
					box-shadow="inset 50px 50px 100px 50px --color-white"
				/>
				<Image height="455px" src="https://uploads.quarkly.io/60cc6cbd42a3a0001ee77975/images/footer.png?v=2021-06-18T11:27:36.873Z" position="relative" />
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});