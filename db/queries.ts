import { unstable_noStore as noStore } from 'next/cache';
import { sql } from './postgres';

export async function getBlogViews() {
    if (!process.env.POSTGRES_URL) {
      return [];
    }
  
    noStore();
    let views = await sql`
      SELECT count
      FROM views
    `;
  
    return views.reduce((acc, curr) => acc + Number(curr.count), 0);
  }
  
  export async function getViewsCount(): Promise<
    { slug: string; count: number }[]
  > {
    if (!process.env.POSTGRES_URL) {
      return [];
    }
  
    noStore();
    return sql`
      SELECT slug, count
      FROM views
    `;
  }