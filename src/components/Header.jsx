function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-0 fixed-top mx-0 px-0">
        <div className="container navbar-top ms-auto">
          <a className="navbar-brand p-0 d-lg-none d-block" href="index.html">
            <img
              src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/Logotype.svg"
              alt="logo"
              style={{ width: '100px', height: '32px' }}
            />
          </a>
          <a className="navbar-brand p-0 d-lg-block d-none" href="index.html">
            <img
              src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/Logotype.svg"
              alt="logo"
            />
          </a>
          {/* <!-- 手機板 header --> */}
          <div className="d-flex align-items-center">
            {/* <!-- 1搜尋 OffcanvasMenu --> */}
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
              aria-label="Toggle menu"
            >
              <i
                className="text-primary-300"
                data-lucide="search"
                style={{ width: '24px', height: '24px' }}
              ></i>
            </button>
            {/* <!-- 2購物車 icon --> */}
            <button className="border-0 shadow-none bg-white d-lg-none d-block">
              <i
                className="text-primary-300 "
                data-lucide="handbag"
                style={{ width: '24px', height: '24px' }}
              ></i>
            </button>
            {/* <!--  3搜尋  search--> */}
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSearch"
              aria-controls="offcanvasSearch"
              aria-label="Toggle search"
            >
              <i
                className="text-primary-300 "
                data-lucide="menu"
                style={{ width: '24px', height: '24px' }}
              ></i>
            </button>
          </div>
          {/* <!--主選單 search --> */}
          <div
            className="offcanvas offcanvas-end"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasMenu"
            aria-labelledby="Toggle menu"
          >
            <div className="offcanvas-header d-lg-none d-block border-4 border-bottom pt-0 pb-2 d-flex align-items-center">
              <button
                className="me-2 mt-2 border-0 bg-white"
                type="button "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                id="offcanvasMenu"
                style={{ width: '48px', height: '48px' }}
              >
                <i
                  className="text-gray-600"
                  data-lucide="chevron-left"
                  style={{ width: '24px', height: '24px' }}
                ></i>
              </button>
              <form className=" mt-2 " style={{ width: '100%' }} role="search">
                <input
                  type="text "
                  style={{ width: ' 100%' }}
                  className="form-control py-3  rounded-pill "
                  placeholder="輸入關鍵字..."
                  aria-label="Text input"
                  aria-expanded="false"
                />
                <button className=" btn btn-primary   from-button  translate-middle-y d-flex justify-content-center align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="search"
                    className="lucide lucide-search text-white"
                    style={{ width: '40px', height: '40px' }}
                  >
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </button>
              </form>
            </div>
            {/* <!-- 手機板 Menu選單 --> */}
            <div className="d-lg-none d-block offcanvas-body">
              <div className="mb-6">
                <div className="mb-3 fw-bold">大家都在找</div>
                <ul className="d-flex flex-wrap " style={{ gap: '12px' }}>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">寶寶衣物</a>
                  </li>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">推車</a>
                  </li>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">奶瓶</a>
                  </li>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">玩具</a>
                  </li>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">書籍</a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="mb-3 fw-bold">熱門分類</div>
                <ul className="d-flex flex-wrap " style={{ gap: '12px' }}>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">嬰兒服飾</a>
                  </li>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">男孩服飾</a>
                  </li>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">女孩服飾</a>
                  </li>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">玩具</a>
                  </li>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">育兒書籍</a>
                  </li>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">哺乳用品</a>
                  </li>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">推車/安全座椅</a>
                  </li>
                  <li className="py-2 px-5 bg-gray-100 paragraph-body-small rounded-4">
                    <a href="">媽媽用品</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- 電腦版選單 --> */}
          <div className=" d-none d-lg-flex align-items-center justify-content-between w-100">
            <ul className="navbar-nav underline ms-auto me-10 gap-0">
              <li className="nav-item py-0 me-8">
                <a
                  className="nav-link px-0 pt-3 pb-2"
                  aria-current="page"
                  href="product-list-page.html"
                >
                  找寶物
                </a>
              </li>
              <li className="nav-item py-0 me-8">
                <a className="nav-link px-0 pt-3 pb-2 paragraph-body" href="#">
                  我要分享
                </a>
              </li>
              <li className="nav-item py-0 me-8">
                <a className="nav-link px-0 pt-3 pb-2 paragraph-body" href="#">
                  愛心轉送
                </a>
              </li>
              <li className="nav-item py-0 me-8">
                <a className="nav-link px-0 pt-3 pb-2 paragraph-body" href="#">
                  爸媽交流站
                </a>
              </li>
              <li className="nav-item py-0 me-0">
                <a className="nav-link px-0 pt-3 pb-2 paragraph-body" href="#">
                  育兒資源
                </a>
              </li>
            </ul>
            <a
              className="p-0 me-3 btn button-ghost-default-text rounded-circle border-0 d-flex align-items-center justify-content-center "
              style={{ width: '48px', height: '48px' }}
              href="shoppingcar.html"
            >
              <i className="i-icon-primary-300 " data-lucide="handbag"></i>
            </a>
            <a
              className="d-flex px-4 py-3 btn button-ghost-default-text rounded-pill"
              href="#"
            >
              <i className="me-2 i-icon-primary-300 " data-lucide="baby"></i>
              <div className=" " href="#">
                登入/註冊
              </div>
            </a>
          </div>

          {/* <!--搜尋 Offcanvas --> */}
          <div
            className="offcanvas offcanvas-end"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasSearch"
            aria-labelledby="Toggle search"
          >
            <div className="offcanvas-header py-0 border-4 border-bottom">
              <a className="navbar-brand p-0" href="#">
                <img
                  src="/assets/images/index/Logotype.svg"
                  alt="logo"
                  style={{ width: '100px', height: '32px' }}
                />
              </a>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                id="offcanvasSearch"
                style={{ width: '48px', height: '48px' }}
              ></button>
            </div>

            {/* <!-- 手機板 選單 --> */}
            <div className="d-lg-none d-block offcanvas-body">
              <ul className="text-center mt-12">
                <li className="nav-item py-3 mb-8 me-0">
                  <a
                    className="paragraph-body"
                    aria-current="page"
                    href="product-list-page.html"
                  >
                    找寶物
                  </a>
                </li>
                <li className="nav-item py-3 mb-8 me-0">
                  <a className="paragraph-body" href="#">
                    我要分享
                  </a>
                </li>
                <li className="nav-item py-3 mb-8 me-0">
                  <a className="paragraph-body" href="#">
                    愛心轉送
                  </a>
                </li>
                <li className="nav-item py-3 mb-8 me-0">
                  <a className="paragraph-body" href="#">
                    爸媽交流站
                  </a>
                </li>
                <li className="nav-item py-3 mb-8 me-0">
                  <a className="paragraph-body" href="#">
                    育兒資源
                  </a>
                </li>
              </ul>

              <a
                className=" sticky-bottom d-flex justify-content-center py-9 border-1 border-top bg-white"
                href="#"
              >
                <i className="me-2 i-icon-primary-300 " data-lucide="baby"></i>
                <div className=" text-gray-700" href="#">
                  登入/註冊
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
