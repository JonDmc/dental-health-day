import Header from "./Header";

// wrapper component for app layout
export default function Layout({ children }) {

    return (
        <>
            <h3>dental health day at the dental spa</h3>
            <Header />
            <main>
                {children}

            </main>
            <footer>
                <p>©️ super kool kids inc. {new Date().getFullYear()}</p>
            </footer>
        </>
    )
}