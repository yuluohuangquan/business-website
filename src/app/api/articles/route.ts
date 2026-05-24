import { NextRequest, NextResponse } from 'next/server';
import { fetchNocoRecords } from '@/lib/nocodb/articles';
import { normalizeRecord } from '@/lib/nocodb/normalize';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const response = await fetchNocoRecords(searchParams);

    return NextResponse.json({
      data: response.records.map((record) => normalizeRecord(record)),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to fetch articles';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
