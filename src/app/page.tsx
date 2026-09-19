import type { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";

export const metadata: Metadata = {
  title: "Навигатор доступности — город и сервисы, которыми можно пользоваться",
  description: "Персональный навигатор по доступной инфраструктуре, маршрутам, помощи, работе, обучению и сообществам.",
  openGraph: {
    title: "Навигатор доступности",
    description: "Персональный навигатор по доступной городской жизни.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Навигатор доступности",
    description: "Персональный навигатор по доступной городской жизни.",
  },
};

export default function LandingRoute() {
  return <LandingPage />;
}
