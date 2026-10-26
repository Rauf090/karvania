/* Karvania – bütün sayt kodu (React). Məlumatlar aşağıda: hotels, guesthouses, sanatoriums, restaurants, tours, esim. */
(() => {
  // g:react
  var R = window.React;
  var react_default = R;
  var { useState, useEffect, useRef, useContext, createContext, StrictMode } = R;

  // g:react-dom/client
  var client_default = window.ReactDOM;

  // i18n.jsx
  var LANGS = [
    { code: "az", label: "AZ", name: "Azərbaycan" },
    { code: "ru", label: "RU", name: "Русский" },
    { code: "en", label: "EN", name: "English" }
  ];
  var UI = {
    az: {
      tagline: "Böyük İpək Yolunun qonaqpərvərliyi",
      nav: { home: "Ana səhifə", hotels: "Otellər", guesthouses: "Qonaq evləri", sanatoriums: "Sanatoriyalar", restaurants: "Restoranlar", tours: "Turlar", esim: "eSIM", bookings: "Rezervasiyalarım" },
      heroTitle: "Azərbaycanın bütün istirahət imkanları bir saytda",
      heroText: "Otellər, butik otellər, qonaq evləri, sanatoriyalar, restoranlar, turlar və turistlər üçün eSIM – hamısı Karvania-da.",
      search: "Axtar",
      where: "Hara?",
      allCities: "Bütün şəhərlər",
      category: "Kateqoriya",
      categories: "Nə axtarırsınız?",
      catText: {
        hotels: "Ulduzlu otellər və butik otellər",
        guesthouses: "Rayonlarda ailəvi qonaq evləri",
        sanatoriums: "Müalicə və sağlamlıq kurortları",
        restaurants: "Milli mətbəx və regional dadlar",
        tours: "Bakı və regionlara bələdçili turlar",
        esim: "Gələn kimi yerli nömrə və internet"
      },
      featuredHotels: "Seçilmiş otellər",
      popularTours: "Populyar turlar",
      seeAll: "Hamısına bax",
      esimPromoTitle: "Azərbaycana çatan kimi internetə qoşulun",
      esimPromoText: "eSIM ilə SIM kart axtarmadan, təyyarədən enən kimi yerli mobil nömrə və internet əldə edin.",
      more: "Ətraflı",
      book: "Rezerv et",
      order: "Sifariş et",
      from: "başlayaraq",
      perNight: "gecə",
      perDay: "gün",
      perPerson: "nəfər",
      stars: "ulduz",
      boutique: "Butik otel",
      hotel: "Otel",
      all: "Hamısı",
      rooms: "Otaq növləri",
      roomsCount: "Otaq sayı",
      size: "Sahə",
      guests: "Qonaq",
      services: "Xidmətlər",
      restaurant: "Restoran",
      signature: "Məşhur yeməklər",
      pool: "Hovuz",
      kidsClub: "Uşaq əyləncə mərkəzi",
      poolTypes: { indoor: "Qapalı hovuz", outdoor: "Açıq hovuz", both: "Açıq və qapalı hovuz", none: "Hovuz yoxdur" },
      yes: "Var",
      no: "Yoxdur",
      activitiesBySeason: "Mövsümə görə aktivitilər",
      seasons: { spring: "Yaz", summer: "Yay", autumn: "Payız", winter: "Qış" },
      location: "Yerləşdiyi məkan",
      wholeHouse: "Bütün ev",
      perRoom: "Otaq",
      priceInfo: "Ödəniş",
      paymentNote: "Ödəniş yerində nağd və ya kartla",
      treatments: "Müalicə üsulları",
      indications: "Kimlər üçün tövsiyə olunur",
      course: "Müalicə kursu",
      includes: "Qiymətə daxildir",
      days: "gün",
      hours: "saat",
      regionalDishes: "Regionların məşhur yeməkləri",
      bestAt: "Ən yaxşı harada dadmaq olar",
      seasonalFood: "Mövsümə görə yeməklər",
      cityRestaurants: "Şəhər restoranları",
      hotelRestaurants: "Otel restoranları",
      avgCheck: "Orta çek",
      cuisine: "Mətbəx",
      inHotel: "Oteldə",
      tourCalc: "Tur qiymət hesablayıcısı",
      tour: "Tur",
      people: "Nəfər sayı",
      language: "Bələdçinin dili",
      vehicles: "Nəqliyyat vasitələri",
      seats: "yer",
      driverGuide: "Sürücü-bələdçi (eyni şəxs)",
      separateGuide: "Bələdçi ayrıca",
      vehicle: "Nəqliyyat",
      guide: "Bələdçi",
      total: "Cəmi",
      recommended: "Tövsiyə olunur",
      notFit: "Bu say üçün uyğun deyil",
      tourIncludes: "Qiymətə sürücü, yanacaq və seçilmiş dildə bələdçi daxildir. Giriş biletləri və yemək daxil deyil.",
      bakuTours: "Bakı turları",
      regionTours: "Regional turlar",
      duration: "Müddət",
      program: "Proqram",
      languages: { ru: "Rus dili", en: "İngilis dili", ar: "Ərəb dili", tr: "Türk dili" },
      form: {
        name: "Ad, soyad",
        phone: "Telefon (WhatsApp)",
        from: "Giriş tarixi",
        to: "Çıxış tarixi",
        date: "Tarix",
        guests: "Qonaq sayı",
        confirm: "Təsdiqlə",
        required: "Ad və telefonu daxil edin.",
        dates: "Çıxış tarixi girişdən sonra olmalıdır.",
        nights: "gecə"
      },
      booked: "Sorğunuz qəbul olundu! Tezliklə sizinlə əlaqə saxlayacağıq.",
      noBookings: "Hələ rezervasiya yoxdur.",
      cancel: "Ləğv et",
      grandTotal: "Ümumi məbləğ",
      footerAbout: "Karvania – Azərbaycanda istirahət üçün lazım olan hər şeyi bir yerə toplayan səyahət platforması.",
      contact: "Əlaqə",
      followUs: "Bizi izləyin",
      writeWhatsapp: "WhatsApp-da yazın",
      sections: "Bölmələr",
      rights: "Bütün hüquqlar qorunur.",
      priceDisclaimer: "Qiymətlər nümunə xarakterlidir və mövsümdən asılı olaraq dəyişə bilər.",
      photoCredit: "Bəzi fotolar: Wikimedia Commons (CC BY-SA), Unsplash.",
      searchPlaceholder: "Ad, yemək və ya şəhər axtar...",
      nothing: "Heç nə tapılmadı.",
      back: "← Geri",
      esim: {
        title: "eSIM – Azərbaycanda yerli mobil nömrə",
        lead: "Fiziki SIM karta ehtiyac olmadan telefonunuza QR kod vasitəsilə yerli nömrə və internet yükləyin.",
        what: "eSIM nədir?",
        whatText: "eSIM telefonun daxilində quraşdırılmış rəqəmsal SIM kartdır. Operator sizə QR kod verir, onu skan etdikdə nömrə və internet paketi telefonunuza yüklənir. Öz nömrəniz də ikinci xətt kimi aktiv qalır.",
        how: "Necə əldə etmək olar?",
        steps: [
          "Telefonunuzun eSIM dəstəklədiyini yoxlayın (Parametrlər → Mobil rabitə → eSIM əlavə et).",
          "Aşağıdakı paketlərdən birini seçin və sifariş verin.",
          "Pasportunuzun şəklini göndərin – Azərbaycanda nömrə qeydiyyatı pasportla aparılır.",
          "E-poçt və ya WhatsApp-a gələn QR kodu skan edin.",
          "Azərbaycana çatanda eSIM xəttini aktiv edin və internetdən istifadə edin."
        ],
        operators: "Ölkədəki mobil operatorlar",
        operatorsText: "Azərbaycanda üç mobil operator fəaliyyət göstərir: Azercell, Bakcell və Nar. Hər üçü Bakı aeroportunda və rəsmi satış ofislərində turistlərə nömrə təqdim edir.",
        imei: "Vacib qeyd: IMEI qeydiyyatı",
        imeiText: "Xaricdən gətirilmiş telefonlar yerli nömrə ilə məhdud müddət qeydiyyatsız işləyir. Uzun müddət qalacaqsınızsa, telefonun IMEI qeydiyyatı tələb oluna bilər – dəqiq qaydanı operatordan soruşun.",
        devices: "Dəstəkləyən cihazlar",
        devicesText: "iPhone XS və daha yeni, Samsung Galaxy S20 və daha yeni, Google Pixel 3 və daha yeni, həmçinin bir çox digər müasir smartfonlar.",
        packages: "eSIM paketləri",
        data: "İnternet",
        validity: "Müddət",
        number: "Yerli nömrə",
        minutes: "Daxili dəqiqə",
        faq: "Tez-tez verilən suallar"
      }
    },
    ru: {
      tagline: "Гостеприимство Великого Шёлкового пути",
      nav: { home: "Главная", hotels: "Отели", guesthouses: "Гостевые дома", sanatoriums: "Санатории", restaurants: "Рестораны", tours: "Туры", esim: "eSIM", bookings: "Мои брони" },
      heroTitle: "Весь отдых в Азербайджане на одном сайте",
      heroText: "Отели, бутик-отели, гостевые дома, санатории, рестораны, туры и eSIM для туристов – всё на Karvania.",
      search: "Найти",
      where: "Куда?",
      allCities: "Все города",
      category: "Категория",
      categories: "Что вы ищете?",
      catText: {
        hotels: "Звёздные и бутик-отели",
        guesthouses: "Семейные гостевые дома в регионах",
        sanatoriums: "Лечебные и оздоровительные курорты",
        restaurants: "Национальная кухня и региональные вкусы",
        tours: "Туры с гидом по Баку и регионам",
        esim: "Местный номер и интернет сразу по прилёту"
      },
      featuredHotels: "Избранные отели",
      popularTours: "Популярные туры",
      seeAll: "Смотреть все",
      esimPromoTitle: "Интернет сразу по прилёте в Азербайджан",
      esimPromoText: "С eSIM вы получаете местный номер и интернет, не выходя из самолёта – без поиска SIM-карты.",
      more: "Подробнее",
      book: "Забронировать",
      order: "Заказать",
      from: "от",
      perNight: "ночь",
      perDay: "день",
      perPerson: "чел.",
      stars: "звёзд",
      boutique: "Бутик-отель",
      hotel: "Отель",
      all: "Все",
      rooms: "Типы номеров",
      roomsCount: "Кол-во комнат",
      size: "Площадь",
      guests: "Гостей",
      services: "Услуги",
      restaurant: "Ресторан",
      signature: "Фирменные блюда",
      pool: "Бассейн",
      kidsClub: "Детский развлекательный центр",
      poolTypes: { indoor: "Крытый бассейн", outdoor: "Открытый бассейн", both: "Открытый и крытый бассейн", none: "Нет бассейна" },
      yes: "Есть",
      no: "Нет",
      activitiesBySeason: "Активности по сезонам",
      seasons: { spring: "Весна", summer: "Лето", autumn: "Осень", winter: "Зима" },
      location: "Расположение",
      wholeHouse: "Весь дом",
      perRoom: "Комната",
      priceInfo: "Оплата",
      paymentNote: "Оплата на месте наличными или картой",
      treatments: "Методы лечения",
      indications: "Кому рекомендуется",
      course: "Курс лечения",
      includes: "В стоимость входит",
      days: "дн.",
      hours: "ч.",
      regionalDishes: "Знаменитые блюда регионов",
      bestAt: "Где лучше всего попробовать",
      seasonalFood: "Блюда по сезонам",
      cityRestaurants: "Городские рестораны",
      hotelRestaurants: "Рестораны при отелях",
      avgCheck: "Средний чек",
      cuisine: "Кухня",
      inHotel: "В отеле",
      tourCalc: "Калькулятор стоимости тура",
      tour: "Тур",
      people: "Кол-во человек",
      language: "Язык гида",
      vehicles: "Транспорт",
      seats: "мест",
      driverGuide: "Водитель-гид (одно лицо)",
      separateGuide: "Гид отдельно",
      vehicle: "Транспорт",
      guide: "Гид",
      total: "Итого",
      recommended: "Рекомендуем",
      notFit: "Не подходит для этой группы",
      tourIncludes: "В стоимость входят водитель, топливо и гид на выбранном языке. Входные билеты и питание не включены.",
      bakuTours: "Туры по Баку",
      regionTours: "Туры по регионам",
      duration: "Длительность",
      program: "Программа",
      languages: { ru: "Русский", en: "Английский", ar: "Арабский", tr: "Турецкий" },
      form: {
        name: "Имя, фамилия",
        phone: "Телефон (WhatsApp)",
        from: "Дата заезда",
        to: "Дата выезда",
        date: "Дата",
        guests: "Гостей",
        confirm: "Подтвердить",
        required: "Введите имя и телефон.",
        dates: "Дата выезда должна быть позже заезда.",
        nights: "ночей"
      },
      booked: "Заявка принята! Мы скоро свяжемся с вами.",
      noBookings: "Броней пока нет.",
      cancel: "Отменить",
      grandTotal: "Общая сумма",
      footerAbout: "Karvania – туристическая платформа, собравшая всё для отдыха в Азербайджане в одном месте.",
      contact: "Контакты",
      followUs: "Мы в соцсетях",
      writeWhatsapp: "Написать в WhatsApp",
      sections: "Разделы",
      rights: "Все права защищены.",
      priceDisclaimer: "Цены ориентировочные и могут меняться в зависимости от сезона.",
      photoCredit: "Часть фото: Wikimedia Commons (CC BY-SA), Unsplash.",
      searchPlaceholder: "Поиск по названию, блюду или городу...",
      nothing: "Ничего не найдено.",
      back: "← Назад",
      esim: {
        title: "eSIM – местный номер в Азербайджане",
        lead: "Установите местный номер и интернет на телефон по QR-коду без физической SIM-карты.",
        what: "Что такое eSIM?",
        whatText: "eSIM – это цифровая SIM-карта, встроенная в телефон. Оператор выдаёт QR-код, после сканирования номер и интернет-пакет загружаются в телефон. Ваш основной номер остаётся активным как вторая линия.",
        how: "Как получить?",
        steps: [
          "Проверьте поддержку eSIM (Настройки → Сотовая связь → Добавить eSIM).",
          "Выберите один из пакетов ниже и оформите заказ.",
          "Отправьте фото паспорта – в Азербайджане номера регистрируются по паспорту.",
          "Отсканируйте QR-код, пришедший на e-mail или в WhatsApp.",
          "По прилёте активируйте линию eSIM и пользуйтесь интернетом."
        ],
        operators: "Мобильные операторы страны",
        operatorsText: "В Азербайджане работают три оператора: Azercell, Bakcell и Nar. Все они продают номера туристам в аэропорту Баку и в официальных офисах.",
        imei: "Важно: регистрация IMEI",
        imeiText: "Привезённые из-за рубежа телефоны работают с местным номером без регистрации ограниченное время. При длительном пребывании может потребоваться регистрация IMEI – уточните правила у оператора.",
        devices: "Поддерживаемые устройства",
        devicesText: "iPhone XS и новее, Samsung Galaxy S20 и новее, Google Pixel 3 и новее, а также многие другие современные смартфоны.",
        packages: "Пакеты eSIM",
        data: "Интернет",
        validity: "Срок",
        number: "Местный номер",
        minutes: "Минуты по стране",
        faq: "Частые вопросы"
      }
    },
    en: {
      tagline: "Silk Road hospitality",
      nav: { home: "Home", hotels: "Hotels", guesthouses: "Guest houses", sanatoriums: "Sanatoriums", restaurants: "Restaurants", tours: "Tours", esim: "eSIM", bookings: "My bookings" },
      heroTitle: "Everything for your Azerbaijan trip in one place",
      heroText: "Hotels, boutique hotels, guest houses, sanatoriums, restaurants, tours and tourist eSIMs – all on Karvania.",
      search: "Search",
      where: "Where to?",
      allCities: "All cities",
      category: "Category",
      categories: "What are you looking for?",
      catText: {
        hotels: "Star-rated and boutique hotels",
        guesthouses: "Family guest houses in the regions",
        sanatoriums: "Medical and wellness resorts",
        restaurants: "National cuisine and regional flavours",
        tours: "Guided tours of Baku and the regions",
        esim: "Local number and data on arrival"
      },
      featuredHotels: "Featured hotels",
      popularTours: "Popular tours",
      seeAll: "See all",
      esimPromoTitle: "Get online the moment you land in Azerbaijan",
      esimPromoText: "With an eSIM you get a local number and mobile data before leaving the plane – no SIM card hunting.",
      more: "Details",
      book: "Book",
      order: "Order",
      from: "from",
      perNight: "night",
      perDay: "day",
      perPerson: "person",
      stars: "stars",
      boutique: "Boutique hotel",
      hotel: "Hotel",
      all: "All",
      rooms: "Room types",
      roomsCount: "Rooms",
      size: "Size",
      guests: "Guests",
      services: "Services",
      restaurant: "Restaurant",
      signature: "Signature dishes",
      pool: "Pool",
      kidsClub: "Kids' club",
      poolTypes: { indoor: "Indoor pool", outdoor: "Outdoor pool", both: "Indoor & outdoor pools", none: "No pool" },
      yes: "Yes",
      no: "No",
      activitiesBySeason: "Activities by season",
      seasons: { spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter" },
      location: "Location",
      wholeHouse: "Whole house",
      perRoom: "Room",
      priceInfo: "Payment",
      paymentNote: "Pay on site by cash or card",
      treatments: "Treatments",
      indications: "Recommended for",
      course: "Treatment course",
      includes: "Price includes",
      days: "days",
      hours: "hours",
      regionalDishes: "Famous regional dishes",
      bestAt: "Where to taste it best",
      seasonalFood: "Seasonal food",
      cityRestaurants: "City restaurants",
      hotelRestaurants: "Hotel restaurants",
      avgCheck: "Average bill",
      cuisine: "Cuisine",
      inHotel: "In hotel",
      tourCalc: "Tour price calculator",
      tour: "Tour",
      people: "Number of people",
      language: "Guide language",
      vehicles: "Vehicles",
      seats: "seats",
      driverGuide: "Driver-guide (same person)",
      separateGuide: "Separate guide",
      vehicle: "Vehicle",
      guide: "Guide",
      total: "Total",
      recommended: "Recommended",
      notFit: "Not suitable for this group",
      tourIncludes: "Price includes driver, fuel and a guide in your language. Entrance tickets and meals are not included.",
      bakuTours: "Baku tours",
      regionTours: "Regional tours",
      duration: "Duration",
      program: "Program",
      languages: { ru: "Russian", en: "English", ar: "Arabic", tr: "Turkish" },
      form: {
        name: "Full name",
        phone: "Phone (WhatsApp)",
        from: "Check-in",
        to: "Check-out",
        date: "Date",
        guests: "Guests",
        confirm: "Confirm",
        required: "Please enter your name and phone.",
        dates: "Check-out must be after check-in.",
        nights: "nights"
      },
      booked: "Request received! We will contact you shortly.",
      noBookings: "No bookings yet.",
      cancel: "Cancel",
      grandTotal: "Grand total",
      footerAbout: "Karvania is a travel platform that brings together everything you need for a holiday in Azerbaijan.",
      contact: "Contact",
      followUs: "Follow us",
      writeWhatsapp: "Chat on WhatsApp",
      sections: "Sections",
      rights: "All rights reserved.",
      priceDisclaimer: "Prices are indicative and may vary by season.",
      photoCredit: "Some photos: Wikimedia Commons (CC BY-SA), Unsplash.",
      searchPlaceholder: "Search by name, dish or city...",
      nothing: "Nothing found.",
      back: "← Back",
      esim: {
        title: "eSIM – a local number in Azerbaijan",
        lead: "Install a local number and data plan on your phone with a QR code – no physical SIM needed.",
        what: "What is an eSIM?",
        whatText: "An eSIM is a digital SIM built into your phone. The operator gives you a QR code; scanning it downloads the number and data plan to your phone. Your home number stays active as a second line.",
        how: "How to get one",
        steps: [
          "Check that your phone supports eSIM (Settings → Mobile data → Add eSIM).",
          "Choose one of the packages below and place an order.",
          "Send a photo of your passport – numbers in Azerbaijan are registered with a passport.",
          "Scan the QR code sent to your e-mail or WhatsApp.",
          "Activate the eSIM line when you arrive and enjoy mobile data."
        ],
        operators: "Mobile operators",
        operatorsText: "Three mobile operators work in Azerbaijan: Azercell, Bakcell and Nar. All of them sell numbers to tourists at Baku airport and in official stores.",
        imei: "Important: IMEI registration",
        imeiText: "Phones brought from abroad work with a local number without registration for a limited time. For longer stays IMEI registration may be required – check the current rules with the operator.",
        devices: "Supported devices",
        devicesText: "iPhone XS and newer, Samsung Galaxy S20 and newer, Google Pixel 3 and newer, plus many other modern smartphones.",
        packages: "eSIM packages",
        data: "Data",
        validity: "Validity",
        number: "Local number",
        minutes: "Local minutes",
        faq: "FAQ"
      }
    }
  };
  var ACTIVITIES = {
    fishing: { icon: "🎣", az: "Balıq ovu", ru: "Рыбалка", en: "Fishing" },
    boat: { icon: "⛵", az: "Gəmi / qayıq turu", ru: "Прогулка на лодке", en: "Boat tour" },
    ski: { icon: "⛷️", az: "Xizək", ru: "Лыжи", en: "Skiing" },
    snowboard: { icon: "🏂", az: "Snoubord", ru: "Сноуборд", en: "Snowboarding" },
    hiking: { icon: "🥾", az: "Dağ yürüşü", ru: "Пеший поход", en: "Hiking" },
    horse: { icon: "🐎", az: "At gəzintisi", ru: "Конные прогулки", en: "Horse riding" },
    rafting: { icon: "🚣", az: "Rafting", ru: "Рафтинг", en: "Rafting" },
    zipline: { icon: "🪂", az: "Ziplayn", ru: "Зиплайн", en: "Zipline" },
    cable: { icon: "🚡", az: "Kanat yolu", ru: "Канатная дорога", en: "Cable car" },
    cycling: { icon: "🚵", az: "Velosiped", ru: "Велопрогулки", en: "Cycling" },
    quad: { icon: "🏍️", az: "Kvadrosikl", ru: "Квадроциклы", en: "Quad biking" },
    beach: { icon: "🏖️", az: "Çimərlik", ru: "Пляж", en: "Beach" },
    spa: { icon: "💆", az: "SPA və masaj", ru: "СПА и массаж", en: "Spa & massage" },
    wine: { icon: "🍷", az: "Şərab dequstasiyası", ru: "Дегустация вин", en: "Wine tasting" },
    picnic: { icon: "🧺", az: "Piknik", ru: "Пикник", en: "Picnic" },
    birds: { icon: "🦩", az: "Quş müşahidəsi", ru: "Наблюдение за птицами", en: "Bird watching" },
    city: { icon: "🏙️", az: "Şəhər gəzintisi", ru: "Прогулка по городу", en: "City walk" },
    craft: { icon: "🏺", az: "Sənətkarlıq ustad dərsi", ru: "Мастер-класс ремёсел", en: "Craft workshop" },
    sledge: { icon: "🛷", az: "Xizəkli kirşə", ru: "Санки", en: "Sledging" },
    fruit: { icon: "🍎", az: "Meyvə yığımı", ru: "Сбор фруктов", en: "Fruit picking" },
    tea: { icon: "🍵", az: "Çay plantasiyası", ru: "Чайные плантации", en: "Tea plantation" },
    yacht: { icon: "🛥️", az: "Yaxta turu", ru: "Прогулка на яхте", en: "Yacht cruise" }
  };
  var CITIES = {
    baku: { az: "Bakı", ru: "Баку", en: "Baku" },
    qebele: { az: "Qəbələ", ru: "Габала", en: "Gabala" },
    seki: { az: "Şəki", ru: "Шеки", en: "Sheki" },
    quba: { az: "Quba", ru: "Губа", en: "Guba" },
    qusar: { az: "Qusar", ru: "Гусар", en: "Gusar" },
    ismayilli: { az: "İsmayıllı", ru: "Исмаиллы", en: "Ismayilli" },
    lenkeran: { az: "Lənkəran", ru: "Ленкорань", en: "Lankaran" },
    astara: { az: "Astara", ru: "Астара", en: "Astara" },
    masalli: { az: "Masallı", ru: "Масаллы", en: "Masalli" },
    goygol: { az: "Göygöl", ru: "Гёйгёль", en: "Goygol" },
    gence: { az: "Gəncə", ru: "Гянджа", en: "Ganja" },
    naftalan: { az: "Naftalan", ru: "Нафталан", en: "Naftalan" },
    sabran: { az: "Şabran", ru: "Шабран", en: "Shabran" },
    naxcivan: { az: "Naxçıvan", ru: "Нахчыван", en: "Nakhchivan" },
    samaxi: { az: "Şamaxı", ru: "Шамахы", en: "Shamakhi" },
    zaqatala: { az: "Zaqatala", ru: "Загатала", en: "Zagatala" }
  };
  var LangContext = createContext(null);
  function LangProvider({ children }) {
    const [lang, setLang] = useState(() => {
      try {
        return localStorage.getItem("karvania-lang") || "az";
      } catch {
        return "az";
      }
    });
    useEffect(() => {
      document.documentElement.lang = lang;
      try {
        localStorage.setItem("karvania-lang", lang);
      } catch {
      }
    }, [lang]);
    return /* @__PURE__ */ React.createElement(LangContext.Provider, { value: { lang, setLang } }, children);
  }
  function useLang() {
    const { lang, setLang } = useContext(LangContext);
    const t = UI[lang];
    const L = (v) => {
      var _a;
      return v && typeof v === "object" && !Array.isArray(v) ? (_a = v[lang]) != null ? _a : v.az : v;
    };
    const city = (id) => L(CITIES[id]) || id;
    return { lang, setLang, t, L, city };
  }

  // context.js
  var AppContext = createContext(null);
  var useApp = () => useContext(AppContext);

  // components/Header.jsx
  var NAV = ["", "hotels", "guesthouses", "sanatoriums", "restaurants", "tours", "esim"];
  var navKey = (p) => p || "home";
  function Header({ page }) {
    const { t, lang, setLang } = useLang();
    const { bookings } = useApp();
    const [open, setOpen] = useState(false);
    const active = page === "hotel" ? "hotels" : page;
    return /* @__PURE__ */ React.createElement("header", { className: "header" }, /* @__PURE__ */ React.createElement("div", { className: "header-inner" }, /* @__PURE__ */ React.createElement("a", { href: "#/", className: "brand", onClick: () => setOpen(false) }, /* @__PURE__ */ React.createElement("span", { className: "brand-mark" }, "🐪"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", null, "Karvania"), /* @__PURE__ */ React.createElement("small", null, t.tagline))), /* @__PURE__ */ React.createElement("nav", { className: `main-nav ${open ? "open" : ""}` }, NAV.map((p) => /* @__PURE__ */ React.createElement("a", { key: p, href: `#/${p}`, className: active === p ? "active" : "", onClick: () => setOpen(false) }, t.nav[navKey(p)]))), /* @__PURE__ */ React.createElement("div", { className: "header-tools" }, /* @__PURE__ */ React.createElement("a", { href: "#/bookings", className: "bag", title: t.nav.bookings }, "🧳", bookings.length > 0 && /* @__PURE__ */ React.createElement("span", { className: "bag-count" }, bookings.length)), /* @__PURE__ */ React.createElement("div", { className: "lang-switch", role: "group", "aria-label": "Language" }, LANGS.map((l) => /* @__PURE__ */ React.createElement("button", { key: l.code, className: lang === l.code ? "on" : "", onClick: () => setLang(l.code), title: l.name }, l.label))), /* @__PURE__ */ React.createElement("button", { className: "burger", onClick: () => setOpen(!open), "aria-label": "Menu" }, open ? "✕" : "☰"))));
  }

  // config.js
  var CONTACT = {
    phone: "+994 50 000 00 00",
    whatsapp: "994500000000",
    // wa.me linki üçün, boşluqsuz
    email: "info@karvania.az",
    facebook: "https://www.facebook.com/karvania",
    instagram: "https://www.instagram.com/karvania",
    address: { az: "Bakı, Nizami küçəsi", ru: "Баку, улица Низами", en: "Nizami street, Baku" }
  };
  var U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=70`;
  var W = (path) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`;

  // components/Icons.jsx
  var FacebookIcon = (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "currentColor", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z" }));
  var InstagramIcon = (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "currentColor", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" }));
  var WhatsAppIcon = (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "currentColor", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88zm8.41-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z" }));
  var MailIcon = (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "m22 6-10 7L2 6" }));
  var PhoneIcon = (p) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", ...p }, /* @__PURE__ */ React.createElement("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" }));
  var waLink = (text = "") => `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
  function WhatsAppFloat() {
    const { t } = useLang();
    return /* @__PURE__ */ React.createElement("a", { className: "wa-float", href: waLink(), target: "_blank", rel: "noopener noreferrer", "aria-label": t.writeWhatsapp, title: t.writeWhatsapp }, /* @__PURE__ */ React.createElement(WhatsAppIcon, { width: "30", height: "30" }));
  }

  // components/Footer.jsx
  function Footer() {
    const { t, L } = useLang();
    return /* @__PURE__ */ React.createElement("footer", { className: "footer" }, /* @__PURE__ */ React.createElement("div", { className: "footer-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "brand footer-brand" }, /* @__PURE__ */ React.createElement("span", { className: "brand-mark" }, "🐪"), /* @__PURE__ */ React.createElement("b", null, "Karvania")), /* @__PURE__ */ React.createElement("p", { className: "footer-about" }, t.footerAbout), /* @__PURE__ */ React.createElement("h4", null, t.followUs), /* @__PURE__ */ React.createElement("div", { className: "socials" }, /* @__PURE__ */ React.createElement("a", { href: CONTACT.facebook, target: "_blank", rel: "noopener noreferrer", className: "social fb", "aria-label": "Facebook" }, /* @__PURE__ */ React.createElement(FacebookIcon, null)), /* @__PURE__ */ React.createElement("a", { href: CONTACT.instagram, target: "_blank", rel: "noopener noreferrer", className: "social ig", "aria-label": "Instagram" }, /* @__PURE__ */ React.createElement(InstagramIcon, null)), /* @__PURE__ */ React.createElement("a", { href: waLink(), target: "_blank", rel: "noopener noreferrer", className: "social wa", "aria-label": "WhatsApp" }, /* @__PURE__ */ React.createElement(WhatsAppIcon, null)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, t.sections), /* @__PURE__ */ React.createElement("ul", { className: "footer-links" }, NAV.map((p) => /* @__PURE__ */ React.createElement("li", { key: p }, /* @__PURE__ */ React.createElement("a", { href: `#/${p}` }, t.nav[p || "home"]))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, t.contact), /* @__PURE__ */ React.createElement("ul", { className: "contact-list" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: waLink(), target: "_blank", rel: "noopener noreferrer", className: "wa-line" }, /* @__PURE__ */ React.createElement("span", { className: "wa-badge" }, /* @__PURE__ */ React.createElement(WhatsAppIcon, { width: "18", height: "18" })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", null, CONTACT.phone), /* @__PURE__ */ React.createElement("small", null, t.writeWhatsapp)))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: `tel:${CONTACT.phone.replace(/\s/g, "")}` }, /* @__PURE__ */ React.createElement(PhoneIcon, { width: "18", height: "18" }), " ", CONTACT.phone)), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: `mailto:${CONTACT.email}` }, /* @__PURE__ */ React.createElement(MailIcon, { width: "18", height: "18" }), " ", CONTACT.email)), /* @__PURE__ */ React.createElement("li", null, "📍 ", L(CONTACT.address))))), /* @__PURE__ */ React.createElement("div", { className: "footer-bottom" }, /* @__PURE__ */ React.createElement("span", null, "© ", (/* @__PURE__ */ new Date()).getFullYear(), " Karvania. ", t.rights), /* @__PURE__ */ React.createElement("span", null, t.priceDisclaimer, " ", t.photoCredit)));
  }

  // data/services.js
  var SERVICES = {
    "Wi-Fi": { icon: "📶", az: "Pulsuz Wi-Fi", ru: "Бесплатный Wi-Fi", en: "Free Wi-Fi" },
    SPA: { icon: "💆", az: "SPA mərkəzi", ru: "СПА-центр", en: "Spa centre" },
    Fitness: { icon: "🏋️", az: "Fitnes zalı", ru: "Фитнес-зал", en: "Gym" },
    Transfer: { icon: "🚐", az: "Hava limanı transferi", ru: "Трансфер из аэропорта", en: "Airport transfer" },
    "Room service": { icon: "🛎️", az: "Otağa xidmət", ru: "Обслуживание в номерах", en: "Room service" },
    Parking: { icon: "🅿️", az: "Pulsuz parkinq", ru: "Бесплатная парковка", en: "Free parking" },
    Breakfast: { icon: "🥐", az: "Səhər yeməyi daxil", ru: "Завтрак включён", en: "Breakfast included" },
    "Rooftop terrace": { icon: "🌇", az: "Dam terrası", ru: "Терраса на крыше", en: "Rooftop terrace" },
    Concierge: { icon: "🧑‍💼", az: "Konsyerj", ru: "Консьерж", en: "Concierge" },
    "All inclusive": { icon: "🍽️", az: "Hər şey daxil", ru: "Всё включено", en: "All inclusive" },
    Bowling: { icon: "🎳", az: "Boulinq", ru: "Боулинг", en: "Bowling" },
    "Bike rental": { icon: "🚲", az: "Velosiped icarəsi", ru: "Прокат велосипедов", en: "Bike rental" },
    Garden: { icon: "🌳", az: "Bağ", ru: "Сад", en: "Garden" },
    "Ski rental": { icon: "🎿", az: "Xizək icarəsi", ru: "Прокат лыж", en: "Ski rental" },
    "Ski school": { icon: "⛷️", az: "Xizək məktəbi", ru: "Лыжная школа", en: "Ski school" },
    Playground: { icon: "🛝", az: "Uşaq meydançası", ru: "Детская площадка", en: "Playground" },
    Beach: { icon: "🏖️", az: "Özəl çimərlik", ru: "Собственный пляж", en: "Private beach" },
    "Wine cellar": { icon: "🍷", az: "Şərab zirzəmisi", ru: "Винный погреб", en: "Wine cellar" },
    Kitchen: { icon: "🍳", az: "Mətbəx", ru: "Кухня", en: "Kitchen" },
    BBQ: { icon: "🔥", az: "Manqal yeri", ru: "Мангальная зона", en: "BBQ area" },
    "Home meals": { icon: "🥘", az: "Ev yeməkləri", ru: "Домашняя еда", en: "Home-cooked meals" },
    Sauna: { icon: "🧖", az: "Sauna", ru: "Сауна", en: "Sauna" },
    Fireplace: { icon: "🪵", az: "Kamin", ru: "Камин", en: "Fireplace" }
  };

  // components/ui.jsx
  var azn = (n) => `${Math.round(n).toLocaleString("ru-RU")} ₼`;
  function Img({ src, alt, className = "" }) {
    const [err, setErr] = useState(false);
    if (err || !src) return /* @__PURE__ */ React.createElement("div", { className: `img-fallback ${className}` }, /* @__PURE__ */ React.createElement("span", null, alt));
    return /* @__PURE__ */ React.createElement("img", { src, alt, className, loading: "lazy", referrerPolicy: "no-referrer", onError: () => setErr(true) });
  }
  function Modal({ children, onClose, wide }) {
    useEffect(() => {
      const k = (e) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", k);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", k);
        document.body.style.overflow = "";
      };
    }, [onClose]);
    return /* @__PURE__ */ React.createElement("div", { className: "overlay", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: `modal ${wide ? "wide" : ""}`, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "close", onClick: onClose, "aria-label": "Close" }, "✕"), children));
  }
  var Stars = ({ n }) => /* @__PURE__ */ React.createElement("span", { className: "stars", "aria-label": `${n}★` }, "★".repeat(n));
  function PageHead({ title, text, img }) {
    return /* @__PURE__ */ React.createElement("section", { className: "page-head", style: img ? { "--bg": `url("${img}")` } : void 0 }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h1", null, title), text && /* @__PURE__ */ React.createElement("p", null, text)));
  }
  function Chips({ options, value, onChange }) {
    return /* @__PURE__ */ React.createElement("div", { className: "chips" }, options.map(([v, label]) => /* @__PURE__ */ React.createElement("button", { key: v, className: `chip ${v === value ? "on" : ""}`, onClick: () => onChange(v) }, label)));
  }
  function Activity({ id }) {
    const { L } = useLang();
    const a = ACTIVITIES[id];
    return /* @__PURE__ */ React.createElement("span", { className: "activity" }, a.icon, " ", L(a));
  }
  function Service({ id }) {
    const { L } = useLang();
    const s = SERVICES[id];
    if (!s) return /* @__PURE__ */ React.createElement("span", { className: "service" }, id);
    return /* @__PURE__ */ React.createElement("span", { className: "service" }, s.icon, " ", L(s));
  }

  // components/BookingModal.jsx
  var today = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  var addDays = (s, n) => {
    const d = new Date(s);
    d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
  };
  var nightsBetween = (a, b) => Math.max(0, Math.round((new Date(b) - new Date(a)) / 864e5));
  function BookingModal({ item, onClose, onConfirm }) {
    const { t } = useLang();
    const f0 = t.form;
    const ranged = item.mode !== "fixed";
    const [f, setF] = useState({ name: "", phone: "", from: today(), to: addDays(today(), item.mode === "day" ? 10 : 2), guests: Math.min(2, item.maxGuests || 2) });
    const [err, setErr] = useState("");
    const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
    const units = ranged ? nightsBetween(f.from, f.to) : 1;
    const total = ranged ? units * item.price * (item.mode === "day" ? Number(f.guests) : 1) : item.price;
    const submit = (e) => {
      e.preventDefault();
      if (!f.name.trim() || !f.phone.trim()) return setErr(f0.required);
      if (ranged && units < 1) return setErr(f0.dates);
      onConfirm({
        kind: item.kind,
        title: item.title,
        subtitle: item.subtitle,
        total,
        details: ranged ? `${f.from} → ${f.to} · ${units} ${item.mode === "day" ? t.days : f0.nights} · ${f.guests} ${t.perPerson}` : [item.subtitle, f.from].filter(Boolean).join(" · "),
        name: f.name,
        phone: f.phone
      });
    };
    return /* @__PURE__ */ React.createElement(Modal, { onClose }, item.img && /* @__PURE__ */ React.createElement(Img, { src: item.img, alt: item.title, className: "modal-img" }), /* @__PURE__ */ React.createElement("form", { className: "modal-body form", onSubmit: submit }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, item.kind), /* @__PURE__ */ React.createElement("h3", null, item.title), item.subtitle && /* @__PURE__ */ React.createElement("p", { className: "muted" }, item.subtitle), /* @__PURE__ */ React.createElement("label", null, f0.name, /* @__PURE__ */ React.createElement("input", { value: f.name, onChange: set("name"), autoComplete: "name" })), /* @__PURE__ */ React.createElement("label", null, f0.phone, /* @__PURE__ */ React.createElement("input", { value: f.phone, onChange: set("phone"), type: "tel", placeholder: "+994", autoComplete: "tel" })), ranged ? /* @__PURE__ */ React.createElement("div", { className: "row2" }, /* @__PURE__ */ React.createElement("label", null, f0.from, /* @__PURE__ */ React.createElement("input", { type: "date", min: today(), value: f.from, onChange: set("from") })), /* @__PURE__ */ React.createElement("label", null, f0.to, /* @__PURE__ */ React.createElement("input", { type: "date", min: f.from, value: f.to, onChange: set("to") }))) : /* @__PURE__ */ React.createElement("label", null, f0.date, /* @__PURE__ */ React.createElement("input", { type: "date", min: today(), value: f.from, onChange: set("from") })), ranged && /* @__PURE__ */ React.createElement("label", null, f0.guests, /* @__PURE__ */ React.createElement("select", { value: f.guests, onChange: set("guests") }, Array.from({ length: item.maxGuests || 4 }, (_, i) => i + 1).map((n) => /* @__PURE__ */ React.createElement("option", { key: n }, n)))), err && /* @__PURE__ */ React.createElement("div", { className: "error" }, err), /* @__PURE__ */ React.createElement("div", { className: "summary" }, /* @__PURE__ */ React.createElement("span", null, ranged ? `${units} × ${azn(item.price)}${item.mode === "day" ? ` × ${f.guests}` : ""}` : t.total), /* @__PURE__ */ React.createElement("b", null, azn(total))), /* @__PURE__ */ React.createElement("button", { className: "btn full" }, f0.confirm)));
  }

  // data/hotels.js
  var ROOM = {
    standard: { az: "Standart otaq", ru: "Стандартный номер", en: "Standard room" },
    deluxe: { az: "Deluxe otaq", ru: "Номер делюкс", en: "Deluxe room" },
    family: { az: "Ailə otağı", ru: "Семейный номер", en: "Family room" },
    suite: { az: "Lüks Suite", ru: "Люкс", en: "Suite" },
    mountain: { az: "Dağ mənzərəli otaq", ru: "Номер с видом на горы", en: "Mountain view room" },
    sea: { az: "Dəniz mənzərəli otaq", ru: "Номер с видом на море", en: "Sea view room" },
    cottage: { az: "Kottec", ru: "Коттедж", en: "Cottage" },
    historic: { az: "Tarixi interyerli otaq", ru: "Номер в историческом стиле", en: "Heritage room" }
  };
  var IMG = {
    r1: U("photo-1611892440504-42a792e24d32"),
    r2: U("photo-1590490360182-c33d57733427"),
    r3: U("photo-1566665797739-1674de7a421a"),
    r4: U("photo-1578683010236-d716f9a3f461"),
    r5: U("photo-1582719478250-c89cae4dc85b"),
    r6: U("photo-1618773928121-c32242e63f39"),
    r7: U("photo-1631049307264-da0ec9d70304"),
    r8: U("photo-1595576508898-0ad5c879a061"),
    r9: U("photo-1587061949409-02df41d5e562"),
    r10: U("photo-1591088398332-8a7791972843"),
    r11: U("photo-1584132967334-10e028bd69f7"),
    r12: U("photo-1596394516093-501ba68a0ba6"),
    rest1: U("photo-1517248135467-4c7edcad34c4"),
    rest2: U("photo-1414235077428-338989a2e8c0"),
    rest3: U("photo-1555396273-367ea4eb4db5"),
    rest4: U("photo-1559339352-11d035aa65de"),
    rest5: U("photo-1552566626-52f8b828add9"),
    rest6: U("photo-1466978913421-dad2ebd01d17")
  };
  var room = (type, img, size, guests, price) => ({ type, name: ROOM[type], img, size, guests, price });
  var hotels = [
    {
      id: "caspian-pearl",
      kind: "hotel",
      stars: 5,
      city: "baku",
      name: "Caspian Pearl Hotel",
      img: W("2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG"),
      desc: {
        az: "Dənizkənarı Bulvarın yanında, Alov qüllələrinə baxan müasir beşulduzlu otel.",
        ru: "Современный пятизвёздочный отель у Приморского бульвара с видом на Пламенные башни.",
        en: "Modern five-star hotel next to the seaside Boulevard, overlooking the Flame Towers."
      },
      services: ["Wi-Fi", "SPA", "Fitness", "Transfer", "Room service", "Parking"],
      pool: "both",
      kidsClub: true,
      kidsText: { az: "3–12 yaş üçün animatorlu uşaq klubu", ru: "Детский клуб с аниматорами для детей 3–12 лет", en: "Kids' club with entertainers for ages 3–12" },
      activities: { spring: ["city", "yacht", "spa"], summer: ["yacht", "beach", "city"], autumn: ["city", "wine", "spa"], winter: ["spa", "city"] },
      rooms: [room("standard", IMG.r1, 30, 2, 220), room("sea", IMG.r2, 38, 2, 300), room("family", IMG.r3, 50, 4, 380), room("suite", IMG.r4, 85, 3, 650)],
      restaurant: {
        name: "Xəzər Terrace",
        img: IMG.rest2,
        cuisine: { az: "Azərbaycan və Aralıq dənizi", ru: "Азербайджанская и средиземноморская", en: "Azerbaijani & Mediterranean" },
        dishes: { az: "Şah plov, nərə kababı, dolma", ru: "Шах-плов, кебаб из осетра, долма", en: "Shah plov, sturgeon kebab, dolma" }
      }
    },
    {
      id: "icheri-boutique",
      kind: "boutique",
      stars: 4,
      city: "baku",
      name: "Icheri Sheher Boutique",
      img: W("8/8b/Old_City_%28Icherisheher%29.jpg/960px-Old_City_%28Icherisheher%29.jpg"),
      desc: {
        az: "İçərişəhərin qala divarları içində, cəmi 12 otaqlı tarixi butik otel.",
        ru: "Исторический бутик-отель всего на 12 номеров внутри стен Ичеришехер.",
        en: "Historic 12-room boutique hotel inside the walls of the Old City."
      },
      services: ["Wi-Fi", "Breakfast", "Rooftop terrace", "Concierge"],
      pool: "none",
      kidsClub: false,
      activities: { spring: ["city", "craft"], summer: ["city", "yacht"], autumn: ["city", "wine"], winter: ["city", "craft"] },
      rooms: [room("historic", IMG.r5, 22, 2, 160), room("deluxe", IMG.r6, 30, 2, 210), room("suite", IMG.r10, 48, 2, 320)],
      restaurant: {
        name: "Karvansaray Ocağı",
        img: IMG.rest3,
        cuisine: { az: "Ənənəvi Bakı mətbəxi", ru: "Традиционная бакинская кухня", en: "Traditional Baku cuisine" },
        dishes: { az: "Düşbərə, qutab, şəkərbura", ru: "Дюшбара, кутабы, шекербура", en: "Dushbara, qutab, shekerbura" }
      }
    },
    {
      id: "tufan-resort",
      kind: "hotel",
      stars: 5,
      city: "qebele",
      name: "Tufan Mountain Resort",
      img: W("d/d0/Mount_Tufanda%C4%9F.jpg/960px-Mount_Tufanda%C4%9F.jpg"),
      desc: {
        az: "Tufandağ kanat yolunun yaxınlığında, meşə ilə əhatələnmiş ailəvi kurort.",
        ru: "Семейный курорт в лесу рядом с канатной дорогой Туфандаг.",
        en: "Family resort in the forest near the Tufandag cable car."
      },
      services: ["Wi-Fi", "SPA", "All inclusive", "Transfer", "Bowling", "Parking"],
      pool: "both",
      kidsClub: true,
      kidsText: { az: "Uşaq klubu, oyun otağı, mini-zoopark və uşaq hovuzu", ru: "Детский клуб, игровая, мини-зоопарк и детский бассейн", en: "Kids' club, playroom, mini zoo and kids' pool" },
      activities: { spring: ["hiking", "horse", "cable"], summer: ["zipline", "rafting", "boat", "quad"], autumn: ["hiking", "fruit", "cable"], winter: ["ski", "snowboard", "sledge"] },
      rooms: [room("standard", IMG.r1, 28, 2, 160), room("mountain", IMG.r12, 36, 2, 230), room("family", IMG.r3, 45, 4, 300), room("cottage", IMG.r9, 70, 6, 480)],
      restaurant: {
        name: "Dağ Ocağı",
        img: IMG.rest1,
        cuisine: { az: "Milli mətbəx, kabab", ru: "Национальная кухня, кебабы", en: "National cuisine, kebabs" },
        dishes: { az: "Quzu kababı, Qəbələ çığırtması, tandır çörəyi", ru: "Шашлык из ягнёнка, чигиртма, тандырный хлеб", en: "Lamb kebab, chighirtma, tandoor bread" }
      }
    },
    {
      id: "nohur-lake",
      kind: "hotel",
      stars: 4,
      city: "qebele",
      name: "Nohur Lake Hotel",
      img: W("5/57/Nohur_Lake%2C_Gabala.jpg/960px-Nohur_Lake%2C_Gabala.jpg"),
      desc: {
        az: "Nohur gölünün sahilində, balıq ovu və qayıq gəzintisi üçün ideal otel.",
        ru: "Отель на берегу озера Нохур – идеален для рыбалки и прогулок на лодке.",
        en: "Lakeside hotel on Nohur lake, ideal for fishing and boat trips."
      },
      services: ["Wi-Fi", "Breakfast", "Bike rental", "Parking"],
      pool: "outdoor",
      kidsClub: true,
      kidsText: { az: "Açıq uşaq meydançası və batut", ru: "Детская площадка и батут", en: "Outdoor playground and trampoline" },
      activities: { spring: ["fishing", "cycling", "picnic"], summer: ["boat", "fishing", "horse"], autumn: ["fishing", "hiking"], winter: ["sledge", "spa"] },
      rooms: [room("standard", IMG.r8, 24, 2, 110), room("deluxe", IMG.r6, 32, 2, 150), room("family", IMG.r7, 42, 4, 200)],
      restaurant: {
        name: "Nohur Sahil",
        img: IMG.rest6,
        cuisine: { az: "Balıq və milli mətbəx", ru: "Рыба и национальная кухня", en: "Fish & national cuisine" },
        dishes: { az: "Qızılbalıq kababı, lavaşda balıq, dovğa", ru: "Форель на мангале, рыба в лаваше, довга", en: "Grilled trout, fish in lavash, dovga" }
      }
    },
    {
      id: "sheki-saray",
      kind: "boutique",
      stars: 4,
      city: "seki",
      name: "Sheki Saray Boutique",
      img: W("5/59/Sheki_khan_palace_main_fa%C3%A7ade.jpg/960px-Sheki_khan_palace_main_fa%C3%A7ade.jpg"),
      desc: {
        az: "Şəki Xan sarayına piyada 5 dəqiqəlik məsafədə, şəbəkə naxışlı butik otel.",
        ru: "Бутик-отель с шебеке-витражами в 5 минутах ходьбы от Дворца шекинских ханов.",
        en: "Boutique hotel with shebeke stained glass, a 5-minute walk from the Sheki Khan Palace."
      },
      services: ["Wi-Fi", "Breakfast", "Garden", "Parking"],
      pool: "outdoor",
      kidsClub: false,
      activities: { spring: ["city", "craft", "hiking"], summer: ["hiking", "horse", "city"], autumn: ["fruit", "craft", "city"], winter: ["craft", "city"] },
      rooms: [room("historic", IMG.r5, 24, 2, 120), room("deluxe", IMG.r6, 32, 2, 160), room("family", IMG.r7, 42, 4, 210)],
      restaurant: {
        name: "Xan Süfrəsi",
        img: IMG.rest3,
        cuisine: { az: "Şəki mətbəxi", ru: "Шекинская кухня", en: "Sheki cuisine" },
        dishes: { az: "Şəki pitisi, Şəki halvası, toyuq çığırtması", ru: "Шекинский пити, шекинская халва, чигиртма", en: "Sheki piti, Sheki halva, chicken chighirtma" }
      }
    },
    {
      id: "shahdag-peak",
      kind: "hotel",
      stars: 5,
      city: "qusar",
      name: "Shahdag Peak Hotel",
      img: W("b/bf/Shahdag_Mountain_Resort%2C_2025_views_%2891157%29.jpg/960px-Shahdag_Mountain_Resort%2C_2025_views_%2891157%29.jpg"),
      desc: {
        az: "Şahdağ xizək trassalarının yanında – qışda xizək, yayda dağ macəraları.",
        ru: "У горнолыжных трасс Шахдага – зимой лыжи, летом горные приключения.",
        en: "Next to the Shahdag ski slopes – skiing in winter, mountain adventures in summer."
      },
      services: ["Wi-Fi", "SPA", "Ski rental", "Ski school", "Fitness", "Parking"],
      pool: "indoor",
      kidsClub: true,
      kidsText: { az: "Uşaq xizək məktəbi və qapalı oyun zonası", ru: "Детская лыжная школа и крытая игровая зона", en: "Kids' ski school and indoor play area" },
      activities: { spring: ["hiking", "cable", "quad"], summer: ["cycling", "zipline", "hiking", "horse"], autumn: ["hiking", "cable"], winter: ["ski", "snowboard", "sledge", "spa"] },
      rooms: [room("standard", IMG.r11, 30, 2, 200), room("mountain", IMG.r12, 38, 2, 280), room("suite", IMG.r4, 80, 4, 560)],
      restaurant: {
        name: "Şahdağ Lounge",
        img: IMG.rest5,
        cuisine: { az: "Avropa və alp mətbəxi", ru: "Европейская и альпийская кухня", en: "European & alpine cuisine" },
        dishes: { az: "Fondü, Quba kababı, isti şokolad", ru: "Фондю, губинский кебаб, горячий шоколад", en: "Fondue, Guba kebab, hot chocolate" }
      }
    },
    {
      id: "quba-green",
      kind: "hotel",
      stars: 4,
      city: "quba",
      name: "Quba Green Valley",
      img: U("photo-1542314831-068cd1dbfeeb"),
      desc: {
        az: "Alma bağları və Qudyalçay sahilində yerləşən istirahət kompleksi.",
        ru: "Комплекс отдыха среди яблоневых садов на берегу Гудиалчая.",
        en: "Resort among apple orchards on the banks of the Gudyalchay river."
      },
      services: ["Wi-Fi", "Breakfast", "Playground", "Parking"],
      pool: "outdoor",
      kidsClub: true,
      kidsText: { az: "Uşaq meydançası və həftəsonu animasiya", ru: "Детская площадка и анимация по выходным", en: "Playground and weekend entertainment" },
      activities: { spring: ["hiking", "picnic", "horse"], summer: ["rafting", "hiking", "fishing"], autumn: ["fruit", "hiking"], winter: ["sledge", "spa"] },
      rooms: [room("standard", IMG.r8, 26, 2, 110), room("cottage", IMG.r9, 60, 5, 260), room("suite", IMG.r10, 55, 2, 300)],
      restaurant: {
        name: "Alma Bağı",
        img: IMG.rest4,
        cuisine: { az: "Quba mətbəxi", ru: "Губинская кухня", en: "Guba cuisine" },
        dishes: { az: "Quba kababı, qutab, alma mürəbbəsi", ru: "Губинский кебаб, кутабы, яблочное варенье", en: "Guba kebab, qutab, apple jam" }
      }
    },
    {
      id: "lankaran-shore",
      kind: "hotel",
      stars: 4,
      city: "lenkeran",
      name: "Lankaran Shore Resort",
      img: U("photo-1564501049412-61c2a3083791"),
      desc: {
        az: "Xəzər sahilində, çay plantasiyalarına və Hirkan meşələrinə yaxın kurort.",
        ru: "Курорт на берегу Каспия рядом с чайными плантациями и Гирканским лесом.",
        en: "Caspian seaside resort near tea plantations and the Hyrcanian forest."
      },
      services: ["Wi-Fi", "Breakfast", "Beach", "Parking"],
      pool: "outdoor",
      kidsClub: true,
      kidsText: { az: "Uşaq hovuzu və çimərlik oyunları", ru: "Детский бассейн и пляжные игры", en: "Kids' pool and beach games" },
      activities: { spring: ["tea", "birds", "hiking"], summer: ["beach", "boat", "fishing"], autumn: ["tea", "fishing", "fruit"], winter: ["birds", "spa"] },
      rooms: [room("standard", IMG.r1, 24, 2, 90), room("sea", IMG.r2, 30, 2, 130), room("family", IMG.r3, 42, 4, 170)],
      restaurant: {
        name: "Ləvəngi Evi",
        img: IMG.rest6,
        cuisine: { az: "Cənub mətbəxi", ru: "Южная кухня", en: "Southern cuisine" },
        dishes: { az: "Toyuq ləvəngisi, balıq ləvəngisi, Lənkəran kökəsi", ru: "Лявянги из курицы и рыбы, ленкоранская кюкя", en: "Chicken & fish lavangi, Lankaran kökə" }
      }
    },
    {
      id: "goygol-lodge",
      kind: "boutique",
      stars: 3,
      city: "goygol",
      name: "Helenendorf Lodge",
      img: W("b/be/G%C3%B6yg%C3%B6l_%28The_Blue_Lake%29.jpg/960px-G%C3%B6yg%C3%B6l_%28The_Blue_Lake%29.jpg"),
      desc: {
        az: "Tarixi alman evində, Göygöl Milli Parkına yaxın kiçik butik otel.",
        ru: "Небольшой бутик-отель в историческом немецком доме у парка Гёйгёль.",
        en: "Small boutique hotel in a historic German house near Goygol National Park."
      },
      services: ["Wi-Fi", "Breakfast", "Wine cellar", "Garden"],
      pool: "none",
      kidsClub: false,
      activities: { spring: ["hiking", "birds"], summer: ["hiking", "picnic", "boat"], autumn: ["wine", "fruit", "hiking"], winter: ["wine", "city"] },
      rooms: [room("historic", IMG.r5, 22, 2, 85), room("deluxe", IMG.r6, 30, 2, 120)],
      restaurant: {
        name: "Göygöl Bağı",
        img: IMG.rest4,
        cuisine: { az: "Gəncə və alman mətbəxi", ru: "Гянджинская и немецкая кухня", en: "Ganja & German cuisine" },
        dishes: { az: "Gəncə pitisi, yerli şərab, alma strudeli", ru: "Гянджинский пити, местное вино, яблочный штрудель", en: "Ganja piti, local wine, apple strudel" }
      }
    }
  ];

  // data/tours.js
  var vehicles = [
    {
      id: "sedan",
      name: "Sedan",
      model: "Hyundai Elantra",
      min: 1,
      max: 3,
      perDay: 90,
      driverGuide: true,
      img: W("9/96/2017_Hyundai_Elantra_%28AD%29_Elite_sedan_%282017-12-09%29_01.jpg/960px-2017_Hyundai_Elantra_%28AD%29_Elite_sedan_%282017-12-09%29_01.jpg")
    },
    {
      id: "suv",
      name: "SUV",
      model: "Hyundai Santa Fe 2014",
      min: 1,
      max: 4,
      perDay: 120,
      driverGuide: true,
      img: W("d/da/Hyundai_Santa_Fe_DM_China_2014-04-16.jpg/960px-Hyundai_Santa_Fe_DM_China_2014-04-16.jpg")
    },
    {
      id: "vito",
      name: "Minivan",
      model: "Mercedes-Benz Vito",
      min: 1,
      max: 7,
      perDay: 160,
      driverGuide: true,
      img: W("5/5c/MERCEDES-BENZ_VITO_%28W447%29_China.jpg/960px-MERCEDES-BENZ_VITO_%28W447%29_China.jpg")
    },
    {
      id: "sprinter",
      name: "Minibus",
      model: "Mercedes-Benz Sprinter",
      min: 8,
      max: 18,
      perDay: 240,
      driverGuide: false,
      img: W("3/31/Mercedes-Benz_Sprinter_VS30_317_CDI_Black_-_front.jpg/960px-Mercedes-Benz_Sprinter_VS30_317_CDI_Black_-_front.jpg")
    },
    {
      id: "bus",
      name: "Bus",
      model: "Mercedes-Benz Tourismo",
      min: 19,
      max: 49,
      perDay: 420,
      driverGuide: false,
      img: W("6/64/Mercedes-Benz_Tourismo_IC_Bus_Berlin-Sudkreuz_2015.jpg/960px-Mercedes-Benz_Tourismo_IC_Bus_Berlin-Sudkreuz_2015.jpg")
    }
  ];
  var guideLangs = ["ru", "en", "ar", "tr"];
  var driverGuideExtra = { ru: 0, en: 20, ar: 35, tr: 20 };
  var separateGuidePrice = { ru: 80, en: 100, ar: 130, tr: 100 };
  var tours = [
    {
      id: "baku-city",
      group: "baku",
      factor: 0.6,
      duration: { az: "5 saat", ru: "5 часов", en: "5 hours" },
      img: W("8/8b/Old_City_%28Icherisheher%29.jpg/960px-Old_City_%28Icherisheher%29.jpg"),
      name: { az: "Bakı şəhər turu", ru: "Обзорная экскурсия по Баку", en: "Baku city tour" },
      program: {
        az: ["İçərişəhər və Qız qalası", "Şirvanşahlar sarayı", "Dənizkənarı Bulvar", "Dağüstü park və Alov qüllələri", "Heydər Əliyev Mərkəzi (xaricdən)"],
        ru: ["Ичеришехер и Девичья башня", "Дворец Ширваншахов", "Приморский бульвар", "Нагорный парк и Пламенные башни", "Центр Гейдара Алиева (снаружи)"],
        en: ["Old City & Maiden Tower", "Palace of the Shirvanshahs", "Seaside Boulevard", "Highland Park & Flame Towers", "Heydar Aliyev Centre (outside)"]
      }
    },
    {
      id: "baku-night",
      group: "baku",
      factor: 0.5,
      duration: { az: "3–4 saat (19:00-dan)", ru: "3–4 часа (с 19:00)", en: "3–4 hours (from 7 pm)" },
      img: W("2/26/BAKU_AT_NIGHT_.RED_TOWERS.%D7%91%D7%90%D7%A7%D7%95_%D7%91%D7%9C%D7%99%D7%9C%D7%94_%D7%9E%D7%92%D7%93%D7%9C%D7%99%D7%9D_%D7%91%D7%90%D7%93%D7%95%D7%9D.jpg/960px-BAKU_AT_NIGHT_.RED_TOWERS.%D7%91%D7%90%D7%A7%D7%95_%D7%91%D7%9C%D7%99%D7%9C%D7%94_%D7%9E%D7%92%D7%93%D7%9C%D7%99%D7%9D_%D7%91%D7%90%D7%93%D7%95%D7%9D.jpg"),
      name: { az: "Gecə Bakı turu", ru: "Ночной Баку", en: "Baku by night" },
      program: {
        az: ["Alov qüllələrinin işıq şousu", "Dağüstü parkdan gecə panoramı", "Bulvarda gəzinti və Kiçik Venesiya", "Fəvvarələr meydanı və Nizami küçəsi"],
        ru: ["Световое шоу Пламенных башен", "Ночная панорама с Нагорного парка", "Прогулка по бульвару и Маленькая Венеция", "Площадь Фонтанов и улица Низами"],
        en: ["Flame Towers light show", "Night panorama from Highland Park", "Boulevard walk & Little Venice", "Fountain Square & Nizami street"]
      }
    },
    {
      id: "absheron",
      group: "baku",
      factor: 0.7,
      duration: { az: "5–6 saat", ru: "5–6 часов", en: "5–6 hours" },
      img: W("c/c9/General_view_of_Surakhani_Ateshgah7.jpg/960px-General_view_of_Surakhani_Ateshgah7.jpg"),
      name: { az: "Abşeron turu: Atəşgah və Yanardağ", ru: "Абшерон: Атешгях и Янардаг", en: "Absheron: Ateshgah & Yanar Dag" },
      program: {
        az: ["Suraxanı Atəşgah məbədi", "Yanardağ – sönməyən təbii alov", "Mərdəkan qalası", "Abşeron sahilləri"],
        ru: ["Храм огнепоклонников Атешгях", "Янардаг – вечно горящий огонь", "Мардакянская крепость", "Побережье Абшерона"],
        en: ["Surakhani Ateshgah fire temple", "Yanar Dag – the eternal flame", "Mardakan fortress", "Absheron coastline"]
      }
    },
    {
      id: "gobustan",
      group: "baku",
      factor: 0.7,
      duration: { az: "5–6 saat", ru: "5–6 часов", en: "5–6 hours" },
      img: W("0/04/Petroglyphs_in_Gobustan_09.jpg/960px-Petroglyphs_in_Gobustan_09.jpg"),
      name: { az: "Qobustan və palçıq vulkanları", ru: "Гобустан и грязевые вулканы", en: "Gobustan & mud volcanoes" },
      program: {
        az: ["Bibiheybət məscidi", "Qobustan qayaüstü rəsmləri (UNESCO)", "Qobustan muzeyi", "Palçıq vulkanları (yolsuzluq avtomobili ilə)"],
        ru: ["Мечеть Биби-Эйбат", "Петроглифы Гобустана (ЮНЕСКО)", "Музей Гобустана", "Грязевые вулканы (на внедорожнике)"],
        en: ["Bibi-Heybat mosque", "Gobustan petroglyphs (UNESCO)", "Gobustan museum", "Mud volcanoes (by off-road car)"]
      }
    },
    {
      id: "gabala",
      group: "region",
      factor: 1.3,
      duration: { az: "1 gün (10–11 saat)", ru: "1 день (10–11 часов)", en: "1 day (10–11 hours)" },
      img: W("5/57/Nohur_Lake%2C_Gabala.jpg/960px-Nohur_Lake%2C_Gabala.jpg"),
      name: { az: "Şamaxı – Qəbələ turu", ru: "Шамахы – Габала", en: "Shamakhi – Gabala tour" },
      program: {
        az: ["Şamaxı Cümə məscidi", "Diri Baba türbəsi", "Tufandağ kanat yolu", "Nohur gölü", "Yeddi Gözəl şəlaləsi"],
        ru: ["Пятничная мечеть Шамахы", "Мавзолей Дири Баба", "Канатная дорога Туфандаг", "Озеро Нохур", "Водопад Едди Гёзель"],
        en: ["Shamakhi Juma mosque", "Diri Baba mausoleum", "Tufandag cable car", "Nohur lake", "Seven Beauties waterfall"]
      }
    },
    {
      id: "sheki",
      group: "region",
      factor: 2.2,
      duration: { az: "2 gün", ru: "2 дня", en: "2 days" },
      img: W("c/c4/Sheki_Khan_Palace_-_panoramio.jpg/960px-Sheki_Khan_Palace_-_panoramio.jpg"),
      name: { az: "Qəbələ – Şəki turu", ru: "Габала – Шеки", en: "Gabala – Sheki tour" },
      program: {
        az: ["1-ci gün: Şamaxı, Qəbələ, Nohur gölü", "2-ci gün: Şəki Xan sarayı, Karvansaray, Kiş alban məbədi"],
        ru: ["1 день: Шамахы, Габала, озеро Нохур", "2 день: Дворец шекинских ханов, Караван-сарай, албанский храм Киш"],
        en: ["Day 1: Shamakhi, Gabala, Nohur lake", "Day 2: Sheki Khan Palace, Caravanserai, Kish Albanian church"]
      }
    },
    {
      id: "quba",
      group: "region",
      factor: 1.3,
      duration: { az: "1 gün", ru: "1 день", en: "1 day" },
      img: W("2/2e/Children_playing_in_Khinalig%2C_Azerbaijan.jpg/960px-Children_playing_in_Khinalig%2C_Azerbaijan.jpg"),
      name: { az: "Quba – Xınalıq turu", ru: "Губа – Хыналыг", en: "Guba – Khinalug tour" },
      program: {
        az: ["Beşbarmaq dağı", "Quba və Qırmızı Qəsəbə", "Qudyalçay kanyonu", "Xınalıq kəndi"],
        ru: ["Гора Бешбармаг", "Губа и Красная Слобода", "Каньон Гудиалчай", "Село Хыналыг"],
        en: ["Beshbarmag mountain", "Guba & Red Village", "Gudyalchay canyon", "Khinalug village"]
      }
    },
    {
      id: "shahdag",
      group: "region",
      factor: 1.2,
      duration: { az: "1 gün", ru: "1 день", en: "1 day" },
      img: W("1/18/Shahdag_Mountain_Resort%2C_2025_views_%2880752%29.jpg/960px-Shahdag_Mountain_Resort%2C_2025_views_%2880752%29.jpg"),
      name: { az: "Şahdağ və Laza turu", ru: "Шахдаг и Лаза", en: "Shahdag & Laza tour" },
      program: {
        az: ["Şahdağ turizm kompleksi və kanat yolu", "Qışda xizək, yayda velosiped", "Laza kəndi və şəlalələri"],
        ru: ["Комплекс Шахдаг и канатная дорога", "Зимой лыжи, летом велосипед", "Село Лаза и водопады"],
        en: ["Shahdag resort & cable car", "Skiing in winter, cycling in summer", "Laza village & waterfalls"]
      }
    },
    {
      id: "lahic",
      group: "region",
      factor: 1.1,
      duration: { az: "1 gün", ru: "1 день", en: "1 day" },
      img: W("f/f8/Lahij._Shop.jpg/960px-Lahij._Shop.jpg"),
      name: { az: "İsmayıllı – Lahıc turu", ru: "Исмаиллы – Лагич", en: "Ismayilli – Lahij tour" },
      program: {
        az: ["Lahıc misgərlər küçəsi", "Girdimançay dərəsi", "İsmayıllı şərab zavodunda dequstasiya"],
        ru: ["Улица медников в Лагиче", "Ущелье Гирдыманчай", "Дегустация на винзаводе Исмаиллы"],
        en: ["Lahij coppersmiths' street", "Girdimanchay gorge", "Wine tasting in Ismayilli"]
      }
    },
    {
      id: "lankaran",
      group: "region",
      factor: 2.2,
      duration: { az: "2 gün", ru: "2 дня", en: "2 days" },
      img: U("photo-1448375240586-882707db888b"),
      name: { az: "Lənkəran – Astara cənub turu", ru: "Юг: Ленкорань – Астара", en: "South: Lankaran – Astara" },
      program: {
        az: ["1-ci gün: Lənkəran qalası, çay plantasiyası, ləvəngi şam yeməyi", "2-ci gün: Hirkan Milli Parkı, Xanbulan gölü, İstisu"],
        ru: ["1 день: Ленкоранская крепость, чайная плантация, ужин лявянги", "2 день: Гирканский парк, озеро Ханбулан, Истису"],
        en: ["Day 1: Lankaran fortress, tea plantation, lavangi dinner", "Day 2: Hyrcanian park, Khanbulan lake, Istisu"]
      }
    },
    {
      id: "nabran",
      group: "region",
      factor: 1.3,
      duration: { az: "1 gün", ru: "1 день", en: "1 day" },
      img: W("4/46/Beach_of_Nabran.jpg/960px-Beach_of_Nabran.jpg"),
      name: { az: "Beşbarmaq – Nabran sahil turu", ru: "Бешбармаг – пляжи Набрани", en: "Beshbarmag – Nabran beach tour" },
      program: {
        az: ["Beşbarmaq dağı", "Çıraqqala qalası (mənzərə)", "Nabran meşəli çimərliyi", "Samur-Yalama Milli Parkı"],
        ru: ["Гора Бешбармаг", "Крепость Чирагкала (обзор)", "Лесной пляж Набрани", "Национальный парк Самур-Ялама"],
        en: ["Beshbarmag mountain", "Chiraggala fortress (viewpoint)", "Nabran forest beach", "Samur-Yalama National Park"]
      }
    },
    {
      id: "goygol",
      group: "region",
      factor: 2.5,
      duration: { az: "2 gün", ru: "2 дня", en: "2 days" },
      img: W("2/29/G%C3%B6yg%C3%B6l_lake_in_Azerbaijan.jpg/960px-G%C3%B6yg%C3%B6l_lake_in_Azerbaijan.jpg"),
      name: { az: "Gəncə – Göygöl turu", ru: "Гянджа – Гёйгёль", en: "Ganja – Goygol tour" },
      program: {
        az: ["1-ci gün: Gəncə, Nizami məqbərəsi, Butulka evi", "2-ci gün: Göygöl, Maralgöl, Helenendorf"],
        ru: ["1 день: Гянджа, мавзолей Низами, Бутылочный дом", "2 день: Гёйгёль, Маралгёль, Еленендорф"],
        en: ["Day 1: Ganja, Nizami mausoleum, Bottle House", "Day 2: Goygol, Maralgol, Helenendorf"]
      }
    }
  ];
  function tourPrice(tour, vehicle, lang) {
    const car = vehicle.perDay * tour.factor;
    const guide = vehicle.driverGuide ? driverGuideExtra[lang] * tour.factor : separateGuidePrice[lang] * Math.max(0.5, tour.factor);
    return { car: Math.round(car), guide: Math.round(guide), total: Math.round(car + guide) };
  }

  // data/restaurants.js
  var restaurants = [
    {
      id: "r-baku-1",
      city: "baku",
      name: "Şirvanşah Süfrəsi",
      avg: 45,
      rating: 4.8,
      img: U("photo-1517248135467-4c7edcad34c4"),
      cuisine: { az: "Ənənəvi Azərbaycan", ru: "Традиционная азербайджанская", en: "Traditional Azerbaijani" },
      dishes: { az: "Şah plov, dolma, düşbərə", ru: "Шах-плов, долма, дюшбара", en: "Shah plov, dolma, dushbara" }
    },
    {
      id: "r-baku-2",
      city: "baku",
      name: "Bulvar Balıq Evi",
      avg: 60,
      rating: 4.6,
      img: U("photo-1414235077428-338989a2e8c0"),
      cuisine: { az: "Xəzər balıq mətbəxi", ru: "Каспийская рыбная кухня", en: "Caspian seafood" },
      dishes: { az: "Nərə kababı, kütüm, balıq ləvəngisi", ru: "Кебаб из осетра, кутум, рыбное лявянги", en: "Sturgeon kebab, kutum, fish lavangi" }
    },
    {
      id: "r-baku-3",
      city: "baku",
      name: "Qutab Evi",
      avg: 15,
      rating: 4.7,
      img: W("e/e2/Qutab_pi%C5%9F%C9%99nd%C9%99n_sonra.jpg/960px-Qutab_pi%C5%9F%C9%99nd%C9%99n_sonra.jpg"),
      cuisine: { az: "Küçə yeməkləri", ru: "Уличная еда", en: "Street food" },
      dishes: { az: "Göy qutabı, ət qutabı, ayran", ru: "Кутабы с зеленью и мясом, айран", en: "Herb & meat qutab, ayran" }
    },
    {
      id: "r-seki-1",
      city: "seki",
      name: "Karvansaray Piti",
      avg: 20,
      rating: 4.9,
      img: U("photo-1555396273-367ea4eb4db5"),
      cuisine: { az: "Şəki mətbəxi", ru: "Шекинская кухня", en: "Sheki cuisine" },
      dishes: { az: "Şəki pitisi, Şəki halvası, çay", ru: "Шекинский пити, халва, чай", en: "Sheki piti, halva, tea" }
    },
    {
      id: "r-quba-1",
      city: "quba",
      name: "Təngəaltı Manqal",
      avg: 30,
      rating: 4.6,
      img: U("photo-1559339352-11d035aa65de"),
      cuisine: { az: "Manqal və Quba mətbəxi", ru: "Мангал и губинская кухня", en: "BBQ & Guba cuisine" },
      dishes: { az: "Quba kababı, Quba qutabı, alma şirəsi", ru: "Губинский кебаб, кутабы, яблочный сок", en: "Guba kebab, qutab, apple juice" }
    },
    {
      id: "r-lenk-1",
      city: "lenkeran",
      name: "Cənub Ocağı",
      avg: 25,
      rating: 4.8,
      img: U("photo-1466978913421-dad2ebd01d17"),
      cuisine: { az: "Talış mətbəxi", ru: "Талышская кухня", en: "Talysh cuisine" },
      dishes: { az: "Toyuq ləvəngisi, turşu-qovurma, plov", ru: "Лявянги, турш-говурма, плов", en: "Chicken lavangi, turshu-govurma, plov" }
    },
    {
      id: "r-ism-1",
      city: "ismayilli",
      name: "Lahıc Kənd Süfrəsi",
      avg: 20,
      rating: 4.7,
      img: U("photo-1544148103-0773bf10d330"),
      cuisine: { az: "Dağ kəndi yeməkləri", ru: "Блюда горного села", en: "Mountain village food" },
      dishes: { az: "Dovğa, kətə, Lahıc balı", ru: "Довга, кета, лагичский мёд", en: "Dovga, kata, Lahij honey" }
    },
    {
      id: "r-sam-1",
      city: "samaxi",
      name: "Şamaxı Şərab Evi",
      avg: 40,
      rating: 4.5,
      img: U("photo-1424847651672-bf20a4b0982b"),
      cuisine: { az: "Şirvan mətbəxi və şərab", ru: "Ширванская кухня и вино", en: "Shirvan cuisine & wine" },
      dishes: { az: "Şamaxı bozbaşı, quzu kababı, Mədrəsə şərabı", ru: "Шамахинский бозбаш, шашлык, вино Медресе", en: "Shamakhi bozbash, lamb kebab, Madrasa wine" }
    },
    {
      id: "r-gence-1",
      city: "gence",
      name: "Nizami Bağı",
      avg: 25,
      rating: 4.6,
      img: U("photo-1552566626-52f8b828add9"),
      cuisine: { az: "Gəncə mətbəxi", ru: "Гянджинская кухня", en: "Ganja cuisine" },
      dishes: { az: "Gəncə pitisi, Gəncə kətəsi, nar şərabı", ru: "Гянджинский пити, кета, гранатовое вино", en: "Ganja piti, kata, pomegranate wine" }
    }
  ];
  var regionalDishes = [
    {
      city: "baku",
      img: W("e/ec/Azerbaijani_plov.JPG/960px-Azerbaijani_plov.JPG"),
      dish: { az: "Şah plov", ru: "Шах-плов", en: "Shah plov" },
      about: { az: "Lavaş qabıq içində bişən, qurudulmuş meyvə və ətlə zəngin bayram plovu.", ru: "Праздничный плов с мясом и сухофруктами, запечённый в лаваше.", en: "Festive plov with meat and dried fruit baked inside a lavash crust." },
      best: "r-baku-1"
    },
    {
      city: "baku",
      img: W("8/8a/Azerbaijan_dolma_ubergine_pepper.jpg/960px-Azerbaijan_dolma_ubergine_pepper.jpg"),
      dish: { az: "Dolma", ru: "Долма", en: "Dolma" },
      about: { az: "UNESCO-nun qeyri-maddi irs siyahısındakı yarpaq və tərəvəz dolması.", ru: "Долма из листьев и овощей – нематериальное наследие ЮНЕСКО.", en: "Vine-leaf and vegetable dolma – on UNESCO's intangible heritage list." },
      best: "r-baku-1"
    },
    {
      city: "seki",
      img: U("photo-1547592180-85f173990554"),
      dish: { az: "Şəki pitisi", ru: "Шекинский пити", en: "Sheki piti" },
      about: { az: "Saxsı qabda, ocaqda saatlarla bişən quzu əti və noxud şorbası.", ru: "Суп из баранины и нута, часами томящийся в глиняном горшочке.", en: "Lamb and chickpea stew slow-cooked for hours in a clay pot." },
      best: "r-seki-1"
    },
    {
      city: "seki",
      img: W("b/ba/Shekpakhlava_01.jpg/960px-Shekpakhlava_01.jpg"),
      dish: { az: "Şəki halvası", ru: "Шекинская халва", en: "Sheki halva" },
      about: { az: "Düyü unundan tor və bal-qoz qatlarından hazırlanan məşhur şirniyyat.", ru: "Знаменитая сладость из сетки рисовой муки, мёда и орехов.", en: "Famous sweet of rice-flour lattice filled with honey and nuts." },
      best: "sheki-saray"
    },
    {
      city: "lenkeran",
      img: W("0/08/L%C9%99v%C9%99ngi.JPG/960px-L%C9%99v%C9%99ngi.JPG"),
      dish: { az: "Ləvəngi", ru: "Лявянги", en: "Lavangi" },
      about: { az: "Qoz, soğan və alça turşusu ilə doldurulub təndirdə bişən toyuq və ya balıq.", ru: "Курица или рыба, фаршированная орехами, луком и алычой, запечённая в тандыре.", en: "Chicken or fish stuffed with walnuts, onion and plum paste, baked in a tandoor." },
      best: "r-lenk-1"
    },
    {
      city: "quba",
      img: W("c/c2/Azeri_kebab_e-citizen.JPG/960px-Azeri_kebab_e-citizen.JPG"),
      dish: { az: "Quba kababı və qutabı", ru: "Губинский кебаб и кутабы", en: "Guba kebab & qutab" },
      about: { az: "Dağ quzusundan kabab və nazik xəmirdə ət qutabı.", ru: "Кебаб из горного ягнёнка и тонкие кутабы с мясом.", en: "Mountain lamb kebab and thin meat-filled qutab." },
      best: "r-quba-1"
    },
    {
      city: "qebele",
      img: U("photo-1603360946369-dc9bb6258143"),
      dish: { az: "Çığırtma", ru: "Чигиртма", en: "Chighirtma" },
      about: { az: "Yumurta, pomidor və toyuqla hazırlanan Şimal-qərb yeməyi.", ru: "Блюдо северо-запада из курицы, яиц и помидоров.", en: "North-western dish of chicken, eggs and tomatoes." },
      best: "tufan-resort"
    },
    {
      city: "ismayilli",
      img: W("d/dc/Azerbaijani_dov%C4%9Fa_1.JPG/960px-Azerbaijani_dov%C4%9Fa_1.JPG"),
      dish: { az: "Dovğa", ru: "Довга", en: "Dovga" },
      about: { az: "Qatıq və göyərti ilə hazırlanan, yayda soyuq, qışda isti içilən şorba.", ru: "Суп из катыка и зелени – летом холодный, зимой горячий.", en: "Yoghurt and herb soup – served cold in summer, warm in winter." },
      best: "r-ism-1"
    },
    {
      city: "gence",
      img: U("photo-1604908176997-125f25cc6f3d"),
      dish: { az: "Gəncə pitisi", ru: "Гянджинский пити", en: "Ganja piti" },
      about: { az: "Şəki pitisindən fərqli olaraq şabalıd və alça ilə hazırlanan variant.", ru: "В отличие от шекинского – готовится с каштанами и алычой.", en: "Unlike the Sheki version, cooked with chestnuts and sour plums." },
      best: "r-gence-1"
    }
  ];
  var seasonalFood = {
    spring: { icon: "🌱", az: "Novruz şirniyyatları (şəkərbura, paxlava, qoğal), göy qutabı, kükü, səbzi qovurma", ru: "Новрузские сладости (шекербура, пахлава, гогал), кутабы с зеленью, кюкю, сабзи-говурма", en: "Novruz sweets (shekerbura, pakhlava, gogal), herb qutab, kuku, sabzi govurma" },
    summer: { icon: "☀️", az: "Soyuq dovğa, kabablar, tərəvəz dolması, şərbət, qarpız", ru: "Холодная довга, кебабы, овощная долма, шербет, арбуз", en: "Cold dovga, kebabs, vegetable dolma, sherbet, watermelon" },
    autumn: { icon: "🍂", az: "Nar və narşərab, ayva dolması, balıq (kütüm), plov növləri", ru: "Гранат и наршараб, долма из айвы, рыба (кутум), разные пловы", en: "Pomegranate & narsharab, quince dolma, kutum fish, all kinds of plov" },
    winter: { icon: "❄️", az: "Xaş, piti, kələm dolması, bozbaş, xəşil, isti çay ilə mürəbbə", ru: "Хаш, пити, капустная долма, бозбаш, хашил, чай с вареньем", en: "Khash, piti, cabbage dolma, bozbash, khashil, tea with jam" }
  };

  // components/cards.jsx
  function HotelCard({ h }) {
    const { t, L, city } = useLang();
    const minPrice = Math.min(...h.rooms.map((r) => r.price));
    return /* @__PURE__ */ React.createElement("a", { href: `#/hotel/${h.id}`, className: "card" }, /* @__PURE__ */ React.createElement("div", { className: "card-img" }, /* @__PURE__ */ React.createElement(Img, { src: h.img, alt: h.name }), /* @__PURE__ */ React.createElement("span", { className: `tag ${h.kind === "boutique" ? "tag-gold" : ""}` }, h.kind === "boutique" ? t.boutique : t.hotel)), /* @__PURE__ */ React.createElement("div", { className: "card-body" }, /* @__PURE__ */ React.createElement("div", { className: "card-top" }, /* @__PURE__ */ React.createElement(Stars, { n: h.stars }), /* @__PURE__ */ React.createElement("span", { className: "muted small" }, "📍 ", city(h.city))), /* @__PURE__ */ React.createElement("h3", null, h.name), /* @__PURE__ */ React.createElement("p", { className: "muted clamp" }, L(h.desc)), /* @__PURE__ */ React.createElement("div", { className: "mini-icons" }, h.pool !== "none" && /* @__PURE__ */ React.createElement("span", { title: t.pool }, "🏊"), h.kidsClub && /* @__PURE__ */ React.createElement("span", { title: t.kidsClub }, "🧸"), /* @__PURE__ */ React.createElement("span", { title: t.restaurant }, "🍽️")), /* @__PURE__ */ React.createElement("div", { className: "card-foot" }, /* @__PURE__ */ React.createElement("div", { className: "price" }, azn(minPrice), " ", /* @__PURE__ */ React.createElement("small", null, "/ ", t.perNight)), /* @__PURE__ */ React.createElement("span", { className: "link-arrow" }, t.more, " →"))));
  }
  function TourCard({ tour, price }) {
    const { t, L } = useLang();
    return /* @__PURE__ */ React.createElement("a", { href: `#/tours?tour=${tour.id}`, className: "card" }, /* @__PURE__ */ React.createElement("div", { className: "card-img" }, /* @__PURE__ */ React.createElement(Img, { src: tour.img, alt: L(tour.name) }), /* @__PURE__ */ React.createElement("span", { className: "tag" }, "⏱ ", L(tour.duration))), /* @__PURE__ */ React.createElement("div", { className: "card-body" }, /* @__PURE__ */ React.createElement("h3", null, L(tour.name)), /* @__PURE__ */ React.createElement("p", { className: "muted clamp" }, L(tour.program).join(" · ")), /* @__PURE__ */ React.createElement("div", { className: "card-foot" }, /* @__PURE__ */ React.createElement("div", { className: "price" }, azn(price), " ", /* @__PURE__ */ React.createElement("small", null, t.from)), /* @__PURE__ */ React.createElement("span", { className: "link-arrow" }, t.more, " →"))));
  }

  // pages/Home.jsx
  var HERO_IMG = W("b/bf/Shahdag_Mountain_Resort%2C_2025_views_%2891157%29.jpg/960px-Shahdag_Mountain_Resort%2C_2025_views_%2891157%29.jpg");
  var CATS = [
    { id: "hotels", icon: "🏨", img: W("2/2e/Flame_towers_from_Baku_boulevard.JPG/960px-Flame_towers_from_Baku_boulevard.JPG") },
    { id: "guesthouses", icon: "🏡", img: W("b/b7/Lahij._Balcony.jpg/960px-Lahij._Balcony.jpg") },
    { id: "sanatoriums", icon: "♨️", img: U("photo-1544161515-4ab6ce6db874") },
    { id: "restaurants", icon: "🍽️", img: W("e/ec/Azerbaijani_plov.JPG/960px-Azerbaijani_plov.JPG") },
    { id: "tours", icon: "🚐", img: W("0/04/Petroglyphs_in_Gobustan_09.jpg/960px-Petroglyphs_in_Gobustan_09.jpg") },
    { id: "esim", icon: "📶", img: U("photo-1512941937669-90a1b58e7e9c") }
  ];
  function Home() {
    const { t, L, lang } = useLang();
    const [cat, setCat] = useState("hotels");
    const [cityId, setCityId] = useState("");
    const go = (e) => {
      e.preventDefault();
      window.location.hash = `#/${cat}${cityId ? `?city=${cityId}` : ""}`;
    };
    const season = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"][(/* @__PURE__ */ new Date()).getMonth()];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { className: "hero", style: { "--bg": `url("${HERO_IMG}")` } }, /* @__PURE__ */ React.createElement("div", { className: "container hero-inner" }, /* @__PURE__ */ React.createElement("h1", null, t.heroTitle), /* @__PURE__ */ React.createElement("p", null, t.heroText), /* @__PURE__ */ React.createElement("form", { className: "search-box", onSubmit: go }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", null, t.category), /* @__PURE__ */ React.createElement("select", { value: cat, onChange: (e) => setCat(e.target.value) }, ["hotels", "guesthouses", "sanatoriums", "restaurants"].map((c) => /* @__PURE__ */ React.createElement("option", { key: c, value: c }, t.nav[c])))), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", null, t.where), /* @__PURE__ */ React.createElement("select", { value: cityId, onChange: (e) => setCityId(e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, t.allCities), Object.keys(CITIES).map((c) => /* @__PURE__ */ React.createElement("option", { key: c, value: c }, L(CITIES[c]))))), /* @__PURE__ */ React.createElement("button", { className: "btn" }, "🔍 ", t.search)))), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, t.categories), /* @__PURE__ */ React.createElement("div", { className: "grid" }, CATS.map((c) => /* @__PURE__ */ React.createElement("a", { key: c.id, href: `#/${c.id}`, className: "cat" }, /* @__PURE__ */ React.createElement(Img, { src: c.img, alt: t.nav[c.id] }), /* @__PURE__ */ React.createElement("div", { className: "cat-overlay" }, /* @__PURE__ */ React.createElement("span", { className: "cat-icon" }, c.icon), /* @__PURE__ */ React.createElement("h3", null, t.nav[c.id]), /* @__PURE__ */ React.createElement("p", null, t.catText[c.id])))))), /* @__PURE__ */ React.createElement("section", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "esim-promo" }, /* @__PURE__ */ React.createElement("div", { className: "esim-promo-icon" }, "📲"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, t.esimPromoTitle), /* @__PURE__ */ React.createElement("p", null, t.esimPromoText)), /* @__PURE__ */ React.createElement("a", { href: "#/esim", className: "btn light" }, "eSIM →"))), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, t.featuredHotels), /* @__PURE__ */ React.createElement("div", { className: "grid" }, hotels.slice(0, 3).map((h) => /* @__PURE__ */ React.createElement(HotelCard, { key: h.id, h }))), /* @__PURE__ */ React.createElement("div", { className: "section-foot" }, /* @__PURE__ */ React.createElement("a", { href: "#/hotels", className: "btn ghost" }, t.seeAll, " →"))), /* @__PURE__ */ React.createElement("section", { className: "section alt" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, t.popularTours), /* @__PURE__ */ React.createElement("div", { className: "grid cols-4" }, tours.slice(0, 4).map((tour) => /* @__PURE__ */ React.createElement(TourCard, { key: tour.id, tour, price: tourPrice(tour, vehicles[0], "ru").total }))), /* @__PURE__ */ React.createElement("div", { className: "section-foot" }, /* @__PURE__ */ React.createElement("a", { href: "#/tours", className: "btn ghost" }, t.seeAll, " →")))), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("div", { className: "season-banner" }, /* @__PURE__ */ React.createElement("span", { className: "season-icon" }, seasonalFood[season].icon), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, t.seasonalFood, " · ", t.seasons[season]), /* @__PURE__ */ React.createElement("p", null, seasonalFood[season][lang])), /* @__PURE__ */ React.createElement("a", { href: "#/restaurants", className: "link-arrow" }, t.nav.restaurants, " →"))));
  }

  // pages/query.js
  var getQuery = (key) => new URLSearchParams(window.location.hash.split("?")[1] || "").get(key);

  // pages/Hotels.jsx
  function Hotels() {
    const { t, city } = useLang();
    const [kind, setKind] = useState("all");
    const [cityId, setCityId] = useState(() => getQuery("city") || "all");
    const [stars, setStars] = useState(0);
    const cities = [...new Set(hotels.map((h) => h.city))];
    const list = hotels.filter((h) => (kind === "all" || h.kind === kind) && (cityId === "all" || h.city === cityId) && h.stars >= stars);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageHead, { title: t.nav.hotels, text: t.catText.hotels, img: hotels[0].img }), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("div", { className: "filters" }, /* @__PURE__ */ React.createElement(Chips, { value: kind, onChange: setKind, options: [["all", t.all], ["hotel", t.hotel], ["boutique", t.boutique]] }), /* @__PURE__ */ React.createElement("div", { className: "filter-selects" }, /* @__PURE__ */ React.createElement("select", { value: cityId, onChange: (e) => setCityId(e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "all" }, t.allCities), cities.map((c) => /* @__PURE__ */ React.createElement("option", { key: c, value: c }, city(c)))), /* @__PURE__ */ React.createElement("select", { value: stars, onChange: (e) => setStars(+e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: 0 }, "★ ", t.all), [3, 4, 5].map((s) => /* @__PURE__ */ React.createElement("option", { key: s, value: s }, "★".repeat(s), "+"))))), /* @__PURE__ */ React.createElement("div", { className: "grid" }, list.map((h) => /* @__PURE__ */ React.createElement(HotelCard, { key: h.id, h }))), !list.length && /* @__PURE__ */ React.createElement("p", { className: "muted" }, t.nothing)));
  }

  // pages/HotelDetail.jsx
  var colsFor = (n) => n >= 4 ? "cols-4" : n === 2 ? "cols-2" : "";
  function HotelDetail({ id }) {
    const { t, L, city } = useLang();
    const { openBooking } = useApp();
    const h = hotels.find((x) => x.id === id);
    if (!h) return /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("p", null, t.nothing), /* @__PURE__ */ React.createElement("a", { href: "#/hotels" }, t.back));
    const minPrice = Math.min(...h.rooms.map((r) => r.price));
    const book = (r) => openBooking({
      kind: h.kind === "boutique" ? t.boutique : t.hotel,
      title: `${h.name} – ${L(r.name)}`,
      subtitle: `${city(h.city)} · ${azn(r.price)} / ${t.perNight}`,
      img: r.img,
      price: r.price,
      mode: "night",
      maxGuests: r.guests
    });
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { className: "detail-hero", style: { "--bg": `url("${h.img}")` } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("a", { href: "#/hotels", className: "back" }, t.back), /* @__PURE__ */ React.createElement("span", { className: "tag tag-gold" }, h.kind === "boutique" ? t.boutique : t.hotel), /* @__PURE__ */ React.createElement("h1", null, h.name), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Stars, { n: h.stars }), " · ", h.stars, " ", t.stars, " · 📍 ", city(h.city)))), /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "summary-bar" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "sb-icon" }, "⭐"), /* @__PURE__ */ React.createElement("b", null, h.stars, " ", t.stars), /* @__PURE__ */ React.createElement("span", { className: "muted small" }, h.kind === "boutique" ? t.boutique : t.hotel)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "sb-icon" }, "🏊"), /* @__PURE__ */ React.createElement("b", null, t.pool), /* @__PURE__ */ React.createElement("span", { className: "muted small" }, t.poolTypes[h.pool])), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "sb-icon" }, "🧸"), /* @__PURE__ */ React.createElement("b", null, t.kidsClub), /* @__PURE__ */ React.createElement("span", { className: "muted small" }, h.kidsClub ? t.yes : t.no)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "price" }, azn(minPrice), " ", /* @__PURE__ */ React.createElement("small", null, "/ ", t.perNight)), /* @__PURE__ */ React.createElement("button", { className: "btn sm", onClick: () => book(h.rooms[0]) }, t.book)))), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("p", { className: "lead" }, L(h.desc)), /* @__PURE__ */ React.createElement("h2", { className: "section-title mt" }, t.services), /* @__PURE__ */ React.createElement("div", { className: "pill-list center" }, h.services.map((s) => /* @__PURE__ */ React.createElement(Service, { key: s, id: s }))), /* @__PURE__ */ React.createElement("div", { className: "facility-row", style: { marginTop: 40 } }, /* @__PURE__ */ React.createElement("div", { className: "facility" }, /* @__PURE__ */ React.createElement("span", { className: "facility-icon" }, "🏊"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, t.pool), /* @__PURE__ */ React.createElement("p", { className: "muted" }, t.poolTypes[h.pool]))), /* @__PURE__ */ React.createElement("div", { className: "facility" }, /* @__PURE__ */ React.createElement("span", { className: "facility-icon" }, "🧸"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, t.kidsClub), /* @__PURE__ */ React.createElement("p", { className: "muted" }, h.kidsClub ? L(h.kidsText) : t.no))))), /* @__PURE__ */ React.createElement("section", { className: "section alt" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, t.activitiesBySeason), /* @__PURE__ */ React.createElement("div", { className: "grid cols-4" }, Object.entries(h.activities).map(([s, acts]) => /* @__PURE__ */ React.createElement("div", { key: s, className: `season season-${s}` }, /* @__PURE__ */ React.createElement("h4", null, t.seasons[s]), /* @__PURE__ */ React.createElement("div", { className: "pill-list" }, acts.map((a) => /* @__PURE__ */ React.createElement(Activity, { key: a, id: a })))))))), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, t.rooms), /* @__PURE__ */ React.createElement("div", { className: `grid ${colsFor(h.rooms.length)}` }, h.rooms.map((r) => /* @__PURE__ */ React.createElement("div", { key: r.type, className: "room" }, /* @__PURE__ */ React.createElement(Img, { src: r.img, alt: L(r.name) }), /* @__PURE__ */ React.createElement("div", { className: "room-body" }, /* @__PURE__ */ React.createElement("h4", null, L(r.name)), /* @__PURE__ */ React.createElement("div", { className: "meta" }, /* @__PURE__ */ React.createElement("span", null, "📐 ", r.size, " m²"), /* @__PURE__ */ React.createElement("span", null, "👤 ", r.guests)), /* @__PURE__ */ React.createElement("div", { className: "room-foot" }, /* @__PURE__ */ React.createElement("div", { className: "price" }, azn(r.price), " ", /* @__PURE__ */ React.createElement("small", null, "/ ", t.perNight)), /* @__PURE__ */ React.createElement("button", { className: "btn sm", onClick: () => book(r) }, t.book)))))), /* @__PURE__ */ React.createElement("h2", { className: "section-title mt" }, t.restaurant), /* @__PURE__ */ React.createElement("div", { className: "hotel-rest" }, /* @__PURE__ */ React.createElement(Img, { src: h.restaurant.img, alt: h.restaurant.name }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, h.restaurant.name), /* @__PURE__ */ React.createElement("p", { className: "muted" }, t.cuisine, ": ", L(h.restaurant.cuisine)), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, t.signature, ":"), " ", L(h.restaurant.dishes)), /* @__PURE__ */ React.createElement("p", { className: "muted small" }, "💳 ", t.paymentNote)))));
  }

  // data/guesthouses.js
  var guesthouses = [
    {
      id: "lahic-ev",
      city: "ismayilli",
      rooms: 4,
      maxGuests: 10,
      priceRoom: 50,
      priceHouse: 180,
      pool: false,
      name: "Lahıc Misgər Evi",
      img: W("b/b7/Lahij._Balcony.jpg/960px-Lahij._Balcony.jpg"),
      place: { az: "Lahıc kəndi, Girdimançay sahili", ru: "Село Лагич, берег Гирдыманчая", en: "Lahij village, Girdimanchay riverside" },
      desc: { az: "Daş evdə ailəvi qonaqpərvərlik, misgər emalatxanalarına piyada məsafə.", ru: "Семейное гостеприимство в каменном доме рядом с мастерскими медников.", en: "Family hospitality in a stone house, walking distance to coppersmith workshops." },
      services: ["Home meals", "Wi-Fi", "Fireplace", "Garden"],
      activities: ["craft", "hiking", "horse", "picnic"]
    },
    {
      id: "xinaliq-ev",
      city: "quba",
      rooms: 3,
      maxGuests: 8,
      priceRoom: 40,
      priceHouse: 110,
      pool: false,
      name: "Xınalıq Dağ Evi",
      img: W("f/f5/Khinalug_village_in_winter.jpg/960px-Khinalug_village_in_winter.jpg"),
      place: { az: "Xınalıq kəndi, dəniz səviyyəsindən 2300 m", ru: "Село Хыналыг, 2300 м над уровнем моря", en: "Khinalug village, 2,300 m above sea level" },
      desc: { az: "Dünyanın ən qədim kəndlərindən birində sadə, isti və səmimi ev.", ru: "Простой, тёплый дом в одном из древнейших сёл мира.", en: "A simple, warm home in one of the oldest villages in the world." },
      services: ["Home meals", "Fireplace"],
      activities: ["hiking", "horse", "craft"]
    },
    {
      id: "qebele-villa",
      city: "qebele",
      rooms: 5,
      maxGuests: 12,
      priceRoom: 70,
      priceHouse: 300,
      pool: true,
      name: "Vəndam Bağ Villası",
      img: U("photo-1510798831971-661eb04b3739"),
      place: { az: "Vəndam kəndi, Qəbələ yolu üzərində", ru: "Село Вандам, по дороге в Габалу", en: "Vandam village, on the Gabala road" },
      desc: { az: "Hovuzlu, manqallı və geniş bağlı villa – böyük ailələr üçün.", ru: "Вилла с бассейном, мангалом и большим садом – для больших семей.", en: "Villa with pool, BBQ and a large garden – great for big families." },
      services: ["Kitchen", "BBQ", "Wi-Fi", "Parking", "Sauna"],
      activities: ["zipline", "cable", "fruit", "picnic"]
    },
    {
      id: "seki-karvan-ev",
      city: "seki",
      rooms: 4,
      maxGuests: 9,
      priceRoom: 45,
      priceHouse: 160,
      pool: true,
      name: "Marxal Bağ Evi",
      img: U("photo-1449158743715-0a90ebb6d2d8"),
      place: { az: "Şəki, Marxal meşəsinin girişi", ru: "Шеки, у входа в лес Мархал", en: "Sheki, at the edge of Markhal forest" },
      desc: { az: "Qoz ağacları altında hovuzlu ev, Şəki halvası ilə qarşılama.", ru: "Дом с бассейном под ореховыми деревьями, встреча с шекинской халвой.", en: "House with a pool under walnut trees, welcomed with Sheki halva." },
      services: ["Home meals", "BBQ", "Wi-Fi", "Parking"],
      activities: ["hiking", "craft", "fruit"]
    },
    {
      id: "astara-cay",
      city: "astara",
      rooms: 3,
      maxGuests: 7,
      priceRoom: 35,
      priceHouse: 95,
      pool: false,
      name: "Çay Bağı Qonaq Evi",
      img: U("photo-1470770841072-f978cf4d019e"),
      place: { az: "Astara, çay plantasiyalarının arasında", ru: "Астара, среди чайных плантаций", en: "Astara, among tea plantations" },
      desc: { az: "Hər səhər təzə dəmlənmiş yerli çay və subtropik bağ mənzərəsi.", ru: "Свежезаваренный местный чай каждое утро и субтропический сад.", en: "Freshly brewed local tea every morning and a subtropical garden." },
      services: ["Home meals", "Garden", "Wi-Fi"],
      activities: ["tea", "birds", "fishing", "beach"]
    },
    {
      id: "zaqatala-ev",
      city: "zaqatala",
      rooms: 6,
      maxGuests: 14,
      priceRoom: 45,
      priceHouse: 230,
      pool: true,
      name: "Qoz Bağı Evi",
      img: U("photo-1501785888041-af3ef285b470"),
      place: { az: "Zaqatala, Qafqaz təbiət qoruğuna yaxın", ru: "Загатала, рядом с Кавказским заповедником", en: "Zagatala, near the Caucasus nature reserve" },
      desc: { az: "Fındıq və qoz bağlarının əhatəsində hovuzlu böyük ev.", ru: "Большой дом с бассейном среди фундучных и ореховых садов.", en: "Large house with a pool surrounded by hazelnut and walnut groves." },
      services: ["Kitchen", "BBQ", "Parking", "Wi-Fi"],
      activities: ["hiking", "rafting", "fruit", "horse"]
    }
  ];

  // pages/GuestHouses.jsx
  function GuestHouses() {
    const { t, L, city } = useLang();
    const { openBooking } = useApp();
    const [cityId, setCityId] = useState(() => getQuery("city") || "all");
    const [poolOnly, setPoolOnly] = useState(false);
    const list = guesthouses.filter((g) => (cityId === "all" || g.city === cityId) && (!poolOnly || g.pool));
    const book = (g, whole) => openBooking({
      kind: t.nav.guesthouses,
      title: `${g.name} – ${whole ? t.wholeHouse : t.perRoom}`,
      subtitle: L(g.place),
      img: g.img,
      price: whole ? g.priceHouse : g.priceRoom,
      mode: "night",
      maxGuests: whole ? g.maxGuests : 3
    });
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageHead, { title: t.nav.guesthouses, text: t.catText.guesthouses, img: guesthouses[0].img }), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("div", { className: "filters" }, /* @__PURE__ */ React.createElement("select", { value: cityId, onChange: (e) => setCityId(e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "all" }, t.allCities), [...new Set(guesthouses.map((g) => g.city))].map((c) => /* @__PURE__ */ React.createElement("option", { key: c, value: c }, city(c)))), /* @__PURE__ */ React.createElement("label", { className: "check" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: poolOnly, onChange: (e) => setPoolOnly(e.target.checked) }), " 🏊 ", t.pool)), /* @__PURE__ */ React.createElement("div", { className: "list" }, list.map((g) => /* @__PURE__ */ React.createElement("article", { key: g.id, className: "h-card" }, /* @__PURE__ */ React.createElement(Img, { src: g.img, alt: g.name, className: "h-card-img" }), /* @__PURE__ */ React.createElement("div", { className: "h-card-body" }, /* @__PURE__ */ React.createElement("h3", null, g.name), /* @__PURE__ */ React.createElement("p", { className: "muted" }, "📍 ", city(g.city), " · ", L(g.place)), /* @__PURE__ */ React.createElement("p", null, L(g.desc)), /* @__PURE__ */ React.createElement("div", { className: "facts" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, t.roomsCount), /* @__PURE__ */ React.createElement("b", null, g.rooms)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, t.guests), /* @__PURE__ */ React.createElement("b", null, g.maxGuests)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, t.pool), /* @__PURE__ */ React.createElement("b", null, g.pool ? "✅ " + t.yes : "— " + t.no))), /* @__PURE__ */ React.createElement("div", { className: "pill-list" }, g.services.map((s) => /* @__PURE__ */ React.createElement(Service, { key: s, id: s }))), /* @__PURE__ */ React.createElement("div", { className: "pill-list" }, g.activities.map((a) => /* @__PURE__ */ React.createElement(Activity, { key: a, id: a }))), /* @__PURE__ */ React.createElement("div", { className: "price-options" }, /* @__PURE__ */ React.createElement("div", { className: "price-option" }, /* @__PURE__ */ React.createElement("span", { className: "muted small" }, t.perRoom, " / ", t.perNight), /* @__PURE__ */ React.createElement("b", { className: "price" }, azn(g.priceRoom)), /* @__PURE__ */ React.createElement("button", { className: "btn sm ghost", onClick: () => book(g, false) }, t.book)), /* @__PURE__ */ React.createElement("div", { className: "price-option" }, /* @__PURE__ */ React.createElement("span", { className: "muted small" }, t.wholeHouse, " / ", t.perNight), /* @__PURE__ */ React.createElement("b", { className: "price" }, azn(g.priceHouse)), /* @__PURE__ */ React.createElement("button", { className: "btn sm", onClick: () => book(g, true) }, t.book))), /* @__PURE__ */ React.createElement("p", { className: "muted small" }, "💳 ", t.paymentNote)))), !list.length && /* @__PURE__ */ React.createElement("p", { className: "muted" }, t.nothing))));
  }

  // data/sanatoriums.js
  var sanatoriums = [
    {
      id: "naftalan",
      city: "naftalan",
      price: 150,
      course: "10–14",
      name: { az: "Naftalan Müalicə Mərkəzi", ru: "Лечебный центр Нафталан", en: "Naftalan Health Centre" },
      img: W("3/33/%D0%9D%D0%B0%D1%84%D1%82%D0%B0%D0%BB%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9.jpg/960px-%D0%9D%D0%B0%D1%84%D1%82%D0%B0%D0%BB%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%81%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9.jpg"),
      desc: { az: "Dünyada analoqu olmayan müalicəvi Naftalan nefti ilə vannalar və aplikasiyalar.", ru: "Ванны и аппликации с уникальной лечебной нафталанской нефтью.", en: "Baths and applications with the unique healing Naftalan oil." },
      treatments: { az: "Naftalan vannaları, palçıq, fizioterapiya, masaj", ru: "Нафталановые ванны, грязи, физиотерапия, массаж", en: "Naftalan baths, mud, physiotherapy, massage" },
      indications: { az: "Oynaq və onurğa xəstəlikləri, dəri xəstəlikləri, sinir sistemi", ru: "Болезни суставов и позвоночника, кожи, нервной системы", en: "Joint and spine conditions, skin diseases, nervous system" },
      pool: true
    },
    {
      id: "istisu-masalli",
      city: "masalli",
      price: 90,
      course: "7–12",
      name: { az: "Masallı İstisu Kurortu", ru: "Курорт Истису Масаллы", en: "Masalli Istisu Resort" },
      img: W("2/22/Isti_su_way.JPG/960px-Isti_su_way.JPG"),
      desc: { az: "Meşəlik ərazidə təbii isti mineral bulaqlara əsaslanan kurort.", ru: "Курорт на природных горячих минеральных источниках в лесу.", en: "Forest resort built around natural hot mineral springs." },
      treatments: { az: "Termal mineral vannalar, inhalyasiya, masaj", ru: "Термальные минеральные ванны, ингаляции, массаж", en: "Thermal mineral baths, inhalation, massage" },
      indications: { az: "Dayaq-hərəkət sistemi, dəri, qan dövranı", ru: "Опорно-двигательный аппарат, кожа, кровообращение", en: "Musculoskeletal system, skin, circulation" },
      pool: true
    },
    {
      id: "qalaalti",
      city: "sabran",
      price: 170,
      course: "7–21",
      name: { az: "Qalaaltı Mineral Su Sanatoriyası", ru: "Санаторий минеральных вод Галаалты", en: "Galaalti Mineral Water Sanatorium" },
      img: U("photo-1544161515-4ab6ce6db874"),
      desc: { az: "Şabran rayonunun dağ-meşə zonasında müalicəvi mineral su ilə tanınan sağlamlıq mərkəzi.", ru: "Оздоровительный центр в горно-лесной зоне Шабрана, известный лечебной минеральной водой.", en: "Wellness centre in Shabran's mountain forests, known for its healing mineral water." },
      treatments: { az: "Mineral su ilə içmə müalicəsi, hidroterapiya, pəhriz", ru: "Питьевое лечение минеральной водой, гидротерапия, диета", en: "Mineral water drinking cure, hydrotherapy, diet" },
      indications: { az: "Böyrək və sidik yolları, həzm sistemi, maddələr mübadiləsi", ru: "Почки и мочевыводящие пути, пищеварение, обмен веществ", en: "Kidneys and urinary tract, digestion, metabolism" },
      pool: true
    },
    {
      id: "duzdag",
      city: "naxcivan",
      price: 110,
      course: "10–20",
      name: { az: "Duzdağ Fizioterapiya Mərkəzi", ru: "Физиотерапевтический центр Дуздаг", en: "Duzdag Physiotherapy Centre" },
      img: U("photo-1519823551278-64ac92734fb1"),
      desc: { az: "Naxçıvanda qədim duz mədənində speleoterapiya – duz havası ilə müalicə.", ru: "Спелеотерапия в древней соляной шахте Нахчывана – лечение соляным воздухом.", en: "Speleotherapy in Nakhchivan's ancient salt mine – healing with salt air." },
      treatments: { az: "Speleoterapiya (duz mağarası), fizioterapiya", ru: "Спелеотерапия (соляная пещера), физиотерапия", en: "Speleotherapy (salt cave), physiotherapy" },
      indications: { az: "Bronxial astma, tənəffüs yolları, allergiya", ru: "Бронхиальная астма, дыхательные пути, аллергия", en: "Bronchial asthma, respiratory tract, allergies" },
      pool: false
    },
    {
      id: "astara-istisu",
      city: "astara",
      price: 80,
      course: "7–10",
      name: { az: "Astara İstisu Sağlamlıq Evi", ru: "Оздоровительный дом Истису Астара", en: "Astara Istisu Wellness House" },
      img: U("photo-1540555700478-4be289fbecef"),
      desc: { az: "Hirkan meşələrinin içində hidrogen-sulfidli isti bulaqlar.", ru: "Сероводородные горячие источники в Гирканском лесу.", en: "Hydrogen-sulphide hot springs in the Hyrcanian forest." },
      treatments: { az: "Kükürdlü vannalar, palçıq, masaj", ru: "Сероводородные ванны, грязи, массаж", en: "Sulphur baths, mud, massage" },
      indications: { az: "Oynaqlar, dəri, ginekoloji xəstəliklər", ru: "Суставы, кожа, гинекологические заболевания", en: "Joints, skin, gynaecological conditions" },
      pool: false
    },
    {
      id: "merdekan",
      city: "baku",
      price: 130,
      course: "7–14",
      name: { az: "Mərdəkan Dəniz Sanatoriyası", ru: "Морской санаторий Мардакан", en: "Mardakan Seaside Sanatorium" },
      img: U("photo-1571896349842-33c89424de2d"),
      desc: { az: "Abşeronun qumlu sahilində, dəniz havası və günəşlə müalicə.", ru: "На песчаном побережье Абшерона – лечение морским воздухом и солнцем.", en: "On Absheron's sandy coast – treatment with sea air and sunshine." },
      treatments: { az: "Talassoterapiya, qum vannaları, fizioterapiya", ru: "Талассотерапия, песочные ванны, физиотерапия", en: "Thalassotherapy, sand baths, physiotherapy" },
      indications: { az: "Ürək-damar, tənəffüs, ümumi bərpa", ru: "Сердечно-сосудистая система, дыхание, общее восстановление", en: "Cardiovascular, respiratory, general recovery" },
      pool: true
    }
  ];
  var sanatoriumIncludes = {
    az: ["Yaşayış", "3 dəfə pəhriz qidalanma", "Həkim müayinəsi", "Gündəlik prosedurlar"],
    ru: ["Проживание", "3-разовое диетическое питание", "Осмотр врача", "Ежедневные процедуры"],
    en: ["Accommodation", "3 dietary meals a day", "Doctor's consultation", "Daily procedures"]
  };

  // pages/Sanatoriums.jsx
  function Sanatoriums() {
    const { t, L, city, lang } = useLang();
    const { openBooking } = useApp();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageHead, { title: t.nav.sanatoriums, text: t.catText.sanatoriums, img: sanatoriums[0].img }), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("div", { className: "includes-box" }, /* @__PURE__ */ React.createElement("b", null, t.includes, ":"), sanatoriumIncludes[lang].map((x) => /* @__PURE__ */ React.createElement("span", { key: x }, "✔ ", x))), /* @__PURE__ */ React.createElement("div", { className: "list" }, sanatoriums.map((s) => /* @__PURE__ */ React.createElement("article", { key: s.id, className: "h-card" }, /* @__PURE__ */ React.createElement(Img, { src: s.img, alt: L(s.name), className: "h-card-img" }), /* @__PURE__ */ React.createElement("div", { className: "h-card-body" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "📍 ", city(s.city)), /* @__PURE__ */ React.createElement("h3", null, L(s.name)), /* @__PURE__ */ React.createElement("p", null, L(s.desc)), /* @__PURE__ */ React.createElement("dl", { className: "dl" }, /* @__PURE__ */ React.createElement("dt", null, "💊 ", t.treatments), /* @__PURE__ */ React.createElement("dd", null, L(s.treatments)), /* @__PURE__ */ React.createElement("dt", null, "🩺 ", t.indications), /* @__PURE__ */ React.createElement("dd", null, L(s.indications)), /* @__PURE__ */ React.createElement("dt", null, "📅 ", t.course), /* @__PURE__ */ React.createElement("dd", null, s.course, " ", t.days), /* @__PURE__ */ React.createElement("dt", null, "🏊 ", t.pool), /* @__PURE__ */ React.createElement("dd", null, s.pool ? t.yes : t.no)), /* @__PURE__ */ React.createElement("div", { className: "card-foot" }, /* @__PURE__ */ React.createElement("div", { className: "price" }, azn(s.price), " ", /* @__PURE__ */ React.createElement("small", null, "/ ", t.perDay, " · ", t.perPerson)), /* @__PURE__ */ React.createElement("button", { className: "btn sm", onClick: () => openBooking({
      kind: t.nav.sanatoriums,
      title: L(s.name),
      subtitle: city(s.city),
      img: s.img,
      price: s.price,
      mode: "day",
      maxGuests: 4
    }) }, t.book))))))));
  }

  // pages/Restaurants.jsx
  var hotelRestaurants = hotels.map((h) => ({
    id: h.id,
    hotelId: h.id,
    hotelName: h.name,
    city: h.city,
    name: h.restaurant.name,
    img: h.restaurant.img,
    cuisine: h.restaurant.cuisine,
    dishes: h.restaurant.dishes
  }));
  var findPlace = (id) => restaurants.find((r) => r.id === id) || hotelRestaurants.find((r) => r.id === id);
  function Restaurants() {
    const { t, L, city } = useLang();
    const [tab, setTab] = useState("city");
    const [cityId, setCityId] = useState(() => getQuery("city") || "all");
    const [q, setQ] = useState("");
    const source = tab === "city" ? restaurants : hotelRestaurants;
    const list = source.filter((r) => (cityId === "all" || r.city === cityId) && `${r.name} ${L(r.cuisine)} ${L(r.dishes)} ${city(r.city)}`.toLowerCase().includes(q.toLowerCase()));
    const allCities = [...new Set([...restaurants, ...hotelRestaurants].map((r) => r.city))];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageHead, { title: t.nav.restaurants, text: t.catText.restaurants, img: regionalDishes[0].img }), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, t.regionalDishes), /* @__PURE__ */ React.createElement("div", { className: "grid" }, regionalDishes.map((d) => {
      const place = findPlace(d.best);
      return /* @__PURE__ */ React.createElement("article", { key: L(d.dish), className: "dish" }, /* @__PURE__ */ React.createElement(Img, { src: d.img, alt: L(d.dish) }), /* @__PURE__ */ React.createElement("div", { className: "dish-body" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "📍 ", city(d.city)), /* @__PURE__ */ React.createElement("h3", null, L(d.dish)), /* @__PURE__ */ React.createElement("p", { className: "muted" }, L(d.about)), place && /* @__PURE__ */ React.createElement("div", { className: "best-at" }, /* @__PURE__ */ React.createElement("span", null, "🏆 ", t.bestAt, ":"), place.hotelId ? /* @__PURE__ */ React.createElement("a", { href: `#/hotel/${place.hotelId}` }, /* @__PURE__ */ React.createElement("b", null, place.name), " (", place.hotelName, ")") : /* @__PURE__ */ React.createElement("b", null, place.name))));
    }))), /* @__PURE__ */ React.createElement("section", { className: "section alt" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, t.seasonalFood), /* @__PURE__ */ React.createElement("div", { className: "grid cols-4" }, Object.entries(seasonalFood).map(([s, v]) => /* @__PURE__ */ React.createElement("div", { key: s, className: `season season-${s}` }, /* @__PURE__ */ React.createElement("h4", null, v.icon, " ", t.seasons[s]), /* @__PURE__ */ React.createElement("p", null, L(v))))))), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("div", { className: "filters" }, /* @__PURE__ */ React.createElement(Chips, { value: tab, onChange: setTab, options: [["city", t.cityRestaurants], ["hotel", t.hotelRestaurants]] }), /* @__PURE__ */ React.createElement("div", { className: "filter-selects" }, /* @__PURE__ */ React.createElement("input", { className: "search", placeholder: `🔍 ${t.searchPlaceholder}`, value: q, onChange: (e) => setQ(e.target.value) }), /* @__PURE__ */ React.createElement("select", { value: cityId, onChange: (e) => setCityId(e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "all" }, t.allCities), allCities.map((c) => /* @__PURE__ */ React.createElement("option", { key: c, value: c }, city(c)))))), /* @__PURE__ */ React.createElement("div", { className: "grid" }, list.map((r) => {
      const Tag = r.hotelId ? "a" : "article";
      return /* @__PURE__ */ React.createElement(Tag, { key: r.id, className: "card", ...r.hotelId ? { href: `#/hotel/${r.hotelId}` } : {} }, /* @__PURE__ */ React.createElement("div", { className: "card-img" }, /* @__PURE__ */ React.createElement(Img, { src: r.img, alt: r.name }), r.rating && /* @__PURE__ */ React.createElement("span", { className: "tag" }, "⭐ ", r.rating), r.hotelId && /* @__PURE__ */ React.createElement("span", { className: "tag tag-gold" }, "🏨 ", t.inHotel)), /* @__PURE__ */ React.createElement("div", { className: "card-body" }, /* @__PURE__ */ React.createElement("h3", null, r.name), /* @__PURE__ */ React.createElement("p", { className: "muted small" }, "📍 ", city(r.city), r.hotelName ? ` · ${r.hotelName}` : ""), /* @__PURE__ */ React.createElement("p", { className: "small" }, /* @__PURE__ */ React.createElement("b", null, t.cuisine, ":"), " ", L(r.cuisine)), /* @__PURE__ */ React.createElement("p", { className: "small" }, /* @__PURE__ */ React.createElement("b", null, t.signature, ":"), " ", L(r.dishes)), r.avg && /* @__PURE__ */ React.createElement("div", { className: "price" }, "~", azn(r.avg), " ", /* @__PURE__ */ React.createElement("small", null, "/ ", t.perPerson))));
    })), !list.length && /* @__PURE__ */ React.createElement("p", { className: "muted" }, t.nothing)));
  }

  // pages/Tours.jsx
  function Tours() {
    const { t, L } = useLang();
    const { openBooking } = useApp();
    const [tourId, setTourId] = useState(() => getQuery("tour") || tours[0].id);
    const [people, setPeople] = useState(2);
    const [lang, setLang] = useState("en");
    const calcRef = useRef(null);
    useEffect(() => {
      var _a;
      if (getQuery("tour")) (_a = calcRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    }, []);
    const tour = tours.find((x) => x.id === tourId) || tours[0];
    const fits = (v) => people >= v.min && people <= v.max;
    const options = vehicles.map((v) => ({ v, ...tourPrice(tour, v, lang) }));
    const cheapest = options.filter((o) => fits(o.v)).sort((a, b) => a.total - b.total)[0];
    const pick = (id) => {
      var _a;
      setTourId(id);
      (_a = calcRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    const TourList = ({ group }) => /* @__PURE__ */ React.createElement("div", { className: "grid cols-4" }, tours.filter((x) => x.group === group).map((x) => /* @__PURE__ */ React.createElement("article", { key: x.id, className: `card ${x.id === tourId ? "selected" : ""}`, onClick: () => pick(x.id) }, /* @__PURE__ */ React.createElement("div", { className: "card-img" }, /* @__PURE__ */ React.createElement(Img, { src: x.img, alt: L(x.name) }), /* @__PURE__ */ React.createElement("span", { className: "tag" }, "⏱ ", L(x.duration))), /* @__PURE__ */ React.createElement("div", { className: "card-body" }, /* @__PURE__ */ React.createElement("h3", null, L(x.name)), /* @__PURE__ */ React.createElement("ul", { className: "program" }, L(x.program).map((p) => /* @__PURE__ */ React.createElement("li", { key: p }, p))), /* @__PURE__ */ React.createElement("div", { className: "card-foot" }, /* @__PURE__ */ React.createElement("div", { className: "price" }, azn(tourPrice(x, vehicles[0], "ru").total), " ", /* @__PURE__ */ React.createElement("small", null, t.from)), /* @__PURE__ */ React.createElement("span", { className: "link-arrow" }, t.more, " →"))))));
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageHead, { title: t.nav.tours, text: t.catText.tours, img: tours[1].img }), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "🏙️ ", t.bakuTours), /* @__PURE__ */ React.createElement(TourList, { group: "baku" }), /* @__PURE__ */ React.createElement("h2", { className: "section-title mt" }, "🏞️ ", t.regionTours), /* @__PURE__ */ React.createElement(TourList, { group: "region" })), /* @__PURE__ */ React.createElement("section", { className: "section alt" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, t.vehicles), /* @__PURE__ */ React.createElement("div", { className: "grid cols-5" }, vehicles.map((v) => /* @__PURE__ */ React.createElement("div", { key: v.id, className: "vehicle" }, /* @__PURE__ */ React.createElement(Img, { src: v.img, alt: v.model }), /* @__PURE__ */ React.createElement("div", { className: "vehicle-body" }, /* @__PURE__ */ React.createElement("h4", null, v.model), /* @__PURE__ */ React.createElement("p", { className: "muted small" }, v.name, " · 👥 ", v.min, "–", v.max, " ", t.seats), /* @__PURE__ */ React.createElement("span", { className: `badge ${v.driverGuide ? "" : "badge-blue"}` }, v.driverGuide ? t.driverGuide : t.separateGuide), /* @__PURE__ */ React.createElement("div", { className: "price" }, azn(v.perDay), " ", /* @__PURE__ */ React.createElement("small", null, "/ ", t.perDay)))))), /* @__PURE__ */ React.createElement("div", { className: "lang-prices" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "🧑‍✈️ ", t.driverGuide, " ", /* @__PURE__ */ React.createElement("span", { className: "muted small" }, "(Sedan, SUV, Vito)")), guideLangs.map((l) => /* @__PURE__ */ React.createElement("div", { key: l, className: "line" }, /* @__PURE__ */ React.createElement("span", null, t.languages[l]), /* @__PURE__ */ React.createElement("b", null, driverGuideExtra[l] ? `+${azn(driverGuideExtra[l])}` : "0 ₼", " / ", t.perDay)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "🧑‍🏫 ", t.separateGuide, " ", /* @__PURE__ */ React.createElement("span", { className: "muted small" }, "(Sprinter, Bus)")), guideLangs.map((l) => /* @__PURE__ */ React.createElement("div", { key: l, className: "line" }, /* @__PURE__ */ React.createElement("span", null, t.languages[l]), /* @__PURE__ */ React.createElement("b", null, azn(separateGuidePrice[l]), " / ", t.perDay))))))), /* @__PURE__ */ React.createElement("section", { className: "section container", ref: calcRef }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "🧮 ", t.tourCalc), /* @__PURE__ */ React.createElement("div", { className: "calc-grid" }, /* @__PURE__ */ React.createElement("div", { className: "form calc-form" }, /* @__PURE__ */ React.createElement("label", null, t.tour, /* @__PURE__ */ React.createElement("select", { value: tourId, onChange: (e) => setTourId(e.target.value) }, tours.map((x) => /* @__PURE__ */ React.createElement("option", { key: x.id, value: x.id }, L(x.name), " (", L(x.duration), ")")))), /* @__PURE__ */ React.createElement("label", null, t.people, /* @__PURE__ */ React.createElement("input", { type: "number", min: "1", max: "49", value: people, onChange: (e) => setPeople(Math.max(1, Math.min(49, +e.target.value || 1))) })), /* @__PURE__ */ React.createElement("label", null, t.language, /* @__PURE__ */ React.createElement("div", { className: "lang-pick" }, guideLangs.map((l) => /* @__PURE__ */ React.createElement("button", { type: "button", key: l, className: `chip ${lang === l ? "on" : ""}`, onClick: () => setLang(l) }, t.languages[l])))), /* @__PURE__ */ React.createElement(Img, { src: tour.img, alt: L(tour.name), className: "calc-img" }), /* @__PURE__ */ React.createElement("p", { className: "muted small" }, t.tourIncludes)), /* @__PURE__ */ React.createElement("div", { className: "calc-options" }, options.map(({ v, car, guide, total }) => {
      const ok = fits(v);
      const best = cheapest && cheapest.v.id === v.id;
      return /* @__PURE__ */ React.createElement("div", { key: v.id, className: `calc-option ${ok ? "" : "disabled"} ${best ? "best" : ""}` }, /* @__PURE__ */ React.createElement(Img, { src: v.img, alt: v.model, className: "calc-option-img" }), /* @__PURE__ */ React.createElement("div", { className: "grow" }, /* @__PURE__ */ React.createElement("div", { className: "calc-option-head" }, /* @__PURE__ */ React.createElement("b", null, v.model), best && /* @__PURE__ */ React.createElement("span", { className: "badge" }, t.recommended)), /* @__PURE__ */ React.createElement("p", { className: "muted small" }, "👥 ", v.min, "–", v.max, " · ", v.driverGuide ? t.driverGuide : t.separateGuide), ok ? /* @__PURE__ */ React.createElement("p", { className: "small" }, t.vehicle, ": ", azn(car), v.driverGuide ? guide ? ` + ${t.languages[lang]}: ${azn(guide)}` : "" : ` + ${t.guide}: ${azn(guide)}`) : /* @__PURE__ */ React.createElement("p", { className: "small error-text" }, t.notFit)), /* @__PURE__ */ React.createElement("div", { className: "calc-option-price" }, /* @__PURE__ */ React.createElement("div", { className: "price" }, azn(total)), ok && /* @__PURE__ */ React.createElement("span", { className: "muted small" }, azn(total / people), " / ", t.perPerson), /* @__PURE__ */ React.createElement("button", { className: "btn sm", disabled: !ok, onClick: () => openBooking({
        kind: t.nav.tours,
        title: `${L(tour.name)} – ${v.model}`,
        subtitle: `${people} ${t.perPerson} · ${t.languages[lang]}`,
        img: tour.img,
        price: total,
        mode: "fixed"
      }) }, t.order)));
    })))));
  }

  // data/esim.js
  var esimPackages = [
    {
      id: "e1",
      data: "3 GB",
      days: 7,
      number: false,
      minutes: 0,
      price: 12,
      name: { az: "Başlanğıc", ru: "Старт", en: "Starter" }
    },
    {
      id: "e2",
      data: "10 GB",
      days: 15,
      number: true,
      minutes: 60,
      price: 25,
      popular: true,
      name: { az: "Turist", ru: "Турист", en: "Tourist" }
    },
    {
      id: "e3",
      data: "30 GB",
      days: 30,
      number: true,
      minutes: 200,
      price: 45,
      name: { az: "Səyyah", ru: "Путешественник", en: "Traveller" }
    },
    {
      id: "e4",
      data: "∞",
      days: 30,
      number: true,
      minutes: 500,
      price: 70,
      name: { az: "Limitsiz", ru: "Безлимит", en: "Unlimited" }
    }
  ];
  var esimFaq = [
    {
      q: { az: "eSIM-i nə vaxt aktiv etməliyəm?", ru: "Когда активировать eSIM?", en: "When should I activate the eSIM?" },
      a: { az: "QR kodu səfərdən əvvəl yükləyə bilərsiniz, paketin müddəti isə Azərbaycanda şəbəkəyə ilk qoşulduğunuz andan başlayır.", ru: "QR-код можно установить заранее, а срок пакета начинается с первого подключения к сети в Азербайджане.", en: "You can install the QR code before the trip; the package starts when you first connect to a network in Azerbaijan." }
    },
    {
      q: { az: "Öz nömrəm işləyəcəkmi?", ru: "Будет ли работать мой номер?", en: "Will my home number still work?" },
      a: { az: "Bəli, ikili SIM dəstəkləyən telefonlarda öz nömrəniz zəng və SMS üçün aktiv qalır.", ru: "Да, на телефонах с двумя SIM ваш номер остаётся активным для звонков и SMS.", en: "Yes, on dual-SIM phones your home number stays active for calls and SMS." }
    },
    {
      q: { az: "WhatsApp-ı yeni nömrəyə keçirməliyəmmi?", ru: "Нужно ли переносить WhatsApp?", en: "Do I need to move WhatsApp?" },
      a: { az: "Xeyr. WhatsApp köhnə nömrənizlə işləməyə davam edir, sadəcə internet eSIM-dən gəlir.", ru: "Нет. WhatsApp продолжит работать со старым номером, интернет будет идти через eSIM.", en: "No. WhatsApp keeps working with your old number; only the data comes from the eSIM." }
    },
    {
      q: { az: "Paket bitəndə nə edim?", ru: "Что делать, если пакет закончился?", en: "What if my package runs out?" },
      a: { az: "WhatsApp vasitəsilə bizə yazın – paketi bir neçə dəqiqəyə artırırıq.", ru: "Напишите нам в WhatsApp – продлим пакет за несколько минут.", en: "Message us on WhatsApp – we'll top up your package in minutes." }
    }
  ];

  // pages/Esim.jsx
  function Esim() {
    const { t, L } = useLang();
    const e = t.esim;
    const { openBooking } = useApp();
    const [open, setOpen] = useState(0);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageHead, { title: e.title, text: e.lead, img: U("photo-1512941937669-90a1b58e7e9c") }), /* @__PURE__ */ React.createElement("section", { className: "section container grid" }, /* @__PURE__ */ React.createElement("div", { className: "info-card" }, /* @__PURE__ */ React.createElement("span", { className: "info-icon" }, "📲"), /* @__PURE__ */ React.createElement("h3", null, e.what), /* @__PURE__ */ React.createElement("p", null, e.whatText)), /* @__PURE__ */ React.createElement("div", { className: "info-card" }, /* @__PURE__ */ React.createElement("span", { className: "info-icon" }, "📡"), /* @__PURE__ */ React.createElement("h3", null, e.operators), /* @__PURE__ */ React.createElement("p", null, e.operatorsText), /* @__PURE__ */ React.createElement("div", { className: "operators" }, /* @__PURE__ */ React.createElement("span", null, "Azercell"), /* @__PURE__ */ React.createElement("span", null, "Bakcell"), /* @__PURE__ */ React.createElement("span", null, "Nar"))), /* @__PURE__ */ React.createElement("div", { className: "info-card" }, /* @__PURE__ */ React.createElement("span", { className: "info-icon" }, "📱"), /* @__PURE__ */ React.createElement("h3", null, e.devices), /* @__PURE__ */ React.createElement("p", null, e.devicesText))), /* @__PURE__ */ React.createElement("section", { className: "section alt" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, e.how), /* @__PURE__ */ React.createElement("ol", { className: "steps grid cols-5" }, e.steps.map((s, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "step-n" }, i + 1), /* @__PURE__ */ React.createElement("p", null, s)))), /* @__PURE__ */ React.createElement("div", { className: "notice" }, "⚠️ ", /* @__PURE__ */ React.createElement("b", null, e.imei, "."), " ", e.imeiText))), /* @__PURE__ */ React.createElement("section", { className: "section container" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, e.packages), /* @__PURE__ */ React.createElement("div", { className: "grid cols-4" }, esimPackages.map((p) => /* @__PURE__ */ React.createElement("div", { key: p.id, className: `package ${p.popular ? "popular" : ""}` }, p.popular && /* @__PURE__ */ React.createElement("span", { className: "badge pkg-badge" }, "★ Top"), /* @__PURE__ */ React.createElement("h3", null, L(p.name)), /* @__PURE__ */ React.createElement("div", { className: "pkg-data" }, p.data), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "📶 ", e.data, ": ", /* @__PURE__ */ React.createElement("b", null, p.data)), /* @__PURE__ */ React.createElement("li", null, "📅 ", e.validity, ": ", /* @__PURE__ */ React.createElement("b", null, p.days, " ", t.days)), /* @__PURE__ */ React.createElement("li", null, "📞 ", e.number, ": ", /* @__PURE__ */ React.createElement("b", null, p.number ? "✅" : "—")), /* @__PURE__ */ React.createElement("li", null, "⏱ ", e.minutes, ": ", /* @__PURE__ */ React.createElement("b", null, p.minutes || "—"))), /* @__PURE__ */ React.createElement("div", { className: "price big" }, azn(p.price)), /* @__PURE__ */ React.createElement("button", { className: "btn full", onClick: () => openBooking({
      kind: "eSIM",
      title: `eSIM ${L(p.name)} – ${p.data}`,
      subtitle: `${p.days} ${t.days}`,
      price: p.price,
      mode: "fixed"
    }) }, t.order))))), /* @__PURE__ */ React.createElement("section", { className: "section alt" }, /* @__PURE__ */ React.createElement("div", { className: "container narrow" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, e.faq), esimFaq.map((f, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: `faq ${open === i ? "open" : ""}` }, /* @__PURE__ */ React.createElement("button", { onClick: () => setOpen(open === i ? -1 : i) }, L(f.q), /* @__PURE__ */ React.createElement("span", null, open === i ? "−" : "+")), open === i && /* @__PURE__ */ React.createElement("p", null, L(f.a)))))));
  }

  // pages/Bookings.jsx
  function Bookings() {
    const { t } = useLang();
    const { bookings, removeBooking } = useApp();
    const sum = bookings.reduce((s, b) => s + b.total, 0);
    const waText = bookings.map((b) => `• ${b.title} (${b.details}) – ${azn(b.total)}`).join("\n");
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageHead, { title: t.nav.bookings }), /* @__PURE__ */ React.createElement("section", { className: "section container narrow" }, !bookings.length ? /* @__PURE__ */ React.createElement("p", { className: "muted" }, t.noBookings) : /* @__PURE__ */ React.createElement("div", { className: "bookings" }, bookings.map((b) => /* @__PURE__ */ React.createElement("div", { key: b.id, className: "booking" }, /* @__PURE__ */ React.createElement("span", { className: "badge" }, b.kind), /* @__PURE__ */ React.createElement("div", { className: "grow" }, /* @__PURE__ */ React.createElement("b", null, b.title), /* @__PURE__ */ React.createElement("p", { className: "muted small" }, b.details)), /* @__PURE__ */ React.createElement("b", null, azn(b.total)), /* @__PURE__ */ React.createElement("button", { className: "link-danger", onClick: () => removeBooking(b.id) }, t.cancel))), /* @__PURE__ */ React.createElement("div", { className: "booking total" }, /* @__PURE__ */ React.createElement("span", { className: "grow" }, t.grandTotal), /* @__PURE__ */ React.createElement("b", null, azn(sum))), /* @__PURE__ */ React.createElement("a", { className: "btn wa-btn", href: waLink(waText), target: "_blank", rel: "noopener noreferrer" }, "💬 ", t.writeWhatsapp))));
  }

  // App.jsx
  function useRoute() {
    const parse = () => (window.location.hash.replace(/^#\/?/, "").split("?")[0] || "").split("/");
    const [route, setRoute] = useState(parse);
    useEffect(() => {
      const onChange = () => {
        setRoute(parse());
        window.scrollTo(0, 0);
      };
      window.addEventListener("hashchange", onChange);
      return () => window.removeEventListener("hashchange", onChange);
    }, []);
    return route;
  }
  function useBookings() {
    const [list, setList] = useState(() => {
      try {
        return JSON.parse(localStorage.getItem("karvania-bookings") || "[]");
      } catch {
        return [];
      }
    });
    useEffect(() => {
      try {
        localStorage.setItem("karvania-bookings", JSON.stringify(list));
      } catch {
      }
    }, [list]);
    return [list, setList];
  }
  function App() {
    var _a;
    const { t } = useLang();
    const [page, param] = useRoute();
    const [bookings, setBookings] = useBookings();
    const [booking, setBooking] = useState(null);
    const [toast, setToast] = useState("");
    const addBooking = (b) => {
      setBookings((list) => [{ ...b, id: Date.now() }, ...list]);
      setBooking(null);
      setToast(t.booked);
      setTimeout(() => setToast(""), 3500);
    };
    const ctx = {
      bookings,
      openBooking: setBooking,
      removeBooking: (id) => setBookings((list) => list.filter((b) => b.id !== id))
    };
    const pages = {
      "": /* @__PURE__ */ React.createElement(Home, null),
      hotels: /* @__PURE__ */ React.createElement(Hotels, null),
      hotel: /* @__PURE__ */ React.createElement(HotelDetail, { id: param }),
      guesthouses: /* @__PURE__ */ React.createElement(GuestHouses, null),
      sanatoriums: /* @__PURE__ */ React.createElement(Sanatoriums, null),
      restaurants: /* @__PURE__ */ React.createElement(Restaurants, null),
      tours: /* @__PURE__ */ React.createElement(Tours, null),
      esim: /* @__PURE__ */ React.createElement(Esim, null),
      bookings: /* @__PURE__ */ React.createElement(Bookings, null)
    };
    return /* @__PURE__ */ React.createElement(AppContext.Provider, { value: ctx }, /* @__PURE__ */ React.createElement(Header, { page }), /* @__PURE__ */ React.createElement("main", null, (_a = pages[page]) != null ? _a : /* @__PURE__ */ React.createElement(Home, null)), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement(WhatsAppFloat, null), booking && /* @__PURE__ */ React.createElement(BookingModal, { item: booking, onClose: () => setBooking(null), onConfirm: addBooking }), toast && /* @__PURE__ */ React.createElement("div", { className: "toast" }, "✅ ", toast));
  }

  // main.jsx
  client_default.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ react_default.createElement(react_default.StrictMode, null, /* @__PURE__ */ react_default.createElement(LangProvider, null, /* @__PURE__ */ react_default.createElement(App, null)))
  );
})();
