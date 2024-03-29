import { TokenType } from "../types/tokens";

export type TLiquidity = {
  tokenA: TokenType;
  tokenB: TokenType;
  contractAddress: string;
  stakingAddress?: string | string[];
};

export const Liquidities: TLiquidity[] = [
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.JUNO,
    contractAddress:
      "juno1g5j9vd76cqt7fsq22ne7jqfkz4v9ptkvh4jknsvwchpj753atwfs942a25",
    stakingAddress: [
      "juno19nnwh49lwsqy6c5wg9p943yt9txe5mw6kdztecl5j4q3rgyh0h0sekwl8c",
      "juno1sgrj86ax5hkxkujzky2f4ympwmqkx8pxqym4awhz86yyj0etk93srxtupw",
      "juno1tadnxatw8qhge8jn3pkyq9302xj8rn578y9vtyfnp6laweyal99q0yqyt9",
    ],
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.ATOM,
    contractAddress:
      "juno17estllyc6qyq6tlxg9hv4xwcy069fuu0rmytvkw6xskchcq9czxsd5fd98",
    stakingAddress: [
      "juno163upe9ymxtc5fsx0kvrfcyx9e5puu2zhqt82lexrlajzmx9sm79shac88f",
      "juno1vx4m9ze96hua42fqrxs5vcfru0mk3syacr4medya454z8f94q22shj6gn7",
      "juno10x9sdvp4q0l489t3ey6u0479hzhqm7uvh8ahlr02z34uw6rljn6sgw8ztd",
    ],
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.wBTC,
    contractAddress:
      "juno1ppfckgwhw9rjuuerjr2s3cg7qqtsfq55tztxm70zj9dn9l66fxsq6st7ru",
    stakingAddress:
      "juno1nfw269pctu0qfjdw95v7pvp3nevn3nefqz7nngqc25pkjtx225lq2ytmf5",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.wETH,
    contractAddress:
      "juno1gmwswmysscjpx0ypw6qwvv6nrfu6ag9san00ylxeudv2c9m2vspq8klesp",
    stakingAddress:
      "juno1wcucsy63d6rm0cdc5qt6akd86q8mp08h6pads44802gdgce6arkq4xuuve",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.USDC,
    contractAddress:
      "juno1pugg623zsg2xanvuumna6y4ca48t0la7pxgtt96ed55rctea47lsqxu36a",
    stakingAddress: [
      "juno1vuygss25pehh3rqx0gra09tzfhc32q3clamhdnpq9ueh29dntfmsv9tgds",
      "juno1a48d5sptfrqjl6gy9ew2v65d9ry93k0335qwahwget8w5njj2masvcd3ld",
      "juno1ztyqngg75vqylcjaptm2y3ukutmev7yk49hp7cq86zztuumcjr4scclja0",
    ],
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.OSMO,
    contractAddress:
      "juno1xw9a3zsrulhf2gvq9ed9zjjzl22hp2r5wqq3yp7s5vuleqmg7jrqtyq0ee",
    stakingAddress:
      "juno1tnhsnessug4hgsencuvf543njpr0hcs4welwj08fk4dxvfrdd0ssnxt8g6",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.EVMOS,
    contractAddress:
      "juno1syfzy9vqkax28t0egf7lep79274f5at6gq4mrk6e2nl5hsren2vsmzrhp2",
    stakingAddress:
      "juno1e3lr0p957kmpk53dcxtms57vsmmzxcwr4ldwppjdayrhwfpmmzfqmukn6u",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.PLANQ,
    contractAddress:
      "juno18klp4t3h5uzg0j5c6ty2z46ccxd3xcpzknzytfzlwlr64tapyd6qahsc0e",
    stakingAddress:
      "juno1e9lrj679gnyz32neq9zhher3jp270ywmdmnsdqhueukheamw5wlql94suv",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.MARS,
    contractAddress:
      "juno1t54zecqjyvkheugfn6xtyf2v0yn7n0ea6458j8p5w4pn2dt8yg0s4a7c03",
    stakingAddress:
      "juno1w75f2nwggznhq7kq3xqmkfszp2suc7f0m3stmp5vxx59yvn57ntqkffnn2",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.KUJIRA,
    contractAddress:
      "juno17qgx8l84zzrdgydrnl9t2ucu8evuslaakpw8lz85fraryjylef7qgfm6sp",
    stakingAddress:
      "juno1p0350chclgpy26jzmf6eafmtre8kefaawss26mh622heqvjcwwrqfyny3z",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.CMDX,
    contractAddress:
      "juno10w575236gq3nhkr8zdz8cmhgdfpltrjk32ws3ffuntzgzwtprp0s6447lx",
    stakingAddress:
      "juno1wjp039yd49rxyhjdcpq7pr9q9l5mjnvmc0ffrsvvfyguutkcz2gsck0vwc",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.STARS,
    contractAddress:
      "juno1dwehqyxtez0yegrvvnn8980xjwudnd7yl2zx4x6z4rq6kh74jptq0u98uy",
    stakingAddress:
      "juno1cyutdc284up2p57sq8hpj9ux0shvv9cuj7fhxqfgl4vllywge0xsdnsz5u",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.HUAHUA,
    contractAddress:
      "juno162xnar9ndm7e66dzc2tzt2rx495v9ey0xw3zkjqur36dghqd600s0e3mzz",
    stakingAddress:
      "juno1g5na5yq4qj5wxprcrknhcww469v440658schln8s80l7gxl7f5pq9w2z5t",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.GRDN,
    contractAddress:
      "juno1f2uahzf2lajhl3k0lm90w6e8ct55qlmeegnz5jhqhwg9u70pr39q92ha6k",
    stakingAddress:
      "juno1eaatdve6rpdlhs23uxxqd8233crlj82jt0uxpulq0zgrghsu072s4s3rfq",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.CMST,
    contractAddress:
      "juno1pzaz688t5f4j3k37gecz49aynke0u5d6emkq4c5y672m4tam8kss8wdpch",
    stakingAddress:
      "juno1a0yvt5f6lvsmwqxv3ke9lmff56a0fpzttlyrq8u3h5ntsergppwqsd4sdm",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.HARBOR,
    contractAddress:
      "juno1q8l2lu0yku0dlaa2jjg9rgy55th30takrxurlxt48ssd8qtrumqqatkxk6",
    stakingAddress:
      "juno1sxtq943f6mnymm57s3w84tewffddegxuvvlrjxl853nlf0wlyn2shrqh4c",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.HOPE,
    contractAddress:
      "juno185jw0uh2v9zn8zfhulu2akxxplcd7fjnkvmp84tkjgtadyuxruzsjnexnw",
    stakingAddress:
      "juno1yp0a7e2y6cc2mtux92qzm24gyu85y8a2adf85k9w33hswfzs8e7qrlazqs",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.NETA,
    contractAddress:
      "juno19kfk94nqz7ehdmkk5a9hcl8qxq9kksupqzurz9gsgs4tk5xlgqqqrr067a",
    stakingAddress:
      "juno1cltx5qnrjzsf2ynyl8wdea79zckj5mvvpv06qur7qjjq6yx5702q436qxe",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.PUNK,
    contractAddress:
      "juno1guya74r8qe3x8sds4p74jg38eunjnukwlqgz68hlkasn3ralwxpsgx08mv",
    stakingAddress:
      "juno1wquw22g0spap7qvesxagwdjmt6trmafztz8yyaau4v5nqkpsrqqs3sqk02",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.RACOON,
    contractAddress:
      "juno1x4eck8gaphsk97cm78glc5jqarqe7492l4wwegqavlmzf5e3n4qqmjvtvq",
    stakingAddress: [
      "juno15myaq4rxwlg7pvm5e2fr598puj26945k3rpek6rj6ve5276fndxs7ctjg9",
      "juno1m7m283d60727qksd5g3zk5tkk4evgerucvcpylanw4plhahq8jasy0vc60",
    ],
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.JAPE,
    contractAddress:
      "juno1qx73rlq6uqxmxlz5phtz3anzzh2rq8cxmwz56r33m6xskjdt6v4s724ckf",
    stakingAddress:
      "juno1suzmq8ejlujgcctyhy7nu8d0d6ykrq6uczxtp3fv3pn4eh59ufyqz8jj37",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.WYND,
    contractAddress:
      "juno1hmt7nw863s2alr5efnnj8tmxprdlvzcepna4htaujq74zgmm25ksyl9u4h",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.BLUE,
    contractAddress:
      "juno1pdal0fr38tfjuslpq3ne68242zsfs30t6rda2dnmfmjv2skk8z6qgmrrer",
    stakingAddress:
      "juno1r0ynalv602c3pf3pgx5sz30kk5peg6mmh5m78nldpmh3afh4vnrqn5w97q",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.RED,
    contractAddress:
      "juno1d7tz6q4ky06stcrquyuge6rujp9gsa6y4v7qzaa02rm0cj8gzznszc5ftj",
    stakingAddress:
      "juno12xsewspv2hcfsejq0en839ayvssqpsdd9yx87q5lutq3fpp7zsvqf4sf6s",
  },
  {
    tokenA: TokenType.BLUE,
    tokenB: TokenType.RED,
    contractAddress:
      "juno1u75a3r5ysfmtucngmy0s5t3j0vdl0n0qu5vhtc9sj5vclfpf96qsecp6sd",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.CANLAB,
    contractAddress:
      "juno1f6hyczl2yn6gwrh0yqwr0mjpzqywcy5p80ntn40cn7ha0etqtl3qs6xfv3",
    stakingAddress: [
      "juno1ll35ncyf6vmenh2yvsh3ut9lj7kkrcgssxza3jpr60l80qt7c26skawpeg",
      "juno1pf3h950yfhnsny5mf9ssha99ugjxqc2f45r0v4vtqpenv68dplwqcnn66n",
    ],
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.SGNL,
    contractAddress:
      "juno1n620wt5rct3vaxd8ewxkuyrlyhh2wuwjj8cj2jmus2ea56wphfwsk4zytr",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.AQUA,
    contractAddress:
      "juno10r6qwpxjs4g0zmdxpmj0dqhj3dmj3pzm9wp8q3mm3utzlqzptagq4vf6l2",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.GLTO,
    contractAddress:
      "juno1y5adnxk64ggdhckdhc56gss6696qr2y30pzmjydyhh8r53pqerdsq6aky6",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.RAW,
    contractAddress:
      "juno1qm57tvmvnplv5xym9gu8xjrxmwzv2e85meyhvsax52e5s4phax4s03uvq5",
    // stakingAddress:
    // 	"juno1u7ty7jqqzxapkrxydd7jergetd0dpyfnr7mh240aq2dducxkymhsdd4w4d",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.DRGN,
    contractAddress:
      "juno1anhnfk68epxhj59s3qghv9duudkulkyjthqz8x08d0nm289y8y2svrcchc",
    stakingAddress:
      "juno1usurxj0urs7ja7mt34hjk9rf48gfp8akpuwlck4yad7t60nhpyls24kh9t",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.BANANA,
    contractAddress:
      "juno1slsy2j7u7hq2l02yasczamy40d6n7qv7n4mtpwddx9cmsrf0lv2sywpweh",
    stakingAddress:
      "juno1l5m5avwhml7n0sq9h5lpt9l3wzg6khmtr9c0pe9879ukupt5avaq6r4hhd",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.CZAR,
    contractAddress:
      "juno1qxajeku5f0qxyl2vcush475r62um20v7aqzhvr0sgv2m00ela9qsw5sn85",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.HOWL,
    contractAddress:
      "juno14gq07cq43ssk5a07wxkcvfy80n27q075rl7zs0l2eym9f7aa0l5qga9g05",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.KLEO,
    contractAddress:
      "juno13amkjs0mtwpjsz65lpk30pacxhx7jlscwmzq5jegqs583zmk7fkq9c8scx",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.PHMN,
    contractAddress:
      "juno12np0vflkrwp0sfy7dvulafqzw6dawle0kuey5kn5dyqmr32q97esn5d40z",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.PEPEC,
    contractAddress:
      "juno14wl7lwg6e65kgvtpz0sfynp7m2mnludz3vvyqlhxq49xg7xj895s9ftjle",
    stakingAddress:
      "juno1hq6uep3xzn2h9mzw57vccdqxgtzpglr8e95vhs3z5mtec2p45mys2mmkua",
  },
  {
    tokenA: TokenType.HOPERS,
    tokenB: TokenType.INVDRS,
    contractAddress:
      "juno1ch3t7lca86tsn2vtelfpz4jqh6ut4806qlj57u7t82jap7mj2zesx0t6d9",
    stakingAddress:
      "juno16ucasycq3wzq7uj993wqldz72uw6ffjk7rvl6n6aw0s4yy50frnqx8ss86",
  },
];

export const getLiquiditiesByTokens = (
  tokenA: TokenType,
  tokenB: TokenType
): TLiquidity | null =>
  Liquidities.find(
    (liquidity) => liquidity.tokenA === tokenA && liquidity.tokenB === tokenB
  ) || null;
