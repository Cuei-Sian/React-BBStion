import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  Ellipsis,
  Heart,
  MessageCircleMore,
  MoveRight,
  Search,
  Send,
  Star,
  X,
} from 'lucide-react';

function Homepage() {
  // const categories = ['全部分類', '嬰兒服飾', '男孩服飾', '玩具',
  //   '育兒書籍', '哺乳用具', '推車/安全座椅', '媽媽用品',
  // ];

  return (
    <>
      <section>
        <div className=" bg-gray-50 title-bg-color">
          {/* <!-- 桌面板 --> */}
          <div className="container-fluid  title-banner-md px-0 d-none d-sm-block ">
            <div className="position-absolute title-depiction mt-21 pe-3 ">
              <img
                className="title-img-md mb-8 "
                src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/hero_title.svg"
                alt="背景圖"
              />
              <div className="text-primary-600 d-flex align-items-center flex-column text-start">
                <p className="mb-1">
                  誕生於寶媽的心願，從一人轉向一群愛寶寶的父母 ——
                </p>
                <p>想讓這些寶物延續溫度，傳遞給下一個需要的家庭。</p>
              </div>
            </div>
          </div>
          {/* <!-- 手機板 --> */}
          <div className="container-md title-banner px-0 mx-0 d-sm-none d-block pb-12">
            <div className="justify-content-center px-12 ">
              <img
                className="lign-items-start title-img mb-8"
                src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/hero_title_mobile.svg"
                alt="背景圖"
                style={{ width: '192px' }}
              />
              <div className="text-primary-600  mb-8">
                <p className="mb-1">
                  誕生於寶媽的心願，從一人轉向一群愛寶寶的父母 ——
                </p>
                <p>想讓這些寶物延續溫度，傳遞給下一個需要的家庭。</p>
              </div>
              {/* <!-- 手機版搜尋欄 --> */}
              <div className="row mx-0 px-0 d-md-none d-block  ">
                <a className=" col-12  btn button-primary-default-text rounded-pill">
                  <i className=" text-white me-2" /*data-lucide="search"*/>
                    <Search />
                  </i>
                  <span>我要找寶物</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 搜尋列 電腦版--> */}
      <section>
        <div className="container px-0 search-bar  d-none d-sm-block ">
          <div className="row  d-flex justify-content-center   ">
            <div className=" pb-3 px-0 position-relative col-10 d-flex justify-content-center bg-gray-100 py-4 px-12 rounded-pill card-shadow-gray ">
              <button
                className=" btn bg-white dropdown-toggle text-gray-600 rounded-end rounded-pill border border-1 d-flex justify-content-between py-5 px-8 button-text"
                style={{ width: '212px' }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="d-flex align-items-center text-gray-600">
                  全部分類
                </span>
                <i
                  className=" text-gray-600"
                  // data-lucide="chevron-down"
                  style={{ width: '16px', height: '16px' }}
                >
                  <ChevronDown />
                </i>
              </button>
              <ul
                className="dropdown-menu mt-2 rounded-10 p-6"
                style={{ width: '212px' }}
              >
                <li className="dropdown-item mb-3 px-2 paragraph-body-small text-gray-800 fw-bold bg-white">
                  分類
                </li>
                <li>
                  <a
                    className="dropdown-item py-3 px-2 rounded-pill text-gray-800 "
                    href="#"
                  >
                    全部分類
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-3 px-2 rounded-pill text-gray-800"
                    href="#"
                  >
                    嬰兒服飾
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-3 px-2 rounded-pill text-gray-800"
                    href="#"
                  >
                    男孩服飾
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-3 px-2 rounded-pill text-gray-800"
                    href="#"
                  >
                    玩具
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-3 px-2 rounded-pill text-gray-800"
                    href="#"
                  >
                    育兒書籍
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-3 px-2 rounded-pill text-gray-800"
                    href="#"
                  >
                    哺乳用具
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-3 px-2 rounded-pill text-gray-800"
                    href="#"
                  >
                    推車/安全座椅
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item py-3 px-2 rounded-pill text-gray-800"
                    href="#"
                  >
                    媽媽用品
                  </a>
                </li>
              </ul>
              {/* <!-- 輸入框 電腦版 --> */}
              <div className="dropdown flex-grow-1  position-relative">
                <input
                  type="text "
                  style={{ maxWidth: '100%' }}
                  className="form-control py-5 rounded-start rounded-pill "
                  placeholder="輸入關鍵字..."
                  aria-label="Text input with dropdown button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <button
                  className=" btn btn-primary rounded-circle  me-2 position-absolute top-50 end-0 translate-middle-y me-2 d-flex justify-content-center align-items-center"
                  style={{ width: '48px', height: '48px' }}
                  type="submit"
                >
                  <i
                    className=" text-white"
                    // data-lucide="search"
                    style={{ width: '18px', height: '18px' }}
                  >
                    <Search />
                  </i>
                </button>
                <ul
                  className="dropdown-menu w-100 mt-2 rounded-10 p-6"
                  aria-labelledby="dropdownMenu2"
                >
                  <li>
                    <button
                      className="dropdown-item mb-3 paragraph-body-small fw-bold text-gray-800 bg-white"
                      type="button"
                    >
                      大家都在找
                    </button>
                  </li>
                  <li className="d-flex">
                    <button
                      className="py-2 px-5  border-0 rounded-pill me-2 btn-text-hover"
                      type="button"
                    >
                      寶寶衣物
                    </button>
                    <button
                      className="py-2 px-5  border-0 rounded-pill me-2 btn-text-hover"
                      type="button"
                    >
                      推車
                    </button>
                    <button
                      className="py-2 px-5  border-0 rounded-pill me-2 btn-text-hover"
                      type="button"
                    >
                      奶瓶
                    </button>
                    <button
                      className="py-2 px-5  border-0 rounded-pill me-2 btn-text-hover"
                      type="button"
                    >
                      玩具
                    </button>
                    <button
                      className="py-2 px-5  border-0 rounded-pill me-2 btn-text-hover"
                      type="button"
                    >
                      書籍
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  熱門分類  --> */}
      <section>
        <div className="bg-gray-50">
          <div className="container pb-17 pt-md-19 py-12">
            <h2 className="h5 mb-8 fw-bold">熱門分類</h2>
            {/* <!-- 分類卡片 --> */}
            <div className=" container px-0">
              <div className="row row-cols-2 row-cols-md-4 gx-4 gy-3 ">
                {/* <!--嬰兒服飾  --> */}
                <div className="col">
                  <div
                    className="  hot-card  baby-clothes card-shadow-primary rounded-10  bg-primary-50 py-md-8 ps-md-10"
                    style={{ maxWidth: '306px' }}
                    href=""
                  >
                    <a className="hot-card-body row " href="#">
                      <div className="col-md-4 d-flex justify-content-center p-0">
                        <img
                          className="hot-card-img img-fluid rounded-start mb-md-0 mb-3 d-md-block"
                          src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/category01_baby_clothes.svg"
                          style={{ width: '72px', height: '72px' }}
                          alt="嬰兒服飾"
                        />
                      </div>
                      <div className="col-md-8 p-md-0 d-flex align-items-center ">
                        <div className=" card-body d-flex justify-content-center ">
                          <h5 className="h6 fw-bold text-color-gray-600 p-0">
                            嬰兒服飾
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- 男孩服飾 --> */}
                <div className="col">
                  <div
                    className="  hot-card boy-clothes  card-shadow-primary rounded-10  bg-primary-50 py-md-8 ps-md-10 "
                    style={{ maxWidth: '306px' }}
                    href=""
                  >
                    <a className="hot-card-body row gx-6" href="#">
                      <div className=" col-12 col-md-4 d-flex justify-content-center p-0 p-md-0 mb-md-0 mx-0  ">
                        <img
                          className="hot-card-img img-fluid rounded-start mb-md-0 m-0 mb-3 d-md-block"
                          src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/category02_boy_clothes.svg"
                          style={{ width: '72px', height: '72px' }}
                          alt="男孩服飾"
                        />
                      </div>
                      <div className="col-12 col-md-8 d-flex align-items-center  ">
                        <div className="overlay card-body d-flex justify-content-center ">
                          <h5 className="h6 fw-bold text-color-gray-600  p-0">
                            男孩服飾
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- 女孩服飾 --> */}
                <div className="col">
                  <div
                    className=" hot-card girl-clothes card-shadow-primary rounded-10  bg-primary-50 py-md-8 ps-md-10"
                    style={{ maxWidth: '306px' }}
                    href=""
                  >
                    <a className="hot-card-body row gx-6" href="#">
                      <div className=" col-12 col-md-4 col-xl-4 d-flex justify-content-center p-0 p-md-0 mb-md-0 mx-0  ">
                        <img
                          className="hot-card-img img-fluid rounded-start mb-md-0 mb-3 d-md-block"
                          src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/category03_girl_clothes.svg"
                          style={{ width: '72px', height: '72px' }}
                          alt="女孩服飾"
                        />
                      </div>
                      <div className="col-12 col-md-8 d-flex align-items-center p-0 ">
                        <div className="overlay card-body d-flex justify-content-center ">
                          <h5 className="h6 fw-bold text-color-gray-600 p-0">
                            女孩服飾
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- 玩具 --> */}
                <div className="col">
                  <div
                    className="hot-card toy card-shadow-primary rounded-10  bg-primary-50 py-md-8 ps-md-10 "
                    style={{ maxWidth: '306px' }}
                    href=""
                  >
                    <a className="hot-card-body row gx-6" href="#">
                      <div className=" col-12 col-md-4 d-flex justify-content-center p-0 p-md-0 mb-md-0 mx-0  ">
                        <img
                          className="hot-card-img img-fluid rounded-start mb-md-0 mb-3 d-md-block"
                          src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/category04_toy.svg"
                          style={{ width: '72px', height: '72px' }}
                          alt="玩具"
                        />
                      </div>
                      <div className="col-12 col-md-8 d-flex align-items-center p-0 ">
                        <div className="overlay card-body d-flex justify-content-center ">
                          <h5 className="h6 fw-bold text-color-gray-600 p-0">
                            玩具
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- 育兒書籍 --> */}
                <div className="col">
                  <div
                    className="hot-card books card-shadow-primary rounded-10  bg-primary-50 py-md-8 ps-md-10"
                    style={{ maxWidth: '306px' }}
                    href=""
                  >
                    <a className="hot-card-body row gx-6" href="#">
                      <div className=" col-12 col-md-4 d-flex justify-content-center p-0 p-md-0 mb-md-0 mx-0  ">
                        <img
                          className="hot-card-img img-fluid rounded-start mb-md-0 mb-3  d-md-block"
                          src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/category05_books.svg"
                          style={{ width: '72px', height: '72px' }}
                          alt="玩具"
                        />
                      </div>
                      <div className="col-12 col-md-8 d-flex align-items-center p-0 ">
                        <div className="overlay card-body d-flex justify-content-center ">
                          <h5 className="h6 fw-bold text-color-gray-600 p-0">
                            育兒書籍
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- 哺乳用品 --> */}
                <div className="col">
                  <div
                    className=" hot-card maternity-supplies card-shadow-primary rounded-10  bg-primary-50 py-md-8 ps-md-10  "
                    style={{ maxWidth: '306px' }}
                    href=""
                  >
                    <a className="hot-card-body row gx-6" href="#">
                      <div className=" col-12 col-md-4 d-flex justify-content-center p-0 p-md-0 mb-md-0 mx-0  ">
                        <img
                          className="hot-card-img img-fluid rounded-start mb-md-0 mb-3 d-md-block"
                          src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/category06_breast_pump.svg"
                          style={{ width: '72px', height: '72px' }}
                          alt="玩具"
                        />
                      </div>
                      <div className="col-12 col-md-8 d-flex align-items-center p-0 ">
                        <div className="overlay card-body d-flex justify-content-center ">
                          <h5 className="h6 fw-bold text-color-gray-600 p-0">
                            哺乳用品
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- 推車/安全座椅 --> */}
                <div className="col">
                  <div
                    className="hot-card safety-seat card-shadow-primary rounded-10  bg-primary-50 py-md-8 ps-md-10"
                    style={{ maxWidth: '306px' }}
                    href=""
                  >
                    <a className="hot-card-body row gx-6" href="#">
                      <div className=" col-12 col-md-4 d-flex justify-content-center p-0 p-md-0 mb-md-0 mx-0  ">
                        <img
                          className="hot-card-img img-fluid rounded-start mb-md-0 mb-3 d-md-block"
                          src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/category07_stroller.svg"
                          style={{ width: '72px', height: '72px' }}
                          alt="玩具"
                        />
                      </div>
                      <div className="col-12 col-md-8 d-flex align-items-center p-0 ">
                        <div className="overlay card-body d-flex justify-content-center ">
                          <h5 className="h6 fw-bold text-color-gray-600 p-0">
                            <span className="d-md-block d-lg-inline">
                              推車/
                            </span>
                            <span>安全座椅</span>
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- 媽媽用品 --> */}
                <div className="col">
                  <div
                    className=" hot-card mom-supplies card-shadow-primary rounded-10  bg-primary-50 py-md-8 ps-md-10 "
                    style={{ maxWidth: '306px' }}
                    href=""
                  >
                    <a className="hot-card-body row gx-6" href="#">
                      <div className=" col-12 col-md-4 d-flex justify-content-center p-0 p-md-0 mb-md-0 mx-0  ">
                        <img
                          className="hot-card-img img-fluid rounded-start mb-md-0 mb-3 d-md-block"
                          src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/category08_bag.svg"
                          style={{ width: '72px', height: '72px' }}
                          alt="玩具"
                        />
                      </div>
                      <div className="col-12 col-md-8 d-flex align-items-center p-0 ">
                        <div className="overlay card-body d-flex justify-content-center ">
                          <h5 className="h6 fw-bold text-color-gray-600 p-0">
                            媽媽用品
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  愛心轉送  --> */}
      <section>
        <div className="section02-bg">
          {/* <!-- 彎曲上圖 --> */}
          <div className="section04_border_top sticky-top">
            <img
              src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/section04_border_top.svg"
              style={{ width: '100%', marginTop: '-16px' }}
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-12 d-md-flex justify-content-md-center d-flex justify-content-center mb-md-15 mt-md-21 mb-12 mt-12">
                <img
                  src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/section02_title.svg"
                  alt="愛心轉送字樣"
                />
              </div>
              <div className="col-lg-9  gap-6 section02-pb d-lg-flex flex-lg-row d-flex align-items-center flex-column ">
                <a
                  className="col-lg-4 d-lg-flex justify-content-lg-center flex-column  bg-btn-bg bg-btn-img position-relative"
                  href="#"
                  style={{
                    padding: ' 52px 73px',
                    width: '306px',
                    height: '249px',
                  }}
                >
                  <img
                    className="mb-5"
                    style={{ width: '160px', height: '102px', opacity: '.75' }}
                    src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/donation01_cherity.svg"
                    alt="公益愛心捐贈"
                  />
                  <h5 className="text-center h6 text-primary-600 fw-bold">
                    公益愛心捐贈
                  </h5>
                </a>
                <a
                  className="col-lg-4 d-lg-flex justify-content-lg-center flex-column  bg-btn-bg  bg-btn-img position-relative"
                  href="#"
                  style={{
                    padding: '52px 73px',
                    width: '306px',
                    height: '249px',
                  }}
                >
                  <img
                    className="mb-5 "
                    style={{ width: '160px', height: '102px', opacity: '.75' }}
                    src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/donation02_personal.svg"
                    alt="個人愛心捐贈"
                  />
                  <h5 className="text-center h6 text-primary-600 fw-bold">
                    個人愛心捐贈
                  </h5>
                </a>
                <a
                  className="col-lg-4 d-lg-flex justify-content-lg-center flex-column  bg-btn-bg bg-btn-img position-relative"
                  href="#"
                  style={{
                    padding: '52px 73px',
                    width: '306px',
                    height: '249px',
                  }}
                >
                  <img
                    className="mb-5"
                    style={{ width: '160px', height: '102px', opacity: '.75' }}
                    src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/donation03_history.svg"
                    alt="個人轉送歷史"
                  />
                  <h5 className="text-center h6 text-primary-600 fw-bold">
                    個人轉送歷史
                  </h5>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- 彎曲上圖 --> */}
          <div className="section04_border_bottom sticky-bottom">
            <img
              src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/section04_border_top.svg"
              style={{ width: ' 100%', marginBottom: '121px' }}
              alt=""
            />
          </div>
        </div>
      </section>
      {/* <!-- 更多商品 --> */}
      <section>
        <div className="bg-gray-50">
          <div className="container py-17">
            {/* <!-- title --> */}
            <div className="d-flex justify-content-between mb-lg-8 mb-6">
              <h2 className="h3 text-gray-800 fw-bold ">更多商品</h2>
              <a
                className="d-flex align-items-center  more-link"
                href="product-list-page.html"
              >
                <h3 className="paragraph-body text-primary-500 me-1">看更多</h3>
                <span
                  className="icon-wrapper  d-flex align-items-center justify-content-center "
                  style={{
                    width: '32px',
                    height: '16px',
                    borderRadius: '12px',
                  }}
                >
                  <i
                    className="text-white icon-move "
                    // data-lucide="move-right"
                    style={{ width: '16px', height: '16px' }}
                  >
                    <MoveRight />
                  </i>
                </span>
              </a>
            </div>
            {/* <!-- 卡片內容 --> */}
            <div className="row gx-4 d-flex">
              {/* <!-- 01 --> */}
              {/* <!-- 卡片 body 嬰兒推車Combi  --> */}
              <div className="col-lg-3 col-6 card-container ">
                <a className=" d-lg-flex align-items-lg-start" href="#">
                  <div className="card  product-rounded card-shadow-gray position-relative mb-4 border border-1 border-lg-0  ">
                    <div className="product-img">
                      <img
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/product01.jpg?raw=true"
                        alt="嬰兒推車Combi"
                      />
                    </div>
                    {/* <!-- 標籤 手機板 --> */}
                    <div className="d-flex  d-lg-none d-block">
                      <div
                        className="position-absolute"
                        style={{ top: '16px', left: '16px' }}
                      >
                        <p
                          className="bg-highligh-300 text-white py-0 px-2 paragraph-caption rounded-pill d-flex align-items-center"
                          style={{ height: '18px' }}
                        >
                          九成新
                        </p>
                      </div>
                      <div
                        className="position-absolute"
                        style={{ top: '16px', right: '16px' }}
                      >
                        <i
                          className=" text-white p-2 bg-black rounded-circle opacity-50"
                          style={{ width: '40px', height: '40px' }}
                          // data-lucide="heart"
                        >
                          <Heart />
                        </i>
                      </div>
                    </div>
                    {/* <!-- 標籤 電腦板 --> */}
                    <div
                      className="position-absolute d-lg-flex  d-lg-block d-none"
                      style={{ top: '16px', left: '16px' }}
                    >
                      <p className="px-3 py-1 bg-highligh-300 text-white rounded-pill me-1">
                        九成新
                      </p>
                      <p className="px-3 py-1 bg-primary-400 text-white  rounded-pill">
                        養寶寶必備
                      </p>
                    </div>
                    <div
                      className="position-absolute heart-icon"
                      style={{ top: '16px', right: '16px' }}
                    >
                      <i
                        className=" text-white p-2 bg-black rounded-circle opacity-50"
                        style={{ width: '40px', height: '40px' }}
                        // data-lucide="heart"
                      >
                        <Heart />
                      </i>
                    </div>
                    {/* <!-- 按鈕 電腦板 --> */}
                    <div className=" d-lg-flex justify-content-lg-center align-items-lg-center d-lg-block d-none ">
                      <a
                        className="d-lg-flex justify-content-lg-center align-items-lg-center border-end button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className=" me-lg-2 text-hover"
                          // data-lucide="send"
                        >
                          <Send />
                        </i>
                        <p className="paragraph-body  button-hover-text">
                          分享
                        </p>
                      </a>
                      <a
                        className=" d-lg-flex justify-content-lg-center align-items-lg-center button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className=" me-lg-2 text-hover"
                          // data-lucide="message-circle-more"
                        >
                          <MessageCircleMore />
                        </i>
                        <p className="paragraph-body  button-hover-text">
                          聊聊
                        </p>
                      </a>
                    </div>

                    {/* <!-- 按鈕  手機版 --> */}
                    <div className="px-3 py-2 d-block d-lg-none">
                      <a className="h5 fw-bold mb-1 text-truncate">
                        嬰兒推車Combi
                      </a>
                      <p
                        className="paragraph-caption text-primary-500  px-1 border border-1 border-primary-500 mb-1"
                        style={{
                          width: '70px',
                          height: '18px',
                          borderRadius: '4px',
                        }}
                      >
                        養寶寶必備
                      </p>
                      <p className="paragraph-body-small text-gray-600 mb-1">
                        面交、自付運費
                      </p>
                      <div className=" d-flex justify-content-between align-items-center">
                        <a href="#">
                          <p className="text-primary-500 fw-bold h6 ">
                            NT$ 2,500
                          </p>
                        </a>
                        {/* <!--  Offcanvas --> */}
                        <button
                          className="py-2 border-0 bg-white"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottom"
                          aria-controls="offcanvasBottom"
                        >
                          <i
                            className="text-gray-800 "
                            style={{ width: '24px', height: '24px' }}
                            // data-lucide="ellipsis"
                          >
                            <Ellipsis />
                          </i>
                        </button>
                        <div
                          className=" offcanvas offcanvas-bottom rounded-5 rounded-bottom-0"
                          tabindex="-1"
                          id="offcanvasBottom"
                          aria-labelledby="offcanvasBottomLabel"
                        >
                          <div
                            className="d-flex flex-row-reverse"
                            style={{ padding: '16px' }}
                          >
                            <button
                              type="button"
                              className=" border-0 p-0  bg-gray-200 rounded-circle  d-flex justify-content-center align-items-center"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                              style={{ width: '16px', height: '16px' }}
                            >
                              <i
                                className="text-black "
                                // data-lucide="x"
                                style={{ width: '7px', padding: '0' }}
                              >
                                <X />
                              </i>
                            </button>
                          </div>
                          <div className=" ">
                            <a
                              className="d-flex justify-content-center align-items-center py-3 mb-3"
                              href="#"
                            >
                              <i
                                className="text-primary-400 me-2"
                                // data-lucide="send"
                              >
                                <Send />
                              </i>
                              <p className="paragraph-body text-gray-700 paragraph-body">
                                分享
                              </p>
                            </a>
                            <a
                              className=" d-flex justify-content-center align-items-center py-3 mb-6"
                              href="#"
                            >
                              <i
                                className="text-primary-400 me-2 "
                                // data-lucide="message-circle-more"
                              >
                                <MessageCircleMore />
                              </i>
                              <p className="paragraph-body text-gray-700 paragraph-body">
                                聊聊
                              </p>
                            </a>
                          </div>
                        </div>
                        {/* <!--  Offcanvas  底部--> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- 卡片身體底 --> */}
                  {/* <!-- 卡片說明文字  電腦版--> */}
                  <div className="px-lg-5 d-lg-block d-none mb-lg-12">
                    <a
                      href="#"
                      className="h5  mb-lg-2 fw-bold text-truncate product-card-title"
                    >
                      嬰兒推車Combi
                    </a>
                    <p className="paragraph-body-small text-gray-600 mb-lg-2">
                      面交、自付運費
                    </p>
                    <p className=" text-primary-500 fs-lg-5 fw-bold">
                      NT$ 2,500
                    </p>
                  </div>
                </a>
              </div>

              {/* <!-- 02 --> */}
              {/* <!-- 卡片 body 嬰兒床+蚊帳組  --> */}
              <div className="col-lg-3 col-6  card-container">
                <a className=" d-lg-flex align-items-lg-start" href="#">
                  <div className="card  product-rounded card-shadow-gray position-relative mb-4 border border-1 border-lg-0  ">
                    <div className="product-img">
                      <img
                        className=""
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/product02.jpg?raw=true"
                        alt="嬰兒床+蚊帳組"
                      />
                    </div>
                    {/* <!-- 標籤 手機板 --> */}
                    <div className="d-flex  d-lg-none d-block  ">
                      <div
                        className="position-absolute"
                        style={{ top: '16px', left: '16px' }}
                      >
                        <p
                          className="bg-highligh-300 text-white py-0 px-2 paragraph-caption rounded-pill d-flex align-items-center"
                          style={{ height: '18px' }}
                        >
                          八成新
                        </p>
                      </div>
                      <div
                        className="position-absolute"
                        style={{ top: '16px', right: '16px' }}
                      >
                        <i
                          className=" text-white p-2 bg-black rounded-circle opacity-50"
                          style={{ width: '40px', height: '40px' }}
                          // data-lucide="heart"
                        >
                          <Heart />
                        </i>
                      </div>
                    </div>
                    {/* <!-- 標籤 電腦板 --> */}
                    <div
                      className="position-absolute d-lg-flex  d-lg-block d-none"
                      style={{ top: '16px', left: '16px' }}
                    >
                      <p className="px-3 py-1 bg-highligh-300 text-white rounded-pill me-1">
                        七成新
                      </p>
                      <p className="px-3 py-1 bg-primary-400 text-white  rounded-pill">
                        寶寶必備
                      </p>
                    </div>
                    <div
                      className="position-absolute heart-icon"
                      style={{ top: '16px', right: '16px' }}
                    >
                      <i
                        className=" text-white p-2 bg-black rounded-circle opacity-50"
                        style={{ width: '40px', height: '40px' }}
                        // data-lucide="heart"
                      >
                        <Heart />
                      </i>
                    </div>
                    {/* <!-- 按鈕 電腦板 --> */}
                    <div className=" d-lg-flex justify-content-lg-center align-items-lg-center d-lg-block d-none">
                      <a
                        className="d-lg-flex justify-content-lg-center align-items-lg-center border-end button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className=" me-lg-2 text-hover"
                          // data-lucide="send"
                        >
                          <Send />
                        </i>
                        <p className="paragraph-body  button-hover-text">
                          分享
                        </p>
                      </a>
                      <a
                        className=" d-lg-flex justify-content-lg-center align-items-lg-center button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className=" me-lg-2 text-hover"
                          // data-lucide="message-circle-more"
                        >
                          <MessageCircleMore />
                        </i>
                        <p className="paragraph-body  button-hover-text">
                          聊聊
                        </p>
                      </a>
                    </div>

                    {/* <!-- 按鈕  手機版 --> */}
                    <div className="px-3 py-2 d-block d-lg-none">
                      <h4 className="h5 fw-bold mb-1 text-truncate">
                        嬰兒床+蚊帳組
                      </h4>
                      <p
                        className="paragraph-caption text-primary-500  px-1 border border-1 border-primary-500 mb-1"
                        style={{
                          width: '58px',
                          height: '18px',
                          borderRadius: '4px',
                        }}
                      >
                        寶寶必備
                      </p>
                      <p className="paragraph-body-small text-gray-600 mb-1">
                        自取
                      </p>
                      <div className=" d-flex justify-content-between align-items-center">
                        <a href="#">
                          <p className="text-primary-500 fw-bold h6 ">
                            NT$ 1,800
                          </p>
                        </a>
                        {/* <!--  Offcanvas --> */}
                        <button
                          className="py-2 border-0 bg-white"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottom"
                          aria-controls="offcanvasBottom"
                        >
                          <i
                            className="text-gray-800 "
                            style={{ width: '24px', height: '24px' }}
                            // data-lucide="ellipsis"
                          >
                            <Ellipsis />
                          </i>
                        </button>
                        <div
                          className=" offcanvas offcanvas-bottom rounded-5 rounded-bottom-0"
                          tabindex="-1"
                          id="offcanvasBottom"
                          aria-labelledby="offcanvasBottomLabel"
                        >
                          <div
                            className="d-flex flex-row-reverse"
                            style={{ padding: '16px' }}
                          >
                            <button
                              type="button"
                              className=" border-0 p-0  bg-gray-200 rounded-circle  d-flex justify-content-center align-items-center"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                              style={{ width: '16px', height: '16px' }}
                            >
                              <i
                                className="text-black "
                                // data-lucide="x"
                                style={{ width: '7px', padding: '0' }}
                              >
                                <X />
                              </i>
                            </button>
                          </div>
                          <div className=" ">
                            <a
                              className="d-flex justify-content-center align-items-center py-3 mb-3"
                              href="#"
                            >
                              <i
                                className="text-primary-400 me-2"
                                // data-lucide="send"
                              >
                                <Send />
                              </i>
                              <p className="paragraph-body text-gray-700 paragraph-body">
                                分享
                              </p>
                            </a>
                            <a
                              className=" d-flex justify-content-center align-items-center py-3 mb-6"
                              href="#"
                            >
                              <i
                                className="text-primary-400 me-2 "
                                // data-lucide="message-circle-more"
                              >
                                <MessageCircleMore />
                              </i>
                              <p className="paragraph-body text-gray-700 paragraph-body">
                                聊聊
                              </p>
                            </a>
                          </div>
                        </div>
                        {/* <!--  Offcanvas  底部--> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- 卡片身體底 --> */}
                  {/* <!-- 卡片說明文字  電腦版--> */}
                  <div className="px-lg-5 d-lg-block d-none mb-lg-12">
                    <a
                      href="#"
                      className="h5  mb-lg-2 fw-bold text-truncate product-card-title"
                    >
                      嬰兒床+蚊帳組
                    </a>
                    <p className="paragraph-body-small text-gray-600 mb-lg-2">
                      自取
                    </p>
                    <p className=" text-primary-500 fs-lg-5 fw-bold">
                      NT$ 1,800
                    </p>
                  </div>
                </a>
              </div>

              {/* <!-- 03 --> */}
              {/* <!-- 卡片 body 貝親奶瓶 160ml（2入）  --> */}
              <div className="col-lg-3 col-6 card-container">
                <a className=" d-lg-flex align-items-lg-start" href="#">
                  <div className="card  product-rounded card-shadow-gray position-relative mb-4 border border-1 border-lg-0  ">
                    <div className="product-img">
                      <img
                        className=""
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/product03.jpg?raw=true"
                        alt="貝親奶瓶 160ml（2入）"
                      />
                    </div>
                    {/* <!-- 標籤 手機板 --> */}
                    <div className="d-flex  d-lg-none d-block  ">
                      <div
                        className="position-absolute"
                        style={{ top: '16px', left: '16px' }}
                      >
                        <p
                          className="bg-highligh-300 text-white py-0 px-2 paragraph-caption rounded-pill d-flex align-items-center"
                          style={{ height: '18px' }}
                        >
                          可捐贈
                        </p>
                      </div>
                      <div
                        className="position-absolute"
                        style={{ top: '16px', right: '16px' }}
                      >
                        <i
                          className=" text-white p-2 bg-black rounded-circle opacity-50"
                          style={{ width: '40px', height: '40px' }}
                          // data-lucide="heart"
                        >
                          <Heart />
                        </i>
                      </div>
                    </div>
                    {/* <!-- 標籤 電腦板 --> */}
                    <div
                      className="position-absolute d-lg-flex  d-lg-block d-none"
                      style={{ top: '16px', left: ' 16px' }}
                    >
                      <p className="px-3 py-1 bg-highligh-300 text-white rounded-pill me-1">
                        可捐贈
                      </p>
                      <p className="px-3 py-1 bg-primary-400 text-white  rounded-pill">
                        嬰兒用品
                      </p>
                    </div>
                    <div
                      className="position-absolute heart-icon"
                      style={{ top: '16px', right: '16px' }}
                    >
                      <i
                        className=" text-white p-2 bg-black rounded-circle opacity-50"
                        style={{ width: '40px', height: '40px' }}
                        // data-lucide="heart"
                      >
                        <Heart />
                      </i>
                    </div>
                    {/* <!-- 按鈕 電腦板 --> */}
                    <div className=" d-lg-flex justify-content-lg-center align-items-lg-center d-lg-block d-none">
                      <a
                        className="d-lg-flex justify-content-lg-center align-items-lg-center border-end button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2"
                          // data-lucide="send"
                        >
                          <Send />
                        </i>
                        <p className="paragraph-body button-hover-text">分享</p>
                      </a>
                      <a
                        className=" d-lg-flex justify-content-lg-center align-items-lg-center button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2 "
                          // data-lucide="message-circle-more"
                        >
                          <MessageCircleMore />
                        </i>
                        <p className="paragraph-body button-hover-text">聊聊</p>
                      </a>
                    </div>

                    {/* <!-- 按鈕  手機版 --> */}
                    <div className="px-3 py-2 d-block d-lg-none">
                      <h4 className="h5 fw-bold mb-1 text-truncate">
                        貝親奶瓶 160ml（2入）
                      </h4>
                      <p
                        className="paragraph-caption text-primary-500  px-1 border border-1 border-primary-500 mb-1"
                        style={{
                          width: '58px',
                          height: '18px',
                          borderRadius: '4px',
                        }}
                      >
                        嬰兒用品
                      </p>
                      <p className="paragraph-body-small text-gray-600 mb-1">
                        郵寄
                      </p>
                      <div className=" d-flex justify-content-between align-items-center">
                        <a href="#">
                          <p className="text-primary-500 fw-bold h6 ">免費</p>
                        </a>
                        {/* <!--  Offcanvas --> */}
                        <button
                          className="py-2 border-0 bg-white"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottom"
                          aria-controls="offcanvasBottom"
                        >
                          <i
                            className="text-gray-800 "
                            style={{ width: '24px', height: '24px' }}
                            // data-lucide="ellipsis"
                          >
                            <Ellipsis />
                          </i>
                        </button>
                        <div
                          className=" offcanvas offcanvas-bottom rounded-5 rounded-bottom-0"
                          tabindex="-1"
                          id="offcanvasBottom"
                          aria-labelledby="offcanvasBottomLabel"
                        >
                          <div
                            className="d-flex flex-row-reverse"
                            style={{ padding: '16px' }}
                          >
                            <button
                              type="button"
                              className=" border-0 p-0  bg-gray-200 rounded-circle  d-flex justify-content-center align-items-center"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                              style={{ width: '16px', height: '16px' }}
                            >
                              <i
                                className="text-black "
                                // data-lucide="x"
                                style={{ width: '7px', padding: '0' }}
                              >
                                <X />
                              </i>
                            </button>
                          </div>
                          <div className=" ">
                            <a
                              className="d-flex justify-content-center align-items-center py-3 mb-3"
                              href="#"
                            >
                              <i
                                className="text-primary-400 me-2"
                                // data-lucide="send"
                              >
                                <Send />
                              </i>
                              <p className="paragraph-body text-gray-700 paragraph-body">
                                分享
                              </p>
                            </a>
                            <a
                              className=" d-flex justify-content-center align-items-center py-3 mb-6"
                              href="#"
                            >
                              <i
                                className="text-primary-400 me-2 "
                                // data-lucide="message-circle-more"
                              >
                                <MessageCircleMore />
                              </i>
                              <p className="paragraph-body text-gray-700 paragraph-body">
                                聊聊
                              </p>
                            </a>
                          </div>
                        </div>
                        {/* <!--  Offcanvas  底部--> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- 卡片身體底 --> */}
                  {/* <!-- 卡片說明文字  電腦版--> */}
                  <div className="px-lg-5 d-lg-block d-none mb-lg-12">
                    <a
                      href="#"
                      className="h5  mb-lg-2 fw-bold text-truncate product-card-title"
                    >
                      貝親奶瓶 160ml（2入）
                    </a>
                    <p className="paragraph-body-small text-gray-600 mb-lg-2">
                      郵寄
                    </p>
                    <p className=" text-primary-500 fs-lg-5 fw-bold">免費</p>
                  </div>
                </a>
              </div>

              {/* <!-- 04 --> */}
              {/* <!-- 卡片 body 嬰兒學步車  --> */}
              <div className="col-lg-3 col-6 card-container">
                <a className=" d-lg-flex align-items-lg-start" href="#">
                  <div className="card  product-rounded card-shadow-gray position-relative mb-4 border border-1 border-lg-0  ">
                    <div className="product-img">
                      <img
                        className=""
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/product04.jpg?raw=true"
                        alt="嬰兒學步車"
                      />
                    </div>
                    {/* <!-- 標籤 手機板 --> */}
                    <div className="d-flex  d-lg-none d-block  ">
                      <div
                        className="position-absolute"
                        style={{ top: '16px', left: '16px' }}
                      >
                        <p
                          className="bg-highligh-300 text-white py-0 px-2 paragraph-caption rounded-pill d-flex align-items-center"
                          style={{ height: '18px' }}
                        >
                          七成新
                        </p>
                      </div>
                      <div
                        className="position-absolute"
                        style={{ top: '16px', right: '16px' }}
                      >
                        <i
                          className=" text-white p-2 bg-black rounded-circle opacity-50"
                          style={{ width: '40px', height: '40px' }}
                          // data-lucide="heart"
                        >
                          <Heart />
                        </i>
                      </div>
                    </div>
                    {/* <!-- 標籤 電腦板 --> */}
                    <div
                      className="position-absolute d-lg-flex  d-lg-block d-none"
                      style={{ top: '16px', left: '16px' }}
                    >
                      <p className="px-3 py-1 bg-highligh-300 text-white rounded-pill me-1">
                        七成新
                      </p>
                      <p className="px-3 py-1 bg-primary-400 text-white  rounded-pill">
                        居家育兒好物
                      </p>
                    </div>
                    <div
                      className="position-absolute heart-icon"
                      style={{ top: '16px', right: '16px' }}
                    >
                      <i
                        className=" text-white p-2 bg-black rounded-circle opacity-50"
                        style={{ width: '40px', height: ' 40px' }}
                        // data-lucide="heart"
                      >
                        <Heart />
                      </i>
                    </div>
                    {/* <!-- 按鈕 電腦板 --> */}
                    <div className=" d-lg-flex justify-content-lg-center align-items-lg-center d-lg-block d-none">
                      <a
                        className="d-lg-flex justify-content-lg-center align-items-lg-center border-end button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2"
                          // data-lucide="send"
                        >
                          <Send />
                        </i>
                        <p className="paragraph-body button-hover-text">分享</p>
                      </a>
                      <a
                        className=" d-lg-flex justify-content-lg-center align-items-lg-center button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2 "
                          // data-lucide="message-circle-more"
                        >
                          <MessageCircleMore />
                        </i>
                        <p className="paragraph-body button-hover-text">聊聊</p>
                      </a>
                    </div>

                    {/* <!-- 按鈕  手機版 --> */}
                    <div className="px-3 py-2 d-block d-lg-none">
                      <h4 className="h5 fw-bold mb-1 text-truncate ">
                        嬰兒學步車
                      </h4>
                      <p
                        className="paragraph-caption text-primary-500  px-1 border border-1 border-primary-500 mb-1"
                        style={{
                          width: '82px',
                          height: '18px',
                          borderRadius: '4px',
                        }}
                      >
                        居家育兒好物
                      </p>
                      <p className="paragraph-body-small text-gray-600 mb-1">
                        面交
                      </p>
                      <div className=" d-flex justify-content-between align-items-center">
                        <a href="#">
                          <p className="text-primary-500 fw-bold h6 ">
                            NT$ 500
                          </p>
                        </a>
                        {/* <!--  Offcanvas --> */}
                        <button
                          className="py-2 border-0 bg-white"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottom"
                          aria-controls="offcanvasBottom"
                        >
                          <i
                            className="text-gray-800 "
                            style={{ width: '24px', height: '24px' }}
                            // data-lucide="ellipsis"
                          >
                            <Ellipsis />
                          </i>
                        </button>
                        <div
                          className=" offcanvas offcanvas-bottom rounded-5 rounded-bottom-0"
                          tabindex="-1"
                          id="offcanvasBottom"
                          aria-labelledby="offcanvasBottomLabel"
                        >
                          <div
                            className="d-flex flex-row-reverse"
                            style={{ padding: '16px' }}
                          >
                            <button
                              type="button"
                              className=" border-0 p-0  bg-gray-200 rounded-circle  d-flex justify-content-center align-items-center"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                              style={{ width: '16px', height: '16px' }}
                            >
                              <i
                                className="text-black "
                                // data-lucide="x"
                                style={{ width: '7px', padding: '0' }}
                              >
                                <X />
                              </i>
                            </button>
                          </div>
                          <div className=" ">
                            <a
                              className="d-flex justify-content-center align-items-center py-3 mb-3"
                              href="#"
                            >
                              <i
                                className="text-hover me-2"
                                // data-lucide="send"
                              >
                                <Send />
                              </i>
                              <p className="paragraph-body button-hover-text">
                                分享
                              </p>
                            </a>
                            <a
                              className=" d-flex justify-content-center align-items-center py-3 mb-6"
                              href="#"
                            >
                              <i
                                className="text-hover me-2 "
                                // data-lucide="message-circle-more"
                              >
                                <MessageCircleMore />
                              </i>
                              <p className="paragraph-body button-hover-text">
                                聊聊
                              </p>
                            </a>
                          </div>
                        </div>
                        {/* <!--  Offcanvas  底部--> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- 卡片身體底 --> */}
                  {/* <!-- 卡片說明文字  電腦版--> */}
                  <div className="px-lg-5 d-lg-block d-none mb-lg-12">
                    <a
                      href="#"
                      className="h5  mb-lg-2 fw-bold text-truncate product-card-title"
                    >
                      嬰兒學步車
                    </a>
                    <p className="paragraph-body-small text-gray-600 mb-lg-2">
                      面交
                    </p>
                    <p className=" text-primary-500 fs-lg-5 fw-bold">NT$ 500</p>
                  </div>
                </a>
              </div>

              {/* <!-- 05 --> */}
              {/* <!-- 卡片 body 嬰兒床圍（4片組）  --> */}
              <div className="col-lg-3 col-6 card-container">
                <a className=" d-lg-flex align-items-lg-start" href="#">
                  <div className="card  product-rounded card-shadow-gray position-relative mb-4 border border-1 border-lg-0  ">
                    <div className="product-img">
                      <img
                        className=""
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/product05.jpg?raw=true"
                        alt="嬰兒床圍（4片組）"
                      />
                    </div>
                    {/* <!-- 標籤 手機板 --> */}
                    <div className="d-flex  d-lg-none d-block  ">
                      <div
                        className="position-absolute"
                        style={{ top: '16px', left: '16px' }}
                      >
                        <p
                          className="bg-highligh-300 text-white py-0 px-2 paragraph-caption rounded-pill d-flex align-items-center"
                          style={{ height: '18px' }}
                        >
                          八成新
                        </p>
                      </div>
                      <div
                        className="position-absolute"
                        style={{ top: '16px', right: '16px' }}
                      >
                        <i
                          className=" text-white p-2 bg-black rounded-circle opacity-50"
                          style={{ width: '40px', height: ' 40px' }}
                          // data-lucide="heart"
                        >
                          <Heart />
                        </i>
                      </div>
                    </div>
                    {/* <!-- 標籤 電腦板 --> */}
                    <div
                      className="position-absolute d-lg-flex  d-lg-block d-none"
                      style={{ top: '16px', left: '16px' }}
                    >
                      <p className="px-3 py-1 bg-highligh-300 text-white rounded-pill me-1">
                        八成新
                      </p>
                      <p className="px-3 py-1 bg-primary-400 text-white  rounded-pill">
                        育兒好物
                      </p>
                    </div>
                    <div
                      className="position-absolute heart-icon"
                      style={{ top: '16px', right: '16px' }}
                    >
                      <i
                        className=" text-white p-2 bg-black rounded-circle opacity-50"
                        style={{ width: '40px', height: '40px' }}
                        // data-lucide="heart"
                      >
                        <Heart />
                      </i>
                    </div>
                    {/* <!-- 按鈕 電腦板 --> */}
                    <div className=" d-lg-flex justify-content-lg-center align-items-lg-center d-lg-block d-none">
                      <a
                        className="d-lg-flex justify-content-lg-center align-items-lg-center border-end button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2"
                          // data-lucide="send"
                        >
                          <Send />
                        </i>
                        <p className="paragraph-body button-hover-text">分享</p>
                      </a>
                      <a
                        className=" d-lg-flex justify-content-lg-center align-items-lg-center button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2 "
                          // data-lucide="message-circle-more"
                        >
                          <MessageCircleMore />
                        </i>
                        <p className="paragraph-body button-hover-text">聊聊</p>
                      </a>
                    </div>

                    {/* <!-- 按鈕  手機版 --> */}
                    <div className="px-3 py-2 d-block d-lg-none">
                      <h4 className="h5 fw-bold mb-1 text-truncate">
                        嬰兒床圍（4片組）
                      </h4>
                      <p
                        className="paragraph-caption text-primary-500  px-1 border border-1 border-primary-500 mb-1"
                        style={{
                          width: '58px',
                          height: '18px',
                          borderRadius: '4px',
                        }}
                      >
                        育兒好物
                      </p>
                      <p className="paragraph-body-small text-gray-600 mb-1">
                        超商店到店
                      </p>
                      <div className=" d-flex justify-content-between align-items-center">
                        <a href="#">
                          <p className="text-primary-500 fw-bold h6 ">
                            NT$ 200
                          </p>
                        </a>
                        {/* <!--  Offcanvas --> */}
                        <button
                          className="py-2 border-0 bg-white"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottom"
                          aria-controls="offcanvasBottom"
                        >
                          <i
                            className="text-gray-800 "
                            style={{ width: '24px', height: '24px' }}
                            // data-lucide="ellipsis"
                          >
                            <Ellipsis />
                          </i>
                        </button>
                        <div
                          className=" offcanvas offcanvas-bottom rounded-5 rounded-bottom-0"
                          tabindex="-1"
                          id="offcanvasBottom"
                          aria-labelledby="offcanvasBottomLabel"
                        >
                          <div
                            className="d-flex flex-row-reverse"
                            style={{ padding: '16px' }}
                          >
                            <button
                              type="button"
                              className=" border-0 p-0  bg-gray-200 rounded-circle  d-flex justify-content-center align-items-center"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                              style={{ width: '16px', height: '16px' }}
                            >
                              <i
                                className="text-black "
                                // data-lucide="x"
                                style={{ width: '7px', padding: ' 0' }}
                              >
                                <X />
                              </i>
                            </button>
                          </div>
                          <div className=" ">
                            <a
                              className="d-flex justify-content-center align-items-center py-3 mb-3"
                              href="#"
                            >
                              <i
                                className="text-hover me-lg-2"
                                // data-lucide="send"
                              >
                                <Send />
                              </i>
                              <p className="paragraph-body button-hover-text">
                                分享
                              </p>
                            </a>
                            <a
                              className=" d-flex justify-content-center align-items-center py-3 mb-6"
                              href="#"
                            >
                              <i
                                className="text-hover me-lg-2 "
                                // data-lucide="message-circle-more"
                              >
                                <MessageCircleMore />
                              </i>
                              <p className="paragraph-body button-hover-text">
                                聊聊
                              </p>
                            </a>
                          </div>
                        </div>
                        {/* <!--  Offcanvas  底部--> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- 卡片身體底 --> */}
                  {/* <!-- 卡片說明文字  電腦版--> */}
                  <div className="px-lg-5 d-lg-block d-none">
                    <a
                      href="#"
                      className="h5  mb-lg-2 fw-bold text-truncate product-card-title"
                    >
                      嬰兒床圍（4片組）
                    </a>
                    <p className="paragraph-body-small text-gray-600 mb-lg-2">
                      超商店到店
                    </p>
                    <p className=" text-primary-500 fs-lg-5 fw-bold">NT$ 200</p>
                  </div>
                </a>
              </div>

              {/* <!-- 06 --> */}
              {/* <!-- 卡片 body 新生兒帽子手套組  --> */}
              <div className="col-lg-3 col-6 card-container">
                <a className=" d-lg-flex align-items-lg-start" href="#">
                  <div className="card  product-rounded card-shadow-gray position-relative mb-4 border border-1 border-lg-0  ">
                    <div className="product-img">
                      <img
                        className=""
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/product06.jpg?raw=true"
                        alt="新生兒帽子手套組"
                      />
                    </div>
                    {/* <!-- 標籤 手機板 --> */}
                    <div className="d-flex  d-lg-none d-block  ">
                      <div
                        className="position-absolute"
                        style={{ top: '16px', left: '16px' }}
                      >
                        <p
                          className="bg-highligh-300 text-white py-0 px-2 paragraph-caption rounded-pill d-flex align-items-center"
                          style={{ height: '18px' }}
                        >
                          可捐贈
                        </p>
                      </div>
                      <div
                        className="position-absolute"
                        style={{ top: '16px', right: '16px' }}
                      >
                        <i
                          className=" text-white p-2 bg-black rounded-circle opacity-50"
                          style={{ width: '40px', height: '40px' }}
                          // data-lucide="heart"
                        >
                          <Heart />
                        </i>
                      </div>
                    </div>
                    {/* <!-- 標籤 電腦板 --> */}
                    <div
                      className="position-absolute d-lg-flex  d-lg-block d-none"
                      style={{ top: '16px', left: '16px' }}
                    >
                      <p className="px-3 py-1 bg-highligh-300 text-white rounded-pill me-1">
                        可捐贈
                      </p>
                      <p className="px-3 py-1 bg-primary-400 text-white  rounded-pill">
                        育兒好物
                      </p>
                    </div>
                    <div
                      className="position-absolute heart-icon"
                      style={{ top: '16px', right: '16px' }}
                    >
                      <i
                        className=" text-white p-2 bg-black rounded-circle opacity-50"
                        style={{ width: '40px', height: '40px' }}
                        // data-lucide="heart"
                      >
                        <Heart />
                      </i>
                    </div>
                    {/* <!-- 按鈕 電腦板 --> */}
                    <div className=" d-lg-flex justify-content-lg-center align-items-lg-center d-lg-block d-none">
                      <a
                        className="d-lg-flex justify-content-lg-center align-items-lg-center border-end button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2"
                          // data-lucide="send"
                        >
                          <Send />
                        </i>
                        <p className="paragraph-body button-hover-text">分享</p>
                      </a>
                      <a
                        className=" d-lg-flex justify-content-lg-center align-items-lg-center button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2"
                          // data-lucide="message-circle-more"
                        >
                          <MessageCircleMore />
                        </i>
                        <p className="paragraph-body button-hover-text">聊聊</p>
                      </a>
                    </div>

                    {/* <!-- 按鈕  手機版 --> */}
                    <div className="px-3 py-2 d-block d-lg-none">
                      <h4 className="h5 fw-bold mb-1 text-truncate">
                        新生兒帽子手套組
                      </h4>
                      <p
                        className="paragraph-caption text-primary-500  px-1 border border-1 border-primary-500 mb-1"
                        style={{
                          width: '58px',
                          height: '18px',
                          borderRadius: '4px',
                        }}
                      >
                        育兒好物
                      </p>
                      <p className="paragraph-body-small text-gray-600 mb-1">
                        郵寄
                      </p>
                      <div className=" d-flex justify-content-between align-items-center">
                        <a href="#">
                          <p className="text-primary-500 fw-bold h6 ">免費</p>
                        </a>
                        {/* <!--  Offcanvas --> */}
                        <button
                          className="py-2 border-0 bg-white"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottom"
                          aria-controls="offcanvasBottom"
                        >
                          <i
                            className="text-gray-800 "
                            style={{ width: '24px', height: '24px' }}
                            // data-lucide="ellipsis"
                          >
                            <Ellipsis />
                          </i>
                        </button>
                        <div
                          className=" offcanvas offcanvas-bottom rounded-5 rounded-bottom-0"
                          tabindex="-1"
                          id="offcanvasBottom"
                          aria-labelledby="offcanvasBottomLabel"
                        >
                          <div
                            className="d-flex flex-row-reverse"
                            style={{ padding: '16px' }}
                          >
                            <button
                              type="button"
                              className=" border-0 p-0  bg-gray-200 rounded-circle  d-flex justify-content-center align-items-center"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                              style={{ width: '16px', height: ' 16px' }}
                            >
                              <i
                                className="text-black "
                                // data-lucide="x"
                                style={{ width: '7px', padding: ' 0' }}
                              >
                                <X />
                              </i>
                            </button>
                          </div>
                          <div className=" ">
                            <a
                              className="d-flex justify-content-center align-items-center py-3 mb-3"
                              href="#"
                            >
                              <i
                                className="text-hover me-lg-2 "
                                // data-lucide="send"
                              >
                                <Send />
                              </i>
                              <p className="paragraph-body button-hover-text">
                                分享
                              </p>
                            </a>
                            <a
                              className=" d-flex justify-content-center align-items-center py-3 mb-6"
                              href="#"
                            >
                              <i
                                className="text-hover me-lg-2"
                                // data-lucide="message-circle-more"
                              >
                                <MessageCircleMore />
                              </i>
                              <p className="paragraph-bodybutton-hover-text">
                                聊聊
                              </p>
                            </a>
                          </div>
                        </div>
                        {/* <!--  Offcanvas  底部--> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- 卡片身體底 --> */}
                  {/* <!-- 卡片說明文字  電腦版--> */}
                  <div className="px-lg-5 d-lg-block d-none">
                    <a
                      href="#"
                      className="h5  mb-lg-2 fw-bold text-truncate product-card-title"
                    >
                      新生兒帽子手套組
                    </a>
                    <p className="paragraph-body-small text-gray-600 mb-lg-2">
                      郵寄
                    </p>
                    <p className=" text-primary-500 fs-lg-5 fw-bold">免費</p>
                  </div>
                </a>
              </div>

              {/* <!-- 07 --> */}
              {/* <!-- 卡片 body 新生兒包巾組  --> */}
              <div className="col-lg-3 col-6 card-container">
                <a className=" d-lg-flex align-items-lg-start" href="#">
                  <div className="card  product-rounded card-shadow-gray position-relative mb-4 border border-1 border-lg-0  ">
                    <div className="product-img">
                      <img
                        className=""
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/product07.jpg?raw=true"
                        alt="新生兒包巾組"
                      />
                    </div>
                    {/* <!-- 標籤 手機板 --> */}
                    <div className="d-flex  d-lg-none d-block  ">
                      <div
                        className="position-absolute"
                        style={{ top: '16px', left: '16px' }}
                      >
                        <p
                          className="bg-highligh-300 text-white py-0 px-2 paragraph-caption rounded-pill d-flex align-items-center"
                          style={{ height: '18px' }}
                        >
                          全新
                        </p>
                      </div>
                      <div
                        className="position-absolute"
                        style={{ top: '16px', right: '16px' }}
                      >
                        <i
                          className=" text-white p-2 bg-black rounded-circle opacity-50"
                          style={{ width: '40px', height: '40px' }}
                          // data-lucide="heart"
                        >
                          <Heart />
                        </i>
                      </div>
                    </div>
                    {/* <!-- 標籤 電腦板 --> */}
                    <div
                      className="position-absolute d-lg-flex  d-lg-block d-none"
                      style={{ top: '16px', left: '16px' }}
                    >
                      <p className="px-3 py-1 bg-highligh-300 text-white rounded-pill me-1">
                        全新
                      </p>
                      <p className="px-3 py-1 bg-primary-400 text-white  rounded-pill">
                        寶寶入門款
                      </p>
                    </div>
                    <div
                      className="position-absolute heart-icon"
                      style={{ top: '16px', right: '16px' }}
                    >
                      <i
                        className=" text-white p-2 bg-black rounded-circle opacity-50"
                        style={{ width: '40px', height: '40px' }}
                        // data-lucide="heart"
                      >
                        <Heart />
                      </i>
                    </div>
                    {/* <!-- 按鈕 電腦板 --> */}
                    <div className=" d-lg-flex justify-content-lg-center align-items-lg-center d-lg-block d-none">
                      <a
                        className="d-lg-flex justify-content-lg-center align-items-lg-center border-end button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2"
                          // data-lucide="send"
                        >
                          <Send />
                        </i>
                        <p className="paragraph-body button-hover-text">分享</p>
                      </a>
                      <a
                        className=" d-lg-flex justify-content-lg-center align-items-lg-center button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2"
                          // data-lucide="message-circle-more"
                        >
                          <MessageCircleMore />
                        </i>
                        <p className="paragraph-body button-hover-text">聊聊</p>
                      </a>
                    </div>

                    {/* <!-- 按鈕  手機版 --> */}
                    <div className="px-3 py-2 d-block d-lg-none">
                      <h4 className="h5 fw-bold mb-1 text-truncate">
                        新生兒包巾組
                      </h4>
                      <p
                        className="paragraph-caption text-primary-500  px-1 border border-1 border-primary-500 mb-1"
                        style={{
                          width: '70px',
                          height: '18px',
                          borderRadius: '4px',
                        }}
                      >
                        寶寶入門款
                      </p>
                      <p className="paragraph-body-small text-gray-600 mb-1">
                        自取
                      </p>
                      <div className=" d-flex justify-content-between align-items-center">
                        <a href="#">
                          <p className="text-primary-500 fw-bold h6 ">
                            NT$ 300
                          </p>
                        </a>
                        {/* <!--  Offcanvas --> */}
                        <button
                          className="py-2 border-0 bg-white"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottom"
                          aria-controls="offcanvasBottom"
                        >
                          <i
                            className="text-gray-800 "
                            style={{ width: '24px', height: '24px' }}
                            // data-lucide="ellipsis"
                          >
                            <Ellipsis />
                          </i>
                        </button>
                        <div
                          className=" offcanvas offcanvas-bottom rounded-5 rounded-bottom-0"
                          tabindex="-1"
                          id="offcanvasBottom"
                          aria-labelledby="offcanvasBottomLabel"
                        >
                          <div
                            className="d-flex flex-row-reverse"
                            style={{ padding: '16px' }}
                          >
                            <button
                              type="button"
                              className=" border-0 p-0  bg-gray-200 rounded-circle  d-flex justify-content-center align-items-center"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                              style={{ width: '16px', height: '16px' }}
                            >
                              <i
                                className="text-black "
                                // data-lucide="x"
                                style={{ width: '7px', padding: '0' }}
                              >
                                <X />
                              </i>
                            </button>
                          </div>
                          <div className=" ">
                            <a
                              className="d-flex justify-content-center align-items-center py-3 mb-3"
                              href="#"
                            >
                              <i
                                className="text-hover me-lg-2"
                                // data-lucide="send"
                              >
                                <Send />
                              </i>
                              <p className="paragraph-body button-hover-text">
                                分享
                              </p>
                            </a>
                            <a
                              className=" d-flex justify-content-center align-items-center py-3 mb-6"
                              href="#"
                            >
                              <i
                                className="text-hover me-lg-2"
                                // data-lucide="message-circle-more"
                              >
                                <MessageCircleMore />
                              </i>
                              <p className="paragraph-body button-hover-text ">
                                聊聊
                              </p>
                            </a>
                          </div>
                        </div>
                        {/* <!--  Offcanvas  底部--> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- 卡片身體底 --> */}
                  {/* <!-- 卡片說明文字  電腦版--> */}
                  <div className="px-lg-5 d-lg-block d-none">
                    <a
                      href="#"
                      className="h5  mb-lg-2 fw-bold text-truncate product-card-title"
                    >
                      新生兒包巾組
                    </a>
                    <p className="paragraph-body-small text-gray-600 mb-lg-2">
                      自取
                    </p>
                    <p className=" text-primary-500 fs-lg-5 fw-bold">NT$ 300</p>
                  </div>
                </a>
              </div>

              {/* <!-- 08 --> */}
              {/* <!-- 卡片 body 多功能寶寶背巾  --> */}
              <div className="col-lg-3 col-6 card-container">
                <a
                  className=" d-lg-flex align-items-lg-start"
                  href="products-detail-page.html"
                >
                  <div className="card  product-rounded card-shadow-gray position-relative mb-4 border border-1 border-lg-0  ">
                    <div className="product-img">
                      <img
                        className=""
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/product08.jpg?raw=true"
                        alt="多功能寶寶背巾"
                      />
                    </div>
                    {/* <!-- 標籤 手機板 --> */}
                    <div className="d-flex  d-lg-none d-block  ">
                      <div
                        className="position-absolute"
                        style={{ top: '16px', left: '16px' }}
                      >
                        <p
                          className="bg-highligh-300 text-white py-0 px-2 paragraph-caption rounded-pill d-flex align-items-center"
                          style={{ height: '18px' }}
                        >
                          九成新
                        </p>
                      </div>
                      <div
                        className="position-absolute"
                        style={{ top: '16px', right: '16px' }}
                      >
                        <i
                          className=" text-white p-2 bg-black rounded-circle opacity-50"
                          style={{ width: '40px', height: '40px' }}
                          // data-lucide="heart"
                        >
                          <Heart />
                        </i>
                      </div>
                    </div>
                    {/* <!-- 標籤 電腦板 --> */}
                    <div
                      className="position-absolute d-lg-flex  d-lg-block d-none"
                      style={{ top: '16px', left: '16px' }}
                    >
                      <p className="px-3 py-1 bg-highligh-300 text-white rounded-pill me-1">
                        九成新
                      </p>
                      <p className="px-3 py-1 bg-primary-400 text-white  rounded-pill">
                        育兒省力神器
                      </p>
                    </div>
                    <div
                      className="position-absolute heart-icon"
                      style={{ top: '16px', right: '16px' }}
                    >
                      <i
                        className=" text-white p-2 bg-black rounded-circle opacity-50"
                        style={{ width: '40px', height: '40px' }}
                        // data-lucide="heart"
                      >
                        <Heart />
                      </i>
                    </div>
                    {/* <!-- 按鈕 電腦板 --> */}
                    <div className=" d-lg-flex justify-content-lg-center align-items-lg-center d-lg-block d-none">
                      <a
                        className="d-lg-flex justify-content-lg-center align-items-lg-center border-end button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2"
                          // data-lucide="send"
                        >
                          <Send />
                        </i>
                        <p className="paragraph-body button-hover-text">分享</p>
                      </a>
                      <a
                        className=" d-lg-flex justify-content-lg-center align-items-lg-center button-hover-bg"
                        style={{ width: '156px', height: '48px' }}
                        href="#"
                      >
                        <i
                          className="text-hover me-lg-2"
                          // data-lucide="message-circle-more"
                        >
                          <MessageCircleMore />
                        </i>
                        <p className="paragraph-body button-hover-text">聊聊</p>
                      </a>
                    </div>

                    {/* <!-- 按鈕  手機版 --> */}
                    <div className="px-3 py-2 d-block d-lg-none">
                      <h4 className="h5 fw-bold mb-1 text-truncate">
                        多功能寶寶背巾
                      </h4>
                      <p
                        className="paragraph-caption text-primary-500  px-1 border border-1 border-primary-500 mb-1"
                        style={{
                          width: '82px',
                          height: '18px',
                          borderRadius: '4px',
                        }}
                      >
                        育兒省力神器
                      </p>
                      <p className="paragraph-body-small text-gray-600 mb-1">
                        宅配、超商店到店
                      </p>
                      <div className=" d-flex justify-content-between align-items-center">
                        <a href="#">
                          <p className="text-primary-500 fw-bold h6 ">
                            NT$ 1,280
                          </p>
                        </a>
                        {/* <!--  Offcanvas --> */}
                        <button
                          className="py-2 border-0 bg-white"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottom"
                          aria-controls="offcanvasBottom"
                        >
                          <i
                            className="text-gray-800 "
                            style={{ width: '24px', height: '24px' }}
                            // data-lucide="ellipsis"
                          >
                            <Ellipsis />
                          </i>
                        </button>
                        <div
                          className=" offcanvas offcanvas-bottom rounded-5 rounded-bottom-0"
                          tabindex="-1"
                          id="offcanvasBottom"
                          aria-labelledby="offcanvasBottomLabel"
                        >
                          <div
                            className="d-flex flex-row-reverse"
                            style={{ padding: '16px' }}
                          >
                            <button
                              type="button"
                              className=" border-0 p-0  bg-gray-200 rounded-circle  d-flex justify-content-center align-items-center"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                              style={{ width: '16px', height: '16px' }}
                            >
                              <i
                                className="text-black "
                                // data-lucide="x"
                                style={{ width: '7px', padding: '0' }}
                              >
                                <X />
                              </i>
                            </button>
                          </div>
                          <div className=" ">
                            <a
                              className="d-flex justify-content-center align-items-center py-3 mb-3"
                              href="#"
                            >
                              <i
                                className="text-hover me-lg-2"
                                // data-lucide="send"
                              >
                                <Send />
                              </i>
                              <p className="paragraph-body button-hover-text">
                                分享
                              </p>
                            </a>
                            <a
                              className=" d-flex justify-content-center align-items-center py-3 mb-6"
                              href="#"
                            >
                              <i
                                className="text-hover me-lg-2"
                                // data-lucide="message-circle-more"
                              >
                                <MessageCircleMore />
                              </i>
                              <p className="paragraph-body button-hover-text">
                                聊聊
                              </p>
                            </a>
                          </div>
                        </div>
                        {/* <!--  Offcanvas  底部--> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- 卡片身體底 --> */}
                  {/* <!-- 卡片說明文字  電腦版--> */}
                  <div className="px-lg-5 d-lg-block d-none">
                    <a
                      href="#"
                      className="h5  mb-lg-2 fw-bold text-truncate product-card-title"
                    >
                      多功能寶寶背巾
                    </a>
                    <p className="paragraph-body-small text-gray-600 mb-lg-2">
                      宅配、超商店到店
                    </p>
                    <p className=" text-primary-500 fs-lg-5 fw-bold">
                      NT$ 1,280
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  寶物分享--> */}
      <section>
        <div className="section04_background_desktop section04_background_mobile ">
          {/* <!-- 彎曲上圖 --> */}
          <div className="section04_border_top sticky-top">
            <img
              src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/section04_border_top.svg"
              style={{ width: '100%', marginTop: '-16px' }}
              alt=""
            />
          </div>
          {/* <!-- 電腦版 寶物分享 title --> */}
          <div className="container-lg d-lg-block d-none">
            <div className="mt-lg-17 mb-lg-15">
              <img
                src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/section04_title.svg"
                style={{ width: '508px' }}
                alt="電腦版 寶物分享 title"
              />
            </div>
          </div>
          {/* <!-- 手機版 寶物分享 title --> */}
          <div className="container d-lg-none d-block">
            <div className="py-10 ">
              <img
                src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/section04_title.svg"
                style={{ paddingRight: '33.5px' }}
                alt=""
              />
            </div>
          </div>
          {/* <!-- 電腦版 火車頭 --> */}
          <div
            className=" container-lg-fluid  overflow-x-scroll screen d-lg-block d-none "
            id="scrollContainer"
          >
            <ul className="d-lg-flex flex-lg-nowrap  container-lg mb-lg-0  ">
              <li>
                <img
                  src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/train_locomotive.png?raw=true"
                  style={{ maxWidth: 'none', width: ' 417px' }}
                  alt="火車頭"
                />
              </li>
              {/* <!-- 和Sandy交換的二手推車保持得很好哦！ --> */}
              <li>
                <img
                  className="d-lg-flex flex-lg-column-reverse "
                  src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/train_connection.svg"
                  style={{
                    maxWidth: 'none',
                    marginTop: '400px',
                    width: '24px',
                    height: '8px',
                  }}
                  alt=""
                />
              </li>
              <li>
                <div
                  className="train_car d-lg-flex justify-content-lg-center align-items-lg-center"
                  style={{
                    width: '416px',
                    height: '356px',
                    marginTop: '132px',
                  }}
                >
                  <div
                    className="p-5 mb-6 rounded-10 bg-white"
                    style={{ maxWidth: '384px' }}
                  >
                    <div className="row g-0  justify-content-between">
                      <div className="col-md-7">
                        <div className="card-body">
                          {/* <!-- 星星 --> */}
                          <div className="d-lg-flex gap-lg-1 mb-lg-2">
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                          </div>
                          <h3 className="h5 fw-bold mb-lg-2 text-gray-800">
                            和Sandy交換的二手推車保持得很好哦！
                          </h3>
                          <p
                            className="paragraph-body-small text-gray-600"
                            style={{ marginBottom: '25px' }}
                          >
                            2025-04-30 20:17
                          </p>
                          <div className="d-lg-flex align-items-lg-center ">
                            <img
                              className="rounded-circle  border border-1 border-gray-300 bg-gray-100 me-2"
                              style={{ width: '48px', height: '48px' }}
                              src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar01.jpg?raw=true"
                              alt="Ben Kuo"
                            />
                            <div className="py-1">
                              <h4 className="h6 fw-bold text-gray-800">
                                Ben Kuo
                              </h4>
                              <p className=" paragraph-body-small text-gray-600">
                                育兒等級：新手爸爸
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5" style={{ width: '134px' }}>
                        <div className=" rounded-5 overflow-hidden">
                          <img
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback01.jpg?raw=true"
                            className="card-img-top"
                            style={{ width: '134px', height: '134px' }}
                            alt="和Sandy交換的二手推車保持得很好哦！"
                          />
                          <div className="card-body text-center primary-default-text ">
                            <a className="card-text py-3" href="#">
                              前往賣場{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!--【尋物】小一課外讀本  --> */}
              <li>
                <img
                  className="d-lg-flex flex-lg-column-reverse "
                  src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/train_connection.svg"
                  style={{
                    maxWidth: 'none',
                    marginTop: '400px',
                    width: '24px',
                    height: '8px',
                  }}
                  alt="火車連結裝飾物"
                />
              </li>
              <li>
                <div
                  className="train_car d-lg-flex justify-content-lg-center align-items-lg-center"
                  style={{
                    width: '416px',
                    height: '356px',
                    marginTop: '132px',
                  }}
                >
                  <div
                    className="p-5 mb-6 rounded-10 bg-white"
                    style={{ maxWidth: '384px' }}
                  >
                    <div className="row g-0  justify-content-between">
                      <div className="col-md-7">
                        <div className="card-body">
                          {/* <!-- 星星 --> */}
                          <div className="d-lg-flex gap-lg-1 mb-lg-2">
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-gray-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-gray-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                          </div>
                          <h3 className="h5 fw-bold mb-lg-2 text-gray-800">
                            【尋物】小一課外讀本
                          </h3>
                          <p
                            className="paragraph-body-small text-gray-600"
                            style={{ marginBottom: '25px' }}
                          >
                            2024-11-04 20:17
                          </p>
                          <div className="d-lg-flex align-items-lg-center ">
                            <img
                              className="rounded-circle  border border-1 border-gray-300 bg-gray-100 me-2"
                              style={{ width: '48px', height: '48px' }}
                              src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar02.jpg?raw=true"
                              alt="Leo"
                            />
                            <div className="py-1">
                              <h4 className="h6 fw-bold text-gray-800">Leo</h4>
                              <p className=" paragraph-body-small text-gray-600">
                                育兒等級：老手爸爸
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5" style={{ width: '134px' }}>
                        <div className=" rounded-5 overflow-hidden">
                          <img
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback02.jpg?raw=true"
                            className="card-img-top"
                            style={{ width: '134px', height: '134px' }}
                            alt="【尋物】小一課外讀本"
                          />
                          <div className="card-body text-center primary-default-text ">
                            <a className="card-text py-3" href="#">
                              前往賣場{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- 和小Q爸の生活交換的嬰兒防撞床圍護欄 --> */}
              <li>
                <img
                  className="d-lg-flex flex-lg-column-reverse "
                  src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/train_connection.svg"
                  style={{
                    maxWidth: 'none',
                    marginTop: '400px',
                    width: '24px',
                    height: '8px',
                  }}
                  alt="火車連結裝飾物"
                />
              </li>
              <li>
                <div
                  className="train_car d-lg-flex justify-content-lg-center align-items-lg-center"
                  style={{
                    width: '416px',
                    height: '356px',
                    marginTop: '132px',
                  }}
                >
                  <div
                    className="p-5 mb-6 rounded-10 bg-white"
                    style={{ maxWidth: '384px' }}
                  >
                    <div className="row g-0  justify-content-between">
                      <div className="col-md-7">
                        <div className="card-body">
                          {/* <!-- 星星 --> */}
                          <div className="d-lg-flex gap-lg-1 mb-lg-2">
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-gray-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                          </div>
                          <h3 className="h5 fw-bold mb-lg-2 text-gray-800">
                            和小Q爸の生活交換的嬰兒防撞床圍護欄
                          </h3>
                          <p
                            className="paragraph-body-small text-gray-600"
                            style={{ marginBottom: '25px' }}
                          >
                            2025-05-01 23:49
                          </p>
                          <div className="d-lg-flex align-items-lg-center ">
                            <img
                              className="rounded-circle  border border-1 border-gray-300 bg-gray-100 me-2"
                              style={{ width: '48px', height: '48px' }}
                              src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar03.jpg?raw=true"
                              alt="小魚媽"
                            />
                            <div className="py-1">
                              <h4 className="h6 fw-bold text-gray-800">
                                小魚媽
                              </h4>
                              <p className=" paragraph-body-small text-gray-600">
                                育兒等級：新手媽媽
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5" style={{ width: '134px' }}>
                        <div className=" rounded-5 overflow-hidden">
                          <img
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback03.jpg?raw=true"
                            className="card-img-top"
                            style={{ width: '134px', height: '134px' }}
                            alt="和小Q爸の生活交換的嬰兒防撞床圍護欄"
                          />
                          <div className="card-body text-center primary-default-text ">
                            <a className="card-text py-3" href="#">
                              前往賣場{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- 兒童安撫搖椅交換 --> */}
              <li>
                <img
                  className="d-lg-flex flex-lg-column-reverse "
                  src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/train_connection.svg"
                  style={{
                    maxWidth: 'none',
                    marginTop: '400px',
                    width: '24px',
                    height: '8px',
                  }}
                  alt="火車連結裝飾物"
                />
              </li>
              <li>
                <div
                  className="train_car d-lg-flex justify-content-lg-center align-items-lg-center"
                  style={{
                    width: '416px',
                    height: '356px',
                    marginTop: '132px',
                  }}
                >
                  <div
                    className="p-5 mb-6 rounded-10 bg-white"
                    style={{ width: '384px' }}
                  >
                    <div className="row g-0  justify-content-between">
                      <div className="col-md-7">
                        <div className="card-body">
                          {/* <!-- 星星 --> */}
                          <div className="d-lg-flex gap-lg-1 mb-lg-2">
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-gray-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-gray-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-gray-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                          </div>
                          <h3
                            className="h5 fw-bold mb-lg-2 text-gray-800"
                            style={{ height: '48px' }}
                          >
                            兒童安撫搖椅交換
                          </h3>
                          <p
                            className="paragraph-body-small text-gray-600"
                            style={{ marginBottom: '25px' }}
                          >
                            2025-05-16 18:08
                          </p>
                          <div className="d-lg-flex align-items-lg-center ">
                            <img
                              className="rounded-circle  border border-1 border-gray-300 bg-gray-100 me-2"
                              style={{ width: '48px', height: '48px' }}
                              src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar04.jpg?raw=true"
                              alt="胖胖爸"
                            />
                            <div className="py-1">
                              <h4 className="h6 fw-bold text-gray-800">
                                胖胖爸碎念中
                              </h4>
                              <p className=" paragraph-body-small text-gray-600">
                                育兒等級：老鳥爸爸
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5" style={{ width: '134px' }}>
                        <div className=" rounded-5 overflow-hidden">
                          <img
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback04.jpg?raw=true"
                            className="card-img-top"
                            style={{ width: '134px', height: '134px' }}
                            alt="兒童安撫搖椅交換"
                          />
                          <div className="card-body text-center primary-default-text ">
                            <a className="card-text py-3" href="#">
                              前往賣場{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!--【【尋物】高腳餐椅  --> */}
              <li>
                <img
                  className="d-lg-flex flex-lg-column-reverse "
                  src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/train_connection.svg"
                  style={{
                    maxWidth: 'none',
                    marginTop: '400px',
                    width: '24px',
                    height: '8px',
                  }}
                  alt=""
                />
              </li>
              <li>
                <div
                  className="train_car d-lg-flex justify-content-lg-center align-items-lg-center"
                  style={{
                    width: '416px',
                    height: '356px',
                    marginTop: '132px',
                  }}
                >
                  <div
                    className="p-5 mb-6 rounded-10 bg-white"
                    style={{ width: '384px' }}
                  >
                    <div className="row g-0  justify-content-between">
                      <div className="col-md-7">
                        <div className="card-body">
                          {/* <!-- 星星 --> */}
                          <div className="d-lg-flex gap-lg-1 mb-lg-2">
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-gray-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                          </div>
                          <h3
                            className="h5 fw-bold mb-lg-2 text-gray-800"
                            style={{ height: '48px' }}
                          >
                            【尋物】高腳餐椅
                          </h3>
                          <p
                            className="paragraph-body-small text-gray-600"
                            style={{ marginBottom: '25px' }}
                          >
                            2025-05-13 14:51
                          </p>
                          <div className="d-lg-flex align-items-lg-center ">
                            <img
                              className="rounded-circle  border border-1 border-gray-300 bg-gray-100 me-2"
                              style={{ width: '48px', height: '48px' }}
                              src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar05.jpg?raw=true"
                              alt=""
                            />
                            <div className="py-1">
                              <h4 className="h6 fw-bold text-gray-800">
                                Ken爸育兒日誌
                              </h4>
                              <p className=" paragraph-body-small text-gray-600">
                                育兒等級：爬行爸爸
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5" style={{ width: '134px' }}>
                        <div className=" rounded-5 overflow-hidden">
                          <img
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback05.jpg?raw=true"
                            className="card-img-top"
                            style={{ width: '134px', height: '134px' }}
                            alt="前往賣場"
                          />
                          <div className="card-body text-center primary-default-text ">
                            <a className="card-text py-3" href="#">
                              前往賣場
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- 和Kiven交換的寶寶床 --> */}
              <li>
                <img
                  className="d-lg-flex flex-lg-column-reverse "
                  src="https://raw.githubusercontent.com/Cuei-Sian/React-BBStation-picture/1de5d61eae1c385769823f23f6c8862d77641132/images/index/train_connection.svg"
                  style={{
                    maxWidth: 'none',
                    marginTop: '400px',
                    width: '24px',
                    height: '8px',
                  }}
                  alt="和Kiven交換的寶寶床"
                />
              </li>
              <li>
                <div
                  className="train_car d-lg-flex justify-content-lg-center align-items-lg-center me-lg-6"
                  style={{
                    width: '416px',
                    height: '356px',
                    marginTop: '132px',
                  }}
                >
                  <div
                    className="p-5 mb-6 rounded-10 bg-white"
                    style={{ maxWidth: '384px' }}
                  >
                    <div className="row g-0  justify-content-between">
                      <div className="col-md-7">
                        <div className="card-body">
                          {/* <!-- 星星 --> */}
                          <div className="d-lg-flex gap-lg-1 mb-lg-2">
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-secondary-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                            <i
                              className="text-gray-300 lucide-star "
                              // data-lucide="star"
                            >
                              <Star />
                            </i>
                          </div>
                          <h3 className="h5 fw-bold mb-lg-2 text-gray-800">
                            和Kiven交換的寶寶床
                          </h3>
                          <p
                            className="paragraph-body-small text-gray-600"
                            style={{ marginBottom: '25px' }}
                          >
                            2025-04-03 19:09
                          </p>
                          <div className="d-lg-flex align-items-lg-center ">
                            <img
                              className="rounded-circle  border border-1 border-gray-300 bg-gray-100 me-2"
                              style={{ width: '48px', height: ' 48px' }}
                              src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar06.jpg?raw=true"
                              alt="瑜媽的日常"
                            />
                            <div className="py-1">
                              <h4 className="h6 fw-bold text-gray-800">
                                瑜媽的日常
                              </h4>
                              <p className=" paragraph-body-small text-gray-600">
                                育兒等級：新手媽媽
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5" style={{ width: '134px' }}>
                        <div className=" rounded-5 overflow-hidden">
                          <img
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback06.jpg?raw=true"
                            className="card-img-top"
                            style={{ width: '134px', height: '134px' }}
                            alt="和Kiven交換的寶寶床"
                          />
                          <div className="card-body text-center primary-default-text ">
                            <a className="card-text py-3" href="#">
                              前往賣場{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- 手機板 分享內容 --> */}
          <div className=" d-lg-none d-block overflow-x-scroll screen">
            <ul className="container pb-15 d-flex gap-4">
              {/* <!-- 01-和Sandy交換的二手推車保持得很好哦！ --> */}
              <li>
                <div
                  className="card border-0 card-shadow-gray "
                  style={{
                    width: '257px',
                    borderRadius: '24px',
                    marginBottom: '-65px',
                  }}
                >
                  <img
                    className="card-img-top p-3 "
                    src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback01.jpg?raw=true"
                    style={{ borderRadius: '24px', position: 'relative' }}
                    alt="..."
                  />
                  <a
                    className="py-2 px-3 rounded-pill btn button-primary-default-text "
                    style={{
                      right: '20px',
                      top: '195px',
                      position: 'absolute',
                    }}
                  >
                    前往賣場
                  </a>
                  <div className="">
                    <div className="px-3 mb-4">
                      {/* <!--手機板 星星 --> */}
                      <div className="d-flex gap-1 mb-2">
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                      </div>
                      <h4 className="mb-2 paragraph-body text-black">
                        和Sandy交換的二手推車保持得很好哦！
                      </h4>
                      <p className="mb-2 paragraph-body-small text-gray-600">
                        2025-04-30 20:17
                      </p>
                    </div>
                    {/* <!-- 手機板 人物資訊 --> */}
                    <div className="d-flex align-items-center px-3 mb-3">
                      <img
                        className="rounded-circle  border border-1 border-gray-300  me-2"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#DEE2E6',
                        }}
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar01.jpg?raw=true"
                        alt=""
                      />
                      <div className="py-1 d-flex justify-content-center  flex-column ">
                        <h4 className="h6 fw-bold text-gray-800">Ben Kuo</h4>
                        <p className=" paragraph-body-small text-gray-600">
                          育兒等級：新手爸爸
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- 02-【尋物】小一課外讀本 --> */}
              <li>
                <div
                  className="card border-0 card-shadow-gray "
                  style={{
                    width: '257px',
                    borderRadius: '24px',
                    marginBottom: '-65px',
                  }}
                >
                  <img
                    className="card-img-top p-3 "
                    src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback02.jpg?raw=true"
                    style={{ borderRadius: '24px', position: 'relative' }}
                    alt="【尋物】小一課外讀本"
                  />
                  <a
                    className="py-2 px-3 rounded-pill btn button-primary-default-text "
                    style={{
                      right: '20px',
                      top: '195px',
                      position: 'absolute',
                    }}
                  >
                    前往賣場
                  </a>
                  <div className="">
                    <div className="px-3 mb-4">
                      {/* <!--手機板 星星 --> */}
                      <div className="d-flex gap-1 mb-2">
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-gray-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-gray-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                      </div>
                      <h4
                        className="mb-2 paragraph-body text-black"
                        style={{ height: '48px' }}
                      >
                        【尋物】小一課外讀本
                      </h4>
                      <p className="mb-2 paragraph-body-small text-gray-600">
                        2024-11-14 15:02
                      </p>
                    </div>
                    {/* <!-- 手機板 人物資訊 --> */}
                    <div className="d-flex align-items-center px-3 mb-3">
                      <img
                        className="rounded-circle  border border-1 border-gray-300  me-2"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#DEE2E6',
                        }}
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar02.jpg?raw=true"
                        alt=""
                      />
                      <div className="py-1 d-flex justify-content-center  flex-column ">
                        <h4 className="h6 fw-bold text-gray-800">Leo</h4>
                        <p className=" paragraph-body-small text-gray-600">
                          育兒等級：老手爸爸
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- 03-和小Q爸の生活交換的嬰兒防撞床圍護欄 --> */}
              <li>
                <div
                  className="card border-0 card-shadow-gray "
                  style={{
                    width: '257px',
                    borderRadius: '24px',
                    marginBottom: '-65px',
                  }}
                >
                  <img
                    className="card-img-top p-3 "
                    src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback03.jpg?raw=true"
                    style={{ borderRadius: '24px', position: 'relative' }}
                    alt="和小Q爸の生活交換的嬰兒防撞床圍護欄"
                  />
                  <a
                    className="py-2 px-3 rounded-pill btn button-primary-default-text "
                    style={{
                      right: '20px',
                      top: '195px',
                      position: 'absolute',
                    }}
                  >
                    前往賣場
                  </a>
                  <div className="">
                    <div className="px-3 mb-4">
                      {/* <!--手機板 星星 --> */}
                      <div className="d-flex gap-1 mb-2">
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-gray-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                      </div>
                      <h4 className="mb-2 paragraph-body text-black">
                        和小Q爸の生活交換的嬰兒防撞床圍護欄
                      </h4>
                      <p className="mb-2 paragraph-body-small text-gray-600">
                        2025-05-01 23:49
                      </p>
                    </div>
                    {/* <!-- 手機板 人物資訊 --> */}
                    <div className="d-flex align-items-center px-3 mb-3">
                      <img
                        className="rounded-circle  border border-1 border-gray-300  me-2"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: ' #DEE2E6',
                        }}
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar03.jpg?raw=true"
                        alt="小魚媽"
                      />
                      <div className="py-1 d-flex justify-content-center  flex-column ">
                        <h4 className="h6 fw-bold text-gray-800">小魚媽</h4>
                        <p className=" paragraph-body-small text-gray-600">
                          育兒等級：新手媽媽
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- 04-兒童安撫搖椅交換 --> */}
              <li>
                <div
                  className="card border-0 card-shadow-gray "
                  style={{
                    width: '257px',
                    borderRadius: '24px',
                    marginBottom: '-65px',
                  }}
                >
                  <img
                    className="card-img-top p-3 "
                    src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback04.jpg?raw=true"
                    style={{ borderRadius: '24px', position: 'relative' }}
                    alt="兒童安撫搖椅交換"
                  />
                  <a
                    className="py-2 px-3 rounded-pill btn button-primary-default-text "
                    style={{
                      right: '20px',
                      top: '195px',
                      position: 'absolute',
                    }}
                  >
                    前往賣場
                  </a>
                  <div className="">
                    <div className="px-3 mb-4">
                      {/* <!--手機板 星星 --> */}
                      <div className="d-flex gap-1 mb-2">
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-gray-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-gray-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-gray-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                      </div>
                      <h4
                        className="mb-2 paragraph-body text-black"
                        style={{ height: '48px' }}
                      >
                        兒童安撫搖椅交換
                      </h4>
                      <p className="mb-2 paragraph-body-small text-gray-600">
                        2025-05-16 18:08
                      </p>
                    </div>
                    {/* <!-- 手機板 人物資訊 --> */}
                    <div className="d-flex align-items-center px-3 mb-3">
                      <img
                        className="rounded-circle  border border-1 border-gray-300  me-2"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: ' #DEE2E6',
                        }}
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar04.jpg?raw=true"
                        alt="胖胖爸碎念中"
                      />
                      <div className="py-1 d-flex justify-content-center  flex-column ">
                        <h4 className="h6 fw-bold text-gray-800">
                          胖胖爸碎念中
                        </h4>
                        <p className=" paragraph-body-small text-gray-600">
                          育兒等級：老鳥爸爸
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- 05-【尋物】高腳餐椅 --> */}
              <li>
                <div
                  className="card border-0 card-shadow-gray "
                  style={{
                    width: '257px',
                    borderRadius: '24px',
                    marginBottom: '-65px',
                  }}
                >
                  <img
                    className="card-img-top p-3 "
                    src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback05.jpg?raw=true"
                    style={{ borderRadius: '24px', position: 'relative' }}
                    alt="【尋物】高腳餐椅"
                  />
                  <a
                    className="py-2 px-3 rounded-pill btn button-primary-default-text "
                    style={{
                      right: '20px',
                      top: '195px',
                      position: 'absolute',
                    }}
                  >
                    前往賣場
                  </a>
                  <div className="">
                    <div className="px-3 mb-4">
                      {/* <!--手機板 星星 --> */}
                      <div className="d-flex gap-1 mb-2">
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-gray-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                      </div>
                      <h4
                        className="mb-2 paragraph-body text-black"
                        style={{ height: '48px' }}
                      >
                        【尋物】高腳餐椅
                      </h4>
                      <p className="mb-2 paragraph-body-small text-gray-600">
                        2025-05-13 14:51
                      </p>
                    </div>
                    {/* <!-- 手機板 人物資訊 --> */}
                    <div className="d-flex align-items-center px-3 mb-3">
                      <img
                        className="rounded-circle  border border-1 border-gray-300  me-2"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: ' #DEE2E6',
                        }}
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar05.jpg?raw=true"
                        alt="Ken爸育兒日誌"
                      />
                      <div className="py-1 d-flex justify-content-center  flex-column ">
                        <h4 className="h6 fw-bold text-gray-800">
                          Ken爸育兒日誌
                        </h4>
                        <p className=" paragraph-body-small text-gray-600">
                          育兒等級：爬行爸爸
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- 06 和Kiven交換的寶寶床 --> */}
              <li>
                <div
                  className="card border-0 card-shadow-gray "
                  style={{
                    width: '257px',
                    borderRadius: '24px',
                    marginBottom: '-65px',
                  }}
                >
                  <img
                    className="card-img-top p-3 "
                    src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/feedback06.jpg?raw=true"
                    style={{ borderRadius: '24px', position: 'relative' }}
                    alt="和Kiven交換的寶寶床"
                  />
                  <a
                    className="py-2 px-3 rounded-pill btn button-primary-default-text "
                    style={{
                      right: '20px',
                      top: '195px',
                      position: 'absolute',
                    }}
                  >
                    前往賣場
                  </a>
                  <div className="">
                    <div className="px-3 mb-4">
                      {/* <!--手機板 星星 --> */}
                      <div className="d-flex gap-1 mb-2">
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-secondary-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                        <i
                          className="text-gray-300 lucide-star "
                          // data-lucide="star"
                        >
                          <Star />
                        </i>
                      </div>
                      <h4
                        className="mb-2 paragraph-body text-black"
                        style={{ height: '48px' }}
                      >
                        和Kiven交換的寶寶床
                      </h4>
                      <p className="mb-2 paragraph-body-small text-gray-600">
                        2025-04-03 19:09
                      </p>
                    </div>
                    {/* <!-- 手機板 人物資訊 --> */}
                    <div className="d-flex align-items-center px-3 mb-3">
                      <img
                        className="rounded-circle  border border-1 border-gray-300  me-2"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: ' #DEE2E6',
                        }}
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar06.jpg?raw=true"
                        alt="瑜媽的日常"
                      />
                      <div className="py-1 d-flex justify-content-center  flex-column ">
                        <h4 className="h6 fw-bold text-gray-800">瑜媽的日常</h4>
                        <p className=" paragraph-body-small text-gray-600">
                          育兒等級：新手媽媽
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* <!-- 電腦版按鈕 --> */}
          <div>
            <div className="container-lg  d-lg-flex justify-content-lg-between d-lg-block d-none ">
              <ul className="d-lg-flex pt-10 pb-lg-16 mb-lg-0">
                <li className="me-lg-12">
                  <div className="d-lg-flex justify-content-between ">
                    <a
                      className="d-flex align-items-center  more-link"
                      href="#"
                    >
                      <h3 className="paragraph-body text-primary-500 me-1">
                        我也想要分享
                      </h3>
                      <span
                        className="icon-wrapper  d-flex align-items-center justify-content-center "
                        style={{
                          width: '32px',
                          height: '16px',
                          borderRadius: '12px',
                        }}
                      >
                        <i
                          className="text-white icon-move "
                          // data-lucide="move-right"
                          style={{ width: '16px', height: '16px' }}
                        >
                          <MoveRight />
                        </i>
                      </span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between ">
                    <a
                      className="d-flex align-items-center  more-link"
                      href="#"
                    >
                      <h3 className="paragraph-body text-primary-500 me-1">
                        看更多交換者回饋
                      </h3>
                      <span
                        className="icon-wrapper  d-flex align-items-center justify-content-center "
                        style={{
                          width: '32px',
                          height: '16px',
                          borderRadius: '12px',
                        }}
                      >
                        <i
                          className="text-white icon-move "
                          // data-lucide="move-right"
                          style={{ width: '16px', height: '16px' }}
                        >
                          <MoveRight />
                        </i>
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
              <div className="d-lg-flex justify-content-lg-center mb-2 pt-10 scroll-button">
                <button
                  className="border-0 p-lg-3 d-lg-flex justify-content-lg-center align-items-lg-center me-3 rounded-circle  card-shadow-sm-gray "
                  id="scrollLeft"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i
                    // data-lucide="chevron-left"
                    style={{ width: '16px', height: '16px' }}
                  >
                    <ChevronLeft />
                  </i>
                </button>
                <button
                  className="border-0 p-lg-3 d-lg-flex justify-content-lg-center align-items-lg-center rounded-circle card-shadow-sm-gray disabled"
                  id="scrollRight"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i
                    className=" disabled"
                    // data-lucide="chevron-right"
                    style={{ width: '16px', height: '16px' }}
                  >
                    <ChevronRight />
                  </i>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- 手機板按鈕 --> */}
          <div className=" bg-gray-50 mb-0">
            <ul className="container  d-lg-none d-block   pt-6 pb-12 mb-0">
              <li className="mb-2 py-2">
                <div className="d-flex justify-content-between ">
                  <a className="d-flex align-items-center" href="#">
                    <h3 className="paragraph-body text-primary-500 me-1">
                      我也想要分享
                    </h3>
                    <i
                      className="text-white bg-primary-400 "
                      style={{
                        width: '32px',
                        height: '16px',
                        borderRadius: '12px',
                      }}
                      // data-lucide="move-right"
                    >
                      <MoveRight />
                    </i>
                  </a>
                </div>
              </li>
              <li className="py-2">
                <div className="d-flex justify-content-between ">
                  <a className="d-flex align-items-center" href="#">
                    <h3 className="paragraph-body text-primary-500 me-1">
                      看更多交換者回饋
                    </h3>
                    <i
                      className="text-white bg-primary-400 "
                      style={{
                        width: '32px',
                        height: '16px',
                        borderRadius: '12px',
                      }}
                      // data-lucide="move-right"
                    >
                      <MoveRight />
                    </i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--  育兒資源，育兒文章--> */}
      <section>
        {/* <!-- 電腦版 --> */}
        <div
          className=" d-lg-block d-none"
          style={{ backgroundColor: '#ECEEF0' }}
        >
          <div className="container ">
            {/* <!-- 電腦版 育兒資源 --> */}
            <div className="py-12 mb-0">
              <ul className="d-lg-flex justify-content-between align-items-center">
                <li>
                  <div className="text-gray-800 h3 fw-bold bg-gray-200">
                    育兒資源
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between ">
                    <a
                      className="d-flex align-items-center  more-link"
                      href="#"
                    >
                      <h3 className="paragraph-body text-primary-500 me-1">
                        看更多
                      </h3>
                      <span
                        className="icon-wrapper  d-flex align-items-center justify-content-center "
                        style={{
                          width: '32px',
                          height: '16px',
                          borderRadius: '12px',
                        }}
                      >
                        <i
                          className="text-white icon-move "
                          // data-lucide="move-right"
                          style={{ width: '16px', height: '16px' }}
                        >
                          <MoveRight />
                        </i>
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
              {/* <!-- 電腦板-影片 --> */}
              <ul className="row  mb-lg-0 resource-group">
                {/* <!-- 01-新生兒黃金48小時怎麼照顧？ --> */}
                <li className="col-4">
                  <div className="card rounded-10  card-shadow-gray resource-card">
                    <div className=" resource-img">
                      <img
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/resource01.jpg?raw=true"
                        className="card-img-top rounded-10 rounded-bottom-0 product-img"
                        alt="..."
                      />
                      <a
                        className="position-absolute top-50 start-50 translate-middle"
                        href="#"
                      >
                        <i
                          className="circle-play"
                          // data-lucide="circle-play"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <CirclePlay />
                        </i>
                      </a>
                    </div>
                    <a href="#" className="p-lg-5 d-lg-flex">
                      <div className="me-lg-3">
                        <img
                          className="border border-1 rounded-circle "
                          src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar07.jpg?raw=true"
                          alt="Dr. 林育寶"
                          style={{ width: '48px', height: '48px' }}
                        />
                      </div>
                      <div>
                        <h3 className="h6 fw-bold mb-lg-1 text-truncate product-card-title">
                          {' '}
                          新生兒黃金48小時怎麼照顧？
                        </h3>
                        <p className="mb-lg-1 text-gray-600 paragraph-body-small">
                          Dr. 林育寶
                        </p>
                        <p className="text-gray-600 paragraph-body-small">
                          觀看次數： 1.2M・2023-04-15
                        </p>
                      </div>
                    </a>
                  </div>
                </li>

                {/* <!-- 02-如何幫寶寶建立作息 --> */}
                <li className="col-lg-4">
                  <div className="card rounded-10  card-shadow-gray resource-card">
                    <div className=" resource-img">
                      <img
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/resource02.jpg?raw=true"
                        className="card-img-top rounded-10 rounded-bottom-0 product-img"
                        alt="..."
                      />
                      <a
                        className="position-absolute top-50 start-50 translate-middle"
                        href="#"
                      >
                        <i
                          className="circle-play"
                          // data-lucide="circle-play"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <CirclePlay />
                        </i>
                      </a>
                    </div>
                    <a href="#" className="p-lg-5 d-lg-flex">
                      <div className="me-lg-3">
                        <img
                          className="border border-1 rounded-circle "
                          src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar08.jpg?raw=true"
                          alt="Dr. 林育寶"
                          style={{ width: '48px', height: '48px' }}
                        />
                      </div>
                      <div>
                        <h3 className="h6 fw-bold mb-lg-1 text-truncate product-card-title">
                          如何幫寶寶建立作息
                        </h3>
                        <p className="mb-lg-1 text-gray-600 paragraph-body-small">
                          親子時光頻道
                        </p>
                        <p className="text-gray-600 paragraph-body-small">
                          觀看次數： 1.5M・2022-11-08
                        </p>
                      </div>
                    </a>
                  </div>
                </li>

                {/* <!-- 03-寶寶副食品準備大全 --> */}
                <li className="col-lg-4 ">
                  <div className="card rounded-10  card-shadow-gray resource-card">
                    <div className=" resource-img">
                      <img
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/resource03.jpg?raw=true"
                        className="card-img-top rounded-10 rounded-bottom-0 product-img"
                        alt="..."
                      />
                      <a
                        className="position-absolute top-50 start-50 translate-middle"
                        href="#"
                      >
                        <i
                          className="circle-play"
                          // data-lucide="circle-play"
                          style={{ width: '40px', height: '40px' }}
                        >
                          <CirclePlay />
                        </i>
                      </a>
                    </div>
                    <a href="#" className="p-lg-5 d-lg-flex">
                      <div className="me-lg-3">
                        <img
                          className="border border-1 rounded-circle "
                          src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar09.jpg?raw=true"
                          alt="Dr. 林育寶"
                          style={{ width: '48px', height: '48px' }}
                        />
                      </div>
                      <div>
                        <h3 className="h6 fw-bold mb-lg-1 text-truncate product-card-title">
                          寶寶副食品準備大全
                        </h3>
                        <p className="mb-lg-1 text-gray-600 paragraph-body-small">
                          小米媽育兒日記
                        </p>
                        <p className="text-gray-600 paragraph-body-small">
                          觀看次數： 723K・2023-04-15
                        </p>
                      </div>
                    </a>
                  </div>
                </li>

                <button
                  className="right-button border-0 p-lg-3 d-lg-flex justify-content-lg-center align-items-lg-center  rounded-circle  card-shadow-sm-gray "
                  id="scroll"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i
                    // data-lucide="chevron-right"
                    style={{ width: '16px', height: '16px' }}
                  >
                    <ChevronRight />
                  </i>
                </button>
              </ul>
            </div>
            {/* <!-- 電腦版 育兒文章 --> */}
            <div>
              <ul className="d-flex justify-content-between align-items-center">
                <li>
                  <div className="text-gray-800 h3 fw-bold bg-gray-200">
                    育兒文章
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between ">
                    <a
                      className="d-flex align-items-center  more-link"
                      href="#"
                    >
                      <h3 className="paragraph-body text-primary-500 me-1">
                        看更多
                      </h3>
                      <span
                        className="icon-wrapper  d-flex align-items-center justify-content-center "
                        style={{
                          width: '32px',
                          height: '16px',
                          borderRadius: '12px',
                        }}
                      >
                        <i
                          className="text-white icon-move "
                          // data-lucide="move-right"
                          style={{ width: '16px', height: '16px' }}
                        >
                          <MoveRight />
                        </i>
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              {/* <!-- 電腦版-文章 --> */}
              <ul className="row mb-0 pb-12  resource-group">
                {/* <!-- 01-三歲以前的黃金語言期，爸媽可以做什麼？ --> */}
                <li className="col-lg-4 ">
                  <div className="card rounded-10  card-shadow-gray resource-card">
                    <div className="resource-img">
                      <img
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/article01.jpg?raw=true"
                        className="card-img-top rounded-10 rounded-bottom-0"
                        alt="..."
                      />
                    </div>
                    <a className="p-3 " href="#">
                      <div>
                        <h3 className="h6 fw-bold mb-2 text-truncate product-card-title">
                          三歲以前的黃金語言期，爸媽可以做什麼？
                        </h3>
                        <p className="mb-4 text-gray-600 paragraph-body-small text-truncate-multi">
                          你知道嗎？語言發展的黃金期就在孩子出生到三歲之間。在這段期間，寶寶的大腦語言區快速成長，如果能在這個階段提供足夠的語言刺激，對日後⋯⋯
                        </p>
                      </div>
                      <div className="d-flex justify-content-lg-between align-items-lg-center">
                        <div className="d-flex  align-items-center">
                          <img
                            className="border border-1 rounded-circle me-2"
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar10.jpg?raw=true"
                            alt="語言治療師 Lulu"
                            style={{ width: '32px', height: '32px' }}
                          />
                          <p className="paragraph-body-small text-gray-600">
                            語言治療師 Lulu
                          </p>
                        </div>
                        <div className="d-lg-flex align-items-lg-center">
                          <i
                            className="paragraph-body-small text-gray-600 me-2"
                            // data-lucide="calendar"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <Calendar />
                          </i>
                          <p className="text-gray-600 paragraph-body-small">
                            2023-04-15
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </li>

                {/* <!-- 02-如何幫助寶寶適應幼兒園生活 --> */}
                <li className="col-lg-4 ">
                  <div className="card rounded-10  card-shadow-gray resource-card">
                    <div className="resource-img">
                      <img
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/article02.jpg?raw=true"
                        className="card-img-top rounded-10 rounded-bottom-0"
                        alt="..."
                      />
                    </div>
                    <a className="p-3 " href="#">
                      <div>
                        <h3 className="h6 fw-bold  mb-2 text-truncate product-card-title">
                          如何幫助寶寶適應幼兒園生活
                        </h3>
                        <p className="mb-4 text-gray-600 paragraph-body-small text-truncate-multi">
                          對許多家長來說，送寶寶進入幼兒園是人生中的一大挑戰。不只是孩子會哭鬧、焦慮，爸媽也常感到不捨與緊張。這樣的情緒其實非常正常，因為⋯⋯
                        </p>
                      </div>
                      <div className="d-lg-flex justify-content-lg-between align-items-lg-center">
                        <div className="d-lg-flex  align-items-lg-center">
                          <img
                            className="border border-1 rounded-circle me-2"
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar11.jpg?raw=true"
                            alt="親職諮商師 李宛如"
                            style={{ width: '32px', height: '32px' }}
                          />
                          <p className="paragraph-body-small text-gray-600">
                            親職諮商師 李宛如
                          </p>
                        </div>
                        <div className="d-lg-flex align-items-lg-center">
                          <i
                            className="paragraph-body-small text-gray-600 me-lg-2"
                            // data-lucide="calendar"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <Calendar />
                          </i>
                          <p className="text-gray-600 paragraph-body-small">
                            2023-04-15
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </li>

                {/* <!-- 03-寶寶副食品初體驗！新手爸媽注意事項 --> */}
                <li className="col-lg-4 ">
                  <div className="card rounded-10  card-shadow-gray resource-card">
                    <div className="resource-img">
                      <img
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/article03.jpg?raw=true"
                        className="card-img-top rounded-10 rounded-bottom-0"
                        alt="..."
                      />
                    </div>
                    <a className="p-3 " href="#">
                      <div>
                        <h3 className="h6 fw-bold  mb-2 text-truncate product-card-title">
                          寶寶副食品初體驗！新手爸媽注意事項
                        </h3>
                        <p className="mb-lg-4 text-gray-600 paragraph-body-small text-truncate-multi">
                          你知道嗎？寶寶的味覺黃金期就在 4 個月到 2
                          歲之間。在這段期間，孩子正在認識食物的世界，從米糊到蔬果泥，每一次嘗試，都是大腦和感官的學習。如果能在這時候提供
                          天然、營養、少添加的副食品，不僅幫助寶寶建立良好的飲食習慣，也能為日後的健康打下基礎。
                        </p>
                      </div>
                      <div className="d-lg-flex justify-content-lg-between align-items-lg-center">
                        <div className="d-lg-flex  align-items-lg-center">
                          <img
                            className="border border-1 rounded-circle me-lg-2"
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar12.jpg?raw=true"
                            alt="小魚媽的副食品日記"
                            style={{ width: '32px', height: '32px' }}
                          />
                          <p className="paragraph-body-small text-gray-600">
                            小魚媽的副食品日記
                          </p>
                        </div>
                        <div className="d-lg-flex align-items-lg-center">
                          <i
                            className="paragraph-body-small text-gray-600 me-lg-2"
                            // data-lucide="calendar"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <Calendar />
                          </i>
                          <p className="text-gray-600 paragraph-body-small">
                            2023-04-15
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </li>
                <button
                  className="right-button border-0 p-lg-3 d-lg-flex justify-content-lg-center align-items-lg-center  rounded-circle  card-shadow-sm-gray "
                  id="scroll"
                  style={{ width: '40px', height: '40px' }}
                >
                  <i
                    // data-lucide="chevron-right"
                    style={{ width: '16px', height: ' 16px' }}
                  >
                    <ChevronRight />
                  </i>
                </button>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- 手機板 --> */}
        <div
          className=" d-block d-lg-none"
          style={{ backgroundColor: '#ECEEF0' }}
        >
          <div className="container ">
            {/* <!-- 手機育兒資源 --> */}
            <div className="py-12 mb-0">
              <ul className="d-flex justify-content-between align-items-center">
                <li>
                  <div className="text-gray-800 h3 fw-bold bg-gray-200">
                    育兒資源
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between ">
                    <a className="d-flex align-items-center" href="#">
                      <h3 className="paragraph-body text-primary-500 me-1">
                        看更多
                      </h3>
                      <i
                        className="text-white bg-primary-400 "
                        style={{
                          width: '32px',
                          height: '16px',
                          borderRadius: '12px',
                        }}
                        // data-lucide="move-right"
                      >
                        <MoveRight />
                      </i>
                    </a>
                  </div>
                </li>
              </ul>
              {/* <!-- 手機板-影片 --> */}
              <ul className="row gap-4 mb-0">
                {/* <!-- 01-新生兒黃金48小時怎麼照顧？ --> */}
                <li className="col-12">
                  <div className="card rounded-10  card-shadow-gray">
                    <div className="position-relative ">
                      <img
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/resource01.jpg?raw=true"
                        className="card-img-top rounded-10 rounded-bottom-0"
                        alt="..."
                      />
                      <a
                        className="position-absolute top-50 start-50 translate-middle"
                        href="#"
                      >
                        <i
                          className=" text-white "
                          // data-lucide="circle-play"
                          style={{
                            width: '40px',
                            height: '40px',
                            pacity: '.25',
                          }}
                        >
                          <CirclePlay />
                        </i>
                      </a>
                    </div>
                    <div className="p-5 d-flex">
                      <div className="me-3">
                        <img
                          className="border border-1 rounded-circle "
                          src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar07.jpg?raw=true"
                          alt="Dr. 林育寶"
                          style={{ width: '48px', height: '48px' }}
                        />
                      </div>
                      <div>
                        <h3 className="h6 fw-bold text-gray-800 mb-1">
                          新生兒黃金48小時怎麼照顧？
                        </h3>
                        <p className="mb-1 text-gray-600 paragraph-body-small">
                          Dr. 林育寶
                        </p>
                        <p className="text-gray-600 paragraph-body-small">
                          觀看次數： 1.2M・2023-04-15
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <!-- 02-如何幫寶寶建立作息 --> */}
                <li className="col-12">
                  <div className="card rounded-10 card-shadow-gray">
                    <div className="position-relative ">
                      <img
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/resource02.jpg?raw=true"
                        className="card-img-top rounded-10 rounded-bottom-0"
                        alt="..."
                      />
                      <a
                        className="position-absolute top-50 start-50 translate-middle"
                        href="#"
                      >
                        <i
                          className=" text-white "
                          // data-lucide="circle-play"
                          style={{
                            width: '40px',
                            height: '40px',
                            pacity: '.25',
                          }}
                        >
                          <CirclePlay />
                        </i>
                      </a>
                    </div>
                    <div className="p-5 d-flex">
                      <div className="me-3">
                        <img
                          className="border border-1 rounded-circle "
                          src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar08.jpg?raw=true"
                          alt="Dr. 林育寶"
                          style={{ width: '48px', height: '48px' }}
                        />
                      </div>
                      <div>
                        <h3 className="h6 fw-bold text-gray-800 mb-1">
                          如何幫寶寶建立作息
                        </h3>
                        <p className="mb-1 text-gray-600 paragraph-body-small">
                          親子時光頻道
                        </p>
                        <p className="text-gray-600 paragraph-body-small">
                          觀看次數： 1.5M・2022-11-08
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <!-- 03-寶寶副食品準備大全 --> */}
                <li className="col-12 ">
                  <div className="card rounded-10 card-shadow-gray">
                    <div className="position-relative ">
                      <img
                        src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/resource03.jpg?raw=true"
                        className="card-img-top rounded-10 rounded-bottom-0"
                        alt="..."
                      />
                      <a
                        className="position-absolute top-50 start-50 translate-middle"
                        href="#"
                      >
                        <i
                          className=" text-white "
                          // data-lucide="circle-play"
                          style={{
                            width: '40px',
                            height: '40px',
                            pacity: '.25',
                          }}
                        >
                          <CirclePlay />
                        </i>
                      </a>
                    </div>
                    <div className="p-5 d-flex">
                      <div className="me-3">
                        <img
                          className="border border-1 rounded-circle "
                          src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar09.jpg?raw=true"
                          alt="Dr. 林育寶"
                          style={{ width: '48px', height: '48px' }}
                        />
                      </div>
                      <div>
                        <h3 className="h6 fw-bold text-gray-800 mb-1">
                          寶寶副食品準備大全
                        </h3>
                        <p className="mb-1 text-gray-600 paragraph-body-small">
                          小米媽育兒日記
                        </p>
                        <p className="text-gray-600 paragraph-body-small">
                          觀看次數： 723K・2023-04-15
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- 手機 育兒文章 --> */}
            <div>
              <ul className="d-flex justify-content-between align-items-center ">
                <li>
                  <div className="text-gray-800 h3 fw-bold bg-gray-200">
                    育兒文章
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between ">
                    <a className="d-flex align-items-center" href="#">
                      <h3 className="paragraph-body text-primary-500 me-1">
                        看更多
                      </h3>
                      <i
                        className="text-white bg-primary-400 "
                        style={{
                          width: '32px',
                          height: '16px',
                          borderRadius: '12px',
                        }}
                        // data-lucide="move-right"
                      >
                        <MoveRight />
                      </i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              {/* <!-- 手機板-文章 --> */}
              <ul className="row gap-4 mb-0 pb-12">
                {/* <!-- 01-三歲以前的黃金語言期，爸媽可以做什麼？ --> */}
                <li className="col-12">
                  <div className="card rounded-10  card-shadow-gray">
                    <img
                      src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/article01.jpg?raw=true"
                      className="card-img-top rounded-10 rounded-bottom-0"
                      alt="..."
                    />
                    <div className="p-3 ">
                      <div>
                        <h3 className="h6 fw-bold text-gray-800 mb-2">
                          三歲以前的黃金語言期，爸媽可以做什麼？
                        </h3>
                        <p className="mb-4 text-gray-600 paragraph-body-small text-truncate-multi">
                          你知道嗎？語言發展的黃金期就在孩子出生到三歲之間。在這段期間，寶寶的大腦語言區快速成長，如果能在這個階段提供足夠的語言刺激，對日後⋯⋯
                        </p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex  align-items-center">
                          <img
                            className="border border-1 rounded-circle me-2"
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar10.jpg?raw=true"
                            alt="語言治療師 Lulu"
                            style={{ width: '32px', height: '32px' }}
                          />
                          <p className="paragraph-body-small text-gray-600">
                            語言治療師 Lulu
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i
                            className="paragraph-body-small text-gray-600 me-2"
                            // data-lucide="calendar"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <Calendar />
                          </i>
                          <p className="text-gray-600 paragraph-body-small">
                            2023-04-15
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <!-- 02-如何幫助寶寶適應幼兒園生活 --> */}
                <li className="col-12">
                  <div className="card rounded-10  card-shadow-gray">
                    <img
                      src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/article02.jpg?raw=true"
                      className="card-img-top rounded-10 rounded-bottom-0"
                      alt="..."
                    />
                    <div className="p-3 ">
                      <div>
                        <h3 className="h6 fw-bold text-gray-800 mb-2">
                          如何幫助寶寶適應幼兒園生活
                        </h3>
                        <p className="mb-4 text-gray-600 paragraph-body-small text-truncate-multi">
                          對許多家長來說，送寶寶進入幼兒園是人生中的一大挑戰。不只是孩子會哭鬧、焦慮，爸媽也常感到不捨與緊張。這樣的情緒其實非常正常，因為⋯⋯
                        </p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex  align-items-center">
                          <img
                            className="border border-1 rounded-circle me-2"
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar11.jpg?raw=true"
                            alt="親職諮商師 李宛如"
                            style={{ width: '32px', height: '32px' }}
                          />
                          <p className="paragraph-body-small text-gray-600">
                            親職諮商師 李宛如
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i
                            className="paragraph-body-small text-gray-600 me-2"
                            // data-lucide="calendar"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <Calendar />
                          </i>
                          <p className="text-gray-600 paragraph-body-small">
                            2023-04-15
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <!-- 03-寶寶副食品初體驗！新手爸媽注意事項 --> */}
                <li className="col-12">
                  <div className="card rounded-10  card-shadow-gray">
                    <img
                      src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/article03.jpg?raw=true"
                      className="card-img-top rounded-10 rounded-bottom-0"
                      alt="..."
                    />
                    <div className="p-3 ">
                      <div>
                        <h3 className="h6 fw-bold text-gray-800 mb-2">
                          寶寶副食品初體驗！新手爸媽注意事項
                        </h3>
                        <p className="mb-4 text-gray-600 paragraph-body-small text-truncate-multi">
                          你知道嗎？寶寶的味覺黃金期就在 4 個月到 2
                          歲之間。在這段期間，孩子正在認識食物的世界，從米糊到蔬果泥，每一次嘗試，都是大腦和感官的學習。如果能在這時候提供
                          天然、營養、少添加的副食品，不僅幫助寶寶建立良好的飲食習慣，也能為日後的健康打下基礎。
                        </p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex  align-items-center">
                          <img
                            className="border border-1 rounded-circle me-2"
                            src="https://github.com/Cuei-Sian/React-BBStation-picture/blob/main/images/index/avatar12.jpg?raw=true"
                            alt="小魚媽的副食品日記"
                            style={{ width: '32px', height: '32px' }}
                          />
                          <p className="paragraph-body-small text-gray-600">
                            小魚媽的副食品日記
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i
                            className="paragraph-body-small text-gray-600 me-2"
                            // data-lucide="calendar"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <Calendar />
                          </i>
                          <p className="text-gray-600 paragraph-body-small">
                            2023-04-15
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
