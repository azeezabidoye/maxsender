import "bootstrap/dist/css/bootstrap.min.css";
import "react-csv-importer/dist/index.css";
import "./style.css";
import "./globals.css";

export const metadata = {
  title: "Maxsender",
  description: "Make multiple crypto payments in one click",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
