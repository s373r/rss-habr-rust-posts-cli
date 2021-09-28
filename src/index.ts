import Parser, { Item } from 'rss-parser';

function updateHabrPostLinkIfNeeded(link: string): string {
  const url = new URL(link);

  if (url.host !== 'habr.com') {
    return link;
  }

  url.search = '';

  return url.toString();
}

function postProcessRssItem(item: Item): Item {
  if (!item.link) {
    return item;
  }

  item.link = updateHabrPostLinkIfNeeded(item.link);

  return item;
}

async function main(): Promise<void> {
  const defaultRssFeed = 'https://habr.com/ru/rss/hub/rust/all/';
  const parser = new Parser();
  const link = process.env['RSS_FEED'] ?? defaultRssFeed;
  const feed = await parser.parseURL(link);

  for (const item of feed.items.map(postProcessRssItem)) {
    console.log(item.title);
    console.log(item.link);

    if (item.isoDate) {
      console.log(new Date(item.isoDate).toLocaleString());
    }

    console.log();
  }
}

main();
