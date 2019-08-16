import sanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "lxk2to5n",
  dataset: "production",
  useCdn: true
});

export const imageUrlBuilder = createImageUrlBuilder(client);
