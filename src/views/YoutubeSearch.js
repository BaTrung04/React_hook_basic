import "./Blog.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

const YoutubeSearch = () => {
    const [videos, setvideos] = useState([]);
    const [query, setquery] = useState([]);

    useEffect(() => {}, []);

    const handleSearchYt = async () => {
        let res = await axios({
            method: "GET",
            url: "https://www.googleapis.com/youtube/v3/search",
            params: {
                part: "snippet",
                maxResults: "20",
                key: "AIzaSyCJ14J-v6nVHxl0hzQ7Dkaqj_J9aq8OOig",
                type: "video",
                q: query,
            },
        });
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {
                raw.map((item) => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object);
                });
            }
            setvideos(result);
        }
        console.log(">>Check res youtebu: ", res);
    };
    return (
        <div className="youtube-search-container">
            <div className="yt-search">
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(event) => setquery(event.target.value)}
                />
                <button onClick={handleSearchYt}>Search</button>
            </div>
            {videos &&
                videos.length > 0 &&
                videos.map((item) => {
                    return (
                        <div className="yt-result" key={item.id}>
                            <div className="left">
                                <iframe
                                    className="iframe-yt"
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title="Ngày Em Đẹp Nhất - Tama x Bell「Lofi Ver」/ Vì ngày em đẹp nhất là ngày anh mất em!!!"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="right">
                                <div className="title">{item.title}</div>
                                <div className="created-up">
                                    {item.createdAt}
                                </div>
                                <div className="author">
                                    Author: {item.author}
                                </div>
                                <div className="description">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};
export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "5chfyM1A1_AkkIp-fSmdQMMHxEA",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 1000000,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "wJhXT0IufhmIC3Z3zktUtNUSNaI",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "lYAhSy0okK4"
//         },
//         "snippet": {
//           "publishedAt": "2023-11-23T17:00:40Z",
//           "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
//           "title": "Fast Food Mystery Box Challenge: Iconic Sides!",
//           "description": "Fast food mystery box is back with all of your favorite sides from the most iconic fast food restaurants in the world! Which side is ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/lYAhSy0okK4/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/lYAhSy0okK4/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/lYAhSy0okK4/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "REACT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-11-23T17:00:40Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "2ymRsmKqQiB55zqiOxzaZpNQ-qk",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "CjB0l1VZ8AI"
//         },
//         "snippet": {
//           "publishedAt": "2023-11-22T17:00:10Z",
//           "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
//           "title": "Boys Vs. Girls: Disney Splash Trivia Battle!",
//           "description": "Disney fans are put to the ultimate Disney quiz and any wrong answer to answer by their opponent will get them soaked!",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/CjB0l1VZ8AI/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/CjB0l1VZ8AI/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/CjB0l1VZ8AI/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "REACT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-11-22T17:00:10Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "q6-iem4e0lqTi4BAs6sJQbc66VU",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "SqcY0GlETPk"
//         },
//         "snippet": {
//           "publishedAt": "2023-03-12T08:00:07Z",
//           "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
//           "title": "React Tutorial for Beginners",
//           "description": "React JS Tutorial for Beginners - Learn React 18 with TypeScript and build awesome frontend app! - Want to learn more? Get my ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/SqcY0GlETPk/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/SqcY0GlETPk/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Programming with Mosh",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-03-12T08:00:07Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "OMVdPLDaHR8_rZ4r2V3bf7SVhZo",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "Y7DAHTEV4JY"
//         },
//         "snippet": {
//           "publishedAt": "2023-11-21T16:59:52Z",
//           "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
//           "title": "Gen-Z &amp; Millennials Test 11 of TikTok&#39;s Craziest Beauty Products!",
//           "description": "Use REACT55 to get 55% off your first month at Scentbird https://sbird.co/3Fmcmg7 This month I received... Brilliante by Vince ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/Y7DAHTEV4JY/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/Y7DAHTEV4JY/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/Y7DAHTEV4JY/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "REACT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-11-21T16:59:52Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "kIw29EK3QiLcTT_B08CcAT0O0J4",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "cPN4H0sSCHQ"
//         },
//         "snippet": {
//           "publishedAt": "2023-01-16T16:58:40Z",
//           "channelId": "UComsbK6jkwg3lZ5JuGAzsKQ",
//           "title": "Switch Disco - REACT (feat. Ella Henderson) (Lyric Video)",
//           "description": "Stream \"REACT\" here: https://switchdisco.lnk.to/REACToutnow INSTAGRAM: https://www.instagram.com/switchdisco FACEBOOK: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/cPN4H0sSCHQ/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/cPN4H0sSCHQ/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/cPN4H0sSCHQ/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "SwitchDiscoVEVO",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-01-16T16:58:40Z"
//         }
//       }
//     ]
//   }
