let parisMap = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.54187, 49.01435]
            },
            properties: {
                title: 'シャルル・ド・ゴール国際空港 (Aéroport de Paris-Charles-de-Gaulle)',
                description: `
                <u>パリへの玄関口となるフランス最大の国際空港。</u><br/>
                <u>円筒形のメインターミナル Aérogare 1（第1ターミナル）などの特徴的な設計は、建築家 ポール・アンドリュー (Paul Andreu) によるもの。</u><br/>
                <small>ちなみに、大阪・南港のなにわの海の時空館もポール・アンドリューによる設計</small>
                `,
                cover: 'paris/cdg.png',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/CDG/0001.jpg"],
                    ["video", "/Paris/CDG/001.mp4"],
                    ["img", "/Paris/CDG/000.JPG"],
                    ["video", "/Paris/CDG/000.ia.mp4"],
                    ["img", "/Paris/CDG/cover.JPG"]
                ],
                link: 'https://goo.gl/maps/5maTVjK1cMdHQMVh9',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.29448, 48.85837]
            },
            properties: {
                title: "エッフェル塔 (Tour Eiffel)",
                description: `
                <u>パリ市内に多数あるポートで自由に乗り捨てできる電動レンタカーを借りて、ジョン・フィリップとバネッサの案内で観光地をめぐるナイトドライブ。</u><br/>
                <u>コンコルド広場からエトワール広場までシャンゼリゼ通りを横断し、ラウンドアバウトを周回。最後にエッフェル塔をくぐり抜けて、エッフェル塔を後ろに記念撮影。</u>
                `,
                cover: 'paris/Champ-de-Mars/Eiffel.png',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/Drive/03%20Eiffel/001.JPG"],
                    ["img", "/Paris/Drive/03%20Eiffel/002.JPG"],
                    ["img", "/Paris/Drive/03%20Eiffel/003.JPG"],
                    ["img", "/Paris/Drive/03%20Eiffel/004.JPG"],
                    ["img", "/Paris/Drive/03%20Eiffel/005.JPG"],
                    ["video", "/Paris/Drive/03%20Eiffel/000.mp4"],
                    ["img", "/Paris/Drive/03%20Eiffel/000.JPG"],
                ],
                link: 'https://maps.app.goo.gl/Hnj5knCzjZcP1KCG6',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.29502, 48.87379]
            },
            properties: {
                title: "シャルル・ド・ゴール広場 (Arc de Triomphe)",
                description: `
                <u>シャンゼリゼ通りの西端、世界的に有名な戦勝記念碑「エトワール凱旋門」があるラウンドアバウトの広場。</u><br/>
                <u>ルーヴル美術館（カルーゼル凱旋門）から続く、歴史的建築物・記念碑などの名所が並ぶ一歩道「パリの歴史軸」の終点。</u><br/>
                <small>この広場を中心に、12本の通りが放射状に延びるため、地図上に光り輝く「星=étoile」のように見えることから「星の広場（エトワール広場）Place de l'Étoile」とも呼ばれています。</small>
                `,
                cover: 'paris/Champs-Elysees/Triomphe.png',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/Drive/02%20Triomphe/001.JPG"],
                    ["video", "/Paris/Drive/02%20Triomphe/002.mp4"],
                    ["video", "/Paris/Drive/02%20Triomphe/003.mp4"],
                    ["img", "/Paris/Drive/02%20Triomphe/004.JPG"]
                ],
                link: 'https://maps.app.goo.gl/yQvnCzk7VqoHFWe29',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.322041, 48.865137]
            },
            properties: {
                title: "シャンゼリゼ通り (Avenue des Champs-Élysées)",
                description: `
                <u>パリ8区を斜めに横切る約3km・幅70mの大通り。オベリスクのあるコンコルド広場 (Place de la Concorde) から 凱旋門のあるシャルル・ド・ゴール広場（旧エトワール広場）まで、高級店やカフェが立ち並ぶ 観光客と買い物客が最も多い世界的観光地。</u><br/>
                <u>2018年6月のコンコルド広場には、移動式観覧車「ルー・ド・パリ (Roue de Paris)」 が設営されていました。</u>
                `,
                cover: 'paris/Champs-Elysees/Concorde.png',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/Drive/01%20Concorde/000.JPG"],
                    ["img", "/Paris/Drive/01%20Concorde/002.JPG"],
                    ["img", "/Paris/Drive/01%20Concorde/003.JPG"],
                    ["img", "/Paris/Drive/02%20Triomphe/000.JPG"],
                    ["img", "/Paris/1er/carrousel.jpg"]
                ],
                link: 'https://maps.app.goo.gl/fjz6YzzmWPEkZg2J6',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.3370664200188855, 48.86359551203836]
            },
            properties: {
                title: 'パレ・ロワイヤル (Palais-Royal)',
                description: `
                <u>「王の宮殿」という意味を持つ歴史的建造物。現在は国の所有物となり、文化省・国務院（コンセイユ・デタ）などとして利用されています。</u><br/>
                <u>正面玄関の広場はいつも地元の人たちや観光客で賑わっていて、中でも噴水のある中庭はパリ1区のオアシス的な空間。</u><br/>
                <small>ルーヴル区とも呼ばれるパリ1区は、ルーヴル美術館（ルーヴル宮殿）など世界的に有名な建造物や、高級ブランド店が立ち並ぶエリア。</small>
                `,
                cover: 'paris/1er/Palais-Royal.jpeg',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/1er/001.JPG"],
                    ["img", "/Paris/1er/002.JPG"],
                    ["img", "/Paris/1er/003.JPG"],
                    ["img", "/Paris/1er/004.JPG"],
                    ["img", "/Paris/1er/005.JPG"],
                    ["img", "/Paris/1er/006.JPG"],
                    ["img", "/Paris/1er/000.JPG"],
                    ["img", "/Paris/1er/007.jpg"],
                    ["img", "/Paris/1er/008.jpg"]
                ],
                link: 'https://maps.app.goo.gl/XoGWGViabu2WB72a7'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.3499, 48.85296]
            },
            properties: {
                title: 'シテ島 (Île de la Cité)',
                description: `
                <u>パリ市内で最も古い歴史をもつパリ1区・4区に属し、“パリ発祥の地”とも称される シテ島 こそが思い描いたパリでした。</u><br/>
                <small>ノートルダム大聖堂（Cathédrale Notre-Dame de Paris）がある東半分は4区、サント・シャペル (Sainte chapelle）がある西半分は1区。</small>
                `,
                cover: 'paris/Cite/notre-dame.png',
                tag: 'tour',
                archive: [
                    ["video", "/Paris/4e/000.mp4"],
                    ["img", "/Paris/4e/001.JPG"],
                    ["img", "/Paris/4e/002.JPG"],
                    ["img", "/Paris/4e/003.JPG"],
                    ["img", "/Paris/4e/000.JPG"]
                ],
                link: 'https://maps.app.goo.gl/bVABuoCmzhGp5AZd6'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.35086, 48.85906]
            },
            properties: {
                title: 'ポンピドゥー・センター (Centre national d’art et de culture Georges Pompidou)',
                description: `
                <u>せっかくパリに来たんだから記念に建物だけでも見ておこうと立ち寄った
                ポンピドゥー・センター (Centre Pompidou) の周辺は、ほとんど観光客（またはそれを相手に詐欺まがいなことしてる人）な気がして気疲れしました。</u><br/>
                <small>ジョルジュ・ポンピドゥー国立芸術文化センター (CNAC-GP) は、
                多目的スペース（地下1、1、2階）、公共情報図書館（2、3、4階）、国立近代美術館（5、6、7階）、音響音楽研究所（別棟）を含む、パリ4区のサン＝メリ地区にある総合文化施設。</small>
                `,
                cover: 'paris/Le-Marais/Pompidou.png',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/Saint%20Merry/Pompidou/000.JPG"],
                    ["img", "/Paris/Saint%20Merry/Pompidou/001.JPG"],
                    ["img", "/Paris/Saint%20Merry/Pompidou/002.JPG"],
                    ["video", "/Paris/Saint%20Merry/Pompidou/003.mp4"]
                ],
                link: 'https://maps.app.goo.gl/yiAzVGkzpAS3LKj99'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.3508804644140056, 48.85913835261297]
            },
            properties: {
                title: 'サンメリ教会 (Saint Merry Church)',
                description: `
                <u>パリ4区のオアシス的な場所</u><br/>
                <u>近隣にある有名な観光地やショッピングエリアに比べて、この教会はあまり人気がなく、静かで落ち着きます。</u>
                `,
                cover: 'paris/Le-Marais/Saint-Merri.jpeg',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/Saint%20Merry/000.JPG"],
                    ["img", "/Paris/Saint%20Merry/001.JPG"],
                    ["img", "/Paris/Saint%20Merry/002.JPG"],
                    ["img", "/Paris/Saint%20Merry/003.JPG"],
                    ["img", "/Paris/Saint%20Merry/004.JPG"],
                    ["img", "/Paris/Saint%20Merry/005.JPG"]
                ],
                link: 'https://maps.app.goo.gl/p3Ew89WojcCtkjJw8'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.3473840533029886, 48.84662337998583]
            },
            properties: {
                title: "サンテティエンヌ・デュ・モン教会 (Eglise Saint Etienne du Mont)",
                description: `
                <u>パリ5区 最大の名所「パンテオン (Le Panthéon)」のすぐ傍にある、パリの守護聖人サント・ジュヌヴィエーヴを祭る教会</u><br/>
                <small>5区から6区にかけては
                "カルチエ・ラタン (Quartier latin)" と呼ばれる
                パリ大学をはじめ教育機関が集中する、古くから学生街として知られている地域。</small>
                `,
                cover: 'paris/Quartier-latin/saint-etienne.png',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/5e/Saint-Etienne/000.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/001.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/002.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/003.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/004.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/005.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/006.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/007.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/008.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/009.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/010.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/011.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/stained-glass/001.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/stained-glass/002.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/stained-glass/003.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/stained-glass/004.JPG"],
                    ["img", "/Paris/5e/Saint-Etienne/stained-glass/005.JPG"]
                ],
                link: 'https://maps.app.goo.gl/dAzCeMukDwRCzUZB6'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.337232669391142, 48.84697258939036]
            },
            properties: {
                title: "リュクサンブール公園 (Jardin du Luxembourg)",
                description: `
                <u>現在はフランス上院議事堂として使用されている旧王宮の周囲にある大きな公園。</u><br/>
                <u>ベンチがたくさんあって、読書したりピクニックしたり、重い思いにくつろぐ人たちに混ざって優雅にくつろげる、パリ市民の憩いの場の一つ。</u><br/>
                <small>公園は日没で閉園。また、宮殿内に立ち寄り、フランス上院の公聴会に出席することもできます。</small>
                `,
                cover: 'paris/Quartier-latin/luxembourg.png',
                tag: 'nature',
                archive: [
                    ["img", "/Paris/Luxembourg/001.JPG"],
                    ["img", "/Paris/Luxembourg/002.JPG"],
                    ["img", "/Paris/Luxembourg/003.JPG"],
                    ["video", "/Paris/Luxembourg/004.mp4"],
                    ["img", "/Paris/Luxembourg/005.JPG"]
                ],
                link: 'https://maps.app.goo.gl/nn53CD7Wo8y8fxF86'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.3319669938934737, 48.87143380515349]
            },
            properties: {
                title: "ガルニエ宮 (Palais Garnier)",
                description: `
                <u>パリ9区オペラ広場にある歌劇場（パリ国立オペラの公演会場の一つ）。オペラ座（l'Opéra）</u><br/>
                <u>週末にはオペラ座前の広場に人が集まり、なにかしらのデモが頻繁に行われるそうです。</u>
                `,
                cover: 'paris/9e/opera.png',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/Demo/Opera/000.JPG"],
                    ["video", "/Paris/Demo/Opera/001.mp4"],
                    ["video", "/Paris/Demo/Opera/002.mp4"]
                ],
                link: 'https://goo.gl/maps/JeKaQqoCCSa3Uew99',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.36384, 48.8675]
            },
            properties: {
                title: "レピュブリック広場 (Place de la République)",
                description: `
                <u>地下鉄レピュブリック駅の上(パリ市内3区北東端・10区南東端・11区北西端にまたがる位置)にある広場。通称 シャトー・ドー広場（水の城広場）</u><br/>
                <u>広場中央にはフランスの象徴であるマリアンヌ像があり、国に抗議があるときには落書きされたりするらしい。</u><br/>
                <u>近くを流れるサン・マルタン運河沿の気持ちいい木陰は散歩にぴったり。このエリアに来てパリ市民の日常を垣間見た気がします。</u>
                `,
                cover: 'paris/10e/republique.png',
                tag: 'tour',
                link: 'https://maps.app.goo.gl/i71TwUDgW44cuMZe7'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.35541, 48.87053]
            },
            properties: {
                title: 'ル プチ カフェ (Le Petit Café)',
                description: `
                <u>ナチナイフのヘンドリックやアーティストのショボショボが出演するノイズ音楽のパーティ「LE NON_JAZZ」へ出かけた。</u><br/>
                <u>会場は、テアトル・アントワーヌ (Théâtre Antoine) という劇場に併設するカフェバー。</u>
                `,
                cover: 'paris/10e/le-petit-cafe.png',
                tag: 'art',
                archive: [
                    ["img", "/Paris/nnjzz/001.JPG"],
                    ["video", "/Paris/nnjzz/002.mp4"],
                    ["img", "/Paris/nnjzz/003.JPG"],
                    ["img", "/Paris/nnjzz/004.JPG"],
                    ["img", "/Paris/nnjzz/000.JPG"]
                ],
                link: 'https://nnjzz.tumblr.com/post/173516967390/sick-llama-hitrun-minute-de-s-jazzercisers'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.37776, 48.86563]
            },
            properties: {
                title: "PNY PARIS OBERKAMPF",
                description: `
                <u>ニューヨークスタイルの最高のハンバーガーとフライドポテトのほか、豊富なビールが楽しめるおしゃれなハンバーガーチェーン店。（PNYはパリ・ニューヨークを意味する）</u><br/>
                <u>食後にアレクシーに借りてた傘を返し忘れて走って届けたのもいい思い出。</u><br/>
                <small>11区 オベルカンフ通りを中心とするエリア (Oberkampf) は、レストランやバーが集まる夜遊びで人気のある地区。</small>
                `,
                cover: 'paris/11e/pny.png',
                tag: 'food',
                archive: [
                    ["img", "/Paris/Bar/Oberkampf/000.JPG"],
                    ["video", "/Paris/Bar/Oberkampf/001.mp4"],
                    ["video", "/Paris/Bar/Oberkampf/002.mp4"],
                    ["img", "/Paris/Bar/Oberkampf/pny.JPG"]
                ],
                link: 'https://goo.gl/maps/cA3R6CHJ1nYnSNea9'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.37941, 48.85952]
            },
            properties: {
                title: "ラ・ジェネラル (La Générale)",
                description: `
                <u>Fanzines! Festival 2018 の一環として開かれた展覧会の会場の1つ</u><br/>
                <u>アーティストのショボショボさんに案内してもらって、建物内のいろいろな場所を探検しました。</u>
                `,
                cover: 'paris/11e/La-Generale.jpeg',
                tag: 'art',
                archive: [
                    ["img", "/Paris/La%20Generale/Show/001.JPG"],
                    ["img", "/Paris/La%20Generale/Show/002.JPG"],
                    ["img", "/Paris/La%20Generale/Show/003.JPG"],
                    ["img", "/Paris/La%20Generale/Show/004.JPG"],
                    ["img", "/Paris/La%20Generale/Show/005.JPG"],
                    ["img", "/Paris/La%20Generale/Show/006.JPG"],
                    ["img", "/Paris/La%20Generale/Show/007.JPG"],
                    ["img", "/Paris/La%20Generale/001.JPG"],
                    ["img", "/Paris/La%20Generale/002.JPG"],
                    ["img", "/Paris/La%20Generale/003.JPG"],
                    ["img", "/Paris/La%20Generale/004.JPG"],
                    ["img", "/Paris/La%20Generale/005.JPG"],
                    ["img", "/Paris/La%20Generale/006.JPG"],
                    ["img", "/Paris/La%20Generale/007.JPG"],
                    ["img", "/Paris/La%20Generale/008.JPG"],
                    ["img", "/Paris/La%20Generale/000.JPG"]
                ]
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.37576, 48.83358]
            },
            properties: {
                title: "パリ・リヴ・ゴーシュ (Paris Rive Gauche)",
                description: `
                <u>ビブリオテーク・ナショナル Bibliothèque Nationale de France (BNF) 周辺、セーヌ川左岸の新興エリア</u><br>
                <u>オフィス、ランチスポット、映画館、水上スイミングプールなど、コンテンポラリー建築が並ぶ。</u><br/>
                `,
                cover: 'paris/Rive-Gauche/Bibliotheque-Nationale.png',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/Rive%20Gauche/000.JPG"],
                    ["img", "/Paris/Rive%20Gauche/002.JPG"],
                    ["img", "/Paris/Rive%20Gauche/003.JPG"],
                    ["img", "/Paris/Rive%20Gauche/Simone%20de%20Beauvoir/001.JPG"],
                    ["img", "/Paris/Rive%20Gauche/Simone%20de%20Beauvoir/003.JPG"],
                    ["img", "/Paris/Rive%20Gauche/Bibliotheque%20Nationale/000.JPG"],
                    ["img", "/Paris/Rive%20Gauche/Bibliotheque%20Nationale/001.JPG"]
                ],
                link: 'https://goo.gl/maps/Fh64CsBQmbZmGiqe8',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.37805, 48.83526]
            },
            properties: {
                title: "シモーヌ・ド・ボーヴォワール橋 (Passerelle Simone-de-Beauvoir)",
                description: `
                <u>フランス国立図書館とベルシー公園を結ぶように、セーヌ川に架かる歩行者・自転車専用の橋</u><br/>
                <u>このエリアの雰囲気を象徴するような、橋の中央と端が交互に上下する特徴的な設計です。</u>
                `,
                cover: 'paris/Rive-Gauche/simone-de-beauvoir.png',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/Rive%20Gauche/Simone%20de%20Beauvoir/000.jpg"],
                    ["img", "/Paris/Rive%20Gauche/Simone%20de%20Beauvoir/002.JPG"],
                    ["img", "/Paris/Rive%20Gauche/Simone%20de%20Beauvoir/004.jpg"]
                ],
                link: 'https://maps.app.goo.gl/CU1Rv3poFp6sMtiJ8',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.36806, 48.82997]
            },
            properties: {
                title: "ジャンヌ・ダルク広場 (Pl. Jeanne d'Arc)",
                description: `
                <u>オリンピアド駅の側にあるノートル＝ダム＝ド＝ラ＝ガール教会に臨する広場では、毎週日曜日にマルシェが開かれます。</u><br/>
                <u>ここに限らず、パリの広場では週末にマルシェが頻繁に開かれていて、チーズとかソシソン(ドライ・ソーセージ)とか卵とか、めちゃくちゃ美味しいです。</u>
                `,
                cover: 'paris/Rive-Gauche/pl-jeanne-d-arc.png',
                tag: 'food',
                link: 'https://maps.app.goo.gl/3o6CLQPwuFqALM3g9',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.36902, 48.82794]
            },
            properties: {
                title: "ル・ペレ フェクト (Le Père Fecto)",
                description: `
                <u>ここオリジナルのカクテルがすごかった。めちゃくちゃアルコール強いけど唯一無二です。</u><br/>
                <u>オーナーが気さくなエンターティナーで、エッフェル塔のキーホルダーもらいました。</u>
                `,
                cover: 'paris/Rive-Gauche/le-pere-fecto.png',
                tag: 'food',
                archive: [
                    ["img", "/Paris/Bar/Le%20Pere%20Fecto/001.JPG"],
                    ["img", "/Paris/Bar/Le%20Pere%20Fecto/002.JPG"],
                    ["img", "/Paris/Bar/Le%20Pere%20Fecto/000.JPG"]
                ],
                link: 'https://maps.app.goo.gl/TT6Ko6mZqwqyEyck8',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.3651969301186, 48.82575693567475]
            },
            properties: {
                title: "オリンピアド (Olympiades)",
                description: `
                <u>パリ市内最南部 13区の南部エリア、メトロの駅直結の高層住宅団地の名称。（団地の各棟には、オリンピックが開催された都市名がつけられています。）</u><br/>
                <u>団地の下にある荒んだショッピングモールにはパリ唯一のたい焼き専門店があった。パリの日本食レストランはおいしいとこないらしいけど、普通においしかった。</u>
                `,
                cover: 'paris/Rive-Gauche/olympiades.png',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/Orympiades/001.JPG"],
                    ["img", "/Paris/Orympiades/002.JPG"],
                    ["img", "/Paris/Orympiades/003.JPG"],
                    ["img", "/Paris/Orympiades/004.JPG"],
                    ["img", "/Paris/Orympiades/005.JPG"],
                    ["img", "/Paris/Orympiades/000.JPG"]
                ],
                link: 'https://maps.app.goo.gl/7ShC3p9tCWZoeDgi6',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.38444, 48.85949]
            },
            properties: {
                title: "ロケット広場 (Square de la Roquette)",
                description: `
                <u>ペール・ラシェーズ墓地の西側、パリ11区にある公園</u><br/>
                <u>パン屋でサンドイッチを買って、街の人たちがたくさんいる公園でピクニックするのが最高のランチかも。
                レストランやカフェより安上がりに、優雅な気分になれます。</u><br/>
                <small>ウィキペディアによると、公園は刑務所の跡地で、Wi-Fiアンテナがありインターネットに接続できるそうです。</small>
                `,
                cover: 'paris/11e/roquette.png',
                tag: 'nature',
                link: 'https://maps.app.goo.gl/FZAGcC2tZYKeqgFb7'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.39332, 48.86139]
            },
            properties: {
                title: "ペール・ラシェーズ墓地 (Cimetière du Père-Lachaise)",
                description: `
                <u>パリ東部(20区)にあるパリ市内最大の墓地。世界で最も有名な墓地の一つ。</u><br/>
                <u>ショパン、バルザック、オスカー・ワイルド、エディット・ピアフ、ジム・モリソンなど、数多くの有名人が眠っている。</u>
                `,
                cover: 'paris/20e/pere-lachaise.png',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/Pere%20Lachaise/001.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/000.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/002.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/003.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/004.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/005.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/006.jpg"],
                    ["video", "/Paris/Pere%20Lachaise/007.mp4"],
                    ["img", "/Paris/Pere%20Lachaise/images/001.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/002.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/003.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/004.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/005.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/006.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/007.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/008.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/009.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/010.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/011.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/012.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/013.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/014.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/015.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/016.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/017.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/018.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/019.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/020.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/021.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/022.jpg"],
                    ["img", "/Paris/Pere%20Lachaise/images/023.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/024.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/025.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/026.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/027.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/028.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/029.JPG"],
                    ["img", "/Paris/Pere%20Lachaise/images/030.PNG"]
                ],
                link: 'https://maps.app.goo.gl/S8s7mdxcAoc42HBa7'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.36486, 48.8736]
            },
            properties: {
                title: "シェズ アデル (Chez Adel)",
                description: `
                <u>フランスに来た初日にベルヴィルから長い散歩に出て、初めてアペロしたカフェ・バー</u><br/>
                <u>店内では常連のおじさんや地元の音楽家が演奏したり歌ったり、楽しい雰囲気でした。</u><br/>
                <small>アペロ (Apėro) は夕食前の一杯を楽しむフランスの文化。強烈なアニス風味が特徴的な薬草酒「パスティス」を飲むのが伝統的なアペロだそうです。</small><br>
                <small>ちなみにパスティスは、香草系のリキュール「アブサン」の製造が禁止された頃に、その代替品（まがいもの）として生まれたお酒。</small>
                `,
                cover: 'paris/10e/chez-adel.png',
                tag: 'food',
                archive: [
                    ["img", "/Paris/Apero/002.JPG"],
                    ["img", "/Paris/Apero/003.JPG"],
                    ["img", "/Paris/Apero/004.JPG"],
                    ["img", "/Paris/Apero/001.JPG"]
                ],
                link: 'https://maps.app.goo.gl/CCJTNhz1KND7Kaqh7'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.37875, 48.87272]
            },
            properties: {
                title: `レ・アール ド ラ・アジエ 新今日 超市 (Les Halles de l'Asie "Super Store")`,
                description: `
                <u>ベルヴィルはパリの二大チャイナタウンの1つで、メインストリートには中国語とフランス語が一体となった派手な色使いの看板が並びます。</u><br/>
                <u>サミーとセブリーンの家では自炊することが多く、アジアンスーパーで買った食材や調味料で日本食を作ったりしました。</u>
                `,
                cover: 'paris/Belleville/superstore.png',
                tag: 'food',
                link: 'https://goo.gl/maps/CNL9k3R9mRihS7BN8',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.3877051, 48.8682766]
            },
            properties: {
                title: "カフェ ル・チキート (Café Le Chiquito)",
                description: `
                <u>パリの下町（20区）を駆け抜ける長い坂道メニルモンタン通りにあるフレンドリーなバー</u><br>
                <u>若者たちが誕生日パーティをしてて、ビリヤードと少しのダンスではしゃいでた。</u>
                `,
                cover: 'paris/Belleville/Le-Chiquito.jpeg',
                tag: 'food',
                archive: [
                    ["img", "/Paris/Bar/Le%20Chiquito/001.JPG"],
                    ["video", "/Paris/Bar/Le%20Chiquito/000.mp4"]
                ],
                link: 'https://goo.gl/maps/ufoeNFp8ew55c2aK8'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.37964, 48.87272]
            },
            properties: {
                title: "フィン レピスリー (Fine l'Epicerie)",
                description: `
                <u>フランスで最初のサンドイッチを買ったデリカテッセン</u><br/>
                <u>チーズ、パテ、ソシソン (ドライ・ソーセージ)、この店で買った食材で作ったサンドイッチがベルヴィルの思い出の味。</u>
                `,
                cover: 'paris/Belleville/finelepicerie.png',
                tag: 'food',
                archive: [
                    ["img", "/Paris/Sandwich/001.JPG"],
                    ["img", "/Paris/Sandwich/002.jpeg"],
                    ["img", "/Paris/Sandwich/005.JPG"],
                    ["img", "/Paris/Sandwich/000.JPG"]
                ],
                link: 'https://maps.app.goo.gl/vHQufEa7Tbr1Mapt6'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.3799, 48.87128]
            },
            properties: {
                title: "ヴィラ・ベルヴィル (Villa Belleville)",
                description: `
                <u>パリ近隣で活動するアーティストをサポートする文化施設</u><br/>
                <u>公募によって選ばれたアーティストが随時入れ替わり制作・発表を行うほか、さまざまなワークショップが開かれます。</u><br/>
                <u>セブリーンとサミーもよく利用しているそうで、制作中の陶芸作品を見せてくれたり、集まった友人たちとパーティをしたりしました。</u>
                `,
                cover: 'paris/Belleville/villa-belleville.png',
                tag: 'art',
                archive: [
                    ["img", "/Paris/Bellville/000.JPG"],
                    ["img", "/Paris/Bellville/001.JPG"],
                    ["img", "/Paris/Bellville/002.JPG"],
                    ["img", "/Paris/Bellville/003.JPG"],
                    ["img", "/Paris/Bellville/004.JPG"],
                    ["img", "/Paris/Bellville/005.JPG"],
                    ["img", "/Paris/Bellville/006.JPG"],
                    ["img", "/Paris/Bellville/007.JPG"]
                ],
                link: 'https://maps.app.goo.gl/rfk6ZcNqpfDMo8Fi6',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.3725581644924603, 48.845142389006526]
            },
            properties: {
                title: "リヨン駅 (Gare de Lyon)",
                description: `
                <u>パリに6つある主要ターミナル駅の一つ。フランス国鉄（SNCF）・パリ交通公団（RATP）と地下鉄が発着します。</u><br/>
                <u>パリで最新のメトロ路線「14号線」は、乗務員のいない自動運転による運行。ホームから見える未来的な庭園が印象的でした。</u>
                `,
                cover: 'SNCF/Lyon.jpeg',
                tag: 'tour',
                archive: [
                    ["img", "/Paris/Lyon/001.JPG"],
                    ["img", "/Paris/Lyon/002.JPG"],
                    ["img", "/Paris/Lyon/003.JPG"],
                    ["img", "/Paris/Lyon/004.JPG"],
                    ["img", "/Paris/Lyon/005.JPG"]
                ],
                link: './SNCF/',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.33242, 48.83383]
            },
            properties: {
                title: "カタコンブ・ドゥ・パリ (Catacombes)",
                description: `
                <u>パリ市内全域の地下を張りめぐる世界最大の地下墓地。</u><br/>
                <u>深さ地下20m～30m・全長500kmはあると言われるが、一般公開されている見学コースはそのうちの約1.7km。</u>
                `,
                cover: 'catacombes/cover.jpeg',
                tag: 'tour',
                link: './catacombes/',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.3210899664060993, 48.84177553841447]
            },
            properties: {
                title: "モンパルナス駅 (Montparnasse)",
                description: `
                <u>モンパルナス駅付近で、イリーガルカタコンブ観光のプロフェッショナルと待ち合わせ。</u>
                `,
                cover: 'catacombes/end.png',
                tag: 'tour',
                link: 'https://maps.app.goo.gl/MRK3pa4K1Z4QYpT1A',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.33378, 48.85685]
            },
            properties: {
                title: "エコール・デ・ボザール (Beaux-Arts de Paris)",
                description: `
                <u>ルーブル美術館の南、セーヌ川を渡ってすぐ パリ6区 にあるパリ国立高等美術学校</u><br/>
                <u>サミーがノミネートされた国際的アートコンペのベルニサージュ（Vernissage）へ出かけました。</u><br/>
                <small>ベルニサージュはオープンパーティを意味するフランス語。</small>
                `,
                cover: 'paris/Saint-Germain-des-Pres/beaux-arts.png',
                tag: 'art',
                archive: [
                    ["img", "/Paris/Beaux-Arts/Sammy%20Stain/000.PNG"],
                    ["img", "/Paris/Beaux-Arts/Sammy%20Stain/001.JPG"],
                    ["img", "/Paris/Beaux-Arts/Charlie%20Boisson/001.JPG"],
                    ["img", "/Paris/Beaux-Arts/Emir%20Sehanovic/001.JPG"],
                    ["img", "/Paris/Beaux-Arts/Emir%20Sehanovic/002.JPG"],
                    ["img", "/Paris/Beaux-Arts/Sara%20Ivone/001.JPG"],
                    ["img", "/Paris/Beaux-Arts/Thomas%20Auriol/001.JPG"],
                    ["img", "/Paris/Beaux-Arts/Nico%20Muller/000.JPG"],
                    ["video", "/Paris/Beaux-Arts/Nico%20Muller/000.mp4"],
                    ["img", "/Paris/Beaux-Arts/Nico%20Muller/002.JPG"],
                    ["img", "/Paris/Beaux-Arts/Nico%20Muller/001.JPG"],
                ],
                link: 'https://www.beauxartsparis.fr/fr/exposition-simple/jeune-creation-68e-edition',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.35317, 48.88856]
            },
            properties: {
                title: 'ベスト・アフリカ (Best Africa)',
                description: `
                <u>パリ18区の東側一帯 ラ・シャペル (La Chapelle) は、アフリカ系移民が多く暮らす地区。</u><br/>
                <u>特に、BATT COOP | Galerie P38 があるドゥドゥ―ビル通り (Rue Doudeauville) 付近は
                アフリカ系の店が多く、自家製の手作り感あるアフリカンフードを安価で味わえます。</u><br/>
                <small>同じパリ18区の南西部にはパリの眺望を楽しむことができる観光エリア「モンマルトル」があります。</small>
                `,
                cover: 'paris/Montmartre/best-africa.png',
                tag: 'food',
                archive: [
                    ["img", "/Paris/P38/Best%20Africa.JPG"]
                ],
                link: 'https://maps.app.goo.gl/mMx99E2qEGiwT3sf7',
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
                cover: 'paris/Montmartre/p38.png',
                tag: 'art',
                archive: [
                    ["img", "/Paris/P38/007.JPG"],
                    ["img", "/Paris/P38/006.JPG"],
                    ["img", "/Paris/P38/005.JPG"],
                    ["img", "/Paris/P38/004.JPG"],
                    ["img", "/Paris/P38/003.JPG"],
                    ["img", "/Paris/P38/002.JPG"],
                    ["img", "/Paris/P38/001.JPG"],
                    ["img", "/Paris/P38/008.JPG"],
                    ["img", "/Paris/P38/000.JPG"]
                ],
                link: 'https://www.parisprintclub.com/',
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [2.4392, 48.8582]
            },
            properties: {
                title: 'ラ・パホール エホンツ (La Parole errante)',
                description: `
                <u>FANZINES ! festival 2018 の会場、パリ20区に隣接するパリ郊外東部の街 モントルイユの文化施設</u><br>
                <u>詩人で劇作家の故アルマン・ガッティを中心とする団体が運営する実験の場。</u>
                `,
                cover: 'paris/laparoleerrantedemain.png',
                tag: 'art',
                archive: [
                    ["img", "/Paris/La%20Parole%20Errante/000.JPG"],
                    ["img", "/Paris/La%20Parole%20Errante/001.JPG"],
                    ["img", "/Paris/La%20Parole%20Errante/002.JPG"],
                    ["img", "/Paris/La%20Parole%20Errante/003.JPG"],
                    ["img", "/Paris/La%20Parole%20Errante/004.JPG"],
                    ["img", "/Paris/La%20Parole%20Errante/005.JPG"],
                    ["img", "/Paris/La%20Parole%20Errante/006.jpeg"],
                    ["img", "/Paris/La%20Parole%20Errante/007.jpeg"],
                    ["img", "/Paris/La%20Parole%20Errante/008.JPG"],
                    ["img", "/Paris/La%20Parole%20Errante/009.JPG"],
                    ["img", "/Paris/La%20Parole%20Errante/010.JPG"]
                ],
                link: 'https://laparoleerrante.org/',
            }
        }
    ]
};

indexJson(parisMap.features);