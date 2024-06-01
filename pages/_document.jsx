import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="es">
			<Head />
			<meta
				name="keywords"
				content="Traverso Alex Portfolio, Desarrollador Front-End - HTML5 - CSS - Javascript - Jquery - React Js - Next Js - Node Js - Git - Mongo DB - SQL - Prisma - Wordpress - Adobe Illustrator - Adobe Photoshop - Adobe Premiere - Figma"
			></meta>
			<meta property="og:type" content="website"></meta>
			<meta name="copyright" content="Alex Traverso"></meta>
			<meta name="language" content="Spanish"></meta>
			<meta name="author" content="Alex Traverso"></meta>
			<meta name="googlebot" content="index, follow, all"></meta>
			<meta name="geo.region" content="AR-B"></meta>
			<meta name="geo.placename" content="Belén de Escobar"></meta>
			<meta name="geo.position" content="-34.3483;-58.7997"></meta>
			<meta name="ICBM" content="-34.3483, -58.7997"></meta>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
