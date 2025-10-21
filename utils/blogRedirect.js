import { getAvailableBlogIds } from "../data/blogs/index.js";

export const redirectToRandomBlog = (currentBlogId, router) => {
  const allBlogIds = getAvailableBlogIds();
  const otherBlogIds = allBlogIds.filter((id) => id !== currentBlogId);

  if (otherBlogIds.length === 0) {
    return;
  }

  const randomIndex = Math.floor(Math.random() * otherBlogIds.length);
  const randomBlogId = otherBlogIds[randomIndex];

  router.push(`/blogs/${randomBlogId}`);
};
