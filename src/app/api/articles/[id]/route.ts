import { NextRequest, NextResponse } from 'next/server';
import { fetchNocoRecordById } from '@/lib/nocodb/articles';
import { normalizeRecord } from '@/lib/nocodb/normalize';

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;

  try {
    const response = await fetchNocoRecordById(id);

    return NextResponse.json({
      data: normalizeRecord({ id: response.id, fields: response.fields }),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to fetch article';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
