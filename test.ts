import { parse } from './src';

(async () => {
    console.log('Hello World');
    const data = await parse('https://www.city.fukuoka.lg.jp/data/open/rss/RSS_7354.xml?20180712101402');
    console.log(data);
})();
