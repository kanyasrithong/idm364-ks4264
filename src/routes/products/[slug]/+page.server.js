import { PUBLIC_SUPABASE_TABLE_ } from '$env/static/public';
import { supabase } from '$lib/server/supabase-client';

export async function load({ params }) {
  const { data: product, error: productError } = await supabase
    .from(PUBLIC_SUPABASE_TABLE_)
    .select('*')
    .eq('item_slug', params.slug)
    .single();
  
    if (productError) throw productError;

    return { product };
}
