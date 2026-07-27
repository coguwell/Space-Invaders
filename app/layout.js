import "./styles/global.css"

export const metadata = {
    title: "Cogu Space Invaders",
    icons: {
        icon: "https://alpha-site.vercel.app/imgs/Cogu-avatar/Default.png",
    },
};

export default function RootLayout({ children }) {
    console.log("Layout loadded");

    return (
        <html>
            <body>{children}</body>
        </html>
    );
}