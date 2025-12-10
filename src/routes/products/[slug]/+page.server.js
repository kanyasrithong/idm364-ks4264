import { error } from '@sveltejs/kit';
import getPostFromDatabase from '$lib/server/posts';

export async function load({ params }) {
  const post = await getPostFromDatabase(params.slug)
    if (post) {
      return post;
    }

  throw error(404, 'Not found');
}
