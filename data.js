/* =====================================================================
   CHEAP CARS EXPORT — SITE DATA  (single source of truth)
   ---------------------------------------------------------------------
   This file is the ONE place all dynamic content lives. The homepage
   carousel and the full inventory page (cars.html) both render from it.

   >>> FUTURE ADMIN PANEL <<<
   When the admin is built, it only needs to change ONE thing: where
   `Store` gets its data from (see the Store object at the bottom).
   Today it reads the defaults below. Tomorrow the admin can:
     • write edits to localStorage (Store already checks there first), or
     • have the admin save this file via the GitHub API, or
     • point Store.getCars() at a real backend / database endpoint.
   The rendering code on both pages never changes — it always asks Store.

   Every text field is bilingual: { en: "...", zh: "..." }.
   To add a car: copy a block in `cars`, give it a unique id, drop its
   photo in /img/cars/ (or anywhere) and set `image` to that path.
   ===================================================================== */

/* __DATA_START__  (admin.html rewrites everything between these markers) */
window.SITE_DATA = {

  /* ---- Global site config (also admin-editable) ---- */
  config: {
    whatsapp: "8615692496753",                    // digits only, used in wa.me links
    whatsappDisplay: "+86 156 9249 6753",
    instagram: "cheap_exports",
    location: { en: "Guangzhou, China", zh: "中国广州" },
    /* Admin password gate. hash = SHA-256 of the password.
       Default password is "changeme" — CHANGE IT in the admin's Publish tab. */
    admin: { gate: true, hash: "057ba03d6c44104863dc7361fe4578965d1887360f90a0895882e58a6248fc86" }
  },

  /* ---- Editable homepage text (rendered by index.html applyContent) ----
     Use \n inside a title to force a line break. `accent` is the gold word. */
  content: {
    hero: {
      eyebrow: { en: "Guangzhou, China · Worldwide export", zh: "中国广州 · 全球出口" },
      title:   { en: "Drive the Legacy\nof ", zh: "传承价值，\n" },
      accent:  { en: "Value.", zh: "驰骋全球。" },
      lead:    { en: "We source, inspect and ship new and used cars from across China — SUVs, MPVs, EVs and luxury sedans — to Ghana, Africa and beyond at honest, competitive prices.", zh: "我们在全中国寻源、验车并发运全新及二手车辆 —— SUV、MPV、电动车与豪华轿车，以诚实公道的价格运往加纳、非洲及世界各地。" },
      tags: [
        { en: "Worldwide shipping", zh: "全球运输" },
        { en: "Free inspection",   zh: "免费验车" },
        { en: "New & used",        zh: "全新及二手" }
      ]
    },
    inventory: {
      eyebrow: { en: "Recent stock", zh: "最新车源" },
      title:   { en: "Explore our collection", zh: "探索我们的车源" },
      intro:   { en: "A handpicked look at cars we've recently sourced and prepared for export. Ask on WhatsApp for live availability and a landed price.", zh: "精选我们近期寻源并备妥出口的车辆。欢迎在 WhatsApp 询问现货与到岸价。" }
    },
    services: {
      eyebrow: { en: "What we do", zh: "我们的服务" },
      title:   { en: "From a Chinese showroom to your port", zh: "从中国展厅到您的港口" },
      intro:   { en: "One contact handles the entire chain, so you buy with confidence from anywhere in the world.", zh: "一个联系人负责全部环节，让您在世界任何角落都能放心购车。" }
    },
    why: {
      eyebrow: { en: "Why buyers trust us", zh: "买家为何信任我们" },
      title:   { en: "Why choose us for\nyour ", zh: "为何选择我们\n购买" },
      accent:  { en: "next car", zh: "下一台车" },
      intro:   { en: "A Guangzhou team that treats your money like our own — transparent, fast, and on the ground where the cars are.", zh: "一支把您的钱当自己钱看的广州团队 —— 透明、快速，且就在车源所在地。" }
    },
    brands: {
      eyebrow: { en: "Brands we export", zh: "我们出口的品牌" },
      title:   { en: "From everyday to extraordinary", zh: "从日常到非凡" }
    },
    faq: {
      eyebrow: { en: "Good to know", zh: "您需要了解" },
      title:   { en: "Your questions, perfectly answered", zh: "您的疑问，逐一解答" }
    },
    cta: {
      eyebrow: { en: "Ready when you are", zh: "随时为您效劳" },
      title:   { en: "Drive beyond expectations", zh: "超越期待，自在驰骋" },
      intro:   { en: "Let our team guide you to the right car at the right price, sourced in China and delivered to your door.", zh: "让我们的团队为您找到合适的车与合适的价格，中国寻源，直送到家。" }
    },
    contact: {
      eyebrow: { en: "Get a quote", zh: "获取报价" },
      title:   { en: "Import your next car", zh: "进口您的下一台车" },
      intro:   { en: "Send the model you want and where it's headed — we usually reply on WhatsApp within the hour.", zh: "把您想要的车型与目的地发给我们 —— 通常一小时内通过 WhatsApp 回复。" }
    }
  },

  /* ---- Filter categories shown on the inventory page ---- */
  categories: [
    { id: "all",   label: { en: "All cars", zh: "全部车辆" } },
    { id: "suv",   label: { en: "SUV",      zh: "SUV" } },
    { id: "sedan", label: { en: "Sedan",    zh: "轿车" } },
    { id: "mpv",   label: { en: "MPV",      zh: "商务车" } },
    { id: "ev",    label: { en: "EV & Hybrid", zh: "电动 / 混动" } },
    { id: "coupe", label: { en: "Coupé",    zh: "轿跑" } }
  ],

  /* ---- The inventory ----
     featured:true  -> also appears in the homepage slider.
     price is text so the owner can write "Enquire", "$18,500", etc.       */
  cars: [
    {
      id: "glc-coupe", featured: true, category: "coupe",
      name:  { en: "Mercedes-Benz GLC Coupé", zh: "奔驰 GLC 轿跑" },
      year:  2023,
      image: "car-glc-red.jpg",
      alt:   "Red Mercedes-Benz GLC Coupé",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "Coupé · AMG", zh: "轿跑 · AMG" }, { en: "Red", zh: "红色" } ]
    },
    {
      id: "honda-crv", featured: true, category: "suv",
      name:  { en: "Honda CR-V", zh: "本田 CR-V" },
      year:  2024,
      image: "car-honda-crv.jpg",
      alt:   "White Honda CR-V",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "SUV", zh: "SUV" }, { en: "White · New", zh: "白色 · 全新" } ]
    },
    {
      id: "gac-master", featured: true, category: "mpv",
      name:  { en: "GAC Master", zh: "广汽 Master" },
      year:  2024,
      image: "car-gac-master.jpg",
      alt:   "Silver GAC Master MPV",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "MPV · 7-seat", zh: "商务车 · 7座" }, { en: "Silver", zh: "银色" } ]
    },
    {
      id: "mercedes-s", featured: true, category: "sedan",
      name:  { en: "Mercedes-Benz S-Class", zh: "奔驰 S 级" },
      year:  2023,
      image: "car-mercedes-s.jpg",
      alt:   "Black Mercedes-Benz S-Class",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "Sedan", zh: "轿车" }, { en: "Black", zh: "黑色" } ]
    },
    {
      id: "gac-master-vip", featured: true, category: "mpv",
      name:  { en: "GAC Master · VIP", zh: "广汽 Master · VIP" },
      year:  2024,
      image: "car-gac-master.jpg",
      alt:   "GAC Master VIP chauffeur MPV",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "MPV · VIP", zh: "商务车 · VIP" }, { en: "Chauffeur", zh: "商务" } ]
    },
    {
      id: "land-cruiser", featured: true, category: "suv",
      name:  { en: "Toyota Land Cruiser", zh: "丰田 兰德酷路泽" },
      year:  2024,
      image: "img/cars/toyota-land-cruiser.svg",
      alt:   "Toyota Land Cruiser",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "SUV · 4x4", zh: "SUV · 四驱" }, { en: "New", zh: "全新" } ]
    },
    {
      id: "tesla-model-y", featured: true, category: "ev",
      name:  { en: "Tesla Model Y", zh: "特斯拉 Model Y" },
      year:  2024,
      image: "img/cars/tesla-model-y.svg",
      alt:   "Tesla Model Y electric SUV",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "EV · SUV", zh: "电动 · SUV" }, { en: "Long Range", zh: "长续航" } ]
    },
    {
      id: "byd-han", featured: false, category: "ev",
      name:  { en: "BYD Han EV", zh: "比亚迪 汉 EV" },
      year:  2024,
      image: "img/cars/byd-han.svg",
      alt:   "BYD Han EV electric sedan",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "EV · Sedan", zh: "电动 · 轿车" }, { en: "New", zh: "全新" } ]
    },
    {
      id: "highlander", featured: false, category: "suv",
      name:  { en: "Toyota Highlander", zh: "丰田 汉兰达" },
      year:  2023,
      image: "img/cars/toyota-highlander.svg",
      alt:   "Toyota Highlander 7-seat SUV",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "SUV · 7-seat", zh: "SUV · 7座" }, { en: "White", zh: "白色" } ]
    },
    {
      id: "camry", featured: false, category: "sedan",
      name:  { en: "Toyota Camry", zh: "丰田 凯美瑞" },
      year:  2024,
      image: "img/cars/toyota-camry.svg",
      alt:   "Toyota Camry sedan",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "Sedan", zh: "轿车" }, { en: "Hybrid", zh: "混动" } ]
    },
    {
      id: "bmw-x5", featured: false, category: "suv",
      name:  { en: "BMW X5", zh: "宝马 X5" },
      year:  2023,
      image: "img/cars/bmw-x5.svg",
      alt:   "BMW X5 luxury SUV",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "SUV · Luxury", zh: "SUV · 豪华" }, { en: "Black", zh: "黑色" } ]
    },
    {
      id: "tesla-model-3", featured: false, category: "ev",
      name:  { en: "Tesla Model 3", zh: "特斯拉 Model 3" },
      year:  2024,
      image: "img/cars/tesla-model-3.svg",
      alt:   "Tesla Model 3 electric sedan",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "EV · Sedan", zh: "电动 · 轿车" }, { en: "New", zh: "全新" } ]
    },
    {
      id: "x-trail", featured: false, category: "suv",
      name:  { en: "Nissan X-Trail", zh: "日产 奇骏" },
      year:  2023,
      image: "img/cars/nissan-x-trail.svg",
      alt:   "Nissan X-Trail SUV",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "SUV", zh: "SUV" }, { en: "Silver", zh: "银色" } ]
    },
    {
      id: "lexus-rx", featured: false, category: "suv",
      name:  { en: "Lexus RX", zh: "雷克萨斯 RX" },
      year:  2024,
      image: "img/cars/lexus-rx.svg",
      alt:   "Lexus RX luxury SUV",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "SUV · Luxury", zh: "SUV · 豪华" }, { en: "Hybrid", zh: "混动" } ]
    },
    {
      id: "mercedes-e", featured: false, category: "sedan",
      name:  { en: "Mercedes-Benz E-Class", zh: "奔驰 E 级" },
      year:  2023,
      image: "img/cars/mercedes-e.svg",
      alt:   "Mercedes-Benz E-Class sedan",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "Sedan", zh: "轿车" }, { en: "Grey", zh: "灰色" } ]
    },
    {
      id: "accord", featured: false, category: "sedan",
      name:  { en: "Honda Accord", zh: "本田 雅阁" },
      year:  2024,
      image: "img/cars/honda-accord.svg",
      alt:   "Honda Accord sedan",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "Sedan", zh: "轿车" }, { en: "New", zh: "全新" } ]
    },
    {
      id: "hiace", featured: false, category: "mpv",
      name:  { en: "Toyota Hiace", zh: "丰田 海狮" },
      year:  2023,
      image: "img/cars/toyota-hiace.svg",
      alt:   "Toyota Hiace van",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "MPV · Van", zh: "商务车 · 厢式" }, { en: "Diesel", zh: "柴油" } ]
    },
    {
      id: "byd-song-plus", featured: false, category: "ev",
      name:  { en: "BYD Song Plus", zh: "比亚迪 宋 PLUS" },
      year:  2024,
      image: "img/cars/byd-song-plus.svg",
      alt:   "BYD Song Plus plug-in hybrid SUV",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "EV · SUV", zh: "电动 · SUV" }, { en: "DM-i", zh: "DM-i" } ]
    },
    {
      id: "byd-dolphin", featured: false, category: "ev",
      name:  { en: "BYD Dolphin", zh: "比亚迪 海豚" },
      year:  2024,
      image: "img/cars/byd-dolphin.svg",
      alt:   "BYD Dolphin compact EV",
      price: { en: "Enquire", zh: "询价" },
      tags:  [ { en: "EV · Compact", zh: "电动 · 紧凑" }, { en: "New", zh: "全新" } ]
    }
  ]
};
/* __DATA_END__ */


