import type { NextApiRequest, NextApiResponse } from "next";
import UserAgent from 'user-agents'
import { HLTGame } from "../../utils/types";


const BASE_URL: string = 'https://howlongtobeat.com/';
const SEARCH_URL: string = `${BASE_URL}api/search`;
const IMAGE_URL: string = `${BASE_URL}games/`;

const searchParams = {
  "searchType": "games",
  "searchPage": 1,
  "size": 5,
  "searchOptions": {
    "games": {
      "userId": 0,
      "platform": "",
      "sortCategory": "popular",
      "rangeCategory": "main",
      "rangeTime": {
        "min": 0,
        "max": 0
      },
      "gameplay": {
        "perspective": "",
        "flow": "",
        "genre": ""
      },
      "modifier": ""
    },
    "users": {
      "sortCategory": "postcount"
    },
    "filter": "",
    "sort": 0,
    "randomizer": 0
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HLTGame[]>
) {
  const { game } = req.query as { game: string };
  const games = await fetch(SEARCH_URL, {
    method: "POST",
    body: JSON.stringify({
      "searchTerms": [
        game
      ],
      ...searchParams,
    }),
      headers: {
        'User-Agent': new UserAgent().toString(),
        'content-type': 'application/json',
        'origin': 'https://howlongtobeat.com/',
        'referer': 'https://howlongtobeat.com/'
      },
  }).then(rsp => rsp.json())
  const result = games.data.map((game) => ({
    ...game,
    name: game.game_name,
    image: IMAGE_URL + game.game_image,
    value: game.game_name,
  })) as HLTGame[]
  res.status(200).json(result as any);
}
