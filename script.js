'use strict';

// ===========================
// 路線・駅データ
// ===========================
const LINES = [
  {
    id: 'higashiyama',
    name: '地下鉄 東山線',
    stations: [
      '高畑','八田','岩塚','中村公園','中村日赤','本陣','亀島',
      '名古屋','伏見','栄','新栄町','千種','今池','池下','覚王山',
      '本山','東山公園','星ヶ丘','一社','上社','本郷','藤が丘'
    ]
  },
  {
    id: 'meijo',
    name: '地下鉄 名城線',
    stations: [
      '金山','東別院','上前津','矢場町','栄','久屋大通',
      '市役所','名城公園','黒川','志賀本通','平安通',
      'ナゴヤドーム前矢田','大曽根','砂田橋','茶屋ヶ坂','本山',
      '八事日赤','八事','総合リハビリセンター','瑞穂運動場西',
      '瑞穂区役所','新瑞橋','桜本町','瑞穂運動場東','堀田','伝馬町','神宮西'
    ]
  },
  {
    id: 'meiko',
    name: '地下鉄 名港線',
    stations: ['金山','日比野','六番町','東海通','港区役所','築地口','名古屋港']
  },
  {
    id: 'tsurumai',
    name: '地下鉄 鶴舞線',
    stations: [
      '上小田井','庄内通','庄内緑地公園','浄心','浅間町','丸の内',
      '伏見','大須観音','上前津','鶴舞','荒畑','御器所','川名',
      'いりなか','八事','塩釜口','植田','原','平針','赤池'
    ]
  },
  {
    id: 'sakura',
    name: '地下鉄 桜通線',
    stations: [
      '中村区役所','名古屋','国際センター','丸の内','久屋大通',
      '高岳','車道','今池','吹上','御器所','桜山','瑞穂区役所',
      '瑞穂運動場西','新瑞橋','桜本町','鳴子北','相生山','神沢','徳重'
    ]
  },
  {
    id: 'kamiida',
    name: '地下鉄 上飯田線',
    stations: ['上飯田','平安通']
  },
  {
    id: 'meitetsu-honsen',
    name: '名鉄 名古屋本線',
    stations: [
      '豊橋','伊奈','国府','御油','名電赤坂','名電長沢','本宿',
      '名電山中','藤川','美合','男川','東岡崎','岡崎公園前','矢作橋',
      '宇頭','新安城','牛田','知立','一ツ木','富士松','豊明','前後',
      '中京競馬場前','有松','左京山','鳴海','本星崎','本笠寺','桜',
      '呼続','堀田','神宮前','金山','山王','名鉄名古屋','栄生',
      '東枇杷島','西枇杷島','二ツ杁','新川橋','須ケ口','丸ノ内',
      '新清洲','大里','奥田','国府宮','島氏永','妙興寺','名鉄一宮',
      '今伊勢','石刀','新木曽川','木曽川堤','黒田','木田',
      '笠松','岐南','茶所','加納','名鉄岐阜'
    ]
  },
  {
    id: 'meitetsu-inuyama',
    name: '名鉄 犬山線',
    stations: [
      '名鉄名古屋','栄生','東枇杷島','西枇杷島','二ツ杁','新川橋',
      '須ケ口','上小田井','西春','徳重','北徳重','鹿田',
      '岩倉','石仏','木津用水','布袋','江南','柏森','扶桑',
      '山名','犬山口','犬山','犬山遊園','善師野','西可児','可児川','日本ライン今渡'
    ]
  },
  {
    id: 'meitetsu-tokoname',
    name: '名鉄 常滑線',
    stations: [
      '神宮前','豊田本町','道徳','大江','大同町','聚楽園','新日鉄前',
      '太田川','高横須賀','尾張横須賀','寺本','朝倉','古見','長浦','住吉町','常滑'
    ]
  },
  {
    id: 'meitetsu-airport',
    name: '名鉄 空港線',
    stations: ['常滑','りんくう常滑','中部国際空港']
  },
  {
    id: 'meitetsu-kowa',
    name: '名鉄 河和線',
    stations: [
      '太田川','白沢','南加木屋','巽ヶ丘','八幡新田',
      '知多半田','成岩','青山','上ゲ','住吉町','知多武豊','富貴','河和口','河和'
    ]
  },
  {
    id: 'meitetsu-komaki',
    name: '名鉄 小牧線',
    stations: [
      '上飯田','味鋺','味美','春日井','牛山','間内',
      '小牧口','小牧','小牧原','味岡','田県神社前','楽田','大山寺','犬山'
    ]
  },
  // ── 岐阜エリア ──
  {
    id: 'jr-tokaido-gifu',
    name: 'JR東海道本線（岐阜）',
    stations: ['岐阜','西岐阜','穂積','大垣','垂井','関ケ原']
  },
  {
    id: 'jr-takayama',
    name: 'JR高山本線',
    stations: [
      '岐阜','長森','那加','蘇原','各務ケ原','鵜沼',
      '坂祝','美濃太田','下麻生','飛騨金山','下呂',
      '久々野','高山'
    ]
  },
  {
    id: 'jr-chuo-gifu',
    name: 'JR中央本線（岐阜）',
    stations: ['多治見','土岐市','瑞浪','釜戸','武並','恵那','美乃坂本','中津川']
  },
  {
    id: 'meitetsu-kakamigahara',
    name: '名鉄 各務原線',
    stations: [
      '名鉄名古屋','二ツ杁','須ケ口',
      '三柿野','各務原市役所前',
      '新那加','名電各務原','名鉄岐阜'
    ]
  },
  {
    id: 'meitetsu-takehana',
    name: '名鉄 竹鼻線・羽島線',
    stations: [
      '笠松','西笠松','柳津','南宿',
      '割田','竹鼻','羽島市役所前',
      '江吉良','新羽島'
    ]
  },
  {
    id: 'meitetsu-hiromi',
    name: '名鉄 広見線',
    stations: ['新可児','明智','御嵩口','御嵩']
  },
  {
    id: 'yoro',
    name: '養老鉄道',
    stations: ['桑名','多度','養老','広神戸','北神戸','池野','揖斐']
  },
  // ── 三重エリア ──
  {
    id: 'jr-kansai-mie',
    name: 'JR関西本線（三重）',
    stations: [
      '名古屋','八田','春田','蟹江','永和','弥富',
      '長島','桑名','朝日','富田','四日市',
      '河原田','亀山'
    ]
  },
  {
    id: 'jr-kisei-mie',
    name: 'JR紀勢本線（三重）',
    stations: [
      '亀山','下庄','一身田','津','阿漕',
      '高茶屋','六軒','松阪','徳和','多気',
      '相可','佐奈','栃原','川添','三瀬谷',
      '滝原','阿曽','伊勢柏崎','大内山',
      '梅ケ谷','紀伊長島'
    ]
  },
  {
    id: 'kintetsu-nagoya',
    name: '近鉄名古屋線',
    stations: [
      '近鉄名古屋','米野','黄金','烏森',
      '近鉄八田','伏屋','戸田','近鉄蟹江',
      '富吉','佐古木','近鉄弥富','近鉄長島',
      '桑名','益生','伊勢朝日','川越富洲原',
      '近鉄富田','霞ヶ浦','阿倉川','川原町',
      '近鉄四日市','新正','内部',
      '塩浜','北楠','楠','長太ノ浦',
      '久居','桃園','伊勢中川'
    ]
  },
  {
    id: 'kintetsu-yunoyama',
    name: '近鉄湯の山線',
    stations: ['近鉄四日市','中菰野','菰野','湯の山温泉']
  },
  {
    id: 'kintetsu-suzuka',
    name: '近鉄鈴鹿線',
    stations: [
      '伊勢若松','柳','鈴鹿市','白子',
      '中白子','鈴鹿サーキット稲生',
      '玉垣','江島','平田町'
    ]
  },
  {
    id: 'kintetsu-osaka-mie',
    name: '近鉄大阪線（三重）',
    stations: [
      '伊勢中川','松阪','大三','伊勢石橋',
      '川合高岡','榊原温泉口','東青山',
      '西青山','青山町','伊賀神戸',
      '美旗','名張','桔梗が丘',
      '薬師寺','大和八木'
    ]
  },
  {
    id: 'kintetsu-yamada',
    name: '近鉄山田線',
    stations: [
      '伊勢中川','斎宮','明星','明野',
      '小俣','宮町','伊勢市',
      '宇治山田','五十鈴川',
      '朝熊','池の浦','鳥羽'
    ]
  },
  {
    id: 'sangi-hokusei',
    name: '三岐鉄道北勢線',
    stations: [
      '西桑名','馬道','七和','穴太',
      '北大社','山田川','大泉',
      '在良','三重朝日','中里',
      '蒜坂','石榑','新設楽',
      '楚原','麻生田','阿下喜'
    ]
  },
  {
    id: 'sangi-sangi',
    name: '三岐鉄道三岐線',
    stations: [
      '富田','大矢知','平津','暁学園前',
      '山城','保々','北勢中央公園口',
      '丹生川','伊勢治田','East i',
      '三里','梅戸井','大安',
      '三岐朝明','富田一色','近鉄富田'
    ]
  }
];

