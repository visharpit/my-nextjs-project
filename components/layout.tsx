export default function Layout({children}: {children: React.ReactNode}){
    return(
        <div>
            <header style={{backgroundColor:"purple", color: 'white', padding: '10px'}}>This is my header</header>
            <main>
                {children}
            </main>
            <footer style={{backgroundColor:"purple", color: 'white', padding: '10px'}}>This is my footer</footer>
        </div>
    )
}