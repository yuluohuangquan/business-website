import { NextRequest, NextResponse } from 'next/server';
import { getStrapiServerUrl } from '@/lib/strapi/config';

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const strapiUrl = getStrapiServerUrl();
  const query = request.nextUrl.searchParams.toString();
  const url = `${strapiUrl}/api/articles/${id}${query ? `?${query}` : ''}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = process.env.STRAPI_API_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers,
    cache: 'no-store',
  });

  const body = await response.json();
  return NextResponse.json(body, { status: response.status });
}
