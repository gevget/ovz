# 19 — SCREEN REGISTRY
## Единый реестр экранов

> Screen Registry — главный чек-лист интерфейса.  
> Каждый screen ID должен иметь route, source data, components и primary action.

---

# 1. Registry schema

```ts
type ScreenRegistryItem = {
  id: string
  role: "user" | "volunteer" | "partner" | "admin"
  route: string
  title: string
  data: string[]
  components: string[]
  primaryAction?: string
  next?: string
}
```

---

# 2. User screens

| ID | Route | Main data | Main components | Primary action |
|---|---|---|---|---|
| U-HOME-01 | `/demo/user/home` | user, places, events, posts | HomeHeader, QuickActions, PlaceCard, EventCard | Найти доступное место |
| U-FEED-01 | `/demo/user/feed` | posts, stories | Tabs, StoryRail, PostCard | Открыть публикацию |
| U-POST-01 | `/demo/user/feed/post/[id]` | post, author | PostDetail, AuthorHeader | Подписаться / реакция |
| U-MAP-01 | `/demo/user/map` | places, userNeeds | MapView, SearchBar, Chips, PlaceCard | Открыть место |
| U-MAP-02 | `/demo/user/map/search` | places | SearchResults | Найти |
| U-MAP-03 | `/demo/user/map/filters` | userNeeds | FilterSheet | Применить |
| U-PLACE-01 | `/demo/user/map/place/[id]` | place, org | PlaceHero, AccessibilityMatch, FeatureList | Построить маршрут |
| U-PLACE-02 | `/demo/user/map/place/[id]/accessibility` | place | AccessibilityBreakdown | Вернуться к месту |
| U-REPORT-01 | `/demo/user/map/place/[id]/report` | place | ReportForm | Отправить |
| U-ROUTE-01 | `/demo/user/map/route` | selectedPlace | RouteForm | Найти маршруты |
| U-ROUTE-02 | `/demo/user/map/route/options` | routes | RouteOptionCard | Выбрать маршрут |
| U-JOURNEY-01 | `/demo/user/map/journey` | route | JourneySteps | Следующий шаг |
| U-HELP-01 | `/demo/user/help` | articles, specialists | HelpCategories, AIEntry | Открыть AI |
| U-AI-01 | `/demo/user/help/ai` | scriptedFlows | ChatUI, QuickReplies | Продолжить сценарий |
| U-ARTICLE-LIST-01 | `/demo/user/help/articles` | articles | ArticleCard | Открыть статью |
| U-ARTICLE-01 | `/demo/user/help/articles/[id]` | article | ArticleDetail | Открыть связанный сервис |
| U-SPECIALISTS-01 | `/demo/user/help/specialists` | specialists | SpecialistCard | Открыть профиль |
| U-SPECIALIST-01 | `/demo/user/help/specialists/[id]` | specialist | SpecialistProfile | Задать вопрос |
| U-ORG-01 | `/demo/user/help/organizations/[id]` | organization | OrganizationDetail | Записаться / открыть карту |
| U-VOLREQ-01 | `/demo/user/help/volunteer-request` | user | MultiStepForm | Создать запрос |
| U-REQ-01 | `/demo/user/help/requests/[id]` | helpRequest | RequestStatus | Отменить / посмотреть статус |
| U-OPP-01 | `/demo/user/opportunities` | vacancies, courses, events | OpportunitySections | Открыть вакансии |
| U-VAC-LIST-01 | `/demo/user/opportunities/vacancies` | vacancies | VacancyCard, Filters | Открыть вакансию |
| U-VAC-01 | `/demo/user/opportunities/vacancies/[id]` | vacancy, org | VacancyDetail | Отправить резюме |
| U-VAC-APPLY-01 | `/demo/user/opportunities/vacancies/[id]/apply` | vacancy, resume | ApplyForm | Отправить |
| U-RESUME-01 | `/demo/user/opportunities/resume` | resume | ResumeView | Редактировать |
| U-COURSE-LIST-01 | `/demo/user/opportunities/courses` | courses | CourseCard | Открыть курс |
| U-COURSE-01 | `/demo/user/opportunities/courses/[id]` | course | CourseDetail | Записаться |
| U-EVENT-LIST-01 | `/demo/user/events` | events | EventCard | Открыть событие |
| U-EVENT-01 | `/demo/user/events/[id]` | event, place | EventDetail | Присоединиться |
| U-PROFILE-01 | `/demo/user/profile` | user | ProfileHeader, MenuList | Открыть профиль доступности |
| U-ACCESS-01 | `/demo/user/profile/accessibility` | userNeeds | NeedSummary | Изменить |
| U-APPEAR-01 | `/demo/user/profile/appearance` | settings | AccessibilitySettings | Сохранить |
| U-NOTIF-01 | `/demo/user/profile/notifications` | notifications | NotificationList | Открыть уведомление |
| U-FAV-01 | `/demo/user/profile/favorites` | favorites | FilterTabs, EntityCards | Открыть |
| U-POSTS-01 | `/demo/user/profile/posts` | posts | PostCard | Создать / открыть |

