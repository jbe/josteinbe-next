import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "lxk2to5n",
  dataset: "production",
  useCdn: true
});
