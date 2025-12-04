import { error } from '@sveltejs/kit';
import { PUBLIC_SUPABASE_TABLE_ } from '$env/static/public';
import { supabase } from '$lib/supabase-client';

export async function load () {
  const { data } = await supabase.from(PUBLIC_SUPABASE_TABLE_).select('*');

  if (!data) throw error(500, 'Failed to reach products');

  return { products: data ?? [] };
}

