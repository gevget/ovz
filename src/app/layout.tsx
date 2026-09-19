import type { Metadata } from "next";
import "@/styles/tokens.css";

export const metadata: Metadata = {
  title: "Навигатор доступности",
  description: "Интерактивное demo цифрового навигатора доступности.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
