import { SITE_URL } from "@/constants/site-constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: SITE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${SITE_URL}/projects`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
	];
}
