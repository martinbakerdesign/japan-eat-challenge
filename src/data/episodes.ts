import { Tiers } from '$constants';

// export const episodes = [
//     {
//         id: 1,
// 		vidId: 'ej5-l_00rfY',
//         restaurant: 'Sannikuya (三肉屋)',
// 		tier: Tiers.B,
// 		date: '2023-09-20',
// 		dish: 'Beef Karubi and Karaage Set',
// 		website: 'https://3nomiya.net/shops/sannikuya.html'
//     },
//     {
//         id: 2,
//         vidId: 'wjTBgtZUpIw',
//         restaurant: 'Katsudon Yoshibei (かつ丼吉兵衛)',
//         dish: 'Sauce Katsudon',
//         tier: Tiers.A,
//         date: '2023-09-27',
//         website: 'https://3nomiya.net/shops/yoshibei.html'
//     },
//     {
//         id: 3,
//         vidId: 'C8SvRGoUNCA',
//         restaurant: 'Ichiten Ichimen (一天一面)',
//         dish: 'Ranshu with Suigyoza',
//         tier: Tiers.S,
//         date: '2023-10-04',
//         website: 'https://3nomiya.net/shops/ichiten-ichimen.html'
//     },
//     {
//         id: 4,
//         vidId: 'z2bi5cQ7BCc',
//         restaurant: 'Shiki Aisai (四季愛菜ダイニング)',
//         dish: 'Chicken Meatball Daily Lunch Special',
//         tier: Tiers.A,
//         date: '2023-10-11',
//         website: 'https://www.instagram.com/siki.aisai.dining/'
//     },
//     {
//         id: 5,
//         vidId: 'GxfjYKZ7K2Q',
//         restaurant: 'SEN Vietnamese Restaurant (SEN ベトナムレストラン)',
//         dish: 'Beef Pho Lunch Set and Banh Mi',
//         tier: Tiers.C,
//         date: '2023-10-18',
//         website: 'https://tabelog.com/hyogo/A2801/A280101/28065370/'
//     },
//     {
//         id: 6,
//         vidId: 'xFTE3UiZHhY',
//         restaurant: 'ALOK',
//         dish: 'Ladies Lunch',
//         tier: Tiers.A,
//         date: '2023-10-25',
//         website: 'https://3nomiya.net/shops/alok.html'
//     },
//     {
//         id: 7,
//         vidId: '68RI9TnLcus',
//         restaurant: 'Marunaka (マルナカ)',
//         dish: 'Horumon',
//         tier: Tiers.C,
//         date: '2023-11-01',
//         website: 'https://maru-naka.net/'
//     },
//     {
//         id: 8,
//         vidId: '4r1pSAdk6uw',
//         restaurant: 'Yōshoku no ACE (洋食のエース)',
//         dish: 'A Lunch Set',
//         tier: Tiers.S,
//         date: '2023-11-13',
//         website: 'https://tabelog.com/hyogo/A2801/A280101/28060098/'
//     },
//     {
//         id: 9,
//         vidId: 'kZTJnYZUa_s',
//         restaurant: 'Kamakura Soup With Noodles (どうとんぼり神座　三宮店)',
//         dish: 'Oishi Ramen and Karaage',
//         tier: Tiers.B,
//         date: '2023-11-18',
//         website: 'https://3nomiya.net/shops/kamukura.html'
//     },
//     {
//         id: 10,
//         vidId: 'MWJ9CS-penQ',
//         restaurant: 'Katsumaru (ハンバーグ専門店克まる)',
//         dish: 'Hamburger Steak',
//         tier: Tiers.B,
//         date: '2023-11-26',
//         website: 'https://3nomiya.net/shops/katsumaru.html'
//     },
//     {
//         id: 11,
//         vidId: '5aZKtDgPiBI',
//         restaurant: 'Cocco (神戸COCCO)',
//         dish: 'Melted Cheese Topped Karaage Bowl',
//         tier: Tiers.C,
//         date: '2023-12-03',
//         website: 'https://tabelog.com/hyogo/A2801/A280101/28038238/'
//     },
//     {
//         id: 12,
//         vidId: 'r1HEmpYLkR4',
//         restaurant: 'Kumoitei (雲井亭)',
//         dish: 'A Lunch Set with Subuta',
//         tier: Tiers.D,
//         date: '2023-12-10',
//         website: 'https://tabelog.com/hyogo/A2801/A280101/28033395/'
//     },
//     {
//         id: 13,
//         vidId: 'garxXwkjNHE',
//         restaurant: 'Ichirō (ギョーザ専門店イチロー)',
//         dish: 'Gyoza',
//         tier: Tiers.C,
//         date: '2023-12-18',
//         website: 'https://tabelog.com/hyogo/A2801/A280101/28001001/'
//     },
//     {
//         id: 14,
//         vidId: 'A1U-fUe0Kzw',
//         restaurant: 'Ittottei (いっとっ亭)',
//         dish: 'Original Beef Curry',
//         tier: Tiers.S,
//         date: '2023-12-27',
//         website: 'https://tabelog.com/hyogo/A2801/A280101/28002330/'
//     },
//     {
//         id: 15,
//         vidId: 'nDirYyU5QNM',
//         restaurant: 'Hoi An (ホイアン)',
//         dish: 'Lunch Set B with Beef Pho',
//         tier: Tiers.C,
//         date: '2024-01-03',
//         website: 'https://tabelog.com/hyogo/A2801/A280101/28044495/'
//     },
//     {
//         id: 16,
//         vidId: 'DA1If_InmoY',
//         restaurant: 'Butameshiya (豚めし家)',
//         website: 'https://3nomiya.net/shops/butameshiya.html'
//         dish: 'Thick Cut Pork Bowl',
//         tier: Tiers.B,
//         date: '2024-01-11',
//     },
//     {
//         id: 17,
//         vidId: 'AqvD2yBdEok',
//         restaurant: 'Ryu-Ryu (RYU-RYU 三宮店)',
//         dish: 'Lunch Set with Bacon and Vegetable Pasta in Tomato Sauce',
//         tier: Tiers.A,
//         date: '2024-01-19',
//         website: 'https://3nomiya.net/shops/ryuryu.html'
//     },
//     {
//         id: 18,
//         vidId: 'FJpXCjni7wE',
//         restaurant: 'Tonkatsu Nagataen (とんかつながた園)',
//         dish: 'Tonkatsu Lunch Set',
//         tier: Tiers.A,
//         date: '2024-02-04',
//         website: 'https://3nomiya.net/shops/nagataen.html'
//     },
//     {
//         id: 19,
//         vidId: 'mmKdOGAP8yM',
//         restaurant: 'Metro Ramen',
//         dish: 'Garlic Duck Ramen',
//         tier: Tiers.B,
//         date: '2024-02-16',
//         website: 'https://tabelog.com/hyogo/A2801/A280101/28054153/'
//     },
//     {
//         id: 20,
//         vidId: '2-yEUxPFdik',
//         restaurant: 'Kojanto (こじゃんと)',
//         dish: 'Tosadon',
//         tier: Tiers.A,
//         date: '2024-02-25',
//         website: 'https://tabelog.com/hyogo/A2801/A280101/28055016/'
//     },
//     {
//         id: 21,
//         vidId: '38v8A2voDWY',
//         restaurant: 'Kōfukugen (幸福源)',
//         dish: 'Fried Rice and Karaage Set',
//         tier: Tiers.B,
//         date: '2024-03-03',
//         website: 'https://tabelog.com/hyogo/A2801/A280101/28040344/'
//     },
//     {
//         id: 22,
//         vidId: 'ev0802cewqY',
//         restaurant: 'Nagata Honjoken (長田本庄軒)',
//         dish: 'Bokkake Yakisoba and Sobameshi',
//         tier: Tiers.A,
//         date: '2024-03-11',
//         website: 'https://3nomiya.net/shops/nagata-honjoken.html'
//     },
//     {
//         id: 23,
//         vidId: 'o8RJMd5oHKo',
//         restaurant: 'Makino (まきの)',
//         dish: 'Tempura Lunch Set',
//         tier: Tiers.S,
//         date: '2024-03-24',
//         website: 'https://3nomiya.net/shops/makino.html'
//     },
//     {
//         id: 24,
//         vidId: 'cVDQHGfSVjc',
//         restaurant: 'Alisha (ミニ ネパール レストラン&バー アリサ)',
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28066134/'
//         dish: 'Ladies Lunch',
//         tier: Tiers.A,
//         date: '2024-03-31',
//     },
//     {
//         id: 25,
//         vidId: 'kIzjnCHGWhc',
//         restaurant: 'I will show you the difference between bolognese and meat sauce (ボロネーゼとミートソースの違いを教えてあげる)',
//         dish: 'Aged Cheese Pasta',
//         tier: Tiers.B,
//         date: '2024-04-11',
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28065783/'
//     },
//     {
// 		id: 26,
// 		vidId: '1DuGXoMlM6M',
// 		restaurant: 'Kōyōen (餃子屋 紅葉園)',
// 		dish: 'Gyoza (boiled and fried)',
// 		description: '',
// 		date: '2024-04-18',
// 		tier: Tiers.S,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28005613/'
// 	},
// 	{
// 		id: 27,
// 		vidId: 'Ea8shyflqtU',
// 		restaurant: 'Tomako (真っ赤ならーめん とまこ)',
// 		dish: 'Tomato Ramen',
// 		description: '',
// 		date: '2024-04-26',
// 		tier: Tiers.S,
// 		website: 'https://3nomiya.net/shops/tomaco.html'
// 	},
// 	{
// 		id: 28,
// 		vidId: 'bIcGdwGh7BE',
// 		restaurant: 'Mori no Nakamatachi (森のなかまたち)',
// 		dish: 'Minchikatsu Set',
// 		description: '',
// 		date: '2024-05-05',
// 		tier: Tiers.F,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28008563/'
// 	},
// 	{
// 		id: 29,
// 		vidId: '61e6dLmi-fo',
// 		restaurant: 'Kenchan (ステーキ屋 ケンちゃん)',
// 		dish: 'Lunch Set B',
// 		description: '',
// 		date: '2024-05-14',
// 		tier: Tiers.B,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28068165/'
// 	},
// 	{
// 		id: 30,
// 		vidId: 'gG1B6ae51uU',
// 		restaurant: 'Hyakumien (百味園)',
// 		dish: 'Subuta Set',
// 		description: '',
// 		date: '2024-05-20',
// 		tier: Tiers.D,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28068152/'
// 	},
// 	{
// 		id: 31,
// 		vidId: 'Y41XbH1wOXo',
// 		restaurant: 'Sake Bar Nada (酒房 灘)',
// 		dish: 'Oden and Karaage Set',
// 		description: '',
// 		date: '2024-05-29',
// 		tier: Tiers.C,
// 		website: 'https://3nomiya.net/shops/nada.html'
// 	},
// 	{
// 		id: 32,
// 		vidId: 'f_cefM3cxhY',
// 		restaurant: 'Ramen Hachibankan (らーめん八番館)',
// 		dish: 'Ramen, Gyoza, Fried Rice, and Karaage Set',
// 		description: '',
// 		date: '2024-06-09',
// 		tier: Tiers.B,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28011339/'
// 	},
// 	{
// 		id: 33,
// 		vidId: 'zZ0xTQO9sZY',
// 		restaurant: 'Pasta & Pizza Del Papa (パスタ＆ピッツァ デルパパ)',
// 		dish: 'Set Menu with Pizza and Salad',
// 		description: '',
// 		date: '2024-06-17',
// 		tier: Tiers.B,
// 		website: 'https://3nomiya.net/shops/delpapa.html'
// 	},
// 	{
// 		id: 34,
// 		vidId: 'P80K1xfUFas',
// 		restaurant: 'Prizm (カレーの店 ぷりずむ)',
// 		dish: 'Jumbo Chicken Katsu Curry',
// 		description: '',
// 		date: '2024-06-27',
// 		tier: Tiers.A,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28045958/'
// 	},
// 	{
// 		id: 35,
// 		vidId: 'FQPrcgSMmF4',
// 		restaurant: 'Bai Kung Fu Noodles (白家功夫拉麺)',
// 		dish: 'Ranshu (Lanzhou) Noodles',
// 		description: '',
// 		date: '2024-07-03',
// 		tier: Tiers.A,
// 		website: 'https://3nomiya.net/shops/bekka-kanfuramen.html'
// 	},
// 	{
// 		id: 36,
// 		vidId: 'WSkP7gmnFPk',
// 		restaurant: 'Gohanya (ごはんとみそ汁と…ごはんや)',
//         dish: 'Lunch Set With Chicken Nanban, Ebifry and Hamburg Steak',
// 		description: '',
// 		date: '2024-07-13',
// 		tier: Tiers.S,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28070163/'
// 	},
// 	{
// 		id: 37,
// 		vidId: '5RPH7_cmWcQ',
// 		restaurant: 'Bokkake no Taku (ぼっかけの拓)',
// 		dish: 'Sobameshi, Gyoza and Okonomiyaki',
// 		description: '',
// 		date: '2024-07-20',
// 		tier: Tiers.A,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28050210/'
// 	},
// 	{
// 		id: 38,
// 		vidId: 'oFb7kfDELd4',
// 		restaurant: 'Iwatsuya (岩津屋)',
// 		dish: 'Shabu Shabu',
// 		description: '',
// 		date: '2024-07-27',
// 		tier: Tiers.A,
// 		website: 'https://tabelog.com/hyogo/A2801/A280102/28004805/'
// 	},
// 	{
// 		id: 39,
// 		vidId: 'QAPhw12lBwE',
// 		restaurant: 'Bonten (ぼんてん)',
// 		dish: 'Gyoza',
// 		description: '',
// 		date: '2024-08-05',
// 		tier: Tiers.B,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28009923/'
// 	},
// 	{
// 		id: 40,
// 		vidId: 'uJY1aoXH8lA',
// 		restaurant: 'Kōbe Kippou (神戸吉豊)',
// 		dish: 'Kobe Beef Hamburg',
// 		description: '',
// 		date: '2024-08-14',
// 		tier: Tiers.B,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28059652'
// 	},
// 	{
// 		id: 41,
// 		vidId: '96vpQJfYH7Q',
// 		restaurant: 'Panda Kitchen (熊猫厨房)',
// 		dish: 'Rurouhan',
// 		description: '',
// 		date: '2024-08-22',
// 		tier: Tiers.C,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28068470/'
// 	},
// 	{
// 		id: 42,
// 		vidId: 'weIaRcytY_Q',
// 		restaurant: 'Amana',
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28070655/'
// 		dish: 'Butter Chicken',
// 		description: '',
// 		date: '2024-09-02',
// 		tier: Tiers.C,
// 	},
// 	{
// 		id: 43,
// 		vidId: 'qjZdepRDd3I',
// 		restaurant: 'Katsumarudon (克まるどん)',
// 		dish: 'Katsu and Beef bowl',
// 		description: '',
// 		date: '2024-09-09',
// 		tier: Tiers.A,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28067821/'
// 	},
// 	{
// 		id: 44,
// 		vidId: '4wWaKv3oWKY',
// 		restaurant: 'Ootoya (大戸屋)',
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28042632/'
// 		dish: 'Karaage Set',
// 		description: '',
// 		date: '2024-09-17',
// 		tier: Tiers.B,
// 	},
// 	{
// 		id: 45,
// 		vidId: 'KdRv8yL2M00',
// 		restaurant: 'Musashi (とんかつ武蔵)',
// 		dish: 'Tonkatsu',
// 		description: '',
// 		date: '2024-09-25',
// 		tier: Tiers.S,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28018606/'
// 	},
// 	{
// 		id: 46,
// 		vidId: 'MY2qlGjKRoA',
// 		restaurant: 'Tenshinei (天津衛)',
// 		dish: 'Tenshin Katsu Bowl',
// 		description: '',
// 		date: '2024-10-05',
// 		tier: Tiers.C,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28070707/'
// 	},
// 	{
// 		id: 47,
// 		vidId: '9rZDJX4L5EI',
// 		restaurant: 'Murataka (丸高中華そば)',
// 		dish: 'Dashi Soba Set',
// 		description: '',
// 		date: '2024-10-15',
// 		tier: Tiers.B,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28071082/'
// 	},
// 	{
// 		id: 48,
// 		vidId: '5RYo2CxZPTE',
// 		restaurant: 'Kinran (金蘭)',
// 		dish: 'Subuta Set',
// 		description: '',
// 		date: '2024-10-24',
// 		tier: Tiers.C,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28036396/'
// 	},
// 	{
// 		id: 49,
// 		vidId: 'uMyaerH1tvM',
// 		restaurant: 'Enma-do (炎麻堂)',
// 		dish: 'Mapo Tofu Set',
// 		description: '',
// 		date: '2024-11-04',
// 		tier: Tiers.A,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28070993/'
// 	},
// 	{
// 		id: 50,
// 		vidId: 'mgkF2DsOLQ4',
// 		restaurant: 'Pirene (ピレーネ)',
// 		dish: 'Beef Curry',
// 		description: '',
// 		date: '2024-11-11',
// 		tier: Tiers.A,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28046204/'
// 	},
// 	{
// 		id: 51,
// 		vidId: 'Zm9Z_GXWgbg',
// 		restaurant: 'Ramen Zundooya (ラー麺 ずんどう屋)',
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28064568/'
// 		dish: 'Ramen Lunch Set',
// 		description: '',
// 		date: '2024-11-18',
// 		tier: Tiers.B,
// 	},
// 	{
// 		id: 52,
// 		vidId: 'on68GHFS-14',
// 		restaurant: 'Honke Katsumeshitei (本家かつめし亭)',
// 		dish: 'Katsumeshi',
// 		description: '',
// 		date: '2024-11-26',
// 		tier: Tiers.C,
// 		website: 'https://3nomiya.net/shops/honke-katsumesitei.html'
// 	},
// 	{
// 		id: 53,
// 		vidId: 'n69RBzkxeKA',
// 		restaurant: 'Niku Curry Junky (肉カレージャンキー)',
// 		dish: 'Stamina Curry',
// 		description: '',
// 		date: '2024-12-04',
// 		tier: Tiers.D,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28071095/'
// 	},
// 	{
// 		id: 54,
// 		vidId: 'lEieYMqdGzI',
// 		restaurant: 'Dear Old Curry Savoy',
// 		dish: 'Beef Curry',
// 		description: '',
// 		date: '2024-12-13',
// 		tier: Tiers.S,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28000095/'
// 	},
// 	{
// 		id: 55,
// 		vidId: 'H52m56_mrZU',
// 		restaurant: 'My.Tho',
// 		dish: 'Bun Bo Hue',
// 		description: '',
// 		date: '2024-12-25',
// 		tier: Tiers.B,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28070972/'
// 	},
// 	{
// 		id: 56,
// 		vidId: 'QsyCDH2-SqE',
// 		restaurant: 'KFC',
// 		dish: 'Piece of Chicken, Burger, Fries, Biscuit',
// 		description: '',
// 		date: '2025-01-03',
// 		tier: Tiers.B,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28069850/'
// 	},
// 	{
// 		id: 57,
// 		vidId: '8Z4Fa1wlDmI',
// 		restaurant: 'Yuusui (水遊)',
// 		dish: 'Gyunikumen',
// 		description: '',
// 		date: '2025-01-12',
// 		tier: Tiers.A,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28041097/'
// 	},
// 	{
// 		id: 58,
// 		vidId: '_r8oTrjM_eg',
// 		restaurant: 'Grill Kinpura (グリル金プラ)',
// 		dish: 'Lunch Set A',
// 		description: '',
// 		date: '2025-01-22',
// 		tier: Tiers.B,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28004440/'
// 	},
// 	{
// 		id: 59,
// 		vidId: 'rYJlu7cM8l8',
// 		restaurant: 'Ramen Yamachan Aachanten (らーめんやまちゃん あーちゃん店)',
// 		dish: 'Spice Mazesoba',
// 		description: '',
// 		date: '2025-01-30',
// 		tier: Tiers.A,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28069832/'
// 	},
// 	{
// 		id: 60,
// 		vidId: 'vfXm9bK5ey0',
// 		restaurant: 'Mei Hua (マレーシア風カレー&ペナン料理 梅花)',
// 		dish: 'Malaysian Curry',
// 		description: '',
// 		date: '2024-02-09',
// 		tier: Tiers.B,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28048589/'
// 	},
// 	{
// 		id: 61,
// 		vidId: 'cKCUcyzmwnU',
// 		restaurant: 'Irachika (イラチカ)',
// 		dish: 'Beef Stroganoff',
// 		description: '',
// 		date: '2025-02-17',
// 		tier: Tiers.S,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28070634/'
// 	},
// 	{
// 		id: 62,
// 		vidId: '3o2KqGljhbQ',
// 		restaurant: 'Goenya (ご縁家)',
// 		dish: 'Fried Chicken and Cheese Rice Bowl',
// 		description: '',
// 		date: '2025-02-28',
// 		tier: Tiers.A,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28043749/'
// 	},
// 	{
// 		id: 63,
// 		vidId: '7RLo4NYyYFo',
// 		restaurant: 'Maruo (まるお食堂)',
// 		dish: 'Tsukimi Katsu Curry',
// 		description: '',
// 		date: '2025-03-08',
// 		tier: Tiers.B,
// 		website: 'https://tabelog.com/hyogo/A2801/A280101/28054783/'
// 	},
// 	{
// 		id: 64,
// 		vidId: 'TID2M6OlHzE',
// 		restaurant: 'Naan House Odan (ナンハウスおだん)',
// 		dish: 'Ladies Lunch Set',
// 		description: '',
// 		date: '2025-03-17',
// 		tier: Tiers.S,
// 		website: 'https://3nomiya.net/shops/nanhouse-odan.html'
// 	},
// ] as Episode[];

