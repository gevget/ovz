# 15 — AI NAVIGATOR DEMO SPEC
## Демо AI-помощника без backend LLM

---

# 1. Goal

AI Navigator demonstrates conversational product logic.

It must not pretend to be a live expert system.

Label:
`Демо AI-навигатора`

---

# 2. What it can do

In demo:

- recognize sample intents;
- ask one clarifying question;
- recommend next action;
- deep-link to existing app screen;
- explain interface;
- summarize demo article.

---

# 3. What it must NOT do

Do not:
- diagnose;
- prescribe treatment;
- provide definitive legal advice;
- call emergency services;
- invent government procedures;
- claim live data.

---

# 4. Suggested intents

## Intent 1
`Мне нужен сопровождающий завтра`

Flow:
Assistant:
`Помогу создать запрос. Куда нужно поехать?`

Quick replies:
- В клинику
- На мероприятие
- Другое

Then CTA:
`Создать запрос волонтёру`

Open prefilled `A14`.

---

## Intent 2
`Найди доступную клинику`

Assistant:
`Для вас важны вход без ступеней и лифт. Нашла 3 demo-объекта.`

Cards:
- Clinic 12 — 92%
- MedCenter — 87%
- CityCare — 71%

CTA:
`Открыть на карте`

---

## Intent 3
`Как оформить льготу?`

Assistant:
`В demo я могу показать подходящую инструкцию. Реальные требования нужно сверять с актуальными официальными источниками.`

CTA:
`Открыть статью`

---

## Intent 4
`Лифт не работает`

Assistant:
`Если речь об объекте на карте, можно сообщить об изменении.`

CTA:
`Сообщить о проблеме`

---

# 5. UI

Chat:
- assistant bubble;
- user bubble;
- cards;
- quick replies;
- CTA buttons.

No typing simulation longer than 400ms.

---

# 6. Demo architecture

Use deterministic finite flows.

Example:

```ts
const aiFlows = {
  volunteer: {...},
  clinic: {...},
  benefit: {...},
  brokenElevator: {...}
}
```

No external API required.

---

# 7. Explainability

When recommending place:

show:
`Почему: вход без ступеней, лифт, парковка`

This reinforces product logic.

---

# 8. Accessibility

AI output:
- short paragraphs;
- headings;
- buttons with explicit labels;
- speech-ready semantic text.

---

# 9. Empty custom input

If user types unsupported request:

Respond:
`В demo доступны несколько подготовленных сценариев. Выберите пример ниже.`

Show intent buttons.

Do not hallucinate.

---

# 10. Demo value

AI Navigator is not the product core.

Map + accessibility data remain core.

AI reduces navigation friction across the ecosystem.
