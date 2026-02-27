import 'bootstrap/dist/css/bootstrap.min.css';

const HomeLayout = ({ children }) => {

  return (
    <html>
      <body className='vh-100'>

        <main className='h-100 d-flex align-items-center'>
          {children}</main>
      </body>
    </html>
  )

}

export default HomeLayout;