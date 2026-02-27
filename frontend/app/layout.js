import  "bootstrap/dist/css/bootstrap.min.css"

export default function Layout({children}){
    return <html>
        <body>
            {children}
        </body>
    </html>
}