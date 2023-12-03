let geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.54187, 49.01435]
      },
      properties: {
        title: 'シャルル・ド・ゴール国際空港',
        description: `
        <u>パリへの玄関口となるフランス最大の空港。国際線の巨大なハブ空港。</u><br/>
        <u>円筒形のメインターミナル Aérogare 1（第1ターミナル）などの特徴的な設計は、建築家 ポール・アンドリュー (Paul Andreu) によるもの。</u><br/>
        <br/>
        <small>ちなみに、大阪・南港のなにわの海の時空館もポール・アンドリューによる設計です。</small>
        `,
        img: 'paris/img/cdg.png',
        tag: 'tour',
        link: 'paris/cdg.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3370664200188855, 48.86359551203836]
      },
      properties: {
        title: 'パレ・ロワイヤル',
        description: `
        <u>パレ・ロワイヤル（Palais-Royal）は「王の宮殿」という意味。現在はフランス共和国の所有物となり、国務院（コンセイユ・デタ）として利用されています。</u><br/>
        <u>正面玄関の広場ではいつも地元の人たちと観光客で賑わっていて、中でも噴水のある中庭はパリ1区のオアシス的な空間です。</u><br/>
        <br/>
        <small>ルーヴル区とも呼ばれるパリ1区は、ルーヴル美術館（ルーヴル宮殿）やパレ・ロワイヤルなど、世界的に有名な歴史的建造物が立ち並ぶパリ市のほぼ中央。</small>
        `,
        img: 'paris/img/Palais-Royal.jpeg',
        tag: 'tour',
        link: 'paris/1er.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.35086, 48.85906]
      },
      properties: {
        title: 'ポンピドゥー・センター',
        description: `
        <u>せっかくパリに来たんだから記念に建物だけでも見ておこうと立ち寄った
        ポンピドゥー・センター (Centre Pompidou) の周辺は、ほとんど観光客（またはそれを相手に詐欺まがいなことしてる人）な気がして気疲れしました。</u><br/>
        <br/>
        <small>ジョルジュ・ポンピドゥー国立芸術文化センター Centre national d’art et de culture Georges Pompidou (CNAC-GP) は、
        多目的スペース（地下1、1、2階）、公共情報図書館（2、3、4階）、国立近代美術館（5、6、7階）、音響音楽研究所（別棟）を含む総合文化施設です。</small>
        `,
        img: 'paris/img/Pompidou.png',
        tag: 'tour',
        link: 'paris/4e.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3499, 48.85296]
      },
      properties: {
        title: 'シテ島',
        description: `
        <u>めちゃくちゃ観光地で、ゴミゴミしてそうだから、行こうかどうか悩んでたんだけど、シテ島 こそが思い描いたパリでした。</u><br/>
        <br/>
        <small>シテ島は、パリ市内で最も古い歴史をもつパリ1区・4区に属し、“パリ発祥の地”とも称される。<br/>
        ノートルダム大聖堂がある東半分が4区、サント・シャペルがある西半分が1区。</small>
        `,
        img: 'paris/img/notre-dame.png',
        tag: 'tour',
        link: 'paris/cite.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3473840533029886, 48.84662337998583]
      },
      properties: {
        title: "サンテティエンヌ・デュ・モン教会",
        description: `
        <u>パリ4区からセーヌ川を渡って南側、パリ5区 最大の名所「パンテオン」の裏にある教会「Eglise Saint Etienne du Mont」</u><br/>
        <br/>
        <small>5区から6区にかけては
        "カルチエ・ラタン" と呼ばれる
        パリ大学をはじめ教育機関が集中する、古くから学生街として知られている地域。</small>
        `,
        img: 'paris/img/saint-etienne.png',
        tag: 'tour',
        link: 'paris/5e.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.337232669391142, 48.84697258939036]
      },
      properties: {
        title: "リュクサンブール公園",
        description: `
        <u>現在はフランス上院の議事堂として使用されている旧王宮の周囲の大きな公園。パリ市民の憩いの場の一つ。</u><br/>
        <u>ベンチがたくさんあって、読書したりピクニックしたり、重い思いにくつろぐ人たちに混ざって優雅にくつろげる。</u><br/>
        <br/>
        <small>公園は日没で閉園。また、宮殿内に立ち寄り、フランス上院の公聴会に出席することもできます。</small>
        `,
        img: 'paris/img/luxembourg.png',
        tag: 'nature',
        link: 'paris/luxembourg.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.38444, 48.85949]
      },
      properties: {
        title: "ロケット広場",
        description: `
        <u>ペール・ラシェーズ墓地の近く、パリ11区にある公園「Square de la Roquette」</u><br/>
        <u>パン屋でサンドイッチを買って、街の人たちがたくさんいる公園でピクニックするのが最高のランチかも。
        レストランやカフェより安上がりに、優雅な気分になれます。</u><br/>
        <br/>
        <small>ウィキペディアによると、公園は刑務所の跡地で、Wi-Fiアンテナがありインターネットに接続できるそうです。</small>
        `,
        img: 'paris/img/roquette.png',
        tag: 'nature',
        link: 'paris/sandwich.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.39332, 48.86139]
      },
      properties: {
        title: "ペール・ラシェーズ墓地",
        description: `
        <u>ショパン、バルザック、オスカー・ワイルド、エディット・ピアフ、ジム・モリソンなど、数多くの有名人が眠っているパリ市内最大の墓地。世界で最も有名な墓地の一つ。</u><br/>
        <u>数時間散歩して、いろんなお墓の写真を撮りました。</u>
        `,
        img: 'paris/img/pere-lachaise.png',
        tag: 'tour',
        link: 'paris/pere-lachaise.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3319669938934737, 48.87143380515349]
      },
      properties: {
        title: "ガルニエ宮",
        description: `
        <u>パリにある歌劇場。パリ国立オペラの公演会場の一つ、単にオペラ座（l'Opéra）と呼ばれることもある。</u><br/>
        <u>週末には頻繁に、オペラ座前の広場に人が集まり、なにかしらのデモが行われるそうです。</u>
        `,
        img: 'paris/img/opera.png',
        tag: 'tour',
        link: 'paris/weekend.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.36384, 48.8675]
      },
      properties: {
        title: "レピュブリック広場",
        description: `
        <u>地下鉄レピュブリック駅の上にある、広々とした広場。通称 シャトー・ドー広場（水の城広場）</u><br/>
        <u>広場の中央にはフランス共和国の象徴であるマリアンヌ像があり、なにか国に問題や疑問、抗議があるときには落書きされたりするらしい。</u><br/>
        <u>近くを流れるサン・マルタン運河沿の気持ちいい木陰は散歩にぴったり。このエリアに来て、等身大のリアルなパリを垣間見た気がします。</u>
        `,
        img: 'paris/img/republique.png',
        tag: 'tour',
        link: 'paris/weekend.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3877051, 48.8682766]
      },
      properties: {
        title: "カフェ ル・チキート",
        description: `
        <u>パリの若者たちがビリヤードと少しのダンスではしゃぐ楽しい雰囲気のフレンドリーなバー「Café Le Chiquito」</u>
        `,
        img: 'paris/img/Le-Chiquito.jpeg',
        tag: 'food',
        link: 'paris/restaurant.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.37776, 48.86563]
      },
      properties: {
        title: "PNY オベルカンフ",
        description: `
        <u>PNYはパリ・ニューヨークという意味らしく、ニューヨークスタイルの最高のハンバーガーとフライドポテトのほか、豊富なビールが楽しめます。</u><br/>
        <small>PNY Oberkampf があるオベルカンフ通りを中心とするエリアは、レストランやバーが集まる夜遊びで人気のある地区。</small>
        `,
        img: 'paris/img/pny.png',
        tag: 'food',
        link: 'paris/restaurant.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.35541, 48.87053]
      },
      properties: {
        title: 'ル プチ カフェ',
        description: `
        <u>ナチナイフのヘンドリックやアーティストのショボショボが出演するノイズ音楽のパーティ「LE NON_JAZZ」へ出かけた。</u><br/>
        <u>会場の「Le Petit Café」は、テアトル・アントワーヌという劇場に併設するカフェバー。</u>
        `,
        img: 'paris/img/le-petit-cafe.png',
        tag: 'art',
        link: 'paris/nnjzz.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.36486, 48.8736]
      },
      properties: {
        title: "シェズ アデル",
        description: `
        <u>フランスに来た初日にベルヴィルから長い散歩に出て、初めてアペロしたカフェ・バー「Chez Adel」</u><br/>
        <u>店内では常連のおじさんや地元の音楽家が演奏したり歌ったり、楽しい雰囲気でした。</u><br/>
        `,
        img: 'paris/img/chez-adel.png',
        tag: 'food',
        link: 'paris/apero.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.37941, 48.85952]
      },
      properties: {
        title: "ラ・ジェネラル",
        description: `
        <u>Fanzines! Festival 2018 の一環として開かれた展覧会の会場の1つ「La Générale」</u><br/>
        <u>アーティストのショボショボさんに案内してもらって、建物内のいろいろな場所を探検しました。</u>
        `,
        img: 'paris/img/La-Generale.jpeg',
        tag: 'art',
        link: 'paris/la-generale.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.37875, 48.87272]
      },
      properties: {
        title: "レ・アール ド ラ・アジエ（新今日 超市）",
        description: `
        <u>ベルヴィルは、パリの二大チャイナタウンの1つで、メインストリートには中国語とフランス語が一体となった派手な色使いの看板が並びます。</u><br/>
        <u>サミーとセブリーンの家では自炊することが多く、このアジアンスーパー「Les Halles de l'Asie "Super Store"」で
        買った食材や調味料で日本食を作ったりしました。</u>
        `,
        img: 'paris/img/superstore.png',
        tag: 'food',
        link: 'paris/belleville.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.37964, 48.87272]
      },
      properties: {
        title: "フィン レピスリー",
        description: `
        <u>フランスで最初のサンドイッチを買ったデリカテッセン「Fine l'Epicerie」</u><br/>
        <u>チーズ、パテ、ソシソン (ドライ・ソーセージ)、この店で買った食材で作ったサンドイッチがベルヴィルの思い出の味。</u>
        `,
        img: 'paris/img/finelepicerie.png',
        tag: 'food',
        link: 'paris/sandwich.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3799, 48.87128]
      },
      properties: {
        title: "ヴィラ・ベルヴィル",
        description: `
        <u>パリ近隣で活動するアーティストをサポートする文化施設「Villa Belleville」</u><br/>
        <u>公募によって選ばれたアーティストが随時入れ替わりここで制作・発表を行うほか、さまざまなワークショップが開かれます。</u><br/>
        <u>セブリーンとサミーもよく利用しているそうで、制作中の陶芸作品を見せてくれたり、集まった友人たちとパーティをしたりしました。</u>
        `,
        img: 'paris/img/villa-belleville.png',
        tag: 'art',
        link: 'paris/belleville.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3725581644924603, 48.845142389006526]
      },
      properties: {
        title: "リヨン駅",
        description: `
        <u>パリに6つある主要ターミナル駅の一つ。フランス国鉄（SNCF）・パリ交通公団（RATP）と地下鉄が発着します。</u><br/>
        <u>パリメトロ14号線のホームから見えるエキゾチックな庭園が印象的でした。</u>
        `,
        img: 'paris/img/Lyon.jpeg',
        tag: 'tour',
        link: 'paris/lyon.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.37576, 48.83358]
      },
      properties: {
        title: "ビブリオテーク・ナショナル",
        description: `
        <u>フランス国立図書館新館 （フランソワ・ミッテラン図書館） (Bibliothèque Nationale de France (BNF))</u><br/>
        <u>パリ市の南部、セーヌ川の南岸に面する 13区 のランドマーク。ジャングルのような中庭を囲む、L字型の4塔の高層ビル。</u><br/>
        <u>この図書館の誕生によって周辺エリアの再開発が行われ、街の様相が一変したそうです。</u>
        `,
        img: 'paris/img/Bibliotheque-Nationale.png',
        tag: 'tour',
        link: 'paris/rive-gauche.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.37805, 48.83526]
      },
      properties: {
        title: "シモーヌ・ド・ボーヴォワール橋",
        description: `
        <u>セーヌ川に架かる歩行者・自転車専用の橋「Passerelle Simone-de-Beauvoir」</u><br/>
        <u>このエリアの雰囲気を象徴するような、橋の中央と端が交互に上下する特徴的な見たことない設計です。</u>
        `,
        img: 'paris/img/simone-de-beauvoir.png',
        tag: 'tour',
        link: 'paris/rive-gauche.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.36806, 48.82997]
      },
      properties: {
        title: "ジャンヌ・ダルク広場",
        description: `
        <u>オリンピアド駅周辺にあるノートル＝ダム＝ド＝ラ＝ガール教会に臨する ジャンヌ・ダルク広場 (Pl. Jeanne d'Arc) では、毎週日曜日にマルシェが開かれます。</u><br/>
        <u>ここに限らず、パリの広場では週末にマルシェが頻繁に開かれていて、チーズとかソシソン (ドライ・ソーセージ)とか卵とか、めちゃくちゃ美味しいです。</u>
        `,
        img: 'paris/img/pl-jeanne-d-arc.png',
        tag: 'food',
        link: 'paris/weekend.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.36902, 48.82794]
      },
      properties: {
        title: "ル・ペレ フェクト",
        description: `
        <u>ジョン・フィリップとバネッサの家の近くのレストラン・バー「Le Père Fecto」</u><br/>
        <u>オーナーが気さくなエンターティナーで、エッフェル塔のキーホルダーもらいました。</u><br/>
        <u>ここオリジナルのカクテルがすごかった。めちゃくちゃアルコール強いけど唯一無二です。</u>
        `,
        img: 'paris/img/le-pere-fecto.png',
        tag: 'food',
        link: 'paris/restaurant.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3651969301186, 48.82575693567475]
      },
      properties: {
        title: "オリンピアド",
        description: `
        <u>パリ市内南部の13区の南部。メトロの駅直結の高層住宅団地の名称であり駅名。高層住宅団地の各棟には、オリンピックが開催された都市名がつけられています。</u><br/>
        <u>団地の下にある荒んだショッピングモールにはパリ唯一のたい焼き専門店があった。パリの日本食レストランはおいしいとこないらしいけど、普通においしかった。</u>
        `,
        img: 'paris/img/olympiades.png',
        tag: 'tour',
        link: 'paris/olympiades.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.322041, 48.865137]
      },
      properties: {
        title: "シャンゼリゼ通り",
        description: `
        <u>パリ8区を斜めに横切る約3km・幅70mの大通り。オベリスクのあるコンコルド広場 から 凱旋門のあるシャルル・ド・ゴール広場（旧エトワール広場）まで、高級店やカフェが立ち並ぶ 観光客と買い物客が最も多い世界的観光地。</u><br/>
        <u>2018年6月のコンコルド広場には、移動式観覧車「ルー・ド・パリ (Roue de Paris)」 が設営されていました。</u>
        `,
        img: 'paris/img/Concorde.png',
        tag: 'tour',
        link: 'paris/drive/',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.29502, 48.87379]
      },
      properties: {
        title: "シャルル・ド・ゴール広場",
        description: `
        <u>シャンゼリゼ通りの西端、世界的に有名な戦勝記念碑「エトワール凱旋門」があるラウンドアバウトの広場。</u><br/>
        <u>ルーヴル美術館（カルーゼル凱旋門）から続く、「パリの歴史軸」と呼ばれる 歴史的建築物、記念碑などの名所が並ぶ一歩道の終点。</u><br/>
        <br/>
        <small>この広場を中心に、シャンゼリゼ通りをはじめとして12本の通りが放射状に延びるその形が、地図上に光り輝く「星=étoile」のように見えることから「星の広場（エトワール広場）Place de l'Étoile」とも呼ばれています。</small>
        `,
        img: 'paris/img/Triomphe.png',
        tag: 'tour',
        link: 'paris/drive/',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.29448, 48.85837]
      },
      properties: {
        title: "エッフェル塔",
        description: `
        <u>パリ市内に多数あるポートで自由に乗り捨てできる電動レンタカーを借りて、ジョン・フィリップとバネッサの案内で観光地をめぐるナイトドライブ。</u><br/>
        <u>コンコルド広場からエトワール広場までシャンゼリゼ通りを横断し、ラウンドアバウトを周回。最後にエッフェル塔をくぐり抜けて、エッフェル塔を後ろに記念撮影。</u>
        `,
        img: 'paris/img/Eiffel.png',
        tag: 'tour',
        link: 'paris/drive/',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.33242, 48.83383]
      },
      properties: {
        title: "カタコンブ・ドゥ・パリ",
        description: `
        <u>カタコンブ・ド・パリ は、パリ市内全域の地下を張りめぐる 世界最大の地下墓地。</u><br/>
        <u>深さは地下20m～30m。全長500kmはあると言われており、一般公開されている見学コースはそのうちの約1.7km。</u>
        `,
        img: 'paris/img/Catacombes.jpeg',
        tag: 'tour',
        link: 'paris/catacombes/',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3210899664060993, 48.84177553841447]
      },
      properties: {
        title: "モンパルナス駅",
        description: `
        <u>モンパルナス駅付近で、イリーガルカタコンブ観光のプロフェッショナルと待ち合わせ。</u>
        `,
        img: 'paris/img/End.jpeg',
        tag: 'tour',
        link: 'paris/catacombes/',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.33378, 48.85685]
      },
      properties: {
        title: "エコール・デ・ボザール（パリ国立高等美術学校）",
        description: `
        <u>ルーブル美術館の南、セーヌ川を渡ってすぐ パリ6区 にあるパリ国立高等美術学校「Beaux-Arts de Paris]</u><br/>
        <u>サミーがノミネートされた国際的アートコンペのベルニサージュ（Vernissage）へ出かけました。</u><br/>
        <br/>
        <small>ベルニサージュはオープンパーティを意味するフランス語。</small>
        `,
        img: 'paris/img/beaux-arts.png',
        tag: 'art',
        link: 'paris/jeune-creation-68e.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.4392, 48.8582]
      },
      properties: {
        title: 'ラ・パホール エホンツ',
        description: `
        <u>FANZINES ! festival 2018 の会場、パリ20区に隣接するパリ郊外東部の街 モントルイユの文化施設「La Parole Errante」</u>
        <u>詩人で劇作家の故アルマン・ガッティを中心とする団体が運営する実験の場。</u>
        `,
        img: 'paris/img/laparoleerrantedemain.png',
        tag: 'art',
        link: 'paris/fanzinsfes2018.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.35317, 48.88856]
      },
      properties: {
        title: 'ベスト・アフリカ',
        description: `
        <u>パリ18区の東側一帯 ラ・シャペル (La Chapelle) は、アフリカ系移民が多く暮らす地区。</u><br/>
        <u>特に、BATT COOP | Galerie P38 があったドゥドゥ―ビル通り (Rue Doudeauville) 付近は
        アフリカ系の店が多く、自家製の手作り感あるアフリカンフードを安価で味わえます。</u><br/>
        <br/>
        <small>同じパリ18区の南西部にはパリの眺望を楽しむことができる観光エリア「モンマルトル」があります。</small>
        `,
        img: 'paris/img/best-africa.png',
        tag: 'food',
        link: 'paris/p38.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.3545577, 48.88845]
      },
      properties: {
        title: 'BATT COOP | Galerie P38',
        description: `
        <u>展覧会「快晴・パリ」 の 会場、本屋「BATT COOP」と印刷所「PARIS PRINT CLUB」に併設するギャラリー「P38」</u><br/>
        <u>オープニングパーティ（ベルニサージュ）では、ラゴンチームと一緒に手作りした団子と日本酒やお茶を振る舞いました。</u>
        `,
        img: 'paris/img/p38.png',
        tag: 'art',
        link: 'paris/p38.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [7.269272916383471, 43.69487207864998]
      },
      properties: {
        title: 'Plage Beau Rivage',
        description: `
        <u>ニース最大のシックなビーチ。ニース市の中心部、地中海沿いのプロムナード デ ザングレ沿いの理想的な場所に位置し、象徴的な沿岸体験をお楽しみいただけます。</u>
        `,
        img: 'provence/img/beach.png',
        tag: 'nature',
        link: 'provence/nice.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [7.274319676493576, 43.69687445189564]
      },
      properties: {
        title: 'Lou Pastrouil',
        description: `
        ニースのブラッスリーで、毎日午前 7 時から深夜まで営業しており、フレンドリーな雰囲気の中で最高のフランス料理を提供しています。
        `,
        img: 'provence/img/lou-pastrouil.png',
        tag: 'food',
        link: 'provence/nice.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [7.27571, 43.6971]
      },
      properties: {
        title: 'Cathédrale Sainte-Réparate de Nice',
        description: `
        サン・ルパラット大聖堂
        殉教者の聖レパラータの遺骨と祭壇があるバロック様式の大聖堂。
        `,
        img: 'provence/img/sainte-reparate.png',
        tag: 'tour',
        link: 'provence/nice.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [7.27953301754502, 43.69590882488339]
      },
      properties: {
        title: 'Le Parc de la Colline du Château',
        description: `
        歴史ある丘の上の公園。市街と海の美しい景色を一望でき、人工の滝とカフェがある。
        `,
        img: 'provence/img/nice.png',
        tag: 'tour',
        link: 'provence/nice.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6.513062138895208, 43.84623942927007]
      },
      properties: {
        title: 'Pl. Marcel Sauvaire',
        description: `
        カステラーヌ
        `,
        img: 'provence/img/castellane.png',
        tag: 'tour',
        link: 'provence/castellane.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.4408130400926495, 43.772565544944]
      },
      properties: {
        title: 'Notre-Dame de Beaulieu',
        description: `
        Cucuron
        `,
        img: 'provence/img/cucuron.png',
        tag: 'tour',
        link: 'provence/cucuron.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.38322, 43.94313]
      },
      properties: {
        title: 'Sculpture Joseph Talon',
        description: `
        トリュフ養殖の父 ジョセフ・タロンの像
        `,
        img: 'provence/img/apt.png',
        tag: 'tour',
        link: 'provence/apt.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.38489843574277, 43.94648448334547]
      },
      properties: {
        title: 'Ruines du château',
        description: `
        アレクシーとべティナがアートスクール卒業後に住み始めた村 サン＝サトゥルナン＝レ＝ザプト にある古い城の跡
        `,
        img: 'provence/img/chapelle-du-chateau.png',
        tag: 'tour',
        link: 'provence/apt.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [7.112859791473653, 43.727515007736656]
      },
      properties: {
        title: 'Chapelle du Rosaire à Vence',
        description: `
        アンリ・マティスの傑作、ヴァンスのロザリオ礼拝堂。
        `,
        img: 'provence/img/chapelle-du-rosaire.png',
        tag: 'tour',
        link: 'provence/chapelle-matisse.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.40935369301107, 44.09172943241285]
      },
      properties: {
        title: 'Nougat André Boyer',
        description: `
        最高のヌガー屋さん
        `,
        img: 'provence/img/andre-boyer.png',
        tag: 'food',
        link: 'provence/sault.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.40798, 44.09214]
      },
      properties: {
        title: 'O Pichoun',
        description: `
        丘の上の素敵なレストラン
        `,
        img: 'provence/img/o-pichoun.png',
        tag: 'food',
        link: 'provence/sault.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.40884, 44.09212]
      },
      properties: {
        title: 'La Maison des Producteurs',
        description: `
        全部オーガニックの最高のアイスクリーム屋さん。全メニュー一気に食べたいくらいおいしかった
        `,
        img: 'provence/img/la-maison-des-producteurs.png',
        tag: 'food',
        link: 'provence/sault.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.409114529233989, 44.09189711511311]
      },
      properties: {
        title: 'Yves and Virginia Butcher',
        description: `
        店構えから衝撃的なソーセージ屋さん。メニューが豊富すぎて困ったけど絶対全部うまい
        `,
        img: 'provence/img/yves-and-virginia.png',
        tag: 'food',
        link: 'provence/sault.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6.401837490526702, 43.794157145680884]
      },
      properties: {
        title: 'Pizzeria Jean Louis',
        description: `
        崖の上のすごい場所にある最高のピザ屋
        `,
        img: 'provence/img/pizzaria.png',
        tag: 'food',
        link: 'provence/pizzeria-jean-louis.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [6.18982, 43.77154]
      },
      properties: {
        title: 'サン＝クロワ湖',
        description: `
        めちゃくちゃ綺麗なエメラルドグリーン色した湖。ここでカヌーした 日本語で言うと聖十湖って意味の湖でカヌー。
        アレクシーのお母さんが日本の友人をおもてなせってお小遣いくれたみたいで、カヌー代をおごってくれました。
        ステキな友人を持てて本当に幸せです。
        `,
        img: 'provence/img/sainte-croix.png',
        tag: 'nature',
        link: 'provence/sainte-croix.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [7.039624957698948, 43.79450861800305]
      },
      properties: {
        title: 'Lou Bara di Païs',
        description: `
        ベティナの両親の家の近く。自分が知る限り世界一のパン屋
        `,
        img: 'provence/img/Coursegoules.JPG',
        tag: 'food',
        link: 'provence/coursegoules.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [7.03662, 43.79659]
      },
      properties: {
        title: 'Circuit du vieriou',
        description: `
        ベティナの両親の家から歩いて約一時間、山の頂上へピクニックに行って来ました。
        天然のマジックマッシュルームが育っていたり、野生の鹿にも遭遇したり、見たことないような美しい景色が広がる絶景を満喫。超贅沢！最高の夜でした。
        `,
        img: 'provence/img/vieriou.JPG',
        tag: 'nature',
        link: 'provence/coursegoules.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.140200359287576, 44.36157128043172]
      },
      properties: {
        title: 'Nyons',
        description: `
        ニヨン
        `,
        img: 'provence/img/nyons.png',
        tag: 'tour',
        link: 'provence/nyons.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.380503509418105, 43.302058137578]
      },
      properties: {
        title: 'マルセイユ・サン・シャルル駅',
        description: `
        <u>フランス南部の中心都市マルセイユの中心部に位置する、フランス国鉄（SNCF）の駅「Gare de Marseille-Saint-Charles」</u><br/>
        <u>見晴らしが良い小高い丘の上にあり、マルセイユの街を一望できます。</u>
        `,
        img: 'marseille/img/saint-charles.png',
        tag: 'tour',
        link: 'marseille/index.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.393699095183621, 43.30394345604833]
      },
      properties: {
        title: 'ロンシャン公園',
        description: `
        <u>豪華な彫刻で装飾された滝と噴水のある絢爛豪華な広場「Palais Longchamp」</u><br/>
        <u>隣には、マルセイユ美術館とマルセイユ自然史博物館があり、広場を登ればロンシャン公園があります。</u>
        `,
        img: 'marseille/img/longchamp.png',
        tag: 'tour',
        link: 'marseille/index.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.385293237156702, 43.29165773267553]
      },
      properties: {
        title: 'ノートルダム・デュ・モン教会',
        description: `
        <u>マルセイユの中心部にある教会。</u>
        `,
        img: 'marseille/img/Notre-Dame-du-Mont.png',
        tag: 'tour',
        link: 'marseille/index.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.382460676968293, 43.29533354227934]
      },
      properties: {
        title: 'ラ・コンティネッタ',
        description: `
        <u>レストランやバーが集まるジュリアン広場にあるイタリア料理店「La Cantinetta」</u><br/>
        <u>店内・中庭は満員で、テラス席でディナーを食べました。</u>
        `,
        img: 'marseille/img/La-Cantinetta.png',
        tag: 'tour',
        link: 'marseille/index.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.36486, 43.29999]
      },
      properties: {
        title: 'マルセイユ大聖堂',
        description: `
        <u>海沿いの広々とした広場に建つ、縞模様が特徴的なマルセイユのシンボル。</u><br/>
        <u>フランスの国定記念物「Cathédrale Sainte-Marie-Majeure de Marseille」</u>
        `,
        img: 'marseille/img/cathedrale.png',
        tag: 'tour',
        link: 'marseille/seaside.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.374028204421705, 43.29521887454845]
      },
      properties: {
        title: 'マルセイユ旧港（ヴュー＝ポール・ド・マルセイユ）',
        description: `
        <u>地中海リオン湾を臨むフランス最大の港湾都市マルセイユ、昔ながらの「港町」の雰囲気が残る観光名所。</u><br/>
        <u>港からは、イフ島などの離島への観光船が発着し、朝には「魚市」が開かれるそうです。</u>
        `,
        img: 'marseille/img/vieux-port.png',
        tag: 'tour',
        link: 'marseille/seaside.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.35041, 43.28602]
      },
      properties: {
        title: '東洋遠方陸軍戦没者の記念碑',
        description: `
        <u>東洋遠方陸軍戦没者の記念碑（またはポルト ドリエント）は、第一次世界大戦の東洋遠方陸軍の戦没者に捧げらる記念碑。</u><br/>
        <u>この記念碑の少し南にあるヴァン・デ・ゾフェル橋から海を背に見るマルセイユの眺めが印象的でした。</u>
        `,
        img: 'marseille/img/monument-aux-morts.png',
        tag: 'tour',
        link: 'marseille/seaside.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.3501940574238915, 43.280457201394114]
      },
      properties: {
        title: 'アンス・ド・マルドルム',
        description: `
        <u>まだ海水は冷たかったけど、おそらくマルセイユの人たちしか知らない隠れたプライベート・ビーチで海水浴。</u><br/>
        <u>綺麗な青い海が広がる絶景！最高に贅沢な時間でした。</u><br/>
        <br/>
        <small>この辺りの入り江は、地元の人たちに人気の海水浴スポットらしく、スリなどの危険もあるそうなのでご注意ください。</small>
        `,
        img: 'marseille/img/maldorme.png',
        tag: 'tour',
        link: 'marseille/seaside.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.38405, 43.29125]
      },
      properties: {
        title: 'ストラート ギャラリー',
        description: `
        <u>ノートルダム・デュ・モン広場の近くにある現代美術ギャラリー「Straat galerie」</u>
        `,
        img: 'marseille/img/straat-galerie.png',
        tag: 'art',
        link: 'marseille/straat-galerie.html',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.39003, 43.31047]
      },
      properties: {
        title: 'ラ・フリッシュ',
        description: `
        <u>たばこ工場跡に作られた文化センター「Friche la Belle de Mai」</u><br/>
        <u>演劇、ダンス、音楽、現代美術、ローカルラジオなど、あらゆる分野の表現をサポートするアート・カルチャーファクトリー</u>
        `,
        img: 'marseille/img/lafriche.png',
        tag: 'art',
        link: 'marseille/lafriche.html',
      }
    }
  ]
};