/* =====================================================================
   STORE — the seam the future admin plugs into.
   Rendering code calls Store.getCars() etc. and never touches SITE_DATA
   directly, so the data source can change without rewriting any pages.
   It already prefers an admin override saved in localStorage under
   "cce-admin-data" (falls back to the defaults above). That single line
   is all a future admin needs to start editing live.
   ===================================================================== */
window.Store = (function () {
  function adminOverride() {
    try {
      const raw = localStorage.getItem("cce-admin-data");
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function data() {
    return adminOverride() || window.SITE_DATA;
  }
  return {
    getConfig:     () => data().config,
    getContent:    () => data().content,
    getEffective:  () => data(),            // full data object (config, content, categories, cars)
    getCategories: () => data().categories,
    getCars:       () => data().cars,
    getFeatured:   () => data().cars.filter(c => c.featured),
    getCarsByCategory: (cat) =>
      (!cat || cat === "all") ? data().cars : data().cars.filter(c => c.category === cat),
    /* Helper used by both pages to build a card. Returns an HTML string
       whose markup matches the site's existing .ccard component, with
       bilingual spans so the EN/中文 toggle keeps working. */
    carCardHTML(car) {
      const wa = "https://wa.me/" + data().config.whatsapp;
      const tags = (car.tags || []).map(t =>
        `<span class="tag"><span class="en-only">${t.en}</span><span class="zh-only">${t.zh}</span></span>`
      ).join("");
      return `
        <article class="ccard" data-category="${car.category}">
          <div class="ph">
            <img src="${car.image}" alt="${car.alt || car.name.en}" loading="lazy">
            <div class="tags">${tags}</div>
          </div>
          <div class="body">
            <div class="yr">${car.year}</div>
            <h3><span class="en-only">${car.name.en}</span><span class="zh-only">${car.name.zh}</span></h3>
            <div class="row">
              <span class="price"><span class="en-only">${car.price.en}</span><span class="zh-only">${car.price.zh}</span></span>
              <a class="go" href="${wa}?text=${encodeURIComponent('Hi! I am interested in the ' + car.name.en + ' (' + car.year + ').')}" aria-label="Enquire about ${car.name.en}">↗</a>
            </div>
          </div>
        </article>`;
    }
  };
})();
