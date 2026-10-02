(function () {
  'use strict';

  /* ===== 레시피 데이터 (영양 정보는 1인분 기준 대략치) ===== */
  const RECIPES = [
    {
      id: 1,
      title: '닭가슴살 아보카도 샐러드',
      category: '샐러드',
      emoji: '🥗',
      kcal: 380, time: 15, servings: 1, difficulty: '쉬움',
      protein: 35, carbs: 14, fat: 21,
      desc: '담백한 닭가슴살과 고소한 아보카도로 포만감을 꽉 채운 한 끼 샐러드.',
      ingredients: [
        ['닭가슴살', '1쪽 (120g)'], ['아보카도', '1/2개'], ['어린잎 채소', '2줌'],
        ['방울토마토', '6개'], ['올리브오일', '1큰술'], ['레몬즙', '1큰술'],
        ['소금·후추', '약간']
      ],
      steps: [
        '닭가슴살에 소금, 후추로 밑간을 하고 10분 정도 둡니다.',
        '달군 팬에 닭가슴살을 올려 중불에서 앞뒤로 5~6분씩 속까지 익힙니다.',
        '아보카도는 한입 크기로 썰고, 방울토마토는 반으로 자릅니다.',
        '올리브오일, 레몬즙, 소금, 후추를 섞어 드레싱을 만듭니다.',
        '그릇에 채소를 담고 썰어 둔 닭가슴살과 아보카도, 토마토를 올린 뒤 드레싱을 뿌립니다.'
      ],
      tip: '닭가슴살은 익힌 뒤 3분 정도 두었다가 썰면 육즙이 빠지지 않아 더 촉촉해요.'
    },
    {
      id: 2,
      title: '계란 콥샐러드',
      category: '샐러드',
      emoji: '🥚',
      kcal: 330, time: 20, servings: 1, difficulty: '쉬움',
      protein: 24, carbs: 12, fat: 20,
      desc: '삶은 계란과 알록달록한 채소를 줄 맞춰 담아 보기에도 좋은 샐러드.',
      ingredients: [
        ['계란', '2개'], ['로메인 상추', '4장'], ['오이', '1/3개'],
        ['옥수수콘', '2큰술'], ['방울토마토', '5개'], ['블랙올리브', '4알'],
        ['플레인 요거트', '2큰술'], ['홀그레인 머스터드', '1작은술'], ['레몬즙', '1작은술']
      ],
      steps: [
        '끓는 물에 계란을 넣고 10분간 삶은 뒤 찬물에 식혀 껍질을 벗깁니다.',
        '로메인은 한입 크기로 뜯고, 오이와 토마토, 계란은 비슷한 크기로 깍둑썰기합니다.',
        '요거트, 머스터드, 레몬즙을 섞어 드레싱을 만듭니다.',
        '그릇에 로메인을 깔고 재료를 종류별로 줄 맞춰 올립니다.',
        '먹기 직전에 드레싱을 뿌려 가볍게 섞습니다.'
      ],
      tip: '마요네즈 대신 요거트 드레싱을 쓰면 지방과 칼로리를 크게 줄일 수 있어요.'
    },
    {
      id: 3,
      title: '연어 포케볼',
      category: '단백질',
      emoji: '🐟',
      kcal: 450, time: 15, servings: 1, difficulty: '쉬움',
      protein: 30, carbs: 42, fat: 17,
      desc: '신선한 연어와 현미밥, 채소를 한 그릇에 담은 하와이식 덮밥.',
      ingredients: [
        ['생연어 (횟감)', '100g'], ['현미밥', '2/3공기 (130g)'], ['오이', '1/3개'],
        ['아보카도', '1/4개'], ['양파', '1/8개'], ['간장', '1큰술'],
        ['참기름', '1작은술'], ['통깨', '약간']
      ],
      steps: [
        '연어는 사방 1.5cm 크기로 깍둑썰기합니다.',
        '간장과 참기름을 섞어 연어에 버무린 뒤 5분간 재워 둡니다.',
        '오이와 아보카도는 한입 크기로 썰고, 양파는 얇게 채 썰어 찬물에 담가 매운맛을 뺍니다.',
        '그릇에 현미밥을 담고 연어와 채소를 보기 좋게 올립니다.',
        '통깨를 뿌려 마무리합니다.'
      ],
      tip: '현미밥 대신 곤약밥이나 양상추를 깔면 탄수화물을 더 줄일 수 있어요.'
    },
    {
      id: 4,
      title: '닭가슴살 스테이크와 구운 채소',
      category: '단백질',
      emoji: '🍗',
      kcal: 340, time: 25, servings: 1, difficulty: '보통',
      protein: 42, carbs: 15, fat: 11,
      desc: '겉은 노릇하고 속은 촉촉하게 구운 고단백 저녁 한 접시.',
      ingredients: [
        ['닭가슴살', '1쪽 (150g)'], ['브로콜리', '1/3송이'], ['파프리카', '1/2개'],
        ['양송이버섯', '3개'], ['올리브오일', '1/2큰술'], ['다진 마늘', '1작은술'],
        ['허브솔트', '약간'], ['후추', '약간']
      ],
      steps: [
        '닭가슴살은 두꺼운 부분에 칼집을 넣어 두께를 고르게 하고 허브솔트, 후추, 다진 마늘로 밑간합니다.',
        '브로콜리, 파프리카, 양송이는 한입 크기로 썹니다.',
        '팬에 올리브오일을 두르고 중불에서 닭가슴살을 앞뒤로 5~6분씩 굽습니다.',
        '닭가슴살을 꺼내 잠시 쉬게 두고, 같은 팬에 채소를 넣어 3~4분간 볶습니다.',
        '닭가슴살을 도톰하게 썰어 구운 채소와 함께 접시에 담습니다.'
      ],
      tip: '뚜껑을 덮고 약불에서 2분 정도 뜸을 들이면 속까지 퍽퍽하지 않게 익어요.'
    },
    {
      id: 5,
      title: '곤약 계란 볶음밥',
      category: '저탄수',
      emoji: '🍚',
      kcal: 250, time: 15, servings: 1, difficulty: '쉬움',
      protein: 14, carbs: 20, fat: 11,
      desc: '곤약쌀로 칼로리를 확 낮춘, 든든하고 가벼운 볶음밥.',
      ingredients: [
        ['곤약쌀', '1봉 (150g)'], ['계란', '2개'], ['대파', '1/3대'],
        ['당근', '1/5개'], ['애호박', '1/5개'], ['간장', '1/2큰술'],
        ['식용유', '1작은술'], ['소금·후추', '약간']
      ],
      steps: [
        '곤약쌀은 체에 밭쳐 흐르는 물에 헹군 뒤 물기를 뺍니다.',
        '마른 팬에 곤약쌀을 넣고 2~3분간 볶아 수분과 특유의 냄새를 날립니다.',
        '팬 한쪽에 식용유를 두르고 송송 썬 대파를 볶아 파기름을 냅니다.',
        '잘게 다진 당근과 애호박을 넣어 볶다가, 팬 한쪽에 계란을 풀어 스크램블합니다.',
        '모든 재료를 섞고 간장, 소금, 후추로 간을 맞춥니다.'
      ],
      tip: '곤약쌀을 기름 없이 먼저 볶아 수분을 날려야 볶음밥이 질척해지지 않아요.'
    },
    {
      id: 6,
      title: '새우 애호박 누들',
      category: '저탄수',
      emoji: '🍝',
      kcal: 230, time: 20, servings: 1, difficulty: '보통',
      protein: 22, carbs: 13, fat: 10,
      desc: '면 대신 애호박을 길게 썰어 만든 가벼운 오일 파스타.',
      ingredients: [
        ['애호박', '1개'], ['칵테일 새우', '8마리'], ['마늘', '3쪽'],
        ['방울토마토', '5개'], ['올리브오일', '1큰술'], ['페페론치노', '2개'],
        ['소금·후추', '약간']
      ],
      steps: [
        '애호박은 채칼이나 필러로 길고 가늘게 썰어 면처럼 만듭니다.',
        '애호박 면에 소금을 살짝 뿌려 5분간 둔 뒤 키친타월로 물기를 닦습니다.',
        '팬에 올리브오일을 두르고 편으로 썬 마늘과 페페론치노를 약불에서 볶아 향을 냅니다.',
        '새우와 반으로 자른 방울토마토를 넣고 새우가 붉게 익을 때까지 볶습니다.',
        '애호박 면을 넣고 센 불에서 1분만 빠르게 볶은 뒤 소금, 후추로 간합니다.'
      ],
      tip: '애호박은 오래 볶으면 물이 생기니 마지막에 넣고 짧게 볶는 것이 포인트예요.'
    },
    {
      id: 7,
      title: '양배추 계란전',
      category: '저탄수',
      emoji: '🥬',
      kcal: 240, time: 15, servings: 1, difficulty: '쉬움',
      protein: 15, carbs: 12, fat: 14,
      desc: '밀가루 없이 양배추와 계란만으로 부치는 포만감 좋은 한 장.',
      ingredients: [
        ['양배추', '2줌 (150g)'], ['계란', '2개'], ['대파', '1/4대'],
        ['식용유', '1작은술'], ['소금', '약간'], ['가쓰오부시 (선택)', '약간'],
        ['저당 케첩 또는 스리라차', '약간']
      ],
      steps: [
        '양배추는 가늘게 채 썰고 대파는 송송 썹니다.',
        '볼에 양배추, 대파, 계란, 소금을 넣고 고루 섞습니다.',
        '팬에 식용유를 두르고 반죽을 올려 둥글게 모양을 잡습니다.',
        '중약불에서 뚜껑을 덮고 4분, 뒤집어서 3분간 노릇하게 익힙니다.',
        '접시에 담고 소스와 가쓰오부시를 올립니다.'
      ],
      tip: '양배추를 최대한 가늘게 썰어야 계란과 잘 엉겨 뒤집을 때 부서지지 않아요.'
    },
    {
      id: 8,
      title: '두부 스테이크',
      category: '비건',
      emoji: '🌱',
      kcal: 290, time: 20, servings: 1, difficulty: '쉬움',
      protein: 20, carbs: 14, fat: 17,
      desc: '겉은 바삭, 속은 부드럽게 구워 간장 소스를 곁들인 식물성 스테이크.',
      ingredients: [
        ['부침용 두부', '1/2모 (200g)'], ['양송이버섯', '3개'], ['양파', '1/4개'],
        ['간장', '1큰술'], ['알룰로스 또는 올리고당', '1작은술'], ['다진 마늘', '1/2작은술'],
        ['올리브오일', '1큰술'], ['전분가루', '1큰술']
      ],
      steps: [
        '두부는 2cm 두께로 썰어 키친타월로 감싸 10분간 물기를 뺍니다.',
        '두부 겉면에 전분가루를 얇게 묻힙니다.',
        '팬에 올리브오일을 두르고 두부를 앞뒤로 노릇하게 구워 접시에 담습니다.',
        '같은 팬에 채 썬 양파와 버섯을 볶다가 간장, 알룰로스, 다진 마늘, 물 2큰술을 넣어 졸입니다.',
        '구운 두부 위에 소스를 끼얹습니다.'
      ],
      tip: '두부 물기를 충분히 빼야 기름이 튀지 않고 겉이 바삭하게 구워져요.'
    },
    {
      id: 9,
      title: '병아리콩 퀴노아 샐러드',
      category: '비건',
      emoji: '🥙',
      kcal: 360, time: 25, servings: 1, difficulty: '보통',
      protein: 14, carbs: 48, fat: 12,
      desc: '식물성 단백질과 식이섬유가 풍부해 오래 든든한 곡물 샐러드.',
      ingredients: [
        ['삶은 병아리콩', '1/2컵 (80g)'], ['퀴노아', '1/4컵 (40g)'], ['오이', '1/3개'],
        ['방울토마토', '6개'], ['적양파', '1/8개'], ['올리브오일', '1큰술'],
        ['레몬즙', '1큰술'], ['소금·후추', '약간'], ['파슬리 (선택)', '약간']
      ],
      steps: [
        '퀴노아는 고운 체에 받쳐 여러 번 헹굽니다.',
        '냄비에 퀴노아와 물 1/2컵을 넣고 끓어오르면 약불로 줄여 12~15분간 익힌 뒤 식힙니다.',
        '오이, 방울토마토, 적양파는 병아리콩 크기에 맞춰 작게 썹니다.',
        '볼에 모든 재료를 담고 올리브오일, 레몬즙, 소금, 후추를 넣어 버무립니다.',
        '냉장고에 10분 정도 두어 차갑게 먹으면 더 맛있습니다.'
      ],
      tip: '넉넉히 만들어 밀폐 용기에 담아 두면 2~3일간 도시락으로 활용하기 좋아요.'
    },
    {
      id: 10,
      title: '단호박 두유 수프',
      category: '비건',
      emoji: '🍲',
      kcal: 180, time: 25, servings: 1, difficulty: '쉬움',
      protein: 7, carbs: 30, fat: 4,
      desc: '설탕 없이 단호박 본연의 단맛으로 즐기는 부드럽고 따뜻한 수프.',
      ingredients: [
        ['단호박', '1/4통 (200g)'], ['무가당 두유', '1컵 (190ml)'], ['양파', '1/4개'],
        ['올리브오일', '1작은술'], ['소금', '약간'], ['후추', '약간'],
        ['호박씨 (선택)', '약간']
      ],
      steps: [
        '단호박은 씨를 긁어내고 전자레인지에 5분간 돌려 부드럽게 익힌 뒤 껍질을 벗깁니다.',
        '냄비에 올리브오일을 두르고 채 썬 양파를 투명해질 때까지 볶습니다.',
        '단호박과 두유를 넣고 약불에서 5분간 끓입니다.',
        '핸드블렌더나 믹서로 곱게 갈아 줍니다.',
        '소금, 후추로 간을 하고 호박씨를 올려 마무리합니다.'
      ],
      tip: '두유는 끓어 넘치기 쉬우니 약불을 유지하고 계속 저어 주세요.'
    },
    {
      id: 11,
      title: '그릭 요거트 과일볼',
      category: '간식·음료',
      emoji: '🍓',
      kcal: 230, time: 5, servings: 1, difficulty: '쉬움',
      protein: 15, carbs: 28, fat: 6,
      desc: '꾸덕한 그릭 요거트에 제철 과일을 올린 5분 완성 아침 겸 간식.',
      ingredients: [
        ['무가당 그릭 요거트', '150g'], ['딸기', '4개'], ['블루베리', '1줌'],
        ['바나나', '1/3개'], ['그래놀라', '1큰술'], ['아몬드', '5알'],
        ['꿀 (선택)', '1작은술']
      ],
      steps: [
        '딸기와 바나나는 한입 크기로 썹니다.',
        '그릇에 그릭 요거트를 담고 숟가락 뒷면으로 넓게 폅니다.',
        '과일을 보기 좋게 올리고 그래놀라와 아몬드를 뿌립니다.',
        '단맛이 부족하면 꿀을 조금 곁들입니다.'
      ],
      tip: '그래놀라는 당이 많은 제품이 있으니 성분표에서 당류 함량을 확인하고 고르세요.'
    },
    {
      id: 12,
      title: '오버나이트 오트밀',
      category: '간식·음료',
      emoji: '🥣',
      kcal: 310, time: 5, servings: 1, difficulty: '쉬움',
      protein: 14, carbs: 45, fat: 8,
      desc: '전날 밤 섞어 두기만 하면 되는 바쁜 아침용 준비 식사.',
      ingredients: [
        ['오트밀 (롤드 오트)', '40g'], ['무가당 두유 또는 우유', '120ml'], ['플레인 요거트', '2큰술'],
        ['치아씨드', '1작은술'], ['바나나', '1/2개'], ['시나몬 가루', '약간'],
        ['견과류', '1큰술']
      ],
      steps: [
        '뚜껑 있는 용기에 오트밀, 두유, 요거트, 치아씨드를 넣고 잘 섞습니다.',
        '뚜껑을 닫아 냉장고에서 6시간 이상(하룻밤) 불립니다.',
        '먹기 직전에 얇게 썬 바나나와 견과류를 올립니다.',
        '시나몬 가루를 살짝 뿌려 마무리합니다.'
      ],
      tip: '조리 시간 5분에 냉장 숙성 시간은 포함되지 않아요. 전날 밤 미리 준비해 두세요.'
    }
  ];

  const CATEGORIES = ['전체', '샐러드', '단백질', '저탄수', '비건', '간식·음료'];

  const THUMB_CLASS = {
    '샐러드': 'thumb-salad',
    '단백질': 'thumb-protein',
    '저탄수': 'thumb-lowcarb',
    '비건': 'thumb-vegan',
    '간식·음료': 'thumb-snack'
  };

  const SORTERS = {
    kcal: (a, b) => a.kcal - b.kcal,
    time: (a, b) => a.time - b.time,
    protein: (a, b) => b.protein - a.protein
  };

  const STORAGE_KEY = 'dietRecipes.favorites';

  const HEART_SVG =
    '<svg class="heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';

  /* ===== 상태 ===== */
  const state = {
    category: '전체',
    favoritesOnly: false,
    query: '',
    sort: 'default',
    favorites: loadFavorites(),
    openId: null
  };

  /* ===== DOM ===== */
  const $ = (id) => document.getElementById(id);
  const grid = $('recipeGrid');
  const chips = $('categoryChips');
  const favToggle = $('favToggle');
  const favCount = $('favCount');
  const searchInput = $('searchInput');
  const sortSelect = $('sortSelect');
  const resultInfo = $('resultInfo');
  const emptyState = $('emptyState');
  const emptyTitle = $('emptyTitle');
  const emptyDesc = $('emptyDesc');
  const resetBtn = $('resetBtn');
  const modal = $('recipeModal');
  const modalContent = $('modalContent');

  /* ===== 즐겨찾기 저장소 ===== */
  function loadFavorites() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return new Set(Array.isArray(saved) ? saved : []);
    } catch (e) {
      return new Set();
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.favorites]));
    } catch (e) {
      // 저장소를 쓸 수 없는 환경(사생활 보호 모드 등)에서는 현재 화면에서만 유지
    }
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }
    saveFavorites();
  }

  /* ===== 유틸 ===== */
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  }

  function findRecipe(id) {
    return RECIPES.find((recipe) => recipe.id === id);
  }

  function favLabel(recipe, isFav) {
    return `${recipe.title} ${isFav ? '즐겨찾기 해제' : '즐겨찾기 추가'}`;
  }

  function getVisibleRecipes() {
    const query = state.query.trim().toLowerCase();

    const list = RECIPES.filter((recipe) => {
      if (state.category !== '전체' && recipe.category !== state.category) return false;
      if (state.favoritesOnly && !state.favorites.has(recipe.id)) return false;
      if (!query) return true;

      const haystack = [
        recipe.title,
        recipe.desc,
        recipe.category,
        ...recipe.ingredients.map(([name]) => name)
      ].join(' ').toLowerCase();
      return haystack.includes(query);
    });

    const sorter = SORTERS[state.sort];
    return sorter ? list.sort(sorter) : list;
  }

  /* ===== 렌더링 ===== */
  function renderChips() {
    chips.innerHTML = CATEGORIES.map((category) => {
      const count = category === '전체'
        ? RECIPES.length
        : RECIPES.filter((recipe) => recipe.category === category).length;
      return `
        <button type="button" class="chip" data-category="${escapeHtml(category)}"
          aria-pressed="${category === state.category}">
          ${escapeHtml(category)}<span class="chip-count">${count}</span>
        </button>`;
    }).join('');
  }

  function cardTemplate(recipe) {
    const isFav = state.favorites.has(recipe.id);
    return `
      <li class="card" data-id="${recipe.id}">
        <div class="thumb ${THUMB_CLASS[recipe.category]}"><span aria-hidden="true">${recipe.emoji}</span></div>
        <button type="button" class="fav-btn" data-action="favorite" aria-pressed="${isFav}"
          aria-label="${escapeHtml(favLabel(recipe, isFav))}">${HEART_SVG}</button>
        <div class="card-body">
          <span class="badge">${escapeHtml(recipe.category)}</span>
          <h3><button type="button" class="card-open" data-action="open">${escapeHtml(recipe.title)}</button></h3>
          <p class="card-desc">${escapeHtml(recipe.desc)}</p>
          <ul class="card-meta">
            <li>🔥 <strong>${recipe.kcal}</strong> kcal</li>
            <li>⏱ <strong>${recipe.time}</strong>분</li>
            <li>💪 단백질 <strong>${recipe.protein}</strong>g</li>
          </ul>
        </div>
      </li>`;
  }

  function renderGrid() {
    const list = getVisibleRecipes();

    grid.innerHTML = list.map(cardTemplate).join('');
    grid.hidden = list.length === 0;
    emptyState.hidden = list.length > 0;

    const scope = state.favoritesOnly ? '즐겨찾기한 레시피' : '레시피';
    resultInfo.innerHTML = `${scope} <strong>${list.length}</strong>개`;

    if (list.length === 0) {
      if (state.favoritesOnly && state.favorites.size === 0) {
        emptyTitle.textContent = '아직 즐겨찾기한 레시피가 없어요';
        emptyDesc.textContent = '마음에 드는 레시피의 하트를 눌러 저장해 보세요.';
      } else {
        emptyTitle.textContent = '조건에 맞는 레시피가 없어요';
        emptyDesc.textContent = '다른 검색어나 카테고리로 다시 찾아보세요.';
      }
    }
  }

  function renderFavToggle() {
    favCount.textContent = state.favorites.size;
    favToggle.setAttribute('aria-pressed', state.favoritesOnly);
  }

  function modalFavTemplate(recipe) {
    const isFav = state.favorites.has(recipe.id);
    return `
      <button type="button" class="modal-fav" data-action="favorite" aria-pressed="${isFav}"
        aria-label="${escapeHtml(favLabel(recipe, isFav))}">
        ${HEART_SVG}<span>${isFav ? '저장됨' : '즐겨찾기'}</span>
      </button>`;
  }

  function renderModal(recipe) {
    const ingredients = recipe.ingredients.map(([name, amount]) => `
      <li>
        <label>
          <input type="checkbox">
          <span class="name">${escapeHtml(name)}</span>
          <span class="amount">${escapeHtml(amount)}</span>
        </label>
      </li>`).join('');

    const steps = recipe.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join('');

    modalContent.innerHTML = `
      <div class="thumb ${THUMB_CLASS[recipe.category]}"><span aria-hidden="true">${recipe.emoji}</span></div>
      <button type="button" class="modal-close" data-action="close" aria-label="닫기">&times;</button>
      <div class="modal-body">
        <div class="modal-head">
          <div>
            <span class="badge">${escapeHtml(recipe.category)}</span>
            <h2 id="modalTitle">${escapeHtml(recipe.title)}</h2>
          </div>
          ${modalFavTemplate(recipe)}
        </div>
        <p class="modal-desc">${escapeHtml(recipe.desc)}</p>
        <ul class="info-row">
          <li>⏱ 조리시간 <strong>${recipe.time}분</strong></li>
          <li>🍽 분량 <strong>${recipe.servings}인분</strong></li>
          <li>👩‍🍳 난이도 <strong>${escapeHtml(recipe.difficulty)}</strong></li>
        </ul>
        <ul class="nutrition" aria-label="1인분 영양 정보">
          <li><span class="value">${recipe.kcal}<span class="unit"> kcal</span></span><span class="label">칼로리</span></li>
          <li><span class="value">${recipe.protein}<span class="unit"> g</span></span><span class="label">단백질</span></li>
          <li><span class="value">${recipe.carbs}<span class="unit"> g</span></span><span class="label">탄수화물</span></li>
          <li><span class="value">${recipe.fat}<span class="unit"> g</span></span><span class="label">지방</span></li>
        </ul>

        <section class="modal-section">
          <h3>재료 <small>준비한 재료는 체크해 보세요</small></h3>
          <ul class="ingredients">${ingredients}</ul>
        </section>

        <section class="modal-section">
          <h3>조리 방법</h3>
          <ol class="steps">${steps}</ol>
        </section>

        <p class="tip"><strong>💡 TIP</strong> ${escapeHtml(recipe.tip)}</p>
      </div>`;
  }

  /* ===== 모달 열기/닫기 ===== */
  function openModal(id) {
    const recipe = findRecipe(id);
    if (!recipe) return;

    state.openId = id;
    renderModal(recipe);
    modal.showModal();
    modalContent.scrollTop = 0;
  }

  function closeModal() {
    modal.close();
  }

  /* ===== 이벤트 ===== */
  chips.addEventListener('click', (event) => {
    const chip = event.target.closest('.chip');
    if (!chip) return;

    state.category = chip.dataset.category;
    chips.querySelectorAll('.chip').forEach((el) => {
      el.setAttribute('aria-pressed', el === chip);
    });
    renderGrid();
  });

  favToggle.addEventListener('click', () => {
    state.favoritesOnly = !state.favoritesOnly;
    renderFavToggle();
    renderGrid();
  });

  searchInput.addEventListener('input', () => {
    state.query = searchInput.value;
    renderGrid();
  });

  sortSelect.addEventListener('change', () => {
    state.sort = sortSelect.value;
    renderGrid();
  });

  resetBtn.addEventListener('click', () => {
    state.category = '전체';
    state.favoritesOnly = false;
    state.query = '';
    searchInput.value = '';
    renderChips();
    renderFavToggle();
    renderGrid();
  });

  grid.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) return;

    const id = Number(target.closest('.card').dataset.id);

    if (target.dataset.action === 'open') {
      openModal(id);
      return;
    }

    toggleFavorite(id);
    renderFavToggle();

    if (state.favoritesOnly) {
      // 즐겨찾기 보기에서는 해제한 카드가 목록에서 사라져야 함
      renderGrid();
    } else {
      const isFav = state.favorites.has(id);
      target.setAttribute('aria-pressed', isFav);
      target.setAttribute('aria-label', favLabel(findRecipe(id), isFav));
    }
  });

  modal.addEventListener('click', (event) => {
    // 모달 바깥(배경)을 누르면 닫기
    if (event.target === modal) {
      closeModal();
      return;
    }

    const target = event.target.closest('[data-action]');
    if (!target) return;

    if (target.dataset.action === 'close') {
      closeModal();
    } else if (target.dataset.action === 'favorite') {
      const recipe = findRecipe(state.openId);
      toggleFavorite(recipe.id);
      target.outerHTML = modalFavTemplate(recipe);
      modalContent.querySelector('.modal-fav').focus();
      renderFavToggle();
      renderGrid();
    }
  });

  modal.addEventListener('close', () => {
    const id = state.openId;
    state.openId = null;

    // 모달 안에서 즐겨찾기를 바꿔 카드가 다시 그려졌을 수 있으므로 포커스를 직접 되돌림
    const opener = grid.querySelector(`.card[data-id="${id}"] .card-open`);
    if (opener) opener.focus();
  });

  /* ===== 시작 ===== */
  renderChips();
  renderFavToggle();
  renderGrid();
})();
