import { LandingMedia } from "@/components/landing/LandingPrimitives";

const visualItems = [
  {
    src: "/assets/landing/community-cafe.webp",
    alt: "Светлое городское кафе с широким проходом и доступной посадкой",
    eyebrow: "Повседневные места",
    title: "Проверять можно не только социальные объекты",
    description: "Кафе, магазины и небольшие пространства тоже становятся частью понятного маршрута.",
  },
  {
    src: "/assets/landing/tram-interior.webp",
    alt: "Интерьер низкопольного трамвая с местом для коляски",
    eyebrow: "Транспорт",
    title: "Путь начинается до входа",
    description: "Транспорт и пересадки учитываются рядом с карточкой места.",
  },
  {
    src: "/assets/landing/volunteer-route.webp",
    alt: "Волонтёр помогает построить доступный городской маршрут",
    eyebrow: "Помощь",
    title: "Если нужен человек — это тоже сценарий",
    description: "Запрос помощи получает понятный статус и следующий шаг.",
  },
  {
    src: "/assets/landing/partner-venue.webp",
    alt: "Партнёрское городское пространство с доступным входом",
    eyebrow: "Партнёры",
    title: "Организации могут поддерживать актуальность",
    description: "Партнёр видит карточку объекта и помогает обновлять важные условия.",
  },
  {
    src: "/assets/landing/park-promenade.webp",
    alt: "Городская парковая прогулочная зона с ровным покрытием",
    eyebrow: "Городская среда",
    title: "Доступность — это и маршрут между точками",
    description: "Ровное покрытие, навигация и места отдыха важны на всём пути.",
  },
  {
    src: "/assets/landing/library-interior.webp",
    alt: "Тихий интерьер библиотеки с понятной навигацией",
    eyebrow: "Знания",
    title: "Курсы и полезные места — в одной экосистеме",
    description: "Сервис помогает находить не только объекты, но и возможности для участия.",
  },
];

export function LandingVisualGallery() {
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      {visualItems.map((item, index) => (
        <article
          key={item.src}
          className={`overflow-hidden rounded-card border border-border bg-surface shadow-card ${index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}`}
        >
          <LandingMedia
            src={item.src}
            alt={item.alt}
            className={index === 0 ? "aspect-[16/10]" : "aspect-[16/7]"}
            sizes={index === 0 ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 42vw"}
          />
          <div className="p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">{item.eyebrow}</p>
            <h3 className="mt-2 text-xl font-bold tracking-[-0.03em] text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
