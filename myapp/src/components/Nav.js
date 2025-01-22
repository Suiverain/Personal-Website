

export default function Nav() {
    return (
        <nav>
          <div className="nav__container nav__container--top">
            <Link to="/home">
              <img src={Logo} alt="" className="logo" />
            </Link>
            <form onSubmit={handleSearch} className="searchbar">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="searchbar__input"
              ></input>
              <button className="searchbar__btn">
                <FaSearch />
              </button>
            </form>
            <div className="profile">
              <Link to="/userprofile">
                <img src={fullImageUrl} className="profile__img"></img>
              </Link>
            </div>
          </div>
          <div className="nav__container nav__container--bottom">
            <ul>
              <li className="nav__list">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/about" className="nav__link">
                  About
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/books" className="nav__link">
                  Books
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/sell-a-book" className="nav__link">
                  Sell
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/help" className="nav__link">
                  Help
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/wishlist" className="nav__link">
                  Wishlist
                </Link>
              </li>
              {isStaff && (
                <li className="nav__list">
                  <Link to="/admin" className="nav__link">
                    Admin
                  </Link>
                </li>
              )}
            </ul>
            <ul>
              <li className="nav__icon">
                <Link to="/cart" className="nav__link">
                  <FaShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
}