const episodes = [
	{
		id: 1,
		tier: Tiers.B,
		date: '2023-09-20',
		vidId: 'ej5-l_00rfY',
		dish: 'Beef Karubi and Karaage Set',
		restaurant: 'center-plaza__37'
	},
	{
		id: 2,
		tier: Tiers.A,
		date: '2023-09-27',
		vidId: 'wjTBgtZUpIw',
		dish: 'Sauce Katsudon',
		restaurant: 'center-plaza-west__36'
	},
	{
		id: 3,
		tier: Tiers.S,
		date: '2023-10-04',
		vidId: 'C8SvRGoUNCA',
		dish: 'Ranshu with Suigyoza',
		restaurant: 'center-plaza__11'
	},
	{
		id: 4,
		tier: Tiers.A,
		date: '2023-10-11',
		vidId: 'z2bi5cQ7BCc',
		dish: 'Chicken Meatball Daily Lunch Special',
		restaurant: 'san-plaza__5'

	},
	{
		id: 5,
		tier: Tiers.C,
		date: '2023-10-18',
		vidId: 'GxfjYKZ7K2Q',
		dish: 'Beef Pho Lunch Set and Banh Mi',
		restaurant: 'unknown__1'
	},
	{
		id: 6,
		tier: Tiers.A,
		date: '2023-10-25',
		vidId: 'xFTE3UiZHhY',
		dish: 'Ladies Lunch',
		restaurant: 'center-plaza__43'
	},
	{
		id: 7,
		tier: Tiers.C,
		date: '2023-11-01',
		vidId: '68RI9TnLcus',
		dish: 'Horumon',
		restaurant: 'center-plaza-west__51'
	},
	{
		id: 8,
		tier: Tiers.S,
		date: '2023-11-13',
		vidId: '4r1pSAdk6uw',
		dish: 'A Lunch Set',
		restaurant: 'center-plaza-west__61'
	},
	{
		id: 9,
		tier: Tiers.B,
		date: '2023-11-18',
		vidId: 'kZTJnYZUa_s',
		dish: 'Oishi Ramen and Karaage',
		restaurant: 'san-plaza__58'
	},
	{
		id: 10,
		tier: Tiers.B,
		date: '2023-11-26',
		vidId: 'MWJ9CS-penQ',
		dish: 'Hamburger Steak',
		restaurant: 'san-plaza__48'
	},
	{
		id: 11,
		tier: Tiers.C,
		date: '2023-12-03',
		vidId: '5aZKtDgPiBI',
		dish: 'Melted Cheese Topped Karaage Bowl',
		restaurant: 'san-plaza__29'
	},
	{
		id: 12,
		tier: Tiers.D,
		date: '2023-12-10',
		vidId: 'r1HEmpYLkR4',
		dish: 'A Lunch Set with Subuta',
		restaurant: 'san-plaza__20'
	},
	{
		id: 13,
		tier: Tiers.C,
		date: '2023-12-18',
		vidId: 'garxXwkjNHE',
		dish: 'Gyoza',
		restaurant: 'san-plaza__46'
	},
	{
		id: 14,
		tier: Tiers.S,
		date: '2023-12-27',
		vidId: 'A1U-fUe0Kzw',
		dish: 'Original Beef Curry',
		restaurant: 'san-plaza__34'
	},
	{
		id: 15,
		tier: Tiers.C,
		date: '2024-01-03',
		vidId: 'nDirYyU5QNM',
		dish: 'Lunch Set B with Beef Pho',
		restaurant: 'san-plaza__55'
	},
	{
		id: 16,
		tier: Tiers.B,
		date: '2024-01-11',
		vidId: 'DA1If_InmoY',
		dish: 'Thick Cut Pork Bowl',
		restaurant: 'san-plaza__4',

	},
	{
		id: 17,
		tier: Tiers.A,
		date: '2024-01-19',
		vidId: 'AqvD2yBdEok',
		dish: 'Lunch Set with Bacon and Vegetable Pasta in Tomato Sauce',
		restaurant: 'san-plaza__40'
	},
	{
		id: 18,
		tier: Tiers.A,
		date: '2024-02-04',
		vidId: 'FJpXCjni7wE',
		dish: 'Tonkatsu Lunch Set',
		restaurant: 'san-plaza__54'
	},
	{
		id: 19,
		tier: Tiers.B,
		date: '2024-02-16',
		vidId: 'mmKdOGAP8yM',
		dish: 'Garlic Duck Ramen',
		restaurant: 'center-plaza__46'
	},
	{
		id: 20,
		tier: Tiers.A,
		date: '2024-02-25',
		vidId: '2-yEUxPFdik',
		dish: 'Tosadon',
		restaurant: 'san-plaza__42'
	},
	{
		id: 21,
		tier: Tiers.B,
		date: '2024-03-03',
		vidId: '38v8A2voDWY',
		dish: 'Fried Rice and Karaage Set',
		restaurant: 'center-plaza-west__29'
	},
	{
		id: 22,
		tier: Tiers.A,
		date: '2024-03-11',
		vidId: 'ev0802cewqY',
		dish: 'Bokkake Yakisoba and Sobameshi',
		restaurant: 'center-plaza__23'
	},
	{
		id: 23,
		tier: Tiers.S,
		date: '2024-03-24',
		vidId: 'o8RJMd5oHKo',
		dish: 'Tempura Lunch Set',
		restaurant: 'center-plaza__21'
	},
	{
		id: 24,
		tier: Tiers.A,
		date: '2024-03-31',
		vidId: 'cVDQHGfSVjc',
		dish: 'Ladies Lunch',
		restaurant: 'center-plaza__4'
	},
	{
		id: 25,
		tier: Tiers.B,
		date: '2024-04-11',
		vidId: 'kIzjnCHGWhc',
		dish: 'Aged Cheese Pasta',
		restaurant: 'center-plaza__18'
	},
	{
		id: 26,
		tier: Tiers.S,
		date: '2024-04-18',
		vidId: '1DuGXoMlM6M',
		dish: 'Gyoza (boiled and fried)',
		restaurant: 'san-plaza__45'
	},
	{
		id: 27,
		tier: Tiers.S,
		date: '2024-04-26',
		vidId: 'Ea8shyflqtU',
		dish: 'Tomato Ramen',
		restaurant: 'center-plaza__1'
	},
	{
		id: 28,
		tier: Tiers.F,
		date: '2024-05-05',
		vidId: 'bIcGdwGh7BE',
		dish: 'Minchikatsu Set',
		restaurant: 'san-plaza__23'
	},
	{
		id: 29,
		tier: Tiers.B,
		date: '2024-05-14',
		vidId: '61e6dLmi-fo',
		dish: 'Lunch Set B',
		restaurant: 'center-plaza__16'
	},
	{
		id: 30,
		tier: Tiers.D,
		date: '2024-05-20',
		vidId: 'gG1B6ae51uU',
		dish: 'Subuta Set',
		restaurant: 'san-plaza__65'
	},
	{
		id: 31,
		tier: Tiers.C,
		date: '2024-05-29',
		vidId: 'Y41XbH1wOXo',
		dish: 'Oden and Karaage Set',
		restaurant: 'san-plaza__10'
	},
	{
		id: 32,
		tier: Tiers.B,
		date: '2024-06-09',
		vidId: 'f_cefM3cxhY',
		dish: 'Ramen, Gyoza, Fried Rice, and Karaage Set',
		restaurant: 'center-plaza__34'
	},
	{
		id: 33,
		tier: Tiers.B,
		date: '2024-06-17',
		vidId: 'zZ0xTQO9sZY',
		dish: 'Set Menu with Pizza and Salad',
		restaurant: 'san-plaza__57'
	},
	{
		id: 34,
		tier: Tiers.A,
		date: '2024-06-27',
		vidId: 'P80K1xfUFas',
		dish: 'Jumbo Chicken Katsu Curry',
		restaurant: 'center-plaza__28'
	},
	{
		id: 35,
		tier: Tiers.A,
		date: '2024-07-03',
		vidId: 'FQPrcgSMmF4',
		dish: 'Ranshu (Lanzhou) Noodles',
		restaurant: 'san-plaza__60'
	},
	{
		id: 36,
		tier: Tiers.S,
		date: '2024-07-13',
		vidId: 'WSkP7gmnFPk',
		dish: 'Lunch Set With Chicken Nanban, Ebifry and Hamburg Steak',
		restaurant: 'center-plaza-west__32'
	},
	{
		id: 37,
		tier: Tiers.A,
		date: '2024-07-20',
		vidId: '5RPH7_cmWcQ',
		dish: 'Sobameshi, Gyoza and Okonomiyaki',
		restaurant: 'center-plaza__27'
	},
	{
		id: 38,
		tier: Tiers.A,
		date: '2024-07-27',
		vidId: 'oFb7kfDELd4',
		dish: 'Shabu Shabu',
		restaurant: 'center-plaza-west__46'
	},
	{
		id: 39,
		tier: Tiers.B,
		date: '2024-08-05',
		vidId: 'QAPhw12lBwE',
		dish: 'Gyoza',
		restaurant: 'center-plaza__45'
	},
	{
		id: 40,
		tier: Tiers.B,
		date: '2024-08-14',
		vidId: 'uJY1aoXH8lA',
		dish: 'Kobe Beef Hamburg',
		restaurant: 'san-plaza__19'
	},
	{
		id: 41,
		tier: Tiers.C,
		date: '2024-08-22',
		vidId: '96vpQJfYH7Q',
		dish: 'Rurouhan',
		restaurant: 'san-plaza__24'
	},
	{
		id: 42,
		tier: Tiers.C,
		date: '2024-09-02',
		vidId: 'weIaRcytY_Q',
		dish: 'Butter Chicken',
		restaurant: 'center-plaza-west__9'
	},
	{
		id: 43,
		tier: Tiers.A,
		date: '2024-09-09',
		vidId: 'qjZdepRDd3I',
		dish: 'Katsu and Beef bowl',
		restaurant: 'unknown__2'
	},
	{
		id: 44,
		tier: Tiers.B,
		date: '2024-09-17',
		vidId: '4wWaKv3oWKY',
		dish: 'Karaage Set',
		restaurant: 'center-plaza__9'
	},
	{
		id: 45,
		tier: Tiers.S,
		date: '2024-09-25',
		vidId: 'KdRv8yL2M00',
		dish: 'Tonkatsu',
		restaurant: 'san-plaza__61'
	},
	{
		id: 46,
		tier: Tiers.C,
		date: '2024-10-05',
		vidId: 'MY2qlGjKRoA',
		dish: 'Tenshin Katsu Bowl',
		restaurant: 'center-plaza-west__28'
	},
	{
		id: 47,
		tier: Tiers.B,
		date: '2024-10-15',
		vidId: '9rZDJX4L5EI',
		dish: 'Dashi Soba Set',
		restaurant: 'center-plaza-west__35'
	},
	{
		id: 48,
		tier: Tiers.C,
		date: '2024-10-24',
		vidId: '5RYo2CxZPTE',
		dish: 'Subuta Set',
		restaurant: 'center-plaza__3'
	},
	{
		id: 49,
		tier: Tiers.A,
		date: '2024-11-04',
		vidId: 'uMyaerH1tvM',
		dish: 'Mapo Tofu Set',
		restaurant: 'center-plaza-west__25'
	},
	{
		id: 50,
		tier: Tiers.A,
		date: '2024-11-11',
		vidId: 'mgkF2DsOLQ4',
		dish: 'Beef Curry',
		restaurant: 'center-plaza-west__33'
	},
	{
		id: 51,
		tier: Tiers.B,
		date: '2024-11-18',
		vidId: 'Zm9Z_GXWgbg',
		dish: 'Ramen Lunch Set',
		restaurant: 'center-plaza__2'
	},
	{
		id: 52,
		tier: Tiers.C,
		date: '2024-11-26',
		vidId: 'on68GHFS-14',
		dish: 'Katsumeshi',
		restaurant: 'center-plaza-west__43'
	},
	{
		id: 53,
		tier: Tiers.D,
		date: '2024-12-04',
		vidId: 'n69RBzkxeKA',
		dish: 'Stamina Curry',
		restaurant: 'san-plaza__11'
	},
	{
		id: 54,
		tier: Tiers.S,
		date: '2024-12-13',
		vidId: 'lEieYMqdGzI',
		dish: 'Beef Curry',
		restaurant: 'center-plaza__36'
	},
	{
		id: 55,
		tier: Tiers.B,
		date: '2024-12-25',
		vidId: 'H52m56_mrZU',
		dish: 'Bun Bo Hue',
		restaurant: 'san-plaza__30'
	},
	{
		id: 56,
		tier: Tiers.B,
		date: '2025-01-03',
		vidId: 'QsyCDH2-SqE',
		dish: 'Piece of Chicken, Burger, Fries, Biscuit',
		restaurant: 'san-plaza__16'
	},
	{
		id: 57,
		tier: Tiers.A,
		date: '2025-01-12',
		vidId: '8Z4Fa1wlDmI',
		dish: 'Gyunikumen',
		restaurant: 'center-plaza-west__11'
	},
	{
		id: 58,
		tier: Tiers.B,
		date: '2025-01-22',
		vidId: '_r8oTrjM_eg',
		dish: 'Lunch Set A',
		restaurant: 'center-plaza__52'
	},
	{
		id: 59,
		tier: Tiers.A,
		date: '2025-01-30',
		vidId: 'rYJlu7cM8l8',
		dish: 'Spice Mazesoba',
		restaurant: 'center-plaza-west__45'
	},
	{
		id: 60,
		tier: Tiers.B,
		date: '2024-02-09',
		vidId: 'vfXm9bK5ey0',
		dish: 'Malaysian Curry',
		restaurant: 'san-plaza__27'
	},
	{
		id: 61,
		tier: Tiers.S,
		date: '2025-02-17',
		vidId: 'cKCUcyzmwnU',
		dish: 'Beef Stroganoff',
		restaurant: 'center-plaza-west__17'
	},
	{
		id: 62,
		tier: Tiers.A,
		date: '2025-02-28',
		vidId: '3o2KqGljhbQ',
		dish: 'Fried Chicken and Cheese Rice Bowl',
		restaurant: 'san-plaza__52'
	},
	{
		id: 63,
		tier: Tiers.B,
		date: '2025-03-08',
		vidId: '7RLo4NYyYFo',
		dish: 'Tsukimi Katsu Curry',
		restaurant: 'san-plaza__50'
	},
	{
		id: 64,
		tier: Tiers.S,
		date: '2025-03-17',
		vidId: 'TID2M6OlHzE',
		dish: 'Ladies Lunch Set',
		restaurant: 'center-plaza__12'
	},
	{
		id: 65,
		tier: Tiers.A,
		date: '2025-03-24',
		vidId: 'Abss_3S2fVc',
		dish: 'Tendon',
		restaurant: 'center-plaza-west__14'
	},
];

export default episodes;