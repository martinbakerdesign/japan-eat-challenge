const restaurants = [
	{
		id: 'center-plaza-west__7',
		name: 'Kobe Takoyaki Tenjinchuu (神戸たこ焼き 天地人)',
		cat: ['Takoyaki']
	},
	{
		id: 'unknown__1',
		name: 'SEN Vietnamese Restaurant (SEN ベトナムレストラン)',
		website: 'https://tabelog.com/hyogo/A2801/A280101/28065370/',
		cat: ['Vietnamese Cuisine']
	},
	{
		id: 'unknown__2',
		name: 'Katsumarudon (克まるどん)',
		website: 'https://tabelog.com/hyogo/A2801/A280101/28067821/',
		cat: ['Katsudon']
	},
	{
		id: 'center-plaza-west__8',
		name: 'Sundubu Specialty Store Korean Food Banga (純豆腐専門店　韓食　班家)',
		cat: ['Korean Cuisine']
	},
	{
		id: 'center-plaza-west__9',
		name: 'Amana',
		website: 'https://tabelog.com/hyogo/A2801/A280101/28070655/',
		cat: ['🍛 Curry']
	},
	{
		id: 'center-plaza-west__10',
		name: 'Daizen (大善)',
		cat: ['Anago']
	},
	{
		id: 'center-plaza-west__11',
		name: 'Yuusui (遊水)',
		cat: ['🇨🇳 Chinese Cuisine'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28041097/'
	},
	{
		id: 'center-plaza-west__14',
		name: 'Yoshibe Tendon (天丼 吉兵衛)',
		cat: ['Tempura', 'Tendon'],
		website: 'https://tabelog.com/hyogo/A2801/A280102/28006512/'
	},
	{
		id: 'center-plaza-west__15',
		name: 'ウコバク',
		cat: ['Western Food']
	},
	{
		id: 'center-plaza-west__17',
		name: 'Irachika (イラチカ)',
		cat: ['Russian Cuisine'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28070634/'
	},
	{
		id: 'center-plaza-west__18',
		name: '双葉堂',
		cat: ['Confectionery', 'Red Bean Rice']
	},
	{
		id: 'center-plaza-west__22',
		name: 'ことこと',
		cat: ['Donburi']
	},
	{
		id: 'center-plaza-west__23',
		name: 'Cafe MOANA',
		cat: ['🍵 Cafe']
	},
	{
		id: 'center-plaza-west__24',
		name: '田中商店',
		cat: ['Fresh Produce']
	},
	{
		id: 'center-plaza-west__25',
		name: 'Enma-do (炎麻堂)',
		cat: ['Mapo Tofu','🇨🇳 Chinese Cuisine'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28070993/'
	},
	{
		id: 'center-plaza-west__26',
		name: 'うなぎの成瀬　神戸三宮店',
		cat: ['Unagi']
	},
	{
		id: 'center-plaza-west__28',
		name: 'Tenshinei (天津衛)',
		cat: ['Chicken Katsu Don', '🐔 Chicken'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28070707/'
	},
	{
		id: 'center-plaza-west__29',
		name: 'Kōfukugen (幸福源)',
		cat: ['🇨🇳 Chinese Cuisine', '🍜 Ramen', 'Gyoza'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28040344/'
	},
	{
		id: 'center-plaza-west__30',
		name: '山下商店',
		cat: ['Fresh Produce']
	},
	{
		id: 'center-plaza-west__31',
		name: 'タルショウ',
		cat: ['Yakitori', 'Torimeshi', '🐔 Chicken']
	},
	{
		id: 'center-plaza-west__32',
		name: 'Gohanya (ごはんとみそ汁と…ごはんや)',
		cat: [],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28070163/'
	},
	{
		id: 'center-plaza-west__33',
		name: 'Pirene (ピレーネ)',
		cat: ['Western-style Beef Curry', 'Katsu Curry', '🍛 Curry'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28046204/'
	},
	{
		id: 'center-plaza-west__35',
		name: 'Murataka (丸高中華そば)',
		cat: ['Dashi Soba', 'Abura Soba', 'Yaki Meshi', '🍜 Ramen'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28071082/'
	},
	{
		id: 'center-plaza-west__36',
		name: 'Katsudon Yoshibei (かつ丼吉兵衛)',
		cat: ['Katsudon'],
		website: 'https://3nomiya.net/shops/yoshibei.html'
	},
	{
		id: 'center-plaza-west__37',
		name: 'わした 神戸三宮店',
		cat: ['Okinawa Cuisine']
	},
	{
		id: 'center-plaza-west__39',
		name: '丸吉',
		cat: ['Izakaya']
	},
	{
		id: 'center-plaza-west__40',
		name: '丸　吉',
		cat: ['Izakaya']
	},
	{
		id: 'center-plaza-west__41',
		name: '一膳飯屋　勺薬にカナリヤ',
		cat: ['Cafeteria']
	},
	{
		id: 'center-plaza-west__43',
		name: 'Honke Katsumeshitei (本家かつめし亭)',
		cat: ['Katsu Meshi', 'Kakogawa Cuisine'],
		website: 'https://3nomiya.net/shops/honke-katsumesitei.html'
	},
	{
		id: 'center-plaza-west__44',
		name: 'もりや',
		cat: ['Yakitori', '🐔 Chicken']
	},
	{
		id: 'center-plaza-west__45',
		name: 'Ramen Yamachan Aachanten (らーめんやまちゃん あーちゃん店)',
		cat: ['🍜 Ramen'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28069832/'
	},
	{
		id: 'center-plaza-west__46',
		name: 'Iwatsuya (岩津屋)',
		cat: ['Shabu-shabu', '🐄 Beef'],
		website: 'https://tabelog.com/hyogo/A2801/A280102/28004805/'
	},
	{
		id: 'center-plaza-west__47',
		name: 'いこい食堂',
		cat: ['Japanese Cuisine', 'Western Cuisine']
	},
	{
		id: 'center-plaza-west__48',
		name: '浪花屋',
		cat: ['🐟 Fish']
	},
	{
		id: 'center-plaza-west__49',
		name: 'まるじゅう 東店',
		cat: ['Ice Cream', 'Vending Machine']
	},
	{
		id: 'center-plaza-west__50',
		name: 'かやく亭',
		cat: ['Udon', 'Soba']
	},
	{
		id: 'center-plaza-west__51',
		name: 'Marunaka (マルナカ)',
		cat: ['Horu Tama Don', 'Kalbi Don'],
		website: 'https://maru-naka.net/'
	},
	{
		id: 'center-plaza-west__59',
		name: 'OKONOMI COFFEE',
		cat: ['🍵 Cafe']
	},
	{
		id: 'center-plaza-west__61',
		name: 'Yōshoku no ACE (洋食のエース)',
		cat: ['Tonkatsu'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28060098/'
	},
	{
		id: 'center-plaza__1',
		name: 'Tomako (真っ赤ならーめん とまこ)',
		cat: ['🍜 Ramen'],
		website: 'https://3nomiya.net/shops/tomaco.html'
	},
	{
		id: 'center-plaza__2',
		name: 'Ramen Zundooya (ラー麺 ずんどう屋)',
		website: 'https://tabelog.com/hyogo/A2801/A280101/28064568/',
		cat: ['🍜 Ramen']
	},
	{
		id: 'center-plaza__3',
		name: 'Kinran (金蘭)',
        website: 'https://tabelog.com/hyogo/A2801/A280101/28036396/',
		cat: ['🇨🇳 Chinese Cuisine']
	},
	{
		id: 'center-plaza__4',
		name: 'Alisha (ミニ ネパール レストラン&バー アリサ)',
		website: 'https://tabelog.com/hyogo/A2801/A280101/28066134/',
		cat: ['🇳🇵 Nepalese Cuisine']
	},
	{
		id: 'center-plaza__9',
		name: 'Ootoya (大戸屋)',
		website: 'https://tabelog.com/hyogo/A2801/A280101/28042632/',
		cat: []
	},
	{
		id: 'center-plaza__10',
		name: '播磨の活魚にぎり　力　丸　',
		cat: ['Sushi']
	},
	{
		id: 'center-plaza__11',
		name: 'Ichiten-Ichimen (一天一面)',
		cat: ['🍜 Ramen', '🇨🇳 Chinese Cuisine'],
		website: 'https://3nomiya.net/shops/ichiten-ichimen.html'
	},
	{
		id: 'center-plaza__12',
		name: 'Naan House Odan (ナンハウスおだん)',
		cat: ['🇮🇳 Indian Cuisine', '🇳🇵 Nepalese Cuisine', '🍛 Curry'],
		website: 'https://3nomiya.net/shops/nanhouse-odan.html'
	},
	{
		id: 'center-plaza__13',
		name: 'えびらそば',
		cat: ['Soba', 'Udon']
	},
	{
		id: 'center-plaza__15',
		name: 'センタープラザ拉麺',
		cat: ['🍜 Ramen']
	},
	{
		id: 'center-plaza__16',
		name: 'Kenchan (ステーキ屋 ケンちゃん)',
		cat: ['Steak', '🐄 Beef'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28068165/'
	},
	{
		id: 'center-plaza__17',
		name: '金沢 治与門窯 スッポン堂',
		cat: ['Health Food']
	},
	{
		id: 'center-plaza__18',
		name: 'I will show you the difference between bolognese and meat sauce (ボロネーゼとミートソースの違いを教えてあげる)',
		cat: ['Pasta'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28065783/'
	},
	{
		id: 'center-plaza__20',
		name: '神戸浪漫',
		cat: ['🍛 Curry']
	},
	{
		id: 'center-plaza__21',
		name: 'Makino (まきの)',
		cat: ['Tempura'],
		website: 'https://3nomiya.net/shops/makino.html'
	},
	{
		id: 'center-plaza__23',
		name: 'Nagata Honjoken (長田本庄軒)',
		cat: ['Yakisoba'],
		website: 'https://3nomiya.net/shops/nagata-honjoken.html'
	},
	{
		id: 'center-plaza__25',
		name: '才谷梅太郎',
		cat: ['Katsuo Don', 'Katsu']
	},
	{
		id: 'center-plaza__26',
		name: '本くるくる',
		cat: ['Okinawan Cuisine']
	},
	{
		id: 'center-plaza__27',
		name: 'Bokkake no Taku (ぼっかけの拓)',
		cat: ['Sobameshi', 'Okonomiyaki', 'Soba-Yaki'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28050210/'
	},
	{
		id: 'center-plaza__28',
		name: 'Prizm (カレーの店 ぷりずむ)',
		cat: ['🍛 Curry'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28045958/'
	},
	{
		id: 'center-plaza__30',
		name: '神戸亭',
		cat: ['🍵 Cafe']
	},
	{
		id: 'center-plaza__33',
		name: 'リオン',
		cat: ['🍵 Cafe']
	},
	{
		id: 'center-plaza__34',
		name: 'Ramen Hachibankan (らーめん八番館)',
		cat: ['🍜 Ramen'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28011339/'
	},
	{
		id: 'center-plaza__35',
		name: '郷土料理 土佐',
		cat: ['Local Cuisine']
	},
	{
		id: 'center-plaza__36',
		name: 'Dear Old Curry Savoy',
		cat: ['🍛 Curry'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28000095/'
	},
	{
		id: 'center-plaza__37',
		name: 'Sannikuya (三肉屋)',
		cat: ['Kalbi Don', 'Sundubu'],
		website: 'https://3nomiya.net/shops/sannikuya.html'
	},
	{
		id: 'center-plaza__38',
		name: 'おでん まめだ',
		cat: ['Oden']
	},
	{
		id: 'center-plaza__39',
		name: '喫茶 潮',
		cat: ['🍵 Cafe']
	},
	{
		id: 'center-plaza__42',
		name: '鳴門庵',
		cat: ['Udon', 'Soba']
	},
	{
		id: 'center-plaza__43',
		name: 'ALOK',
		cat: ['🇮🇳 Indian Cuisine', '🇳🇵 Nepalese Cuisine'],
		website: 'https://3nomiya.net/shops/alok.html'
	},
	{
		id: 'center-plaza__45',
		name: 'Bonten (ぼんてん)',
		cat: ['Gyoza'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28009923/'
	},
	{
		id: 'center-plaza__46',
		name: 'Metro Ramen',
		cat: ['🍜 Ramen'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28054153/'
	},
	{
		id: 'center-plaza__47',
		name: 'どん底',
		cat: ['🍵 Cafe']
	},
	{
		id: 'center-plaza__49',
		name: '丸亀',
		cat: ['Udon', 'Soba']
	},
	{
		id: 'center-plaza__50',
		name: '神戸牛らーめん「かけはし」',
		cat: ['🍜 Ramen']
	},
	{
		id: 'center-plaza__51',
		name: '一品保（いっぴんたもつ）',
		cat: ['Chuka Soba', '🍜 Ramen']
	},
	{
		id: 'center-plaza__52',
		name: 'Grill Kinpura (グリル金プラ)',
		cat: ['Western Cuisine'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28004440/'
	},
	{
		id: 'center-plaza__57',
		name: '神戸牛専門店 吉祥吉 三宮店',
		cat: ['Kobe Beef', '🐄 Beef']
	},
	{
		id: 'san-plaza__2',
		name: 'きんとん',
		cat: ['Tonkatsu', 'Ebi Fry', '🍛 Curry']
	},
	{
		id: 'san-plaza__3',
		name: 'たちばな',
		cat: ['Takoyaki']
	},
	{
		id: 'san-plaza__4',
		name: 'Butameshiya (豚めし家)',
        website: 'https://3nomiya.net/shops/butameshiya.html',
		cat: ['Buta Don']
	},
	{
		id: 'san-plaza__5',
		name: 'Shiki Aisai (四季愛菜ダイニング)',
        website: 'https://www.instagram.com/siki.aisai.dining/',
		cat: []
	},
	{
		id: 'san-plaza__6',
		name: 'お菓子の専門店 まるしげ 三宮店',
		cat: ['Japanese Cuisine', 'Western Sweets', 'Packaged Snacks']
	},
	{
		id: 'san-plaza__7',
		name: '三豊麺～真～',
		cat: ['🍜 Ramen', 'Tsukemen']
	},
	{
		id: 'san-plaza__8',
		name: 'しゃぶ乃家',
		cat: ['Shabu-shabu', '🐄 Beef']
	},
	{
		id: 'san-plaza__9',
		name: '讃岐うどん専門店  丸亀製麺　さんプラザ店',
		cat: ['Sanuki Udon']
	},
	{
		id: 'san-plaza__10',
		name: 'Sake Bar Nada (酒房 灘)',
		cat: ['Japanese Cuisine', 'Sake Bar'],
		website: 'https://3nomiya.net/shops/nada.html'
	},
	{
		id: 'san-plaza__11',
		name: 'Niku Curry Junky (肉カレージャンキー)',
		cat: ['🍛 Curry'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28071095/'
	},
	{
		id: 'san-plaza__12',
		name: 'オーガニックプラザ三宮さんプラザ店',
		cat: ['Organic Specialty Store']
	},
	{
		id: 'san-plaza__15',
		name: 'ホリーズ　カフェ　三宮さんプラザ店',
		cat: ['🍵 Cafe']
	},
	{
		id: 'san-plaza__16',
		name: 'KFC',
		cat: ['Fried Chicken', '🐔 Chicken'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28069850/'
	},
	{
		id: 'san-plaza__18',
		name: 'ハイクラスドリンク 株式会社',
		cat: ['Vending Machine Corner']
	},
	{
		id: 'san-plaza__19',
		name: 'Kōbe Kippou (神戸吉豊)',
		cat: ['Kobe Beef','Hamburg Steak', '🐄 Beef'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28059652'
	},
	{
		id: 'san-plaza__20',
		name: 'Kumoitei (雲井亭)',
		cat: ['🇨🇳 Chinese Cuisine'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28033395/'
	},
	{
		id: 'san-plaza__23',
		name: 'Mori no Nakamatachi (森のなかまたち)',
		cat: ['Lunch & Cafe'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28008563/'
	},
	{
		id: 'san-plaza__24',
		name: 'Panda Kitchen (熊猫厨房)',
		cat: ['🇨🇳 Chinese Cuisine'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28068470/'
	},
	{
		id: 'san-plaza__25',
		name: 'COM VIET NAM',
		cat: ['Vietnamese Cuisine']
	},
	{
		id: 'san-plaza__26',
		name: '炭火焼肉 安部え',
		cat: ['Yakiniku']
	},
	{
		id: 'san-plaza__27',
		name: 'Mei Hua (マレーシア風カレー&ペナン料理 梅花)',
		cat: ['Malaysian Cuisine'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28048589/'
	},
	{
		id: 'san-plaza__28',
		name: 'Rare休憩所（有料）',
		cat: ['Tea']
	},
	{
		id: 'san-plaza__29',
		name: 'Cocco (神戸COCCO)',
		cat: ['Donburi', 'Karaage'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28038238/'
	},
	{
		id: 'san-plaza__30',
		name: 'My.Tho',
		cat: ['Vietnamese Cuisine'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28070972/'
	},
	{
		id: 'san-plaza__31',
		name: 'はなちゃん',
		cat: ['Donburi']
	},
	{
		id: 'san-plaza__32',
		name: 'みなとや',
		cat: ['🍜 Ramen']
	},
	{
		id: 'san-plaza__33',
		name: 'だいやめ処 さつま久松',
		cat: ['Izakaya']
	},
	{
		id: 'san-plaza__34',
		name: 'Ittottei (いっとっ亭)',
		cat: ['🍛 Curry'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28002330/'
	},
	{
		id: 'san-plaza__35',
		name: 'KOBE ENISHI',
		cat: ['Dan Dan Noodles (Soup-less)']
	},
	{
		id: 'san-plaza__36',
		name: 'Curly 83',
		cat: ['🍛 Curry']
	},
	{
		id: 'san-plaza__37',
		name: 'ひなどり',
		cat: ['Yakitori']
	},
	{
		id: 'san-plaza__38',
		name: '熊野水産 一寸法師',
		cat: ['🐟 Fish', '🫑 Vegetables']
	},
	{
		id: 'san-plaza__40',
		name: 'Ryu-Ryu (RYU-RYU 三宮店)',
		cat: ['🍝 Pasta'],
		website: 'https://3nomiya.net/shops/ryuryu.html'
	},
	{
		id: 'san-plaza__42',
		name: 'Kojanto (こじゃんと)',
		cat: ['Tosa Don'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28055016/'
	},
	{
		id: 'san-plaza__45',
		name: 'Kōyōen (餃子屋 紅葉園)',
		cat: ['🇨🇳 Chinese Cuisine'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28005613/'
	},
	{
		id: 'san-plaza__46',
		name: 'Ichirō (ギョーザ専門店イチロー)',
		cat: ['Gyoza'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28001001/'
	},
	{
		id: 'san-plaza__47',
		name: 'Ichirō (ギョーザ専門店イチロー)',
		cat: ['Gyoza'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28001001/'
	},
	{
		id: 'san-plaza__48',
		name: 'Katsumaru (ハンバーグ専門店克まる)',
		cat: ['Hamburg Steak', '🐄 Beef'],
		website: 'https://3nomiya.net/shops/katsumaru.html'
	},
	{
		id: 'san-plaza__49',
		name: '長田タンク筋',
		cat: ['Soba-Yaki', 'Sobameshi']
	},
	{
		id: 'san-plaza__50',
		name: 'Maruo (まるお食堂)',
		cat: ['Katsudon'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28054783/'
	},
	{
		id: 'san-plaza__51',
		name: 'レストラン やなぎ',
		cat: ['Western Food']
	},
	{
		id: 'san-plaza__52',
		name: 'Goenya (ご縁家)',
		cat: ['Donburi'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28043749/'
	},
	{
		id: 'san-plaza__54',
		name: 'Tonkatsu Nagataen (とんかつながた園)',
		cat: ['Tonkatsu'],
		website: 'https://3nomiya.net/shops/nagataen.html'
	},
	{
		id: 'san-plaza__55',
		name: 'Hoi An (ベトナム料理 HOI AN)',
		cat: ['Vietnamese Cuisine'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28044495/'
	},
	{
		id: 'san-plaza__56',
		name: 'カスカード さんプラザ本店',
		cat: ['Bakery','🍵 Cafe']
	},
	{
		id: 'san-plaza__57',
		name: 'Pasta & Pizza Del Papa (パスタ＆ピッツァ デルパパ)',
		cat: ['🍝 Pasta', '🍕 Pizza'],
		website: 'https://3nomiya.net/shops/delpapa.html'
	},
	{
		id: 'san-plaza__58',
		name: 'Kamakura Soup With Noodles (どうとんぼり神座)',
		cat: ['🍜 Ramen'],
		website: 'https://3nomiya.net/shops/kamukura.html'
	},
	{
		id: 'san-plaza__59',
		name: '亀井堂',
		cat: ['Udon', 'Soba', 'Japanese Sweets']
	},
	{
		id: 'san-plaza__60',
		name: 'Bai Kung Fu Noodles (白家功夫拉麺)',
		cat: ['🍜 Ramen', 'Lanzhou Beef Noodles', '🇨🇳 Chinese Cuisine'],
		website: 'https://3nomiya.net/shops/bekka-kanfuramen.html'
	},
	{
		id: 'san-plaza__61',
		name: 'Musashi (とんかつ武蔵)',
		cat: ['Tonkatsu'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28018606/'
	},
	{
		id: 'san-plaza__62',
		name: '饂飩四國',
		cat: ['Udon', 'Donburi']
	},
	{
		id: 'san-plaza__64',
		name: 'こなな 三宮店',
		cat: ['🍝 Pasta', 'Sweets']
	},
	{
		id: 'san-plaza__65',
		name: 'Hyakumien (百味園)',
		cat: ['🇨🇳 Chinese Cuisine'],
		website: 'https://tabelog.com/hyogo/A2801/A280101/28068152/'
	},
	{
		id: 'san-plaza__66',
		name: '神戸 牛かつ亭 三宮本店',
		cat: ['Thick-cut Beef Katsu', '🐄 Beef']
	},
	{
		id: 'san-plaza__67',
		name: '鳥光 さんプラザ店',
		cat: ['Yakitori', '🐔 Chicken']
	}
] as Restaurant[];

export default restaurants;


const thumbs = new Map([
    [
        "Ittottei カレー いっとっ亭",
        "https://i.imgur.com/1H8SXjs.jpeg"
    ],
    [
        "Ace 洋食のエース",
        "https://i.imgur.com/RWhRZB6.jpeg"
    ],
    [
        "Kouyouen 紅葉園",
        "https://i.imgur.com/OAmcxKr.jpeg"
    ],
    [
        "Tomako とまこ",
        "https://i.imgur.com/YHw5z6o.jpeg"
    ],
    [
        "Ichiten-Ichimen 蘭州拉麺 一天一面",
        "https://i.imgur.com/FgpJFIg.jpeg"
    ],
    [
        "Makino Tempura 天ぷら定食 まきの",
        "https://i.imgur.com/iCbxI3x.jpeg"
    ],
    [
        "Gohanya ごはんや",
        "https://i.imgur.com/Hsu6GFe.jpeg"
    ],
    [
        "MUSASHI 三宮 とんかつむ蔵",
        "https://i.imgur.com/wG1Udo6.jpeg"
    ],
    [
        "Savoy サヴォイ",
        "https://i.imgur.com/yyeOpaJ.jpeg"
    ],
    [
        "Iratika ロシア・東欧料理\n            イラチカ",
        "https://i.imgur.com/jsberTK.pn"
    ],
    [
        "Ryu-ryu リュリュ",
        "https://i.imgur.com/tNzhHEi.jpeg"
    ],
    [
        "Katsudon Yoshibei かつ丼 吉兵衛",
        "https://i.imgur.com/wUJxqKZ.jpeg"
    ],
    [
        "Kojanto こじゃんと",
        "https://i.imgur.com/F1HP3xA.jpeg"
    ],
    [
        "Nagata-honjoken 長田本庄軒",
        "https://i.imgur.com/2bksHkP.jpeg"
    ],
    [
        "SIKI AISAI Dining 四季愛菜ダイニング",
        "https://i.imgur.com/LTcGNOr.jpeg"
    ],
    [
        "NAGATAEN とんかつ ながた園",
        "https://i.imgur.com/SCsrD4o.jpeg"
    ],
    [
        "ALOK",
        "https://i.imgur.com/RNVfChL.jpeg"
    ],
    [
        "Alisha アリサ",
        "https://i.imgur.com/SZpmTxg.jpeg"
    ],
    [
        "白家功夫拉麵",
        "https://i.imgur.com/M8uOzbo.jpeg"
    ],
    [
        "ぼっかけの拓",
        "https://i.imgur.com/xPdC1nH.jpeg"
    ],
    [
        "IWATSU YA しゃぶしゃぶ岩津屋",
        "https://i.imgur.com/9invVay.jpeg"
    ],
    [
        "Curry Restaurant Prizm カレーの店 ぷりずむ",
        "https://i.imgur.com/r4lgj7a.jpeg"
    ],
    [
        "Katsumarudon 克まるどん",
        "https://i.imgur.com/tjbOPY7.jpeg"
    ],
    [
        "Enmadou 麻婆豆腐の炎麻堂",
        "https://i.imgur.com/4jVDKkp.jpeg"
    ],
    [
        "Pirene ピレーネ",
        "https://i.imgur.com/2tL2jat.jpeg"
    ],
    [
        "Yuusui 水遊",
        "https://i.imgur.com/vQWyC7Q.jpeg"
    ],
    [
        "Ramen Yamachan Aachan-Ten らーめん やまちゃん あーちゃん店",
        "https://i.imgur.com/NtHLCfQ.jpeg"
    ],
    [
        "Goenya ご縁家",
        "https://i.imgur.com/kd18zLV.pn"
    ],
    [
        "Katsumaru 克まる",
        "https://i.imgur.com/glQsbPU.jpeg"
    ],
    [
        "Koufukugen 幸福源",
        "https://i.imgur.com/IxgZunh.jpeg"
    ],
    [
        "Ken Chan ステーキ屋ケンちゃん",
        "https://i.imgur.com/2doUWGY.jpeg"
    ],
    [
        "Del Papa パスタ＆ピッツァ デルパパ",
        "https://i.imgur.com/fyIdXV2.jpeg"
    ],
    [
        "Sannikuya カルビ丼・スン豆腐専門店 三肉屋",
        "https://i.imgur.com/cONp4Ic.jpeg"
    ],
    [
        "Kamukura どうとんぼり神座",
        "https://i.imgur.com/w24CqWy.jpeg"
    ],
    [
        "Butameshiya 豚めし家",
        "https://i.imgur.com/pC33Bic.jpeg"
    ],
    [
        "Metro Ramen",
        "https://i.imgur.com/4NxQVoO.jpeg"
    ],
    [
        "Bolognese to Meat Sauce no Chigai wo Oshieteageru ボロネーゼとミートソースの違いを教えてあげる",
        "https://i.imgur.com/1kKhDpu.jpeg"
    ],
    [
        "Ramen Hachibankan らーめん八番館",
        "https://i.imgur.com/AfzsLYt.jpeg"
    ],
    [
        "Bonten ぼんてん",
        "https://i.imgur.com/1iSOeb2.jpeg"
    ],
    [
        "Kippou 神戸吉豊",
        "https://i.imgur.com/LnFNkfv.jpeg"
    ],
    [
        "Ootoya 大戸屋",
        "https://i.imgur.com/tXtKiQ6.jpeg"
    ],
    [
        "Marutaka 丸高中華そば",
        "https://i.imgur.com/QvAd0s7.jpeg"
    ],
    [
        "Ramen Zundoya ラー麺ずんどう屋",
        "https://i.imgur.com/d0hCDk5.jpeg"
    ],
    [
        "Mỹ Tho",
        "https://i.imgur.com/bXxaFL9.jpeg"
    ],
    [
        "KFC",
        "https://i.imgur.com/58xBZSs.jpeg"
    ],
    [
        "Grill Kinpura グリル金プラ 三宮店",
        "https://i.imgur.com/tXLspgR.jpeg"
    ],
    [
        "Mei Hua 梅花（メイファ）",
        "https://i.imgur.com/6h9q1Ip.pn"
    ],
    [
        "Maruo Shokudouまるお食堂",
        "https://i.imgur.com/DJaGxXB.pn"
    ],
    [
        "Nada 酒房 灘",
        "https://i.imgur.com/ojaJAFX.jpeg"
    ],
    [
        "Hội An ホイアン",
        "https://i.imgur.com/FJ3XvKj.jpeg"
    ],
    [
        "Sen SENベトナムレストラン",
        "https://i.imgur.com/kqD6afs.jpeg"
    ],
    [
        "Kobe Cocco 神戸COCCO",
        "https://i.imgur.com/i77q9r4.jpeg"
    ],
    [
        "ICHIRO 餃子専門店イチロー",
        "https://i.imgur.com/HkxGlzo.jpeg"
    ],
    [
        "MARUNAKA どんぶりマルナカ",
        "https://i.imgur.com/Bfmcv9f.jpeg"
    ],
    [
        "熊猫厨房",
        "https://i.imgur.com/RgzW5Gz.jpeg"
    ],
    [
        "AMANA アマナ",
        "https://i.imgur.com/b1b1Vcz.jpeg"
    ],
    [
        "天津衛",
        "https://i.imgur.com/JZZzcjw.jpeg"
    ],
    [
        "Kinran 金蘭",
        "https://i.imgur.com/x2656XW.jpeg"
    ],
    [
        "Honke Katsumeshi Tei 本家 かつめし亭",
        "https://i.imgur.com/mbf0XXt.jpeg"
    ]
])