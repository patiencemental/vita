import { getFormattedDate } from '@/util/date';
import { convertNotionDomainToSiteDomain } from '@/util/notion';

export async function getNotionPublicPosts() {
  const response = await fetch('/api/notion-posts');
  const data = await response.json();
  const publicPosts = data.results.map((post: any) => {
    return {
      title: post.properties.post.title[0].plain_text,
      createdTime: getFormattedDate(post.created_time),
      lastEditedTime: getFormattedDate(post.last_edited_time),
      url: convertNotionDomainToSiteDomain(post.url),
      emoji: post.icon.emoji,
      topic: post.properties.topic.select.name,
      subTopics: post.properties['sub-topic'].multi_select.map((subTopic: any) => subTopic.name),
      coverImageUrl: post.properties['post-cover-image-url'].url,
    };
  });
  return publicPosts;
}