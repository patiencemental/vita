const notionSiteDomain = 'coco0719.notion.site';
const notionDomain = 'www.notion.so';

/**
 * Notion DB에서 가져온 URL을 본 함수의 로직으로 변환해줘야 링크 클릭 시 노션 페이지로 바로 이동할 수 있음.
 */
export function convertNotionDomainToSiteDomain(url: string): string {
  return url.replace(notionDomain, notionSiteDomain);
}
