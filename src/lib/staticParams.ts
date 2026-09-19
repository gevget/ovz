import { helpArticles, helpOrganizations, helpSpecialists } from "@/data/help";
import { clubs, opportunityCourses, opportunityEvents, opportunityOrganizations, opportunityVacancies, partnerOffers } from "@/data/opportunities";
import { partnerRequests, partnerSeedCourses, partnerSeedEvents, partnerSeedOffers, partnerSeedVacancies } from "@/data/partner";
import { socialCommunities, socialPosts, socialStories, socialUsers } from "@/data/social";
import { articles, events, helpRequests, organizations, users, vacancies } from "@/data/seed";
import { expandedHelpRequests } from "@/data/volunteer";
import { places } from "@/data/seed";

const unique = (values: string[]) => Array.from(new Set(values));
const ids = (items: Array<{ id: string }>) => items.map((item) => item.id);

export const staticParams = {
  roles: ["user", "volunteer", "partner", "admin"].map((role) => ({ role })),
  unknownSlug: [{ slug: ["does-not-exist"] }],
  userIds: unique([...ids(users), ...ids(socialUsers)]).map((userId) => ({ userId })),
  communityIds: ids(socialCommunities).map((communityId) => ({ communityId })),
  postIds: ids(socialPosts).map((postId) => ({ postId })),
  storyIds: ids(socialStories).map((storyId) => ({ storyId })),
  clubIds: ids(clubs).map((clubId) => ({ clubId })),
  placeIds: ids(places).map((placeId) => ({ placeId })),
  organizationIds: unique([...ids(organizations), ...ids(opportunityOrganizations), ...ids(helpOrganizations)]).map((organizationId) => ({ organizationId })),
  specialistIds: ids(helpSpecialists).map((specialistId) => ({ specialistId })),
  articleIds: unique([...ids(articles), ...ids(helpArticles)]).map((articleId) => ({ articleId })),
  requestIds: unique([...ids(helpRequests), ...ids(expandedHelpRequests), ...ids(partnerRequests)]).map((requestId) => ({ requestId })),
  courseIds: unique([...ids(opportunityCourses), ...ids(partnerSeedCourses)]).map((courseId) => ({ courseId })),
  eventIds: unique([...ids(events), ...ids(opportunityEvents), ...ids(partnerSeedEvents)]).map((eventId) => ({ eventId })),
  vacancyIds: unique([...ids(vacancies), ...ids(opportunityVacancies), ...ids(partnerSeedVacancies)]).map((vacancyId) => ({ vacancyId })),
  offerIds: unique([...ids(partnerOffers), ...ids(partnerSeedOffers)]).map((offerId) => ({ offerId })),
};
