import "./globals.css";

export const metadata = {
  title: "FinanceControl",
  description: "Plataforma de controle financeiro pessoal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
