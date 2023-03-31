import { Client } from "@notionhq/client";
import { NextResponse } from 'next/server';

const notion = new Client({ auth: process.env.NOTION_INTEGRATION_VITA_DEV_POST });
const databaseId = process.env.NOTION_DATABASE_ID_VITA_DEV_POST;

export async function GET() {
  const params: any = { 
    database_id: databaseId,
    filter: {
      "and": [
        {
          "property": "public",
          "checkbox": { "equals": true }
        },
      ]
    }
  };
  const response = await notion.databases.query(params);
  return NextResponse.json(response);
}
