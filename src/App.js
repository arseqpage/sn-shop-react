function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width="40px" height="40px" src="/img/logo.png" alt="Logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img width="18px" height="18px" src="/img/cart.svg" alt="cart" />
            <span>1200 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
          <div className="card">
            <img width={133} height={122} src="/img/sneakers/1.jpg" alt="" />
            <h5>Мужские кроссовки Afkoekl Lokake</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб</b>
              </div>

              <button className="button">
                <img width="11px" height="11px" src="/img/plus.svg" alt="Add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={122} src="/img/sneakers/1.jpg" alt="" />
            <h5>Мужские кроссовки Afkoekl Lokake</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб</b>
              </div>

              <button className="button">
                <img width="11px" height="11px" src="/img/plus.svg" alt="Add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={122} src="/img/sneakers/1.jpg" alt="" />
            <h5>Мужские кроссовки Afkoekl Lokake</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб</b>
              </div>

              <button className="button">
                <img width="11px" height="11px" src="/img/plus.svg" alt="Add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
