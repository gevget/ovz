"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { LandingFooter, LandingHeader, LandingSection, DemoCTA } from "@/components/landing/LandingPrimitives";
import {
  AccessibilityShowcase,
  CityContextShowcase,
  CommunityShowcase,
  DataFreshnessShowcase,
  HelpShowcase,
  Hero,
  JourneyShowcase,
  OpportunitiesShowcase,
  ProblemFlow,
  ProductCore,
  RoleEcosystem,
  StickyProductShowcase,
} from "@/components/landing/LandingShowcases";
import { ContactForm, InvestorSection, PartnerSection, type ContactFormKind } from "@/components/landing/LandingForms";

const faqItems = [
  { question: "Это только карта?", answer: "Нет. Карта — один из ключевых инструментов, но продукт также объединяет помощь, знания, работу, обучение и сообщества." },
  { question: "Откуда берутся данные о доступности?", answer: "Из карточек организаций, открытых источников, пользовательских подтверждений, волонтёрской проверки и модерации. Для промышленной версии источники должны быть формализованы отдельно." },
  { question: "Приложение предназначено только для людей на колясках?", answer: "Нет. Концепция строится вокруг разных функциональных потребностей: мобильность, зрение, слух, восприятие и необходимость сопровождения." },
  { question: "Уже можно скачать приложение?", answer: "Пока доступно интерактивное демо, демонстрирующее продуктовую модель." },
  { question: "Можно стать партнёром?", answer: "Да. Оставьте заявку, чтобы обсудить пилот, интеграцию или участие в наполнении платформы." },
];

