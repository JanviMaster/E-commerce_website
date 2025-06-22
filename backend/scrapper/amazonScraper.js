// const axios = require("axios");
// const cheerio = require("cheerio");

// const scrapeAmazon = async (query) => {
//   try {
//     const url = `https://www.amazon.in/s?k=${encodeURIComponent(query)}`;
//     const { data } = await axios.get(url, {
//       headers: {
//         "User-Agent": "Mozilla/5.0", // mimic a browser
//       },
//     });

//     const $ = cheerio.load(data);
//     const results = [];

//     $(".s-result-item").each((_, el) => {
//       const title = $(el).find("h2 span").text().trim();
//       const link =
//         "https://www.amazon.in" + $(el).find("h2 a").attr("href");
//       const price = $(el).find(".a-price-whole").first().text().trim();
//       const image = $(el).find("img.s-image").attr("src");

//       if (title && price && link && image) {
//         results.push({ title, price, link, image });
//       }
//     });

//     return results.slice(0, 5); // Return top 5 items
//   } catch (error) {
//     console.error("Amazon Scrape Error:", error.message);
//     return [];
//   }
// };

// module.exports = scrapeAmazon;