---

# 3. Volunteer screens

| ID | Route | Main data | Components | Primary action |
|---|---|---|---|---|
| V-HOME-01 | `/demo/volunteer/home` | requests, volunteer | VolunteerSummary, HelpRequestCard | Открыть заявку |
| V-REQ-LIST-01 | `/demo/volunteer/requests` | requests | RequestFilters, HelpRequestCard | Открыть |
| V-REQ-01 | `/demo/volunteer/requests/[id]` | request | HelpRequestDetail | Откликнуться помочь |
| V-ACTIVE-01 | `/demo/volunteer/requests/[id]/active` | request | ActiveHelpCard | Завершить |
| V-HISTORY-01 | `/demo/volunteer/history` | completedRequests | Timeline | Открыть |
| V-PROFILE-01 | `/demo/volunteer/profile` | volunteer | VolunteerProfile | Изменить доступность |

---

# 4. Partner screens

| ID | Route | Main data | Components | Primary action |
|---|---|---|---|---|
| P-HOME-01 | `/demo/partner/home` | partnerMetrics | MetricCards, Alerts | Открыть организацию |
| P-ORG-01 | `/demo/partner/organization` | organization, place | OrganizationPanel | Редактировать |
| P-ACC-01 | `/demo/partner/organization/accessibility` | place | AccessibilityChecklist | Подтвердить |
| P-REQ-LIST-01 | `/demo/partner/requests` | partnerRequests | RequestList | Ответить |
| P-CONTENT-01 | `/demo/partner/content` | vacancies, courses, events | ContentTabs | Создать |
| P-VAC-LIST-01 | `/demo/partner/vacancies` | vacancies | PartnerVacancyCard | Создать вакансию |
| P-COURSE-LIST-01 | `/demo/partner/courses` | courses | PartnerCourseCard | Создать курс |
| P-EVENT-LIST-01 | `/demo/partner/events` | events | PartnerEventCard | Создать событие |
| P-ANALYTICS-01 | `/demo/partner/analytics` | metrics | Charts, MetricCards | Изменить период |

---

# 5. Admin screens

| ID | Route | Main data | Components | Primary action |
|---|---|---|---|---|
| A-HOME-01 | `/demo/admin` | adminMetrics | AdminDashboard | Открыть очередь |
| A-USERS-01 | `/demo/admin/users` | users | DataTable | Открыть пользователя |
| A-PARTNERS-01 | `/demo/admin/partners` | partners | DataTable | Проверить |
| A-PLACES-01 | `/demo/admin/places` | places | DataTable | Открыть объект |
| A-REPORTS-01 | `/demo/admin/reports` | reports | ModerationQueue | Подтвердить / отклонить |
| A-HELP-01 | `/demo/admin/help-requests` | helpRequests | DataTable | Открыть |
| A-CONTENT-01 | `/demo/admin/content` | posts | ModerationQueue | Решить |
| A-VERIFY-01 | `/demo/admin/verification` | verifications | VerificationQueue | Верифицировать |
| A-ANALYTICS-01 | `/demo/admin/analytics` | analytics | Charts | Изменить период |

---

# 6. Screen completion rule

Screen считается реализованным, если:

- есть route;
- есть title;
- есть data source;
- primary CTA работает;
- secondary controls работают;
- loading / empty / error предусмотрены;
- back работает;
- mobile layout не ломается.
