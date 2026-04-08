import { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "./site";

export const createMetadata = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata => ({
  title: `${title} | ${SITE_NAME}`,
  description,
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `https://valuedsociety.com${path ?? ""}`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    title: `${title} | ${SITE_NAME}`,
    description,
    card: "summary_large_image",
  },
});
