import type { Metadata } from "next";
import { SITE_INFO, SITE_URL } from "@/constants/site-constants";

export const baseMetaData: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: SITE_INFO.title,
	description: SITE_INFO.description,
	openGraph: {
		title: SITE_INFO.title,
		description: SITE_INFO.description,
		url: SITE_URL,
		siteName: SITE_INFO.title,
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: SITE_INFO.title,
		description: SITE_INFO.description,
	},
	pinterest: {
		richPin: false,
	},
	robots: {
		index: true,
		follow: true,
	},
	appleWebApp: {
		capable: true,
		title: SITE_INFO.title,
	},
};
