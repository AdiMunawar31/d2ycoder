import { URLShortenInterface } from "@/lib/interfaces/features/url-shortener";

export const listUrlShorten: URLShortenInterface[] = [
  {
    id: "0",
    title: "Tiny URL",
    url: "https://tinyurl.com/api-create.php?url=",
  },
  {
    id: "1",
    title: "Bitly",
    url: "https://api-ssl.bitly.com/v4/shorten", // Requires API Key
  },
  {
    id: "2",
    title: "Cutt.ly",
    url: "https://cutt.ly/api/api.php?key=da6308b355422ca0d9a167d4347feaad0b377&short=",
  },
  {
    id: "3",
    title: "Rebrandly",
    url: "https://api.rebrandly.com/v1/links", // Requires API Key
  },
  {
    id: "4",
    title: "is.gd",
    url: "https://is.gd/create.php?format=simple&url=",
  },
  {
    id: "5",
    title: "T2M",
    url: "https://t2mio.com/api/shorten", // Requires API Key
  },
];