export function LandingFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-card border border-border bg-surface">
      {faqItems.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            className="flex min-h-16 w-full items-center justify-between gap-4 px-5 text-left font-semibold text-ink sm:px-6"
            aria-expanded={open === index}
            aria-controls={`faq-answer-${index}`}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            <span>{item.question}</span>
            <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 text-muted transition-transform ${open === index ? "rotate-180" : ""}`} />
          </button>
          {open === index ? <div id={`faq-answer-${index}`} className="px-5 pb-5 text-sm leading-7 text-muted sm:px-6">{item.answer}</div> : null}
        </div>
      ))}
    </div>
  );
}

export function DemoCTASection() {
  return (
    <div className="rounded-card border border-primary/20 bg-primary-soft p-7 text-center sm:p-12">
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">Финальный сценарий</p>
      <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-ink sm:text-4xl">Не представляйте приложение. Попробуйте его.</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">Мы собрали интерактивную версию продукта с тестовыми пользователями, местами, маршрутами, вакансиями, курсами и запросами помощи.</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3"><DemoCTA label="Открыть демо" /><DemoCTA label="Выбрать роль" variant="secondary" /></div>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {[{ label: "Пользователь", role: "user" as const }, { label: "Волонтёр", role: "volunteer" as const }, { label: "Партнёр", role: "partner" as const }, { label: "Администратор", role: "admin" as const }].map((item) => <DemoCTA key={item.role} label={item.label} role={item.role} variant="secondary" />)}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [formKind, setFormKind] = useState<ContactFormKind | null>(null);
  const closeForm = () => setFormKind(null);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-3 focus:font-semibold focus:text-ink">Перейти к содержимому</a>
      <LandingHeader onPartner={() => setFormKind("partner")} />
      <main id="main-content">
        <Hero onPartner={() => setFormKind("partner")} />
        <LandingSection id="problem" eyebrow="Сегодня один запрос — это десятки источников" title="Доступность — это не только пандус" description="Чтобы попасть на приём, найти работу, записаться на курс или сходить на мероприятие, нужно одновременно проверить инфраструктуру, транспорт, условия внутри здания, доступность услуги и возможность получить сопровождение.">
          <ProblemFlow />
        </LandingSection>
        <LandingSection id="visuals" tone="soft" eyebrow="Город в контексте" title="Доступность начинается с реального места" description="Понятный интерфейс должен показывать не абстрактные карточки, а город, транспорт, людей и условия, из которых складывается настоящий сценарий.">
          <CityContextShowcase />
        </LandingSection>
        <LandingSection id="map" eyebrow="Один сервис вместо разрозненных действий" title="От вопроса до действия — в одном приложении" description="Пять зон продукта работают на один результат: помочь человеку понять следующий шаг и сохранить самостоятельность.">
          <ProductCore />
        </LandingSection>
        <LandingSection id="match" eyebrow="Не просто «доступно / недоступно»" title="Место может подходить одному человеку и не подходить другому" description="Персональная доступность начинается с контекста пользователя, а не с бинарного статуса места.">
          <AccessibilityShowcase />
        </LandingSection>
        <LandingSection id="showcase" tone="soft" eyebrow="Реальный продуктовый сценарий" title="Сначала проверить. Потом действовать." description="Интерфейс меняется по ходу сценария: карта, карточка места, персональная доступность, маршрут и режим пути. На мобильном это обычный поток, без перехвата прокрутки.">
          <StickyProductShowcase />
        </LandingSection>
        <LandingSection id="journey" eyebrow="Режим пути" title="Не карточка места. Полный путь" description="Один сценарий вместо восьми отдельных сервисов: от поиска клиники до подтверждения актуальности данных.">
          <JourneyShowcase />
        </LandingSection>
        <LandingSection id="help" tone="soft" eyebrow="Человеческий слой" title="От вопроса — к конкретному действию" description="Помощь — это не тупик и не бесконечная переписка. Запрос получает понятный следующий шаг, подходящего волонтёра или специалиста.">
          <HelpShowcase />
        </LandingSection>
        <LandingSection id="opportunities" eyebrow="Работа и развитие" title="Доступность — это возможность участвовать" description="Вакансии, курсы, мероприятия и сообщества помогают строить полноценную жизнь, а не только обходить препятствия.">
          <OpportunitiesShowcase />
        </LandingSection>
        <LandingSection id="community" tone="soft" eyebrow="Сообщество и полезный опыт" title="Найти людей, опыт и своё сообщество" description="Социальный слой проекта строится вокруг взаимопомощи и полезного опыта, а не бесконечной ленты.">
          <CommunityShowcase />
        </LandingSection>
        <LandingSection id="freshness" eyebrow="Проверка сообществом" title="Доступность меняется. Данные должны меняться вместе с ней" description="Пользователь сообщает о препятствии, организация обновляет карточку, команда контроля качества проверяет сообщение, а следующий человек видит актуальную персональную доступность.">
          <DataFreshnessShowcase />
        </LandingSection>
        <LandingSection id="roles" tone="soft" eyebrow="Экосистема" title="Одна платформа — разные участники" description="Пользователь, волонтёр, партнёр и контроль качества платформы работают с общими сущностями и общими тестовыми данными.">
          <RoleEcosystem />
        </LandingSection>
        <LandingSection id="partners" eyebrow="Для организаций" title="Сервис становится полезнее с каждым подключённым партнёром" description="Партнёр может актуализировать объект, отвечать на обращения и размещать возможности — без обещаний лидов или продаж, которых ещё нет в данных.">
          <PartnerSection onOpen={() => setFormKind("partner")} />
        </LandingSection>
        <LandingSection id="investors" tone="dark" eyebrow="Что мы строим" title="Инфраструктурный слой для доступной городской жизни" description="Платформа объединяет пользовательский сервис, партнёрскую экосистему и постоянно обновляемые данные о доступности.">
          <InvestorSection onOpen={() => setFormKind("investor")} />
        </LandingSection>
        <LandingSection id="impact" eyebrow="Результат вместо набора экранов" title="Ценность можно измерять количеством решённых сценариев" description="В промышленной версии здесь появятся формализованные показатели: актуальные объекты, маршруты, подтверждения данных, закрытые запросы помощи, записи на обучение и подключённые организации.">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Актуальные доступные объекты", "Построенные доступные маршруты", "Закрытые запросы помощи", "Подключённые организации"].map((item) => <div key={item} className="rounded-card border border-border bg-surface p-5"><p className="text-sm font-bold text-ink">{item}</p><p className="mt-3 text-sm text-muted">Целевой показатель</p></div>)}
          </div>
        </LandingSection>
        <LandingSection id="demo" tone="soft" title="Лучше один раз пройти сценарий" description="Откройте роль, найдите место, проверьте условия и увидьте, как данные связывают разные части системы.">
          <DemoCTASection />
        </LandingSection>
        <LandingSection id="faq" title="Частые вопросы">
          <LandingFAQ />
        </LandingSection>
      </main>
      <LandingFooter />
      <Modal open={Boolean(formKind)} title={formKind === "partner" ? "Стать партнёром" : "Обсудить проект"} onClose={closeForm}><ContactForm kind={formKind ?? "partner"} /></Modal>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }) }} />
    </div>
  );
}
