# 33 — MASTER INDEX & CONFLICT RULES
## Главный индекс документации и приоритет источников

> Этот файл нужен Codex, чтобы не гадать, какой документ главнее при расхождениях.

---

# 1. Приоритет документов

Если документы противоречат друг другу, использовать следующий порядок:

1. `00_MASTER_PRODUCT_2026.md`
2. `33_MASTER_INDEX_AND_CONFLICT_RULES.md`
3. `11_APP_INFORMATION_ARCHITECTURE_AND_NAV_RULES.md`
4. `18_ROUTE_MANIFEST.md`
5. `19_SCREEN_REGISTRY.md`
6. `20_TYPES_AND_DATA_MODELS.ts`
7. `21_COMPONENT_CONTRACTS.md`
8. `22_STATE_MACHINES.md`
9. `23_UI_COPY_DICTIONARY.ts`
10. `26_CODE_ARCHITECTURE_RULES.md`
11. `27_QA_AND_ACCEPTANCE_TESTS.md`
12. `31_SEED_DATA_CORE.ts`
13. `17_DEMO_DATA_EXPANSION_V2.md`
14. Все остальные уточняющие документы.

Старые презентации, карты и исторические документы являются референсами и не должны иметь приоритет над текущей документацией 2026.

---

# 2. Что является каноном

Канон:
- 5 зон пользователя: Главная / Карта / Помощь / Возможности / Профиль;
- 4 роли: пользователь / волонтёр / партнёр / администратор;
- shared-state между ролями;
- Accessibility Match;
- карта как ключевой продуктовый модуль;
- demo без обязательного backend;
- одна сущность = один canonical ID.

---

# 3. Что нельзя додумывать самостоятельно

Codex не должен самостоятельно:
- добавлять новые верхнеуровневые разделы;
- менять роли;
- менять названия ключевых сущностей;
- создавать новые статусы state machine;
- менять route structure;
- менять Accessibility Match logic;
- добавлять реальные API-интеграции;
- подключать платные карты / AI / auth без отдельной команды;
- вставлять старые грантовые цифры в новый лендинг.

---

# 4. Что можно улучшать самостоятельно

Codex может:
- дробить компоненты;
- улучшать accessibility;
- улучшать responsive;
- упрощать implementation;
- рефакторить;
- улучшать loading / empty / error states;
- оптимизировать производительность;
- исправлять несогласованность типов.

Но изменения не должны менять продуктовую логику.

---

# 5. Если найдено противоречие

Не выбирать молча.

Добавить в `IMPLEMENTATION_STATUS.md`:

```md
## Documentation conflict

- Files:
- Conflict:
- Chosen interpretation:
- Reason:
```

Выбрать вариант по приоритету документов выше.

---

# 6. Если данных не хватает

Использовать:
1. существующий seed;
2. `17_DEMO_DATA_EXPANSION_V2.md`;
3. безопасный fictional placeholder.

Не придумывать реальные статистические показатели, юридические требования, медицинские советы или государственные интеграции.

---

# 7. Definition of source of truth

Для runtime-кода:
- сущности -> seed/store;
- copy -> UI dictionary;
- routes -> route manifest/constants;
- calculations -> domain functions;
- screen composition -> screen registry;
- UX flows -> demo UX docs;
- acceptance -> QA docs.