// ===========================
// 路線セレクトを初期化
// ===========================
const lineSelect    = document.getElementById('lineSelect');
const stationSelect = document.getElementById('stationSelect');

LINES.forEach(line => {
  lineSelect.appendChild(new Option(line.name, line.id));
});

// ===========================
// 路線変更 → 駅を絞り込む
// ===========================
lineSelect.addEventListener('change', function () {
  const line = LINES.find(l => l.id === this.value);
  stationSelect.innerHTML = '';

  if (line) {
    stationSelect.disabled = false;
    stationSelect.appendChild(new Option('▼ 请选择车站', ''));
    line.stations.forEach(s => stationSelect.appendChild(new Option(s, s)));
  } else {
    stationSelect.disabled = true;
    stationSelect.appendChild(new Option('请先选择路线', ''));
  }
});

// ===========================
// タブ切り替え
// ===========================
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
    this.classList.add('active');
    document.getElementById('panel-' + this.dataset.tab).classList.remove('hidden');
  });
});

// ===========================
// クエリ共通部分の組み立て
// ===========================
function buildCommonParts(prefix) {
  const parts = [];
  const rentMax  = document.getElementById(prefix + '-rentMax').value;
  const layout   = document.getElementById(prefix + '-layout').value;
  const walk     = document.getElementById(prefix + '-walk').value;
  const pet       = document.getElementById(prefix + '-pet').checked;
  const parking   = document.getElementById(prefix + '-parking').checked;
  const autolock  = document.getElementById(prefix + '-autolock').checked;
  const bath      = document.getElementById(prefix + '-bath').checked;
  const foreigner = document.getElementById(prefix + '-foreigner').checked;
  const remote    = document.getElementById(prefix + '-remote').checked;

  if (layout)    parts.push(layout);
  if (rentMax)   parts.push(rentMax + '万円以下');
  if (walk)      parts.push('駅徒歩' + walk + '分以内');
  if (pet)       parts.push('ペット可');
  if (parking)   parts.push('駐車場あり');
  if (autolock)  parts.push('オートロック');
  if (bath)      parts.push('バストイレ別');
  if (foreigner) parts.push('外国人可');
  if (remote)    parts.push('リモート内見');

  return parts;
}

// ===========================
// サイト名サフィックスの取得
// ===========================
const SITE_SUFFIX = {
  suumo:   'SUUMO',
  homes:   "HOME'S",
  athome:  'athome',
  chintai: 'CHINTAI',
  google:  '',
};

function getSiteSuffix(prefix) {
  const val = document.getElementById(prefix + '-site').value;
  return SITE_SUFFIX[val] ?? 'SUUMO';
}

// ===========================
// エリア検索 → Google 検索
// ===========================
document.getElementById('areaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const area   = document.getElementById('areaCode').value || '愛知県';
  const suffix = getSiteSuffix('area');
  const parts  = [area, '賃貸', ...buildCommonParts('area')];
  if (suffix) parts.push(suffix);

  const query = parts.join(' ');
  window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank', 'noopener,noreferrer');
});

// ===========================
// 駅検索 → Google 検索
// ===========================
document.getElementById('stationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const station = stationSelect.value;
  if (!station) {
    stationSelect.focus();
    return;
  }

  const suffix = getSiteSuffix('st');
  const parts  = [station + '駅', '賃貸', ...buildCommonParts('st')];
  if (suffix) parts.push(suffix);

  const query = parts.join(' ');
  window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank', 'noopener,noreferrer');
});
